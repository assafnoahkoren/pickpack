import { observer } from 'mobx-react-lite';
import { authContext } from '../../global-stores/auth-store';
import { Button, Input, Space, Stack, Text, Title } from '@mantine/core';
import { IconPhone } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { queryClient } from '../../core/QueryLayer';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const LoginPage = () => {
  const authStore = authContext.use();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const swiperRef = useRef<SwiperClass>(null);
  const navigate = useNavigate();
  console.log('phoneNumber', phoneNumber);
  const parsedPhone = parsePhoneNumberFromString(phoneNumber, 'IL');


  const verifyPhone = async () => {
    if (!parsedPhone?.isValid()) {
      return;
    }
    console.log('verifyPhone', parsedPhone?.number);
    
    await authStore.m_verifyPhoneNumber.mutate({ phoneNumber: parsedPhone?.number });
    swiperRef.current?.slideNext();
  }

  const signIn = async () => {
    if (!parsedPhone?.isValid()) {
      return;
    }
    const result = await authStore.m_signIn.mutate({ phoneNumber: parsedPhone?.number, code: otp });
    if (result.accessToken) {
      localStorage.setItem('accessToken', result.accessToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${result.accessToken}`;
      queryClient.invalidateQueries({ queryKey: ['auth', 'isAuthenticated'] });
      navigate('/home');
    }
  }

  useEffect(() => {
    if (otp.length === 4) {
      signIn();
    }
  }, [otp]);


  const handleEnterPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && swiperRef.current?.activeIndex === 0) {
      e.preventDefault();
      verifyPhone();
    }
  };

  useEffect(() => {
    document.addEventListener('keypress', handleEnterPress);
    return () => {
      document.removeEventListener('keypress', handleEnterPress);
    };
  }, []);

  return (
    <div className="flex flex-col justify-end items-center h-full w-full bg-gray-200">
      <Title className='c-dark' order={1}>על הדרך</Title>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        allowTouchMove={false}
        spaceBetween={30}
        slidesPerView={1}
        className="w-full"
      >
        <SwiperSlide className='p-4'>
          <Stack gap={4} className="bg-white p-4 rounded-2xl w-full h-full" align='center'>
            <Text className='self-start' fw="bold">טלפון</Text>
            <Input className='w-full' variant='filled' size='md' inputMode='tel' placeholder="052-123-4567" leftSection={<IconPhone className='opacity-50' />}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Text className='opacity-30'>אין צורך בהרשמה, הזן טלפון והתחבר</Text>
            <Space h={16} />
            <Button
              variant='filled'
              color='blue'
              size='md'
              onClick={verifyPhone}
              loading={authStore.m_verifyPhoneNumber.isLoading}
            >
              התחבר
            </Button>
          </Stack>
        </SwiperSlide>
        <SwiperSlide className='p-4'>
          <Stack dir="ltr" gap={10} className="bg-white p-4 rounded-2xl w-full h-full relative" align='center'>
            <Text className='absolute top-4 end-6 text-gray-300' onClick={() => swiperRef.current?.slidePrev()}>חזור</Text>
            <Text c="dark" fw="bold">קוד אישור</Text>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<Space w={12} />}
              renderInput={(props) => <input {...props} type='number' className='focus:outline-blue focus:outline-1' style={{
                padding: 2,
                width: 50,
                height: 50,
                borderRadius: 10,
                border: 'none',
                textAlign: 'center',
                fontSize: 24,
                fontWeight: 'bold',
                backgroundColor: '#f0f0f0',
               }} />}
            />
            <Text c="dark" dir='rtl' className='opacity-30'>הזן את הקוד שקיבלת ב-SMS</Text>
            <Button
              variant='outline'
              color='gray'
              size='md'
              onClick={verifyPhone}
              loading={authStore.m_signIn.isLoading}
            >
              שלח שוב
            </Button>
          </Stack>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default observer(LoginPage);