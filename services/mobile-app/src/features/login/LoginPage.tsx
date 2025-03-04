import { observer } from 'mobx-react-lite';
import { authContext } from '../../global-stores/auth-store';
import { Button, Input, Space, Stack, Text, Title } from '@mantine/core';
import { IconPhone } from '@tabler/icons-react';
const LoginPage = () => {
  const authStore = authContext.use();

  return (
    <div className="flex flex-col justify-end items-center h-dvh w-full p-4 bg-gray-200">
        <Title className='c-dark' order={1}>על הדרך</Title>
        <Stack gap={4} className="bg-white p-4 rounded-lg w-full" align='center'>
          <Input className='w-full' variant='filled' inputMode='tel' size='md' placeholder="052-123-4567" leftSection={<IconPhone className='opacity-50' />} />
          <Text className='opacity-30'>אין צורך בהרשמה, הזן טלפון והתחבר</Text>
          <Space h={16} />
          <Button variant='filled' color='blue' size='md'>התחבר</Button>
        </Stack>
    </div>
  );
};

export default observer(LoginPage);