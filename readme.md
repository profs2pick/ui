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
|command|description|
|----|----|
|`npm run watch:script`|watch for file changes and compile scripts|
|`npm run watch:style`|watch for file changes and compile stylesheets|
|`npm run dev`|runs `watch:script` and `watch:style`|
|`npm run server`|run server-side rendering|
|`npm start`|production-ready assets / run server|
|`npm watch:test`|watches for file changes and runs test|
|`npm test`|run tests|

## Configuration
We use [dotenv](https://www.npmjs.com/package/dotenv-style) configuration.

<sub>*Note*: If you don't have any `.env` file in the project root directory, run this: `cp .env.example .env`.</sub>

|config|description|
|----|----|
|`process.env.NODE_ENV`|Environment.|
|`process.env.API`|The URI of the API. Mainly used to concatenate the requests with a base URI in `common/utils/axios/interceptors/concatBaseUrl`.|
|`process.env.IMG`|Path to the images folder. This can be used as such : ````${_IMG_}/cat.jpg````.|
|`process.env.PORT`|The port which the server will be ran. This is a server-only config.|
|`process.env.REDUX_DEVTOOLS`|Condition which Redux Devtools will be enabled.|

**Gotchas**: To set a config to false, [leave it empty](https://github.com/motdotla/dotenv/issues/74#issuecomment-113287892).
```bash
# wrong
REDUX_DEVTOOLS=false

# correct
REDUX_DEVTOOLS=
```

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

