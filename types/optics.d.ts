import Maybe from "./maybe";
export declare type Lens<W, P> = {
    get: (w: W) => P;
    set: (p: P, w: W) => W;
};
export declare type Prism<W, P> = {
    get: (w: W) => Maybe<P>;
    set: (p: P, w: W) => W;
};
export declare type Optic<W, P> = (Lens<W, P> | Prism<W, P>);
declare type FirstOpticParameterType<T extends Optic<any, any>[]> = T[0] extends Optic<infer W, any> ? W : never;
declare type LastOpticReturnType<T extends Optic<any, any>[]> = T extends [...rest: T, last: Optic<any, infer P>] ? P : never;
export declare const composeOptics: <L extends Optic<any, any>[]>(...lenses: L) => Optic<FirstOpticParameterType<L>, LastOpticReturnType<L>>;
export {};
