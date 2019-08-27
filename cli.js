#!/usr/bin/env node

const meow = require("meow");
const path = require("path");
const os = require("os");
const fs = require("fs");
const _ = require("lodash");
const yaml = require("yaml");

// creating project structure
let createStructure = (toParse, currdir) => {
  _.keys(toParse).forEach(key => {
    let cdir = `${currdir}${key.match(/[0-9][0-9]*/) ? `` : `/${key}`}`;
    // console.log(key);
    if (!_.isString(toParse[key])) {
      if (toParse[key] === null) {
        // create empty directory below
        fs.mkdirSync(cdir, { recursive: true });
        // console.log(`create empty directory ${cdir}`);
      } else {
        // recursively walk toParse Object
        createStructure(toParse[key], cdir);
      }
    } else {
      // if the directory not exists, then create create directory first,
      if (!fs.existsSync(`${cdir}`)) {
        fs.mkdirSync(cdir, { recursive: true });
      }
      // then create the file
      fs.createWriteStream(`${cdir}/${toParse[key]}`);
      // console.log(`create file ${cdir}/${toParse[key]}`);
    }
  });
};

const cli = meow(
  `
	Usage
      $ gelar <Command>
    
    Commands
      use <your project structure name>         use one of your own project structure inside gelar.yaml file
      help                                      show help 

  Examples
    This command create gelar.yaml(if not exists) in os.homedir(), not necessary to do since it's invoked when you call gelar-js on cmd/bash with any parameter, unless you delete gelar.yaml manually. 
      
      $ gelar                             

    Make project structure in current directory using your project structure name in gelar.yaml.
      
      $ gelar use example1
`,
  {
    description: false
  }
);

const config = `
example1:
  - src:
      - pages:
          - Homepage.js
      - route: null
      - App.js
      - style.css
      - index.js
  - dependencies: null
  - index.html


  `;

// create gelar.yaml in os.homedir() if not exists
if (!fs.existsSync(path.join(os.homedir(), "gelar.yaml"))) {
  fs.writeFileSync(path.join(os.homedir(), "gelar.yaml"), config);
  console.log(
    `First time ? gelar.yaml doesn't exists in ${os.homedir()}, so i created it for you :)`
  );
}

// reset gelar.yaml
if (cli.input[0] === "clean" || cli.input[0] === "c") {
  fs.writeFileSync(path.join(os.homedir(), "gelar.yaml"), config);
  console.log("gelar.yaml cleaned");
}

// use the structure
else if (cli.input[0] === "use") {
  // read the gelar.yaml file
  const file = fs.readFileSync(path.join(os.homedir(), "gelar.yaml"), "utf8");
  const toParse = yaml.parse(file);

  if (cli.input[1] !== null || cli.input[1] !== "") {
    // checking if your Project Structure name exists.
    if (!_.keys(toParse).includes(cli.input[1])) {
      console.log(
        `Structure is not exists, are you already make it ? try check it on ${path.join(
          os.homedir(),
          "gelar.yaml"
        )}`
      );
    } else {
      // create directories/files in current directory
      createStructure(toParse[cli.input[1]], ".");
      console.log(`File structure is created !`);
    }
  }
} else {
  console.log(cli.help);
}
