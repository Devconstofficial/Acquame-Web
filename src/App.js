import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './pages/auth/login';
import ForgotPassword from './pages/auth/forgot_password';
import OTPVerification from './pages/auth/otp_verification';
import ResetPassword from './pages/auth/reset_password';
import Home from './pages/home';
import Physical from "./pages/physical";
import Medical from "./pages/medical_info";
import Weight from "./pages/weight_page";
import Height from "./pages/height_page";
import Financial from "./pages/financial";
import Asset from "./pages/asset_page";
import Mental from "./pages/mental";
import Profile from "./pages/profile";
import Layout from './components/layout';
import DebtPage from './pages/debt_page';
import FixExpensePage from './pages/fix_expense';

const App = () => {
  return (
    <BrowserRouter basename="/acquame-web">
      <Routes>
        {/* Authentication Routes */}
        <Route path='/' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/otp-verification' element={<OTPVerification />} />
        <Route path='/reset-password' element={<ResetPassword />} />

        {/* Protected Routes with Layout */}
        <Route element={<Layout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/physical' element={<Physical />} />
          <Route path='/financial' element={<Financial />} />
          <Route path='/medical-screen' element={<Medical />} />
          <Route path='/weight-screen' element={<Weight />} />
          <Route path='/height-screen' element={<Height />} />
          <Route path='/asset-screen' element={<Asset />} />
          <Route path='/debt-screen' element={<DebtPage />} />
          <Route path='/fix-expense-screen' element={<FixExpensePage />} />
          <Route path='/mental' element={<Mental />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
