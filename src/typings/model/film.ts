import { Resource } from '@typings/model/resource';
import { FilmType } from '@typings/subjects';

export type FilmRating = 'MA15+' | 'PG' | 'E' | 'G' | 'M' | 'R';

export interface FilmTrack {
  resolution: string;
  url: string;
  bitrate: string;
}

export interface FilmEpisode {
  _id: string;
  episodeNo: string;
  name: string;
  description: string;
  source_1: string;
  source_2: string;
  source_other?: FilmTrack[];
  episodeTracks: FilmTrack[];
  start_credit?: number;
  end_credit?: number;
  caption?: Array<{
    label: string,
    srcLang: string,
    src: string;
  }>;
}

export interface FilmSeason {
  _id: string;
  name: string;
  episodes: FilmEpisode[];
}

export interface Film {
  addedOn: Date;
  _id: string;
  geo?: {
    countries: string[];
    excludeCountries: boolean;
    restricted: boolean;
  };
  state?: string;
  tags?: string[];
  filmType: FilmType[];
  countryOfOrigin?: string[];
  director?: string[];
  languages?: string[];
  producer?: string[];
  cast?: string[];
  viewCount?: number;
  isTVOD: boolean;
  isSVOD: boolean;
  duration?: number;
  filmHandle: string;
  longDescription?: string;
  name: string;
  price?: number;
  rating: FilmRating;
  subjects?: Array<{
    subjectID: number;
    subjectName: string;
  }>;
  synopsis: string;
  trailer?: {
    subtitle: string[];
    trailerDuration: string;
  };
  yearOfRelease?: number;
  publishedAt: string;
  thumbnail?: {
    source: string;
  };
  isGeoAccess?: boolean;
  userAccess?: boolean;
  userAccessMessage?: string;
  subtitle?: Array<{
    _id?: string;
    language: 'en' | 'en-AU';
    trackLink: string;
  }>;
  src?: string;
  trailerSrc?: string;
  mainTracks?: FilmTrack[];
  trailerTracks?: FilmTrack[];
  backupTracks?: FilmTrack[];
  resources: Resource[];
  userDuration?: number;
  isMarked?: boolean;
  isHd?: boolean;
  seasons?: FilmSeason[];
  episodeId?: string;
  start_credit?: number;
  end_credit?: number;
  ackToCountry?: boolean;
}