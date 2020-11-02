import { DISMISS_LOADING, SHOW_LOADING } from '@constants/actions';
import { LoadingActionTypes } from '@typings/action/loading';
import { LoadingState } from '@typings/reduxState';

const initialState: LoadingState = {
	isLoading: false
};

export function loadingReducer(state = initialState, action: LoadingActionTypes): LoadingState {
	switch (action.type) {
		case SHOW_LOADING:
			return {
				isLoading: true
			};
		case DISMISS_LOADING:
			return {
				isLoading: false
			};
		default:
			return state;
	}
}