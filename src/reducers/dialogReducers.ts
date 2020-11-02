import { DISMISS_DIALOG, SHOW_DIALOG } from '@constants/actions';
import { DialogActionTypes } from '@typings/action/dialog';
import { DialogState } from '@typings/reduxState';

const initialState: DialogState = {
	isShowing: false,
	title: '',
	description: ''
};

export function dialogReducer(state = initialState, action: DialogActionTypes): DialogState {
	switch (action.type) {
		case SHOW_DIALOG:
			return {
				isShowing: true,
				...action
			};
		case DISMISS_DIALOG:
			return {
				...state,
				isShowing: false
			};
		default:
			return state;
	}
}