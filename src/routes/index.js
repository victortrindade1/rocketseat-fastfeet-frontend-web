import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Deliveries from '~/pages/Deliveries';
import Deliverymen from '~/pages/Deliverymen';
import Problems from '~/pages/Problems';
import Recipients from '~/pages/Recipients';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/deliveries" component={Deliveries} />
      <Route path="/deliverymen" component={Deliverymen} />
      <Route path="/problems" component={Problems} />
      <Route path="/recipients" component={Recipients} />

      {/* URL inexistente */}
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
