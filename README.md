# pre-commit-make

Runs `make post-merge` command after git pull or merge.

[![NPM][pre-commit-make-icon]][pre-commit-make-url]

[![Build status][pre-commit-make-ci-image]][pre-commit-make-ci-url]
[![dependencies][pre-commit-make-dependencies-image]][pre-commit-make-dependencies-url]
[![devdependencies][pre-commit-make-devdependencies-image]][pre-commit-make-devdependencies-url]
[![endorse][endorse-image]][endorse-url]

### Installation

From the root of your repo:

```
npm install pre-commit-make
```

If you have Node package.json, save this module as a dev dependency using `--save-dev`

### Configuration

Specify target in your Makefile

```
pre-commit: build test

build: ...
install: ...
```

If you want to skip git's pre-commit hook, just commit with `-n` option.

### Related

Run `make post-merge` command after merging with
[post-merge-make](https://github.com/bahmutov/post-merge-make)

Run different commands from Node project on commit or push using
[pre-git](https://github.com/bahmutov/pre-git)

### Small print

Author: Gleb Bahmutov &copy; 2014

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://bahmutov.calepin.co/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/pre-commit-make/issues?state=open) on Github

### License

MIT

[pre-commit-make-icon]: https://nodei.co/npm/pre-commit-make.png?downloads=true
[pre-commit-make-url]: https://npmjs.org/package/pre-commit-make
[pre-commit-make-ci-image]: https://travis-ci.org/bahmutov/pre-commit-make.png?branch=master
[pre-commit-make-ci-url]: https://travis-ci.org/bahmutov/pre-commit-make
[pre-commit-make-dependencies-image]: https://david-dm.org/bahmutov/pre-commit-make.png
[pre-commit-make-dependencies-url]: https://david-dm.org/bahmutov/pre-commit-make
[pre-commit-make-devdependencies-image]: https://david-dm.org/bahmutov/pre-commit-make/dev-status.png
[pre-commit-make-devdependencies-url]: https://david-dm.org/bahmutov/pre-commit-make#info=devDependencies
[endorse-image]: https://api.coderwall.com/bahmutov/endorsecount.png
[endorse-url]: https://coderwall.com/bahmutov
