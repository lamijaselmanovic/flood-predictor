import React, { useRef } from 'react';
import Papa from 'papaparse';
import styled from 'styled-components';
import { Col, Row } from 'react-grid-system';

import Text from 'components/Text';
import Button from 'components/Button';

import { BorderRadius, Color, Spacing } from 'styles/constants';

const HiddenFileUpload = styled.input`
  opacity: 0;
  position: absolute;
  pointer-events: none;
  height: 0;
  width: 0;
  &:focus {
    outline-width: 0;
  }
`;

const StyledFileName = styled.div`
  background: ${Color.backgroundSecondary};
  border: 1px solid rgba(209, 209, 209, 0.5);
  border-radius: ${BorderRadius.md};
  padding: ${Spacing.content.sm} ${Spacing.content.md};
`;

type FileUploadInputProps = {
  input: {
    name: string;
    onChange: (selectType?: string, event?: React.ChangeEvent<HTMLSelectElement>) => void;
  };
  label?: string;
};

const FileUploadInput = (props: FileUploadInputProps) => {
  const {
    input: { name, onChange },
    label,
    ...rest
  } = props;

  const fileUpload = useRef<HTMLInputElement>(null);

  const openFileUpload = () => {
    if (fileUpload.current) {
      fileUpload.current.click();
    }
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files?.length) {
      Papa.parse(files[0], {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          const data = results.data;
          const stringifiedData = JSON.stringify(data);
          onChange(stringifiedData);
        },
        error: function (error) {
          console.error(error);
        }
      });
    }
  };

  return (
    <Row align="center">
      <Col xs="content">
        <Text>{label}</Text>
      </Col>
      <Col>
        <StyledFileName>report.csv</StyledFileName>
      </Col>
      <Col xs="content">
        <HiddenFileUpload
          ref={fileUpload}
          type="file"
          name={name}
          accept=".csv"
          onChange={event => handleUpload(event)}
          {...rest}
        />
      </Col>
      <Col xs="content">
        <Button onClick={openFileUpload}>Browse</Button>
      </Col>
    </Row>
  );
};

export default FileUploadInput;
