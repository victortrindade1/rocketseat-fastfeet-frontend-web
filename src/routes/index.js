import React from 'react';
import { Switch } from 'react-router-dom';

import Deliveries from '~/pages/Deliveries';
import DeliveryForm from '~/pages/Deliveries/DeliveryForm';
import Deliverymen from '~/pages/Deliverymen';
import DeliverymanForm from '~/pages/Deliverymen/DeliverymanForm';
import Problems from '~/pages/Problems';
import Recipients from '~/pages/Recipients';
import RecipientForm from '~/pages/Recipients/RecipientForm';
import SignIn from '~/pages/SignIn';

import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/deliveries" exact component={Deliveries} isPrivate />
      <Route path="/deliveries/new" exact component={DeliveryForm} isPrivate />
      <Route
        path="/deliveries/edit/:id"
        exact
        component={DeliveryForm}
        isPrivate
      />
      <Route path="/deliverymen" exact component={Deliverymen} isPrivate />
      <Route
        path="/deliverymen/new"
        exact
        component={DeliverymanForm}
        isPrivate
      />
      <Route
        path="/deliverymen/edit/:id"
        exact
        component={DeliverymanForm}
        isPrivate
      />
      <Route path="/problems" component={Problems} isPrivate />
      <Route path="/recipients" exact component={Recipients} isPrivate />
      <Route path="/recipients/new" exact component={RecipientForm} isPrivate />
      <Route
        path="/recipients/edit/:id"
        exact
        component={RecipientForm}
        isPrivate
      />

      {/* URL inexistente */}
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
