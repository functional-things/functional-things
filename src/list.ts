
export type List<T> = [ T, List<T> ] | [];

export const cons = <T extends any>(a: T, b: List<T> = []): List<T> =>
  [ a, b ];

export const arrayToList = <T extends any>(array: T[]): List<T> => 
  array.reduceRight((acc, cur) => cons(cur, acc), [] as List<T>);

export const listToArray = <T extends any>(
  list: List<T>,
  array: T[] = []
): T[] =>
  list.length
  ? array.concat(list[0], listToArray(list[1]))
  : [];