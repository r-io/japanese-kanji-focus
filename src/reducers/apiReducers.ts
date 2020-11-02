import { CALL_API } from '@constants/actions';
import { ApiActionTypes } from '@typings/action/api';
import { ApiState } from '@typings/reduxState';

const initialState: ApiState = {
	test: null
};

export function apiReducer(state = initialState, action: ApiActionTypes): ApiState {
	switch (action.type) {
		case CALL_API:
			return {
				test: action.type
			};
		default:
			return state;
	}
}