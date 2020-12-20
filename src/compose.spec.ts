import { compose } from "./compose";

describe("compose", () =>
{
  describe("When passed one function", () =>
  {
    const identity = <T extends any>(x: T): T => x;

    it("Yields the same function", () =>
    {
      expect(compose(identity)(1)).toBe(1);
    })
  })
});