import { DISMISS_DIALOG, SHOW_DIALOG } from '@constants/actions';
import { DialogState } from '@typings/reduxState';

export interface ShowDialogAction {
    type: typeof SHOW_DIALOG;
    title: string;
    description: string;
    onPressPrimary?: () => void;
    onPressSecondary?: () => void;
    options?: DialogState['options'];
}

export interface DismissDialogAction {
    type: typeof DISMISS_DIALOG;
}

export type DialogActionTypes = ShowDialogAction | DismissDialogAction;