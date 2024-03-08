
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './components/Contact'; 

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default Routes;