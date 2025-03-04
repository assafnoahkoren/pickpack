import { observer } from 'mobx-react-lite';
import { authContext } from '../global-stores/auth-store';
import { Title } from '@mantine/core';

const LoginPage = () => {
  const authStore = authContext.use();

  return (
    <div className="flex flex-col justify-end items-center h-full w-full p-4">
        <Title order={1}>Login</Title>
    </div>
  );
};

export default observer(LoginPage); 