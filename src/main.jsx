import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <HashRouter>
  <App />
</HashRouter>
    </StrictMode>
  );
} else {
  console.error('Elemento com id "root" não encontrado.');
}