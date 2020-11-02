import { SET_SESSION_DATA } from '@constants/actions';
import { SetSessionDataAction } from '@typings/action/session';
import { SessionState } from '@typings/reduxState';

export function setSessionData<T extends keyof SessionState>
	(key: T, value: { [keyA in keyof SessionState[T]]?: SessionState[T][keyA] }):
	SetSessionDataAction<keyof SessionState> {
	return {
		type: SET_SESSION_DATA,
		key,
		value
	};
}

// { [key in keyof State]?: State[key] }

// export function setSessionData<T extends keyof SessionState>
// 	(key: T, value: SessionState[T]): SetSessionDataAction<keyof SessionState> {