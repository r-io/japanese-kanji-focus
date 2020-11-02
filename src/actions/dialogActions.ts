import { DISMISS_DIALOG, SHOW_DIALOG } from '@constants/actions';
import { DismissDialogAction, ShowDialogAction } from '@typings/action/dialog';
import { DialogState } from '@typings/reduxState';

export function showDialog(
	title: string,
	description: string,
	onPressPrimary?: () => void,
	onPressSecondary?: () => void,
	options?: DialogState['options']
): ShowDialogAction {
	return {
		type: SHOW_DIALOG,
		title,
		description,
		onPressPrimary,
		onPressSecondary,
		options
	};
}

export function dismissDialog(): DismissDialogAction {
	return {
		type: DISMISS_DIALOG
	};
}