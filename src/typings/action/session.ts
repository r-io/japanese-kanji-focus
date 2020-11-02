import { SET_SESSION_DATA } from '@constants/actions';
import { SessionState } from '@typings/reduxState';

export interface SetSessionDataAction<T extends keyof SessionState> {
    type: typeof SET_SESSION_DATA;
    key: T;
    value: { [keyA in keyof SessionState[T]]?: SessionState[T][keyA] };
}

export type SessionActionTypes = SetSessionDataAction<keyof SessionState>;