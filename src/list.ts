
export type List<T> = [ T, List<T> ] | [];

export const cons = <T extends any>(a: T, b: List<T> = []): List<T> =>
  [ a, b ];