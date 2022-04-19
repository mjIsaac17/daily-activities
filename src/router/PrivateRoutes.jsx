import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Activities from '../pages/Activities/Activities';
import AddActivity from '../pages/Activities/AddActivity';
import Home from '../pages/Home';

export default function PrivateRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/activities' element={<Activities />} />
          <Route path='/activities/new' element={<AddActivity />} />
          {/* <Route path='/products/:category' element={<Products />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/orders' element={<Orders />} /> */}
          <Route path='*' element={<Navigate replace to='/' />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
