declare type ArityOneFn = (arg: any) => any;
declare type PickLastInTuple<T extends any[]> = T extends [...rest: infer _, argn: infer L] ? L : never;
declare type FirstFnParameterType<T extends any[]> = Parameters<PickLastInTuple<T>>[any];
declare type LastFnReturnType<T extends any[]> = ReturnType<T[0]>;
export declare const compose: <T extends ArityOneFn[]>(...fns: T) => (p: FirstFnParameterType<T>) => ReturnType<T[0]>;
export declare const composeRight: <T extends ArityOneFn[]>(...fns: T) => (p: FirstFnParameterType<T>) => ReturnType<T[0]>;
export {};
