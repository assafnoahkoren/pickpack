import { Image, Stack, Text, Title } from '@mantine/core';
import { observer } from 'mobx-react-lite';

const OnboardingPage = observer(() => {
	return (
		<Stack gap={0} className='onboarding-page text-dark items-center h-full pt-5'>
			<Image className='w-2/3' src={'/features/onboarding/step-1.png'} />
			<Title order={1} fw={900} >ברוכים הבאים!</Title>
			<Text c='dimmed'>כמה פרטים קטנים לפני שמתחילים</Text>

		</Stack>
	);
});

export default OnboardingPage;
