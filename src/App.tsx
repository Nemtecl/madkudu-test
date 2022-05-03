import { Layout } from 'components';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
