# Functional Things

This is a repository of all my personal tools for functional programming in
TypeScript. Since this library relies _heavily_ on TypeScript's type system, it
won't be useful for applications written in Vanilla JavaScript or projects that
use typecheckers like Flow.

## Packages

### `@functional-things/everything`

This package requires and exports all other Functional Things packages.

### `@functional-things/compose`

This package provides function composition utilities.

### `@functional-things/maybe`

This package provides a Maybe type. (So simple it's actually embarassing.)

### `@functional-things/optics`

This package provides functional optics (lenses, prisms; sometimes called
"functional references") and a utility for composing optics together.