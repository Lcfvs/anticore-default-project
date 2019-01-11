# anticore-default-project

A default anticore project codebase to build your app/site in seconds!

## How to build it?

* Be sure to have **node.js** installed on your machine or install it: [node.js](https://nodejs.org/en/download/)
* Clone this repository **into your localhost directory** `git clone https://github.com/Lcfvs/anticore-default-project.git your-localhost-directory/project-name`
* Open a terminal in it.
* Run the following command once: `npm i -D`
* Each time you make a change, run this one: `npm run build`
* Open your browser on your project index [http://localhost/project-name](http://localhost/project-name)
* Enjoy

## Make your first middleware

Create a `./assets/js/dev/test.md.js`

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

Import your middleware into your `./assets/js/dev/index.js`

```js
import {anticore} from 'anticore'
import './test.md.js'

anticore.defaults().populate()
```

## Create the content

Create a file into your project, for example `./fragments/test.html`

```html
<main class="test">This is the test content</main>
```

## Link it into your page

```html
<a href="./fragments/test.html">Load the test content</a>
```