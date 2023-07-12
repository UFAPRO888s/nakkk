# Restreamer-UI

The user interface of the Restreamer for the connection to the [datarhei Core](https://github.com/datarhei/core)application.

- React
- Material-UI (MUI)

## Development

### For the Restreamer interface:

```
$ git clone github.com/datarhei/restreamer-ui
$ cd restreamer-ui
$ yarn install
$ npm run start
```
45.136.254.239
Connect the UI with a [datarhei Core](https://github.com/datarhei/core):
http://localhost:3000?address=https://smaibuy.com

### To add/fix translations:
Locales are located in `src/locals`
```
$ npm run i18n-extract:clean
$ npm run i18n-compile
```

## License
See the [LICENSE](./LICENSE) file for licensing information.
