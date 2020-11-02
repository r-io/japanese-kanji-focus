import { DISMISS_LOADING, SHOW_LOADING } from '@constants/actions';

export interface ShowLoadingAction {
    type: typeof SHOW_LOADING;
}

export interface DismissLoadingAction {
    type: typeof DISMISS_LOADING;
}

export type LoadingActionTypes = ShowLoadingAction | DismissLoadingAction;