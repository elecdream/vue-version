# vue-version

The script returns the running vue version. This can be important if you develop an vue component which needs to check this.
It supports version `1`, `2`, `3` as tested.

## Get started

You need to copy and paste the file `vue-version.js` to your library folder and import it.

## Usage

Get whole object:

```javascript
// Import whole object using node style:
let vueVersion = require("./vue-version.js")

// or use ES6 import style:
import vueVersion from './vue-version.js'
```

This returns an object

```javascript
/*
  version: '2.6.14',
  info: [ '2', '6', '14' ],
  major: '2',
  minor: '6',
  patch: '14',
  isVue1: false,
  isVue2: true,
  isVue3: false,
  isVue4: false
}
*/
 
```

Get only individual parts:

```javascript
let isVue3 = require("./vue-version.js").isVue3
// or
import { isVue3 } from './vue-version.js'
```

## Test
Setting up a test environment for all different Vue releases at a time seems not to be possible.
I use choose version 2 for unit test.
Other versions are tested manually.

```bash
npm run test
```
