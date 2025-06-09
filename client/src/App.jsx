import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';

function App() {
  return (
    <BrowserRouter basename="/Kasa">
      <Router />
    </BrowserRouter>
  );
}

export default App;

