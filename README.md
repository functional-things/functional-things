# Functional Tools

This is a repository of all my personal tools for functional programming in
TypeScript. Since this library relies _heavily_ on TypeScript's type system, it
won't be useful for applications in Vanilla JavaScript or using typecheckers
like Flow.

## Modules

### `composition`

The `composition` module provides two versions of functional composition:
`compose` and `composeRight`. `compose` performs function composition in the
listed order, so the function passed as the first parameter is applied first.
While this is not traditionally how function composition works, it's much easier
to reason about. Those looking for a more traditional compose function, there's
`composeRight`, which applies functions in the reverse of listed order.

### `maybe`

The `maybe` module is the smallest module in the lot and quite possibly
pointless. This module provides a generic "option" type whose value is either
that of the type parameter, or null.

### `optics`

The `optics` module is the module I am so far most proud of. This provides types
for lenses and prisms, as well as a function for composing optics together.
For now, optic composition is in listed order.