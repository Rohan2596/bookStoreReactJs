import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './component/dashboardComponent/dashboard';
import CustomerDetails from './component/customerDetails/customerDetails';
import OrderPlaced from './component/orderPlaced/orderPlaced';

function App() {
  return (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                 <Route path="/customer" component={CustomerDetails} /> 
                 <Route path="/order" component={OrderPlaced} />
            </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
