[![Coveralls – test coverage
](https://img.shields.io/coveralls/tomekwi/this-is-truthy.svg?style=flat-square)
](https://coveralls.io/r/tomekwi/this-is-truthy)
 [![Travis – build status
](https://img.shields.io/travis/tomekwi/this-is-truthy/master.svg?style=flat-square)
](https://travis-ci.org/tomekwi/this-is-truthy)
 [![David – status of dependencies
](https://img.shields.io/david/tomekwi/this-is-truthy.svg?style=flat-square)
](https://david-dm.org/tomekwi/this-is-truthy)
 [![Stability: stable
](https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square)
](https://nodejs.org/api/documentation.html#documentation_stability_index)
 [![Code style: airbnb
](https://img.shields.io/badge/code%20style-airbnb-777777.svg?style=flat-square)
](https://github.com/airbnb/javascript)




::isTruthy()
============

**Check if `this` is truthy.**




<div                                             id="/installation">&nbsp;</div>

Installation
------------

```sh
$ npm install this-is-truthy
```




<div                                                    id="/usage">&nbsp;</div>

Usage
-----

```js
import isTruthy from 'this-is-truthy/module';
// or:
const isTruthy = require('this-is-truthy');
```

These are all `true`:

```js
true::isTruthy();
5::isTruthy();
'a'::isTruthy();
[]::isTruthy();
{}::isTruthy();
() => {}::isTruthy();
```

These are `false`:

```js
false::isTruthy();
null::isTruthy();
undefined::isTruthy();
0::isTruthy();
NaN::isTruthy();
''::isTruthy();
```

It works great with **[trine](http://npm.im/trine)**:

```js
const {take} = require('trine/iterable/take');

[1, 3, , 5, 0, 7]::take(isTruthy);
// yields [1, 3, 5, 7]
```




<div                                                  id="/license">&nbsp;</div>

License
-------

[MIT][] © [Tomek Wiszniewski][]

[MIT]: ./License.md
[Tomek Wiszniewski]: https://github.com/tomekwi
