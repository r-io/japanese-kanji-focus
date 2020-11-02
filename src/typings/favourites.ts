import { Film } from './model/film';
import { Playlist } from './model/playlist';

export interface GetFavouritesResponse {
  success: boolean;
  filmList: Film[];
}

export interface GetAddFavouritesResponse {
  success: boolean;
  user: {
    playLists: Playlist[];
  };
}

export type GetRemoveFavouritesResponse = GetAddFavouritesResponse;