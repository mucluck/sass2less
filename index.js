const fs = require("fs");
const _ = require("lodash");

const dir = `${__dirname}/replacements/`;

module.exports = source => _.sortBy(fs.readdirSync(dir).map(filename => require(dir + filename)), "order").reduce((source, item) => source.replace(item.pattern, item.replacement), source);
