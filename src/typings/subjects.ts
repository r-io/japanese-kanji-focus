import { Subject } from './model/subject';

export type FilmType = 'subject' | 'movie' | 'documentary';

export interface GetAllSubjectsResponse {
    result: {
        movie: Subject[];
        documentary: Subject[];
        subject: Subject[];
    };
}
