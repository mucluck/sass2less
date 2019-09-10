<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

# sass2less

A SCSS to Less loader for webpack. For the creation themes in [Ant Design](https://ant.design/).

It's **experimental** alpha version!!!

## Getting Started
It is understood that you have installed `less` and `less-loader`.

To begin, you'll need to install `sass2less`:

```console
$ npm install sass2less --save-dev
```

Then add the loader to your `webpack` config. For example:

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
		test: /\.sass$/,
        issuer: /\.less$/, 
        loader: 'sass2less', // compiles SCSS to Less
      },
    ],
  },
};
```

## Examples
**antd.less** imported in App.js

```less
@import "~antd/dist/antd.less";
@import "./themes/theme/index .scss";
```

## License

[MIT](./LICENSE)

## TODO
- Tests
- Convert ```@each```
- Convert ```@while```
- Convert ```@debug```
- Convert ```@error```
- Convert ```@warn```
