import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'reactstrap';
import Navbar from './components/Navbar';
import { CartProvider } from './lib/cart.context';
import Category from './pages/Category';
import Checkout from './pages/Checkout';
import Home from './pages/Home';

function App() {
  return (
    <CartProvider>
      <Container>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/category/:id" exact>
            <Category />
          </Route>
          <Route path="/checkout" exact>
            <Checkout />
          </Route>
        </Switch>
      </Container>
    </CartProvider>
  );
}

export default App;
