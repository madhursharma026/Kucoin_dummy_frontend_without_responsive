import './App.css';
import Header from './Header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Data from './Data/Data';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Header />
          <Data />
        </Route>
      </Router>
    </>
  );
}

export default App;
