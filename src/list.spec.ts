import { arrayToList, cons, listToArray } from "./list";

describe("cons", () =>
{
  it("Creates a list from both parameters.", () =>
  {
    expect(cons(1, [])).toStrictEqual([ 1, [] ]);
    expect(cons(1, [ 2, [] ])).toStrictEqual([ 1, [ 2, [] ]]);
  });

  it("Creates a list with only one element when given only one parameter.",
  () =>
  {
    expect(cons(1)).toStrictEqual([ 1, [] ]);
  });
});

describe("arrayToList", () =>
{
  it("Converts an empty array to an empty list.", () =>
  {
    expect(arrayToList([])).toStrictEqual([]);
  });

  it("Converts a non-empty array to a non-empty list.", () =>
  {
    expect(arrayToList([ 1 ])).toStrictEqual([ 1, [] ]);
    expect(arrayToList([ 1, 2 ])).toStrictEqual([ 1, [ 2, [] ] ]);
  });
});

describe("listToArray", () =>
{
  it("Converts an empty list to an empty array.", () =>
  {
    expect(listToArray([])).toStrictEqual([]);
  });

  it("Converts a non-empty list to a non-empty array.", () =>
  {
    expect(listToArray([ 1, [] ])).toStrictEqual([ 1 ]);
    expect(listToArray([ 1, [ 2, [] ] ])).toStrictEqual([ 1, 2 ]);
  });
});