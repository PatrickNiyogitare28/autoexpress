#!#usr/bin/env node
import yargs from "yargs";
import fs from 'fs-extra'
import path from "path";
import { exit } from "process";

const args:any = yargs.options({
    name: {type: 'string', demandOption: true, alias: 'n'}
}).argv;

//autoexpress --name project-name
const {name} = args;
fs.mkdir(`,${name}`, (error: Error) => {
    if(error){
      console.log("Could not creat the project");
      exit(0)
    }
})

const srcDir = `${path.resolve(__dirname)}/../template`;
const destDir = `./${name}`

console.log(srcDir);

fs.copySync(srcDir, destDir);
console.log("Project created successfully");
exit(0)