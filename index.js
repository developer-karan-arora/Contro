const json = require("jsonfile")
const moment = require("moment")
const simpleGit = require("simple-git")

// data path
const date = moment().format()
const reqDate = moment().subtract(1,'d');
const filePath = "./data.json"
const data = {date:moment().format()}


// writting in file
json.writeFile(filePath,data);
console.log(moment().format());


// git commands
console.log(reqDate);
simpleGit().add([filePath]).commit("new msg",{'--date':reqDate}).push();