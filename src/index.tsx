import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const enableMocking = async () => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  if (import.meta.env.VITE_APP_API_MOCKING === 'enabled') {
    const { worker } = await import('./mocks/browser');
    worker.start();
  }
};

enableMocking().then(() => {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
