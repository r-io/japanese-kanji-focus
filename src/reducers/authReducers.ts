import { REMOVE_USER, SET_USER } from '@constants/actions';
import storage from '@constants/storage';
import { removeStorageItem, setStorageItem } from '@helpers/storage';
import { AuthActionTypes } from '@typings/action/auth';
import { AuthState } from '@typings/reduxState';
import Axios from 'axios';
import jwt_decode from 'jwt-decode';

const initialState: AuthState = {};

export function authReducer(state = initialState, action: AuthActionTypes): AuthState {
	switch (action.type) {
		case SET_USER:
			setStorageItem(storage.token, action.token);
			Axios.defaults.headers.common.Authorization = action.token;
			return {
				userData: jwt_decode(action.token)
			};
		case REMOVE_USER:
			removeStorageItem(storage.token);
			delete Axios.defaults.headers.common.Authorization;
			return {
				userData: undefined
			};
		default:
			return state;
	}
}