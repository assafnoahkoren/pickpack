import { makeAutoObservable } from 'mobx';
import { createStoreContext } from './create-store';
import { api } from '../api/api';

export class AuthStore {
	q_verifyPhoneNumber = api.auth.verifyPhoneNumber();
	constructor() {
		this.q_verifyPhoneNumber.mutate({
			phoneNumber: '1234567890'
		})
		
		makeAutoObservable(this);
	}
}

export const authContext = createStoreContext(() => new AuthStore());
