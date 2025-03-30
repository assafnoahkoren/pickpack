import { DB } from "@db/prisma-client";

export const checkIfOnboardingNeeded = (user: DB.User) => {
	let onboardingNeeded = false;
	
	if (!user.full_name) {
		onboardingNeeded = true;
	}

	return onboardingNeeded;
};

