/**
 * @file composition.ts
 * @author Joseph R Miles
 * @summary Defines generic, type-safe composition functions.
 */

type ArityOneFn =
    (arg: any) => any;

type PickLastInTuple<T extends any[]> =
    T extends [...rest: infer _, argn: infer L ]
    ? L
    : never;

type FirstFnParameterType<T extends any[]> =
    Parameters<PickLastInTuple<T>>[any];

type LastFnReturnType<T extends any[]> =
    ReturnType<T[0]>;

export const compose = <T extends ArityOneFn[]>(...fns: T) =>
    (p: FirstFnParameterType<T>): LastFnReturnType<T> =>
        fns.reduce(
            (acc: any, cur: any) => cur(acc), p);

export const composeRight = <T extends ArityOneFn[]>(...fns: T) =>
    (p: FirstFnParameterType<T>): LastFnReturnType<T> =>
        fns.reduceRight(
            (acc: any, cur: any) => cur(acc), p);