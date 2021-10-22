import { KanjiProficiency } from '@typings/model/kanjiProficiency';

export function randomNumber(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomKanjiProficiency(numOfCharacters: number, kanjiProficiencies: KanjiProficiency[]): string[] {
  const values: Array<{kanji: string, score: number}> = kanjiProficiencies.map(kp => {
    const dayDifference =
      Math.floor((new Date().getTime() - new Date(kp.lastAttempt).getTime()) / (1000*60*60*24));
    const additionalScore = 100 - (kp.score - dayDifference);
    return {
      kanji: kp.kanji,
      score: randomNumber(0,100) + additionalScore
    };
  });
  values.sort((a,b) => b.score - a.score);
  return values.slice(0,numOfCharacters).map(val => val.kanji);
}