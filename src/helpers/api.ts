import {
  PostAppleLoginPayload,
  PostAppleLoginResponse,
  PostBarcodeLibraryPayload,
  PostBarcodeLibraryResponse,
  PostEZProxyAuthenticationPayload,
  PostEZProxyAuthenticationResponse,
  PostFacebookLoginPayload,
  PostFacebookLoginResponse,
  PostForgetPasswordPayload,
  PostForgetPasswordResponse,
  PostGoogleLoginPayload,
  PostGoogleLoginResponse,
  PostIPAuthenticationLibraryPayload,
  PostIPAuthenticationLibraryResponse,
  PostLibraryUserAppleSignUpPayload,
  PostLibraryUserAppleSignUpResponse,
  PostLibraryUserFacebookSignUpPayload,
  PostLibraryUserFacebookSignUpResponse,
  PostLibraryUserGoogleSignUpPayload,
  PostLibraryUserGoogleSignUpResponse,
  PostLibraryUserSignUpPayload,
  PostLibraryUserSignUpResponse,
  PostLoginPayload,
  PostLoginResponse,
  PostUpdateLibraryUserAcknowlegementOfCountryResponse,
  PostUpdateLibraryUserConsentPayload,
  PostUpdateLibraryUserConsentResponse,
  PostUpdateUserAcknowlegementOfCountryResponse,
  PostUpdateUserConsentPayload,
  PostUpdateUserConsentResponse
} from '@typings/auth';
import { GetRecommendationCarouselResponse, GetSliderCarouselsParam, GetSliderCarouselsResponse } from '@typings/carousel';
import { GetCatalogueParam, GetCatalogueResponse } from '@typings/catalogue';
import { PostContactPayload, PostContactResponse } from '@typings/contact';
import { GetContinueWatchingResponse } from '@typings/continueWatching';
import { GetAddFavouritesResponse, GetFavouritesResponse, GetRemoveFavouritesResponse } from '@typings/favourites';
import {
  GetFilmAdvancedSearchParam,
  GetFilmAdvancedSearchResponse,
  GetFilmDetailsResponse,
  GetFilmRecommendationsResponse,
  GetFilmRecommendationsType,
  GetFilmResourcesParam,
  GetFilmResourcesResponse
} from '@typings/film';
import { GetAllLibrariesNameParam, GetAllLibrariesNameResponse } from '@typings/libraries';
import { GetAllStatementsResponse } from '@typings/statement';
import { GetAllSubjectsResponse } from '@typings/subjects';
import {
  GetUserViewingHistoryResponse,
  GetViewingHistoryResponse,
  PostClearAllUserViewingHistoryResponse,
  PostClearOneFilmViewingHistoryResponse,
  PostClearOneUserFilmViewingHistoryResponse,
  PostLibraryUserViewingHistoryResponse
} from '@typings/viewingHistory';
import Axios, { AxiosResponse } from 'axios';

export function getFilmResources(params: GetFilmResourcesParam) {
  return Axios.get(
    `/api/films/getFilmResources/${params.page}/${params.filter}/${params.sort}/${params.search}`,
    { params }
  ) as
    Promise<AxiosResponse<GetFilmResourcesResponse>>;
}
export function getSliderCarousels(params: GetSliderCarouselsParam) {
  return Axios.get('/api/carousels/get-slider-carousels', { params }) as
    Promise<AxiosResponse<GetSliderCarouselsResponse>>;
}

export function getRecommendationCarousel() {
  return Axios.get('/api/carousels/recommendation-carousel') as
    Promise<AxiosResponse<GetRecommendationCarouselResponse>>;
}

export function getFilmDetails(filmHandle: string) {
  return Axios.get('/api/films/getFilmByHandleName/' + filmHandle) as
    Promise<AxiosResponse<GetFilmDetailsResponse>>;
}

export function getFilmRecommendations(filmHandle: string, type: GetFilmRecommendationsType) {
  return Axios.get('/api/films/getRecommendationForHandle/' + filmHandle + '/' + type) as
    Promise<AxiosResponse<GetFilmRecommendationsResponse>>;
}

export function getViewingHistory() {
  return Axios.get('api/library/users/history') as
    Promise<AxiosResponse<GetViewingHistoryResponse>>;
}

export function postLibraryUserViewingHistory() {
  return Axios.post('api/library/users/clearHistory') as
    Promise<AxiosResponse<PostLibraryUserViewingHistoryResponse>>;
}

export function postClearOneFilmViewingHistory(filmId: string) {
  return Axios.post('api/library/users/clearOneHistoryFilm/' + filmId) as
    Promise<AxiosResponse<PostClearOneFilmViewingHistoryResponse>>;
}

export function getUserViewingHistory() {
  return Axios.get('api/users/history') as
    Promise<AxiosResponse<GetUserViewingHistoryResponse>>;
}

export function postClearAllUserViewingHistory() {
  return Axios.post('api/users/clearHistory') as
    Promise<AxiosResponse<PostClearAllUserViewingHistoryResponse>>;
}

export function postClearOneUserFilmViewingHistory(filmId: string) {
  return Axios.post('api/users/clearOneHistoryFilm/' + filmId) as
    Promise<AxiosResponse<PostClearOneUserFilmViewingHistoryResponse>>;
}

export function getFilmAdvancedSearch(params: GetFilmAdvancedSearchParam) {
  return Axios.get('/api/films/advancedSearch', { params }) as
    Promise<AxiosResponse<GetFilmAdvancedSearchResponse>>;
}

export function getFilmSetPlayAction(filmId: string, time: number, isTrailer: boolean, episodeId?: string) {
  return Axios.get('/api/films/setUserPlayAction/' + filmId + '/' + time + '/' + isTrailer + '/' + (episodeId || ''));
}

export function getAddResourceAnalytic() {
  return Axios.get('/api/films/addResourceAnalytic');
}

export function getAddSubjectAnalytic() {
  return Axios.get('/api/subjects/addSubjectAnalytic');
}

export function getAllSubjects() {
  return Axios.get('/api/subjects/getAllSubjects') as
    Promise<AxiosResponse<GetAllSubjectsResponse>>;
}

export function getCatalogue(params: GetCatalogueParam) {
  return Axios.get('/api/catalogue', { params }) as
    Promise<AxiosResponse<GetCatalogueResponse>>;
}

export function getFavourites() {
  return Axios.get('/api/bookmark/userList') as
    Promise<AxiosResponse<GetFavouritesResponse>>;
}

export function getAddFavourites(filmId: string) {
  return Axios.get('/api/bookmark/add/' + filmId) as
    Promise<AxiosResponse<GetAddFavouritesResponse>>;
}

export function getRemoveFavourites(filmId: string) {
  return Axios.get('/api/bookmark/remove/' + filmId) as
    Promise<AxiosResponse<GetRemoveFavouritesResponse>>;
}

export function getContinueWatching() {
  return Axios.get('/api/bookmark/continue-watching') as
    Promise<AxiosResponse<GetContinueWatchingResponse>>;
}

export function getAllLibrariesName(params: GetAllLibrariesNameParam) {
  return Axios.get('/api/libraries/all-name', { params }) as
    Promise<AxiosResponse<GetAllLibrariesNameResponse>>;
}

export function postLogin(payload: PostLoginPayload) {
  return Axios.post('/api/users/login', payload) as
    Promise<AxiosResponse<PostLoginResponse>>;
}

export function postContact(payload: PostContactPayload) {
  return Axios.post('/api/contact/contact', payload) as
    Promise<AxiosResponse<PostContactResponse>>;
}

export function postGoogleLogin(payload: PostGoogleLoginPayload) {
  return Axios.post('/api/users/google-login', payload) as
    Promise<AxiosResponse<PostGoogleLoginResponse>>;
}

export function postFacebookLogin(payload: PostFacebookLoginPayload) {
  return Axios.post('/api/users/facebook-login', payload) as
    Promise<AxiosResponse<PostFacebookLoginResponse>>;
}

export function postAppleLogin(payload: PostAppleLoginPayload) {
  return Axios.post('/api/users/apple-login', payload) as
    Promise<AxiosResponse<PostAppleLoginResponse>>;
}

export function postForgetPassword(payload: PostForgetPasswordPayload) {
  return Axios.post('/api/users/forgetpassword', payload) as
    Promise<AxiosResponse<PostForgetPasswordResponse>>;
}

export function postIPAuthenticationLibrary(payload: PostIPAuthenticationLibraryPayload) {
  return Axios.post('api/library/users', payload) as
    Promise<AxiosResponse<PostIPAuthenticationLibraryResponse>>;
}

export function postEZProxyAuthentication(payload: PostEZProxyAuthenticationPayload, url: string, cookie: string) {
  return Axios.post(url + '/api/library/users', payload, { headers: { Cookie: cookie } }) as
    Promise<AxiosResponse<PostEZProxyAuthenticationResponse>>;
}

export function postBarcodeLibrary(payload: PostBarcodeLibraryPayload) {
  return Axios.post('/api/library/users/barcode', payload) as
    Promise<AxiosResponse<PostBarcodeLibraryResponse>>;
}

export function postLibraryUserSignUp(payload: PostLibraryUserSignUpPayload) {
  return Axios.post('/api/library/users/register', payload) as
    Promise<AxiosResponse<PostLibraryUserSignUpResponse>>;
}

export function postLibraryUserGoogleSignUp(payload: PostLibraryUserGoogleSignUpPayload) {
  return Axios.post('/api/library/users/google', payload) as
    Promise<AxiosResponse<PostLibraryUserGoogleSignUpResponse>>;
}

export function postLibraryUserFacebookSignUp(payload: PostLibraryUserFacebookSignUpPayload) {
  return Axios.post('/api/library/users/facebook', payload) as
    Promise<AxiosResponse<PostLibraryUserFacebookSignUpResponse>>;
}

export function postLibraryUserAppleSignUp(payload: PostLibraryUserAppleSignUpPayload) {
  return Axios.post('/api/library/users/apple', payload) as
    Promise<AxiosResponse<PostLibraryUserAppleSignUpResponse>>;
}

export function getAllStatements() {
  return Axios.get('/api/statements') as
    Promise<AxiosResponse<GetAllStatementsResponse>>;
}

export function postUpdateUserConsent(payload: PostUpdateUserConsentPayload) {
  return Axios.post('/api/users/updateUserConsent', payload) as
    Promise<AxiosResponse<PostUpdateUserConsentResponse>>;
}

export function postUpdateLibraryUserConsent(payload: PostUpdateLibraryUserConsentPayload) {
  return Axios.post('/api/library/users/updateLibraryUserConsent', payload) as
    Promise<AxiosResponse<PostUpdateLibraryUserConsentResponse>>;
}

export function postUpdateUserAcknowlegementOfCountry() {
  return Axios.post('/api/users/acktoCountry') as
    Promise<AxiosResponse<PostUpdateUserAcknowlegementOfCountryResponse>>;
}

export function postUpdateLibraryUserAcknowlegementOfCountry() {
  return Axios.post('/api/library/users/acktoCountry') as
    Promise<AxiosResponse<PostUpdateLibraryUserAcknowlegementOfCountryResponse>>;
}