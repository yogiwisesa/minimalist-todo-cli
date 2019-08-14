global.fs = require('promise-fs');
const yargs = require('yargs');
global._ = require('lodash');
global.chalk = require('chalk');
global.colors = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray'];
global.notifier = require('node-notifier');
global.filePath = process.env.NODE_ENV === 'test' ? './todo-test.json' : './todo.json';

global.options = yargs.usage("Usage: -add <task name>")
  .option("a", {
    alias: "add",
    describe: "Add task to the todo list | -a <task name>",
    type: "string"
  })
  .option("f", {
    alias: "finish",
    describe: "Finish todolist | -f <index>",
    type: "integer"
  })
  .option("uf", {
    alias: "unfinish",
    describe: "Unfinish todolist | -uf <index>",
    type: "integer"
  })
  .option("d", {
    alias: "delete",
    describe: "Delete task from the todo list | -d <index>",
    type: "integer"
  })
  .option("l", {
    alias: "list",
    describe: "Show todo list",
  })
  .option("s", {
    alias: "start",
    describe: "Start work time - default 25min | -s / -s <duration>",
    type: "integer"
  })
  .option("r", {
    alias: "rest",
    describe: "take a break and rest for a moment - default 5min | -r / -r <duration>",
    type: "integer"
  })
  .argv;

/* istanbul ignore next */
const pad = (num) => {
  return ("0" + num).slice(-2);
}

/* istanbul ignore next */
global.tohhmmss = (secs) => {
  var minutes = Math.floor(secs / 60);
  secs = secs % 60;
  var hours = Math.floor(minutes / 60)
  minutes = minutes % 60;
  return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
}