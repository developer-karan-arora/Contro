const json = require("jsonfile")
const moment = require("moment")
const simpleGit = require("simple-git")

// data path
const date = moment().format()
const filePath = "./data.json"
const data = {date:moment().format()}


// writting in file
json.writeFile(filePath,data);
console.log(moment().format());


// git commands
simpleGit().add([filePath])
simpleGit().commit(date,{"--date":date})