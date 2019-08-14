module.exports = (task, todo) => {
  todo.splice(task - 1, 1)

  fs.writeFile(filePath, JSON.stringify(todo))
    .then(() => console.log(chalk.green('Todolist removed successfully')))
    .catch((err) => console.log(`Error --> ${chalk.red(err)}`));
}