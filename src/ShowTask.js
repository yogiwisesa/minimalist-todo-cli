module.exports = (todo) => {
  if (!_.isEmpty(todo)) {
    todo.forEach((task, index) => {
      console.log(`${index + 1}.\t${chalk.bold(task.name)}\t${task.finished ? `[${chalk.blue.bold('x')}]` : '[]'}`)
    });
    return;
  }

  console.log(chalk.blue(`Your todo list is empty! :D`))
}