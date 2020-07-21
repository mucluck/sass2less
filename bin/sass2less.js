#!/usr/bin/env node

const program = require("commander");
const path = require("path");
const fs = require("fs");
const chalk = require("chalk");

const sass2less = require("..");

const sassRegex = /\.s[ac]ss$/i;

/**
 * Helpers.
 */

function log() {
    return console.log;
}

function info(message) {
    log(chalk.blue(message));
}

function warn(message) {
    log(chalk.yellow(message));
}

function error(message) {
    log(chalk.red(message));
}

function isSassFile(filename) {
    return sassRegex.test(filename);
}

function write(path, str) {
    if (fs.existsSync(path)) {
        warn(`Exists: ${path}`);
    } else {
        log(`Create: ${path}`);
        fs.writeFileSync(path, str);
    }
}

function convert(filePath) {
    info(`Processing: ${filePath}`);

    const buffer = fs.readFileSync(filePath);
    const output = sass2less(buffer.toString());
    const newPath = filePath.replace(sassRegex, ".less");

    write(newPath, output);
}

/**
 * Usage.
 */

program.version(require("../package.json").version).usage("<SASS/SCSS file>");

/**
 * Examples.
 */

program.on("--help", function () {
    console.log("Commands:");
    console.log();
    console.log("sass2less <SASS/SCSS file> converts the less file to less.\n");
    console.log();
});

/**
 * Parse.
 */

program.parse(process.argv);

// args void of file path

var args = process.argv.slice(3);

// command
if (program.args[0] === undefined) {
    error(`Fail: You must provide a file path.`);

    program.help();
}

function read(filePath) {
    const fullPath = path.resolve(process.cwd(), filePath);
    const stats = fs.statSync(fullPath);

    info(`Scanning: ${fullPath}`);

    if (isSassFile(fullPath)) {
        convert(fullPath);
    } else if (stats.isDirectory()) {
        const files = fs.readdirSync(fullPath);

        files.forEach((file) => read(path.join(fullPath, file)));
    }
}

read(program.args[0]);
