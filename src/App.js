import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//Components
import Home from './pages';
import SigninPage from './pages/signin';

function App({toggle}) {
  return (
    <Router>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
