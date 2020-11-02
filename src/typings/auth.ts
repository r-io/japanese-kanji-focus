
import { GoogleUser } from './model/auth';

export interface PostLoginPayload {
	email: string;
	password: string;
}
export interface PostLoginResponse {
	success: boolean;
	token: string;
}

export interface PostGoogleLoginPayload {
	access_token: string;
}
export interface PostGoogleLoginResponse {
	user: GoogleUser;
	token: string;
}

export type PostFacebookLoginPayload = PostGoogleLoginPayload;
export type PostFacebookLoginResponse = PostGoogleLoginResponse;

export type PostAppleLoginPayload = PostGoogleLoginPayload;
export type PostAppleLoginResponse = PostGoogleLoginResponse;

export interface PostForgetPasswordPayload {
	email: string;
}
export interface PostForgetPasswordResponse {
	isEmailSent: boolean;
}

export interface PostIPAuthenticationLibraryPayload {
	barcode: '';
	id: string;
	isAppUser: boolean;
}
export interface PostIPAuthenticationLibraryResponse {
	redirect?: boolean;
	redirectUrl?: string;
	success?: boolean;
	token?: string;
}

export type PostEZProxyAuthenticationPayload = PostIPAuthenticationLibraryPayload;
export type PostEZProxyAuthenticationResponse = PostLoginResponse;

export interface PostBarcodeLibraryPayload {
	id: string;
	barcode: string;
}
export type PostBarcodeLibraryResponse = PostLoginResponse;

export interface PostLibraryUserSignUpPayload {
	email: string;
	firstName: string;
	lastName: string;
	password: string;
	password2: string;
	platform?: string;
}

export type PostLibraryUserSignUpResponse = PostForgetPasswordResponse;

export type PostLibraryUserGoogleSignUpPayload = PostGoogleLoginPayload;
export type PostLibraryUserGoogleSignUpResponse = PostGoogleLoginResponse;

export type PostLibraryUserFacebookSignUpPayload = PostGoogleLoginPayload;
export type PostLibraryUserFacebookSignUpResponse = PostGoogleLoginResponse;

export type PostLibraryUserAppleSignUpPayload = PostGoogleLoginPayload;
export type PostLibraryUserAppleSignUpResponse = PostGoogleLoginResponse;

export interface PostUpdateUserConsentPayload {
	rating: string;
}
export interface PostUpdateUserConsentResponse {
	token: string;
}

export type PostUpdateLibraryUserConsentPayload = PostUpdateUserConsentPayload;
export type PostUpdateLibraryUserConsentResponse = PostUpdateUserConsentResponse;

export type PostUpdateUserAcknowlegementOfCountryResponse = PostUpdateUserConsentResponse;

export type PostUpdateLibraryUserAcknowlegementOfCountryResponse = PostUpdateUserConsentResponse;
