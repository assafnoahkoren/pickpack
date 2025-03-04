import { observer } from 'mobx-react-lite';
import { authContext } from '../global-stores/auth-store';

const LoginPage = () => {
  const authStore = authContext.use();

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">

    </div>
  );
};

export default observer(LoginPage); 