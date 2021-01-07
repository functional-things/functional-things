# `@functional-things/optics`

> Functional optics (lens and prism) utilities for TypeScript.

This package provides functional optics utilities for TypeScript. Specifically,
it provides:
 *  Generic `Lens`, `Prism`, and `Optic` type.
 *  A function for composing optics, `composeOptics`.

## Install

```sh
$ npm install --save @functional-things/optics
```

## Usage

In functional programming, optics are pairs of functions used to "focus" in on
parts of nested data structures. One of these pairs of functions "gets" the
nested data, and the other "sets" the nested data. In Functional Things, we
provide three generic types to cover optics: `Lens`, `Prism`, and `Optic`.
`Optic` is a sum type that can either be a `Lens` or `Prism`, so we will only
cover those types.

### `Lens`

A lens is an optic whose "get" operation is guaranteed to return a value. Put
another way, a lens can only focus on a part of a data structure that _must_
exist. Lenses are therefore used to focus into data structures that have
fixed layouts: things like user metadata, or a street address.

For example, let's look at using lenses to extract the streetname from a user's
address. We first need some data:

```ts
const userData =
{
    name:
    {
        first: "John",
        last:  "Doe",
    },
    address:
    {
        number: 1234,
        streetName: "N Lumbard Way",
        city: "Springfield",
        province: "Illinois",
        country: "USA",
    },
};
```

To create a lens, you create an object with two fields, `get` and `set`. We'll
create an object of type `Lens` that takes our `userData` gives us access to
the user's `address`.

```ts
const address: Lens<typeof userData, typeof userData.address> =
{
    get: (userData) => userData.address,
    set: (address, userData) =>
    ({
        ...userData,
        address
    }),
}
```

> _Notice that we do not mutate `userData` in `address.set`. Instead, we return
> a new object with `userData.address` replaced with the new address object._

Now, to extract the street name from the address, we create another lens:

```ts
const streetName: Lens<typeof userData.address, string> =
{
    get: (address) => address.streetName,
    set: (streetName, address) =>
    ({
        ...address,
        streetName
    }),
}
```

And to get the name of the street in the user's address, we use the lenses like
so:

```ts
streetName.get(address.get(userData));
```

And similarly with changing the name of the street:

```ts
const updatedUserData = 
    address.set(
        streetName.set(
            "S Burwell Way",
            address.get(userData)
        ),
        userData
    );
```

This is all pretty long. To shorten it, we can use `composeOptics`:

```ts
const userStreetName = composeOptics(address, streetName);

const updatedUserData = userStreetName.set("S Burwell Way", userData);
```

_`composeOptics` composes optics from left to right, which means that the first
optic is applied to the data structure first, the second, second, and so on.

### `Prism`

Unlike a lens, a prism's "get" _can_ fail to return a value. This means that,
for some reason, the part of the data structure the optic was trying to access
could not be found, and it instead returns null. This is useful for data
structures with variable layouts, such as sum types or collections.

For example, if we had an array of users:
```ts
const users =
[
    {
        name:
        {
            first: "John",
            last:  "Doe",
        },
        address:
        {
            number: 1234,
            streetName: "N Lumbard Way",
            city: "Springfield",
            province: "Illinois",
            country: "USA",
        },
    },
];
```

And we wanted to get the first user in that array, we would create a `Prism`
like so:

```ts
const firstUser: Prism<User[], User> =
{
    get: (users) => user[0] ?? null,
    set: (user, users) =>
    [
        user,
        ...users.slice(1)
    ]
}
```

Since `user[0]` _can_ be undefined (when the array is empty), we default to null
to indicate that there is no first user.

And to set the first user's address, we can either write out the transformation:
```ts
const updatedUsers =
    firstUser.set(
        address.set(
            streetName.set(
                "S Burwell Way",
                address.get(firstUser.get(users))
            ),
            firstUser.get(users)
        ),
        users
    );
```

Or use `composeOptics`:
```ts
const firstUserStreetName = composeOptics(firstUser, address, streetName);

const updatedUsers = firstUserStreetName.set("S Burwell Way", users);
```