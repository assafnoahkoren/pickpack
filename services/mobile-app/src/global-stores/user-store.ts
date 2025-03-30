import { makeAutoObservable } from 'mobx';
import { createStoreContext } from './create-store';
import { api } from '../api/api';

export class UserStore {
	q_me;

	constructor() {
		makeAutoObservable(this);
		this.q_me = api.auth.me();
	}

	get user() {
		return this.q_me.data;
	}
}

export const userContext = createStoreContext(() => new UserStore()); 