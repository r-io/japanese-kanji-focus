import { ImageSourcePropType } from 'react-native';
import { UserData } from './model/auth';
import { Session } from './session';

export interface ApiState {
	test: any;
}

export interface AuthState {
	userData?: UserData;
}

export interface ErrorState {
	errorMessage?: string;
}

export interface LoadingState {
	isLoading: boolean;
}

export interface DialogState {
	isShowing: boolean;
	title: string;
	description: string;
	onPressPrimary?: () => void;
	onPressSecondary?: () => void;
	options?: {
		primaryButtonText?: string;
		secondaryButtonText?: string;
		cancelable?: boolean;
		imageSource?: ImageSourcePropType;
		singleButton?: boolean;
	};
}

export type SessionState = Session;

export default interface ReduxState {
	api: ApiState;
	auth: AuthState;
	dialog: DialogState;
	loading: LoadingState;
	session: SessionState;
	error: ErrorState;
}