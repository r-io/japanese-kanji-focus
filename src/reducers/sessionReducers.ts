import { SET_SESSION_DATA } from '@constants/actions';
import { setStorageItem } from '@helpers/storage';
import { SessionActionTypes } from '@typings/action/session';
import { SessionState } from '@typings/reduxState';
import { initialSessionState } from '@typings/session';

const initialState: SessionState = initialSessionState;

export function sessionReducer(state = initialState, action: SessionActionTypes): SessionState {
	switch (action.type) {
		case SET_SESSION_DATA:
			setStorageItem(action.key, action.value);
			state[action.key] = {
				...state[action.key],
				...action.value as any
			};
			return state;
		default:
			return state;
	}
}