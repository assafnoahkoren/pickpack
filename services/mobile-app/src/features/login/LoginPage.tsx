import { observer } from 'mobx-react-lite';
import { authContext } from '../../global-stores/auth-store';
import { Button, Input, Space, Stack, Text, Title } from '@mantine/core';
import { IconPhone } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
const LoginPage = () => {
  const authStore = authContext.use();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleEnterPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      authStore.m_verifyPhoneNumber.mutate({phoneNumber: phoneNumber});
    }
  };

  useEffect(() => {
    document.addEventListener('keypress', handleEnterPress);
    return () => {
      document.removeEventListener('keypress', handleEnterPress); 
    };
  }, []);
  return (
    <div className="flex flex-col justify-end items-center h-full w-full p-4 bg-gray-200">
        <Title className='c-dark' order={1}>על הדרך</Title>
        <Space h={8} />
        <Stack gap={4} className="bg-white p-4 rounded-2xl w-full" align='center'>
          <Input className='w-full' variant='filled' inputMode='tel' size='md' placeholder="052-123-4567" leftSection={<IconPhone className='opacity-50' />}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Text className='opacity-30'>אין צורך בהרשמה, הזן טלפון והתחבר</Text>
          <Space h={16} />
          <Button variant='filled' color='blue' size='md'>התחבר</Button>
        </Stack>
    </div>
  );
};

export default observer(LoginPage);