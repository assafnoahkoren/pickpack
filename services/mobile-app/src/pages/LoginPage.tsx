import { observer } from 'mobx-react-lite';
import { authContext } from '../global-stores/auth-store';

const LoginPage = () => {
  const authStore = authContext.use();

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="w-max">Login Page</div>
	  <button onClick={() => authStore.q_verifyPhoneNumber.mutate({
		phoneNumber: '+972541234567'
	  })}>Verify Phone Number</button>
	  <pre>{JSON.stringify(authStore.q_verifyPhoneNumber, null, 2)}</pre>
    </div>
  );
};

export default observer(LoginPage); 