import { Navigate, Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { authContext } from '../global-stores/auth-store';


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
const ProtectedRoutes = observer(({ 
  redirectPath = '/login' 
}: ProtectedRoutesProps) => {
  const authStore = authContext.use();
  
  // Show loading state if auth status is loading
  if (authStore.q_isAuthenticated.isLoading) {
    return <div>Loading authentication status...</div>;
  }
  
  // Redirect if not authenticated
  console.log(`Guarding route. isAuthenticated: ${authStore.q_isAuthenticated.data}`);
  
  if (!authStore.q_isAuthenticated.data) {
    return <Navigate to={redirectPath} replace />;
  }

  // Otherwise, render child routes
  return <Outlet />;
});

export default ProtectedRoutes; 