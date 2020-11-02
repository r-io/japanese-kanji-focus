import { Film } from './model/film';

export interface GetViewingHistoryResponse {
    filmList: Film[];
}

export interface PostLibraryUserViewingHistoryResponse {
    success: boolean;
}

export type PostClearOneFilmViewingHistoryResponse = PostLibraryUserViewingHistoryResponse;

export type GetUserViewingHistoryResponse = GetViewingHistoryResponse;

export type PostClearAllUserViewingHistoryResponse = PostLibraryUserViewingHistoryResponse;

export type PostClearOneUserFilmViewingHistoryResponse = PostLibraryUserViewingHistoryResponse;