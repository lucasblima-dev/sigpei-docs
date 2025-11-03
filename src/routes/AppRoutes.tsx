import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from '../components/Layout/Layout';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={
          <div className='prose'>
            <h1 className='text-(--primary)'>Página em construção...</h1>
          </div>
        } />
      </Route>
    </Routes>
  )
}