<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

# sass2less

A SCSS to Less loader for webpack. For the creation themes in [Ant Design](https://ant.design/).

It's **experimental** alpha version!!!

## Getting Started

It is understood that you have installed `less` and `less-loader` .

To begin, you'll need to install `sass2less` :

``` console
$ yarn add sass2less
```

## CLI

``` console
$ yarn global add sass2less
```

``` js
sass2less < SASS_SCSS_file_path >
```

Then add the loader to your `webpack` config. For example:

**webpack.config.js**

``` js
const sassRegex = /\.s[sc]ss/i;

module.exports = {
    module: {
        rules: [{
            test: sassRegex;
            use: [
                "style-loader",
                "css-loader",
                {
                    loader: "less-loader",
                    options: {
                        sourceMap: !PRODUCTION,
                        prependData: `
                      @import "~antd/dist/antd.less";
                      @import "${__dirname}/src/styles/antd.vars.less";
                    `,
                        lessOptions: {
                            javascriptEnabled: true,
                        },
                    }
                },
                "sass2less"
            ]
        }, ],
    },
};
```

## License

[MIT](./LICENSE)

## TODO

* Tests
* Convert ` `  ` @each `  ` `
* Convert ` `  ` @while `  ` `
* Convert ` `  ` @debug `  ` `
* Convert ` `  ` @error `  ` `
* Convert ` `  ` @warn `  ` `
