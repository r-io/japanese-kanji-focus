import { CALL_API } from '@constants/actions';

export interface CallApiAction {
    type: typeof CALL_API;
}

export type ApiActionTypes = CallApiAction;