import { Film } from './model/film';
import { FilmType } from './subjects';

export interface GetCatalogueParam {
    filmType: FilmType;
    subjects: {
        subjectName: string;
        category?: string;
    };
    sortBy: string;
    filterBy: string;
    limit: number;
    skip: number;
}

export interface GetCatalogueResponse {
    films: Film[];
    hasMore: boolean;
}
