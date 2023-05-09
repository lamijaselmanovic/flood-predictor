import React, { useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';

import SectionWrapper from 'components/SectionWrapper';
import Button, { ButtonVariant } from 'components/Button';
import FileUploadInput from 'components/FileUploadInput';

import { Spacing } from 'styles/constants';

const StyledCol = styled(Col)`
  display: flex;
  align-items: end;
  justify-content: end;
  padding: ${Spacing.content.xs};
`;

const UploadFiles = () => {
  const fileUploadFields = [
    { id: 0, label: 'Select file 1', fieldName: 'file1' },
    { id: 1, label: 'Select file 2', fieldName: 'file2' }
  ];

  const onSubmit = useCallback(() => {
    console.log('submitted');
  }, []);

  return (
    <SectionWrapper title="Specify files to compare">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Row>
              <Col>
                {fileUploadFields.map(field => {
                  return (
                    <Field
                      key={field.id}
                      name={field.fieldName}
                      component={FileUploadInput}
                      label={field.label}
                    />
                  );
                })}
              </Col>
              <StyledCol xs={12} sm="content">
                <Button buttonType="submit" variant={ButtonVariant.Solid}>
                  Compare
                </Button>
              </StyledCol>
            </Row>
          </form>
        )}
      />
    </SectionWrapper>
  );
};

export default UploadFiles;
