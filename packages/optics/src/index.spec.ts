import { Lens, composeOptics } from ".";

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

  describe("When given more than one optic", () =>
  {
    it("Yeilds an optic with getters and setters composed from left to right",
    () =>
    {
      const data = { foo: { bar: 10} };

      const foo: Lens<typeof data, typeof data.foo> =
      {
        get: (data) => data.foo,
        set: (data, foo) => ({ ...data, foo }),
      };

      const bar: Lens<typeof data.foo, number> =
      {
        get: (foo) => foo.bar,
        set: (foo, bar) => ({ ...foo, bar }),
      };

      const fooBar = composeOptics(foo, bar);

      expect(fooBar.get(data)).toBe(10);
      expect(fooBar.set(data, 5)).toStrictEqual({ foo: { bar: 5 } });
    });
  });
});