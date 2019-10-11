module.exports = (task, todo) => {
  if (todo.length < task) {
    console.log(chalk.red('Your target unavailable'));
    return;
  }
  
  todo[task - 1] = {
    name: todo[task - 1].name,
    finished: true
  }

  fs.writeFile(filePath, JSON.stringify(todo))
    .then(() => console.log(`${chalk.green('Task marked as done!')}\n${chalk.blue(`Stay productive! :D`)}`))
    .catch((err) => console.log(`Error --> ${chalk.red(err)}`));
}