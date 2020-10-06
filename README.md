# Shopping cart project assignment solution

You can find database mock-up under `src/db` folder.

There are 3 pages in total: home, category (dynamic), checkout.
You can find them under `src/pages`.

### How to apply filters?

#### Manage state with hooks

Filters state is managed with useReducer in a custom hook.
You can find the custom hook in `src/lib/useFilters.js`.

Filters state is an object in form of:

```js
const filters = {
  filterName: value,
};

// Example
const filters = {
  delivery: true,
  expensive: false,
  maxPrice: 100,
};
```

In the implementation there is a `createFilterReducer` function.
It is a higher-order function (a function that returns a function).
The reason using it is to pass `initialState` to the reducer function.
This will allow the reducer function to access initial state and create actions
like RESET.

#### Bind state to inputs

There are only simple checkbox filters.
Please find a reusable component in `src/components/FilterCheckbox.js`

The `useFilters` hook is used inside `src/pages/Category.js`.
The state is then passed to FilterCheckbox component.

To actually apply filters to some elements you need a computed value
(products + filters = computed value). Inside Category.js,
`getComputedProducts` is responsible for producing computed value.
It's very simple: it takes products and filters states, combines them,
then produces the result. When displaying items, you must render
the computed value.

### How to implement shopping cart?

Shopping cart state is managed with useReducer in a context provider component
`src/lib/cart.context.js`.

Cart context is provided to all components in the app (global state).
Look inside `src/App.js`

For shopping cart you can define 3 main actions:

- add item to cart (increase quantity)
- remove item from cart (decrease quantity)
- remove item from cart (just remove, without decreasing quantity)

All of the above actions are defined inside the reducer function in
cart.context.js.

Shopping cart state is an array that has the following shape:

```js
const shoppingCart = [
  {
    id: 'productId',
    price: productPrice,
  },
  ...
];

// Example
const shoppingCart = [
  {
    id: '2521fada',
    price: 140,
  },
  {
    id: 'dwf326a',
    price: 95,
  },
];
```

#### Separation of concerns

Shopping cart is split into `two context providers`: one for state,
second for dispatch. Passing both in one context does not work good with
Context API. There are components that don't need access to the state yet
must update the state (`src/components/Products.js`).

#### Cart total

Cart total and number of items are both computed values
(derived from shopping cart state). Take a look at `src/components/Navbar.js`.
Simply transform the state using JavaScript array methods
such as Array.reduce or Array.filter.

#### Persist the state

To persist shopping cart, you can use either local storage or session storage.
To sync state with local/session storage, please utilize useEffect.
useEffect callback (the effect) writes to local/session storage every
time state changes.

### Checkout page

On the checkout page, shopping cart state must be displayed and managed.
Actions are already defined in the reducer function.

How to display added items? In shopping cart state, only product id and price are stored.
In order to show added products on the page,
items must be derived from the state and products. Please find `getComputedCheckoutItems`
inside `src/pages/Checkout.js`.

### Additional info

- deployed to github pages
- styled with Reactstrap (React components for bootstrap)
- bootstrapped with create-react-app
