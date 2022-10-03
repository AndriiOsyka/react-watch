import { BrowserRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import './App.scss';
import About from './pages/about/About';
import Contacts from './pages/contacts/Contacts';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Cart from './components/cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import useWindowDimensions from './hooks/useWindowDementions';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers } from './asyncAction/customers';

library.add(faBars)

function App() {
  //redux
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);
  const cart = useSelector(state => state.cart.cart);
  const addCash = (count) => {
    dispatch({type: 'ADD_CASH', payload: count})
  }
  const getCash = (count) => {
    dispatch({type: 'GET_CASH', payload: count})
  }
  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch({type: 'ADD_CUSTOMER', payload: customer})
  }
  const getCustomers = (customer) => {
    dispatch({type: 'GET_CUSTOMERS', payload: customer.id})
  }

  //code
  const [direction, setDirection] = useState('row');
  const { height, width } = useWindowDimensions();
  useEffect(() => {
  if(width >= 800) { setDirection('row') }}, [width]);
  return (
    <div className="App">
      {/* <div>
        {cash}
      </div>
      <button onClick={() => addCash(Number(prompt()))}>
        ADD
      </button>
      <button onClick={() => getCash(Number(prompt()))}>
        GET
      </button>
      <button onClick={() => addCustomer(prompt())}>
        ADDCustomer
      </button>
      <button onClick={() => dispatch(fetchCustomers())}>
        ADDMANYCUSTOMERS
      </button>
      <div>{
        customers.map(customer => <div onClick={() => getCustomers(customer)}>{customer.name}</div>)
      }
      </div> */}



      <BrowserRouter>
      <header>
        <div className='wrap'>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to='/' element={<Home />}>
            <img src="logo512.png" alt='logo' />
          </NavLink>
          <button onClick={() => direction === 'row' ? setDirection('col') : setDirection('row')} className='drop-btn'>
            <FontAwesomeIcon className='hamburger' icon="fa-solid fa-bars" />
          </button>
          <nav className={direction === 'row' ? 'navbar' : 'drop-nav'}>
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/about">About</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/contacts">Contacts</NavLink>
          </nav>
        </div>
      </header>
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
      </BrowserRouter>
      <div className='footer'>
        <div className='footer-content'>
          FOOTER
        </div>
      </div>
    </div>
  );
}

export default App;
