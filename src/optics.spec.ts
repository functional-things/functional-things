import { Lens, composeOptics } from "./optics";

describe("composeOptics", () =>
{
  describe("When given one optic", () =>
  {
    it("Yeilds the same optic", () =>
    {
      const data = { foo: { bar: 10 } };

      const foo: Lens<typeof data, typeof data.foo> =
      {
        get: (data) => data.foo,
        set: (data, foo) => ({ ...data, foo }),
      };

      expect(composeOptics(foo).get(data)).toStrictEqual(data.foo);
    });
  });
});