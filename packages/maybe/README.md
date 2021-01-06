# `@functional-things/maybe`

> Maybe type for TypeScript.

This package provides a (embarassingly trivial) Maybe type for TypeScript.

## Install

```sh
$ npm install --save @functional-things/maybe
```

## Usage

```ts
import { Maybe } from "@functional-things/maybe";

const operationThatCanFail = (...args: any[]): Maybe<ResultType> =>
{
    // ...
};

const result = operationThatCanFail(/* ... */);

if (result !== null)
    console.error("Operation failed!");
```