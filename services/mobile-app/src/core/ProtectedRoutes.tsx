import { Navigate, Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { authContext } from '../global-stores/auth-store';
import { userContext } from '../global-stores/user-store';
import { checkIfOnboardingNeeded } from '../features/onboarding/onboarding-utils';
import OnboardingPage from '../features/onboarding/onboarding-page';

const ProtectedRoutes = observer(() => {
  const authStore = authContext.use();
  const userStore = userContext.use();
  
  if (authStore.q_isAuthenticated.isLoading) {
    return <div>Loading authentication status...</div>;
  }

  if (!userStore.user) {
    return <div>Loading user...</div>;
  }

  if (checkIfOnboardingNeeded(userStore.user)) {
    return <OnboardingPage />;
  }



  // Redirect if not authenticated
  console.log(`Guarding route. isAuthenticated: ${authStore.q_isAuthenticated.data}`);
  
  if (!authStore.q_isAuthenticated.data) {
    return <Navigate to={'/login'} replace />;
  }

  // Otherwise, render child routes
  return <Outlet />;
});

export default ProtectedRoutes; 