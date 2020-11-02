import { CALL_API } from '@constants/actions';
import { ApiActionTypes } from '@typings/action/api';
import { AxiosResponse } from 'axios';

type ApiTypes = ApiActionTypes;

interface ErrorResponse {
	error: {
		message: string;
		response?: {
			data: {
				[key: string]: string;
			};
		};
		[key: string]: any;
	};
}

export function callApi<T>(
	api: Promise<AxiosResponse<T>>,
	onSuccess?: (result: T) => void,
	onFailure?: (error: ErrorResponse) => void,
	onFinally?: () => void
): ApiTypes {
	api.then(result => {
		if (onSuccess && result.status === 200) {
			onSuccess(result.data);
		} else if (onFailure) {
			onFailure({
				error: {
					message: 'Something went wrong. Please contact the administrator.',
					...result.data
				}
			});
		}
		if (onFinally) {
			onFinally();
		}
	}).catch(error => {
		if (onFailure) {
			onFailure({ error });
		}
		if (onFinally) {
			onFinally();
		}
	});

	return {
		type: CALL_API
	};
}