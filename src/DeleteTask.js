module.exports = (task, todo) => {
  todo.splice(task - 1, 1)

  return new Promise ((resolve, reject) => {
    fs.writeFile(filePath, JSON.stringify(todo))
    .then(() => {
      console.log(chalk.green('Todolist removed successfully'));
      resolve()
    })
    .catch((err) => {
      console.log(`Error --> ${chalk.red(err)}`);
      reject(err)
    });
  })
}