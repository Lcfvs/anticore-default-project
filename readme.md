# anticore-default-project

A default anticore project codebase to build your app/site in seconds!

## How to build it?

* Be sure to have an installed **node.js** on your machine
* Clone this repository into your localhost directory and open a terminal in it.
* Run once `npm i -D`
* Each time you make a change, run `npm run build`
* Enjoy

## Make your first middleware

Create a `./assets/js/dev/test.md.js` file

```js
import { anticore } from 'anticore'
import { one } from 'anticore/dom/query/one'
import { replace } from 'anticore/dom/tree/replace'

// create a middleware to be applied on each element matching the `main.test` selector
anticore.on('main.test', function (element, next, loaded) {
  // replace the current main by the new one
  loaded && replace(element, one('main'))
  next() 
})
```

## Register your middleware

Into your `./assets/js/dev/index.js`, import your middleware

```js
import {anticore} from 'anticore'
import './test.md.js'

anticore.defaults().populate()
```

## Create the content

Create a file, into your project, like `./fragments/test.html`

```html
<main class="test">This is the test content</main>
```

## Link it into your page

```html
<a href="./fragments/test.html">Load the test content</a>
```