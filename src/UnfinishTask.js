module.exports = (task, todo) => {

  todo[task - 1] = {
    name: todo[task - 1].name,
    finished: false
  }

  fs.writeFile(filePath, JSON.stringify(todo))
    .then(() => console.log(`${chalk.green('Task marked as unfinish!')}\n${chalk.blue(`Don't worry, Stay productive! :D`)}`))
    .catch((err) => console.log(`Error --> ${chalk.red(err)}`));
}