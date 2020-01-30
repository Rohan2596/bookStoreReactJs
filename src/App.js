import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './component/dashboardComponent/dashboard';
import customerDetailsForm from './component/customerDetails/customerDetails';
import OrderPlaced from './component/orderPlaced/orderPlaced';
import login from './component/login/login';
import CartIcon from './component/cart/cart-icon';
import ToolBar from './component/toolbar/toolbar';
import Footer from './component/footer/footer';
import customerSummery from './component/customerBookDetails/customerBookDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <div>
          <ToolBar/>
          <Route path="/customer" component={customerDetailsForm} />
          <Route path="/order" component={OrderPlaced} />
          <Route path="/cartIcon" component={CartIcon} />
          <Route path="/login" component={login}/>
          <Route path="/customerSummery" component={customerSummery}/>
        </div>
        
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
