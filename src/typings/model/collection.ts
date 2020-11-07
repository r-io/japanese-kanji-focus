import { Set } from './sets';

export interface Collection {
  index: number;
  title: string;
  sets: Set[];
}