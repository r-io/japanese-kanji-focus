import { FilmType } from '@typings/subjects';

export function getFilmTypeName(filmType: FilmType): string {
  switch (filmType) {
    case 'documentary':
      return 'Documentaries';
    case 'movie':
      return 'Movies';
    case 'subject':
    default:
      return 'Subjects';
  }
}