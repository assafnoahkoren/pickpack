import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';

// Import your app pages here
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

const RoutingLayer = () => {

  return (
    <BrowserRouter>
      <Routes>
        {/* Protected routes (require authentication) */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
        
        {/* Public routes - directly defined without a wrapper */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Redirect root to login page */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Fallback route - redirects to login page if no route matches */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutingLayer; 