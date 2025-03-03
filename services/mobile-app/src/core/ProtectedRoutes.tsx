import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRoutesProps {
  /**
   * The path to redirect to if user is not authenticated
   */
  redirectPath?: string;
}

/**
 * Protected routes component
 * Handles routes that require authentication
 * If user is not authenticated, redirects to specified path
 */
const ProtectedRoutes = ({ 
  redirectPath = '/login' 
}: ProtectedRoutesProps) => {
  const isAuthenticated = true;
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  // Otherwise, render child routes
  return <Outlet />;
};

export default ProtectedRoutes; 