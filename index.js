#!/usr/bin/env node

require('./config');

const AddTask = require('./src/AddTask.js');
const DeleteTask = require('./src/DeleteTask.js');
const ShowTask = require('./src/ShowTask.js');
const FinishTask = require('./src/FinishTask.js');
const UnfinishTask = require('./src/UnfinishTask.js');
const StartTask = require('./src/StartTask.js');
const Rest = require('./src/Rest.js');

const action = (todo) => {
  if (options.add) AddTask(options.add, todo)
  else if (options.delete) DeleteTask(options.delete, todo)
  else if (options.list) ShowTask(todo)
  else if (options.finish) FinishTask(options.finish, todo)
  else if (options.unfinish) UnfinishTask(options.unfinish, todo)
  else if (options.start) StartTask(options.start)
  else if (options.rest) Rest(options.rest)
}

fs.readFile(filePath)
  .then(todo => action(JSON.parse(todo)))
  .catch(err => action([]))