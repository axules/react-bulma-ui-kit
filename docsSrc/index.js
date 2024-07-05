import { createRoot } from 'react-dom/client';

import MainPage from './components/MainPage';


createRoot(document.getElementById('general'))
  .render(
    <MainPage sheets={window.__SHEETS__} />
  );