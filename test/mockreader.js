const yaml = require("yaml");
const fs = require("fs");
const _ = require("lodash");
const path = require("path");

const f = fs.readFileSync(path.join(__dirname, "gelar.yaml"), "utf8");
const p = yaml.parse(f);

console.log(_.keys(p).includes('example1'));