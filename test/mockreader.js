const yaml = require("yaml");
const fs = require("fs");
const _ = require("lodash");
const path = require("path");

const f = fs.readFileSync(path.join(__dirname, "gelar2.yaml"), "utf8");
const p = yaml.parse(f);

// console.log(_.keys(p).includes('example1'));
// yaml.parseAllDocuments()
let a = [1, 2, 3];
// console.log(yaml.stringify(p));

let b = "test/";

console.log(/.+\/$/.test(b));
console.log(b.slice(0, b.length - 1))