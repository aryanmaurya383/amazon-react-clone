import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import Login from './Login';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import {
  BrowserRouter as Router,
  Routes,
  Route, Navigate
} from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Orders from './Orders';

const promise = loadStripe('pk_test_51M9ixlSChn9rVxr4VW0t7f7kfD2dlAdMNmm3XMUhrdOhU1wh6Sw11UQB5g7fFLplKG7GdjnqD2oR9alA3SkpeX1e00Yi6YB57F');

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    //will run once when the app component loads
    auth.onAuthStateChanged(authUser => {

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user was logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })
  }, [])
  return (

    <Router>
      <div className="app">

        <Routes>

          <Route path="/login" element={
            <>
              <Login />
            </>
          }
          />

          <Route path="/checkout" element={
            <>
              <Header />
              <Checkout />
            </>
          }
          />

          <Route path="/payment" element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          }
          />

          <Route path="/orders" element={
            <>
              <Header />
              <Orders />
            </>
          }
          />

          <Route path="/" element={
            <>
              <Header />
              <Home />
            </>
          }
          />

          <Route path="*" element={
            <><Navigate to='/' />
            </>
          }
          />

        </Routes>
      </div >
    </Router>
  );
}

export default App;
