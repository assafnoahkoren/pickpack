import { makeAutoObservable } from 'mobx';
import { createStoreContext } from './create-store';
import { api } from '../api/api';
import axios from 'axios';
export class AuthStore {
	m_verifyPhoneNumber = api.auth.verifyPhoneNumber();
	m_signIn = api.auth.signIn();
	q_isAuthenticated;


	constructor() {
		makeAutoObservable(this);
		this.initJwt();
		this.q_isAuthenticated = api.auth.isAuthenticated();
	}

	initJwt() {
		const token = localStorage.getItem('accessToken');
		if (token) {
			axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		}
	}
}

export const authContext = createStoreContext(() => new AuthStore());
