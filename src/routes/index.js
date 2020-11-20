import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Deliveries from '~/pages/Deliveries';
import DeliveryForm from '~/pages/Deliveries/DeliveryForm';
import Deliverymen from '~/pages/Deliverymen';
import Problems from '~/pages/Problems';
import Recipients from '~/pages/Recipients';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/deliveries" exact component={Deliveries} isPrivate />
      <Route path="/deliveries/new" exact component={DeliveryForm} isPrivate />
      <Route
        path="/deliveries/new/:id"
        exact
        component={DeliveryForm}
        isPrivate
      />
      <Route path="/deliverymen" exact component={Deliverymen} isPrivate />
      <Route path="/problems" component={Problems} isPrivate />
      <Route path="/recipients" exact component={Recipients} isPrivate />

      {/* URL inexistente */}
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
