import { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Cities } from '../pages/Cities';
import { Home } from '../pages/Home';

const Routes: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />;
      <Route path="/cities" exact component={Cities} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
