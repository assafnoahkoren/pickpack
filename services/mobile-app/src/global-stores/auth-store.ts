import { makeAutoObservable } from 'mobx';
import { createStoreContext } from './create-store';
import { api } from '../api/api';

export class AuthStore {
	q_verifyPhoneNumber = api.auth.verifyPhoneNumber();
	constructor() {
		
		makeAutoObservable(this);
	}
}

export const authContext = createStoreContext(() => new AuthStore());
