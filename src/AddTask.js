module.exports = (task, todo) => {
  todo.push({
    name: task,
    finished: false
  })

  fs.writeFile("todo.json", JSON.stringify(todo))
    .then(() => console.log(chalk.green('Todolist added successfully')))
    .catch((err) => console.log(`Error --> ${chalk.red(err)}`));
}