/**
 * @file optics.ts
 * @author Joseph R Miles
 * @summary Defines generic, type-safe optics and optic composition.
 */

import Maybe from "./maybe";

/// A lens focuses from a (W)hole type to a (P)art type of the whole.
export type Lens<W, P> =
{
  get: (w: W) => P,
  set: (w: W, p: P) => W,
};

/// A prism focuses from a (W)hole type to a (P)art type of the whole, where the
/// part may or may not exist.
export type Prism<W, P> =
{
  get: (w: W) => Maybe<P>,
  set: (w: W, p: P) => W,
};

export type Optic<W, P> = (Lens<W, P> | Prism<W, P>);

type FirstOpticParameterType<T extends Optic<any, any>[]> =
  T[0] extends Optic<infer W, any>
  ? W
  : never;

type LastOpticReturnType<T extends Optic<any, any>[]> =
  T extends [...rest: any, last: Optic<any, infer P>]
  ? P 
  : never;

export const composeOptics =
  <O extends Optic<any, any>[]>(...optics: O):
    Optic<FirstOpticParameterType<O>, LastOpticReturnType<O>> =>
  ({
    get: (w) =>
      optics
        .map((l) => l.get)
        .reduce(
          (acc, cur) => cur(acc),
          w as any
        ),
    set: (w, p) => 
      optics
      .map((o, i) =>
      ({
        ...o,
        get: (w: any) =>
          optics
            .slice(0, i)
            .map((o) => o.get)
            .reduce(
              (acc, cur) => cur(acc),
              w
            )
      }))
      .reduceRight(
        (acc, cur) => cur.set(cur.get(w), acc),
        p as any
      )
  });