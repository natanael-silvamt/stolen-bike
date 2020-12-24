import Index from './components/page_index';
import Details from './components/pageDetails';
import { BrowserRouter, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import env from './env';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={env.homepage}>
        <Route exact path="/" component={Index} />
        <Route path="/details/:id" component={Details} />
      </BrowserRouter>
    </div>
  );
}

export default App;
