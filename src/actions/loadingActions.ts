import { DISMISS_LOADING, SHOW_LOADING } from '@constants/actions';
import { DismissLoadingAction, ShowLoadingAction } from '@typings/action/loading';

export function showLoading(): ShowLoadingAction {
	return {
		type: SHOW_LOADING
	};
}

export function dismissLoading(): DismissLoadingAction {
	return {
		type: DISMISS_LOADING
	};
}