import { Film } from './model/film';

export interface GetFilmDetailsResponse {
    film: Film;
}

export type GetFilmRecommendationsType = 'primaryRecommendations' | 'secondaryRecommendations';

export interface GetFilmRecommendationsResponse {
    result: Film[];
}

export interface GetFilmAdvancedSearchParam {
    search: string;
    sortBy: string;
    filterBy: string;
    limit: number;
    skip: number;
}

export interface GetFilmAdvancedSearchResponse {
    best: Film[];
    good: Film[];
    hasMore: boolean;
}

export interface GetFilmSetPlayAction {
    success: boolean;
}

export interface GetFilmResourcesResponse {
    paginatedResults: Array<{
        film: Film;
    }>;
}

export interface GetFilmResourcesParam {
    page: number;
    filter: string;
    sort: string;
    search: string;
}