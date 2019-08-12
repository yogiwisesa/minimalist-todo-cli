module.exports = (task, todo) => {

  todo[task - 1] = {
    name: todo[task - 1].name,
    finished: true
  }

  fs.writeFile("todo.json", JSON.stringify(todo))
    .then(() => console.log(`${chalk.green('Task marked as done!')}\n${chalk.blue(`Stay productive! :D`)}`))
    .catch((err) => console.log(`Error --> ${chalk.red(err)}`));
}