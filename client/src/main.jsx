import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router.jsx';
import { UserProvider } from './components/UserContext'; // <-- import du context
import './styles/main.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider userId={12} useMock={true}> {/* <-- ici ton user mock */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </UserProvider>
  </StrictMode>,
)
