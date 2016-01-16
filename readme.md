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
We use [dotenv](https://www.npmjs.com/package/dotenv-style) configuration.

*Note*: If you don't have any `.env` file in the project root directory, run this: `cp .env.example .env`.

By convention, env configs are surrounded with underscores (`_`) when used throughout the application (e.g., `API` -> `_API_`). For more information, checkout `build/webpack.config.js`.

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
- Use `app/*` (e.g., `import 'app/some-file.js') for directories that are two levels away (`../../module/some-file` => `app/module/some-file`)

## Routing
- Use `.` to signify a nest in route (e.g., `dashboard.home`)
  - Either nested view (`dashboard` as parent route)
  - Or path (`/dashboard/home`)
- Use `-` to split routes with multiple words (e.g., `hello-world`)

## 101
- This repository follows [ducks-modular-redux](https://github.com/erikras/ducks-modular-redux).

