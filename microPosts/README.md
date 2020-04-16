### Some dependencies for this project:

* install node.js (npm, etc.)  -- see popSystems gist
 * run server -- `npm run start`

* Create JSON server (116) - `npm install json-server --save` 
  * (https://github.com/typicode/json-server)
  * create 'db.json' file 
  * add command to package.json -- `"<key>": "json-server --watch <dir to 'db.json'>` 
  * run json server -- `npm run json:server`

* Final build -- `npm run build` -- this packs everything into /build (one file?) for production.
  ___
  ___
  ___

### Original README.md file from Brad's respository for this project: 

[Brad's repsoitory](https://github.com/bradtraversy/babel_webpack_starter)

# Babel Webpack Starter

A starter pack to build JavaScript applications using standards from ES2015, ES2016 & ES2017. It uses webpack, Babel and webpack-dev-server to compile and serve. It is fully compatible with Async/Await as it uses the Babel polyfill.

### Version
1.1.0

## Usage

### Installation

Install the dependencies

```sh
$ npm install
```

### Serve
To serve in the browser  - Runs webpack-dev-server

```sh
$ npm start
```

### Build
Compile and build

```sh
$ npm run build
```

## More Info

### Author

Brad Traversy
[Traversy Media](http://www.traversymedia.com)

### License

This project is licensed under the MIT License