import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout';
import Loader from 'components/Loader';

const FloodPrediction = lazy(() => import('pages/FloodPrediction'));

const Router = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path={'/'} element={<FloodPrediction />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
