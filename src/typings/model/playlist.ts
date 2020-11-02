import { Film } from '@typings/model/film';

export interface Playlist {
  _id: string;
  playListName: 'Favourites' | 'History';
  isActive: boolean;
  isDefault: boolean;
  films: Film[];
}