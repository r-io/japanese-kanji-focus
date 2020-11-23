import { GetRecommendationCarouselResponse, GetSliderCarouselsParam, GetSliderCarouselsResponse } from '@typings/carousel';
import { GetCatalogueParam, GetCatalogueResponse } from '@typings/catalogue';
import { PostContactPayload, PostContactResponse } from '@typings/contact';
import { GetContinueWatchingResponse } from '@typings/continueWatching';
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

export function getContinueWatching() {
  return Axios.get('/api/bookmark/continue-watching') as
    Promise<AxiosResponse<GetContinueWatchingResponse>>;
}

export function getAllLibrariesName(params: GetAllLibrariesNameParam) {
  return Axios.get('/api/libraries/all-name', { params }) as
    Promise<AxiosResponse<GetAllLibrariesNameResponse>>;
}

export function postContact(payload: PostContactPayload) {
  return Axios.post('/api/contact/contact', payload) as
    Promise<AxiosResponse<PostContactResponse>>;
}
export function getAllStatements() {
  return Axios.get('/api/statements') as
    Promise<AxiosResponse<GetAllStatementsResponse>>;
}
