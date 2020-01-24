import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './component/dashboardComponent/dashboard';
import customerDetailsForm from './component/customerDetails/customerDetails';
import OrderPlaced from './component/orderPlaced/orderPlaced';
import CartIcon from './component/cart/cart-icon'
import Toolbar from './component/toolbar/toolbar'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Dashboard} exact={true} />
          <div>
            <Toolbar/>
            <Route path="/customer" component={customerDetailsForm} />
            <Route path="/order" component={OrderPlaced} />
            <Route path="/cartIcon" component={CartIcon} />
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
