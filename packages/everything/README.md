# `@functional-things/everything`

> Functional programming utilities for TypeScript.

This package is the root package for Functional Things. Installing this package
installs all packages under the `@functional-things` namespace. Additionally,
this package exports everything exported from all imported Functional Things
packages.

## Installation

```shell
$ npm install --save @functional-things/everything
```

## Usage

Import anything from any Functional Things package:

```ts
import { Optic } from "@functional-things/everything";
```

Import from a specific Functional Things package:

```ts
import { Optic } from "@funtional-things/optics";
```

## Packages

This imports the following packages:
 *  [`@functional-things/compose`](https://npmjs.com/package/@functional-things/compose)
 *  [`@functional-things/maybe`](https://npmjs.com/package/@functional-things/maybe)
 *  [`@functional-things/optics`](https://npmjs.com/package/@functional-things/optics)