# profs2pick-ui
The web client for **Profs To Pick**.

## Installing
Some requirements include:
- [node](nodejs.org) / [npm](npmjs.com)
- [ruby](ruby-lang.org) / [gems](rubygems.org) / [bundler](bundler.io)

Afterwards, clone, and then run the following to install the dependencies:
```bash
npm install
bundle install
```

## Development
```bash
npm run start # runs build script, style, and server

# opens index file, watches / builds assets
npm run dev

# run server-side rendering
npm run server

# production-ready assets / run server
npm start

# run tests
npm test # open up localhost:9876 afterwards
```

## Configuration
This starter kit uses a [dotenv](https://www.npmjs.com/package/dotenv-style) configuration. To start, simply copy `.env.example` to `.env`.
```bash
cp .env.example .env
```
Afterwards, modify as it suits your needs.

#### `_ENV_`
A global variable for `process.env.NODE_ENV`.

#### `_PRODUCTION_`
`true` when `process.env.NODE_ENV` is set to `production`.

#### `_DEV_`
`true` when `process.env.NODE_ENV` is **not** set to `production`.

#### `_API_`
The URI of the your API.

Mainly used to concatenate your requests with a base URI in `common/utils/axios/interceptors/concatBaseUrl`.

#### `_IMG_`
Path to your images folder.

This can be used as such : ````${_IMG_}/cat.jpg````.

#### `_PORT_`
The port which the server will be ran.

This is a server-only config.

#### `_REDUX_DEVTOOLS_`
Condition which Redux Devtools will be enabled.

#### `_SSR_`
The variable to check if the environment is node. This is safer than deriving by checking variables available only to node.

This is explicitly set to each config (e.g., server globals, webpack config).

#### `_IMG_`
Path to your images folder.

This can be used as such : ````${_IMG_}/cat.jpg````.

#### `_SSR_`
The variable to check if the environment is node. This is safer than deriving by checking variables available only to node.

This is explicitly set to each config (e.g., server globals, webpack config).

## Tests
- Files are named as `filename.spec.js`.
- Place test files on the same directory as file being tested.
- However, if a directory contains several test files, place it in their respective `__tests__` folder.

## Alias
- Use `admin-ui/*` (e.g., `import 'admin-ui/some-file.js') for directories that are two levels away (`../../module/some-file` => `admin-ui/module/some-file`)

## Routing
- Use `.` to signify a nest in route (e.g., `dashboard.home`)
  - Either nested view (`dashboard` as parent route)
  - Or path (`/dashboard/home`)
- Use `-` to split routes with multiple words (e.g., `hello-world`)

## Stuff
- This repository follows [ducks-modular-redux](https://github.com/erikras/ducks-modular-redux).

## Libraries
**Mainly**:
- [react](http://facebook.github.io/react) (`v0.14.2`)
- [react-router](http://rackt.github.io/react-router) (`v1.0.0`)
- [redux](http://rackt.github.io/redux) (`v3.0.4`)
- [react-redux](http://github.com/gaearon/react-redux) (`v4.0.0`)
- [redux-simple-router](http://rackt.github.io/redux) (`v1.0.2`)
- [redux-thunk](http://github.com/gaearon/redux-thunk) (`v1.0.0`)
- [classnames](http://github.com/JedWatson/classnames) (`v2.2.0`)
- [axios](https://github.com/mzabriskie/axios) (`v0.7.0`)
- [koa](http://koajs.com) (`v1.1.2`)

**Development**:
- [webpack](http://webpack.github.io)
- [babel](http://babeljs.io) (`v6.1.5`)
- [karma](http://karma-runner.github.io/) (`v0.13.15`)
- [mocha](http://mochajs.org) (`v2.3.4`)
- [chai](http://chaijs.com) (`v3.4.1`)
- [sinon](sinonjs.org) (`v1.17.2`)
- [redux-devtools](https://github.com/gaearon/redux-devtools/) (`v3.0.0-beta-3`)
- [redux-devtools-log-monitor](https://github.com/gaearon/redux-devtools/) (`v1.0.0-beta-3`)
