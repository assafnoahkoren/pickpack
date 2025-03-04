import { makeAutoObservable } from 'mobx';
import { createStoreContext } from './create-store';
import { api } from '../api/api';

export class AuthStore {
	m_verifyPhoneNumber = api.auth.verifyPhoneNumber();
	m_signIn = api.auth.signIn();
	q_isAuthenticated = api.auth.isAuthenticated();


	constructor() {
		makeAutoObservable(this);
	}
}

export const authContext = createStoreContext(() => new AuthStore());
