import { Injectable } from '@nestjs/common';
import { logger } from '@shared/logger';
import { Twilio } from 'twilio';

@Injectable()
export class SmsService {
	constructor() { }

	async sendVerificationCode(phoneNumber: string) {
		logger.log(`Sending verification code to ${phoneNumber}`);
		return getTwilioServices()
			.verifications
			.create({ to: phoneNumber, channel: 'sms' })
			.then(verification => logger.log(`Twilio verification created for ${phoneNumber}`, verification));
	}

	async isVerificationCodeValid(phoneNumber: string, code: string): Promise<boolean> {
		if (process.env.SKIP_AUTH === 'true') {
			return true;
		}

		try {
			const verification = await getTwilioServices().verificationChecks.create({ to: phoneNumber, code });
			if (verification.status !== 'approved') {
				logger.error(`Invalid verification code for ${phoneNumber}, status:`, verification);
				return false;
			} else {
				logger.log(`Verification code is valid for ${phoneNumber}, status:`, verification);
				return true;
			}
		} catch (error) {
			logger.error(`Invalid verification code for ${phoneNumber}, error: ${error}`);
			return false;
		}
	}
}

function getTwilioServices() {
	if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN || !process.env.TWILIO_SERVICE_SID) {
		throw new Error('Twilio credentials are not set');
	}

	const accountSid = process.env.TWILIO_ACCOUNT_SID;
	const authToken = process.env.TWILIO_AUTH_TOKEN;
	const client = require('twilio')(accountSid, authToken) as Twilio;

	return client.verify.v2.services(process.env.TWILIO_SERVICE_SID);
}
