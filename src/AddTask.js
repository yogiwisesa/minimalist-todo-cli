module.exports = (task, todo) => {
  todo.push({
    name: task,
    finished: false
  })

  return new Promise((resolve, reject) =>
    fs.writeFile(filePath, JSON.stringify(todo))
    .then(() => {
      console.log(chalk.green('Todolist added successfully'))
      resolve()
    })
    .catch( /* istanbul ignore next */ (err) => {
      console.log(`Error --> ${chalk.red(err)}`)
      reject(err)
    }))
}