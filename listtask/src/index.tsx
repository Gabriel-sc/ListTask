import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
const app = (
  <StrictMode>
      <App />
  </StrictMode>
);

root.render(app);

reportWebVitals();