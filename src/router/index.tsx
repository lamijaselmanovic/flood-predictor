import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout';
import Loader from 'components/Loader';

import Landing from 'pages/Landing';

const CompareData = lazy(() => import('pages/CompareData'));
const FloodPrediction = lazy(() => import('pages/FloodPrediction'));

const Router = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={'/'} element={<Landing />} />
        <Route path={'/flood-prediction'} element={<FloodPrediction />} />
        <Route element={<Layout />}>
          <Route path={'/compare-data'} element={<CompareData />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
