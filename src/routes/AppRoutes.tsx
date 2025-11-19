import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from '../components/Layout/Layout';
import { IndexPage } from '../pages/IndexPage';
import { LoginPage } from '../pages/LoginPage';
import { CriarContaPage } from '../pages/CriarContaPage';
import { RecuperarSenhaPage } from '../pages/RecuperarSenhaPage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='criar-conta' element={<CriarContaPage />} />
        <Route path='recuperar-senha' element={<RecuperarSenhaPage />} />
        <Route path="*" element={
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-6xl mb-4">
              <span className='text-(--primary)'>404</span> - Página não encontrada
            </h1>
          </div>} />
      </Route>
    </Routes>
  )
}