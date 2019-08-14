module.exports = (task, todo) => {
  todo.push({
    name: task,
    finished: false
  })

  fs.writeFile(filePath, JSON.stringify(todo))
    .then(() => console.log(chalk.green('Todolist added successfully')))
    .catch((err) => console.log(`Error --> ${chalk.red(err)}`));
}