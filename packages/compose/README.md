# `@functional-things/compose`

> Function composition utilities for TypeScript.

This package provides functional composition utilities for TypeScript.
Specifically, it provides two functions: `compose` and `composeRight`.

## Install

```sh
$ npm install --save @functional-things/compose
```

## Usage

### `compose`

`compose` composes arity-one (single argument) functions in the order written.
This means that `compose(f, g, h)(x)` results in: `h(g(f(x)))`. While not the
traditional way of composing functions, this makes logical sense, since the
first function given to `compose` is applied first.

### `composeRight`

`composeRight`, like `compose`, composes arity-one (single argument) functions.
However, `composeRight` composes these functions from _right to left_. This
matches the more traditional way of composing functions.

To given an examle: `composeRight(f, g, h)(x)` becomes `f(g(h(x)))`.
