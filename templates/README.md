# <%= appName %>

<%= appDescription %>

## Table of Contents

* [Installation](#installation)
* [Quick start](#quick-start)
* [Example](#example)
* [Tests](#tests)
* [People](#people)
* [License](#license)

## Installation

Add it to your project:

```
$ npm install --save https://github.com/<%= userName %>/<%= appName %>.git
```

## Quick start

Add to your project:

```js
const <%= appName %> = require( '<%= appName %>' );

const client = <%= appName %>();
```

## Example

To view the example, clone the repo and install the dependencies:

```
$ git clone git://github.com/<%= userName %>/<%= appName %>.git
$ cd <%= appName %>
$ npm install
```

Then run the example:

```
$ node example/index.js
```

## Tests

Tests are in the `test` folder.

If you haven't already installed the dependencies:

```
$ npm install
```

Then run the tests:

```
$ npm test
```

## People

The original author is [@<%= authorName %>](https://github.com/<%= userName %>).

## License

[BSD](LICENSE)

---

[back to top](#<%= appName %>)
