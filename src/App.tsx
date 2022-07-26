import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import './global.scss';
import { client } from './lib/apollo';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
