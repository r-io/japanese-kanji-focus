declare module 'kanji.js' {

  interface KanjiResult {
    freq: number,
    grade: number,
    jlpt: number,
    kunyomi: string[],
    literal: string,
    meanings: string[],
    onyomi: string[],
    stroke_count: number;
  }

  interface SearchOptions {
    jlpt?: number | {
      min: number,
      max: number;
    },
    grade?: number | {
      min: number,
      max: number;
    },
    romaji?: string,
    meaning?: string,
    sort?: boolean,
    force?: boolean
  }

  // export const Kanji = {
  //   getDetails(kanji: string): KanjiResult,
  //   search(options: SearchOptions): KanjiResult[]
  // }
  export function getDetails(kanji: string): KanjiResult;
  export function search(options: SearchOptions): KanjiResult[];

}
