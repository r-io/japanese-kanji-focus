import { REMOVE_USER, SET_USER } from '@constants/actions';
import { RemoveUserAction, SetUserAction } from '@typings/action/auth';

export function setUser(token: string): SetUserAction {
	return {
		type: SET_USER,
		token
	};
}

export function removeUser(): RemoveUserAction {
	return {
		type: REMOVE_USER
	};
}