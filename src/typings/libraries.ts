import { Library } from './model/library';

export interface GetAllLibrariesNameParam {
    branches: boolean;
}

export type GetAllLibrariesNameResponse = Library[];
