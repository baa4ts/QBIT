import { TanStackDevtools } from '@tanstack/react-devtools';
import { FormDevtoolsPlugin } from '@tanstack/react-form-devtools';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <TanStackDevtools plugins={[FormDevtoolsPlugin()]} />
  </StrictMode>,
);
