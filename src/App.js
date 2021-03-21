import { JokePage, LandingPage } from './pages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { url } from './constants'


function App() {
  return (

    <Router>

      <Switch>

        <Route exact path={ url.LANDING_PAGE } component={ LandingPage }/>

        <Route exact path={ `${url.JOKE_PAGE}:category` } component={ JokePage }/>

      </Switch>

    </Router>

  );
}

export default App;
