import { REMOVE_USER, SET_USER } from '@constants/actions';

export interface SetUserAction {
	type: typeof SET_USER;
	token: string;
}

export interface RemoveUserAction {
	type: typeof REMOVE_USER;
}

export type AuthActionTypes = SetUserAction | RemoveUserAction;