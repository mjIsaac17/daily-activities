import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Activities from '../pages/Activities/Activities';
import AddUpdateActivity from '../pages/Activities/AddUpdateActivity';
import Home from '../pages/Home';

export default function PrivateRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/activities' element={<Activities />} />
          <Route path='/activities/new' element={<AddUpdateActivity />} />
          <Route path='*' element={<Navigate replace to='/' />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
