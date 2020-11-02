import { Film } from './model/film';

export interface GetContinueWatchingResponse {
  success: boolean;
  filmList: Film[];
}