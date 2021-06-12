import {
  BrowserRouter,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import User from './user';
import Incrementer from './incrementer';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/users/:username'}>
          <User />
        </Route>
        <Route path={'/'} exact>
          <h1>Home Page</h1>
          <Link to={'/users/eliot'}>Go To Users</Link>
        </Route>
        <Route>
          <h1>404 Page Not Found</h1>
        </Route>
      </Switch>
      <Incrementer />
    </BrowserRouter>
  );
}

export default App;
