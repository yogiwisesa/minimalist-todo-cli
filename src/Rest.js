const ora = require('ora');

module.exports = (dur) => {
  let duration = 5;

  if (_.isNumber(dur)) {
    duration = dur
  }

  console.log(`${chalk.blue('Rest for')} ${chalk.green.bold(duration)} ${chalk.blue('min...')}`)

  let sec = 0
  const total = duration * 1000 * 60
  const postfix = `${chalk.yellow('Take a rest for a moment, then be productive again!')}`;
  const spinner = ora(`${chalk.bold(`00:00:00`)} - ${postfix}`).start();

  const interval = setInterval(() => {
    sec++;

    spinner.color = colors[Math.floor(Math.random() * (+8 - +0)) + +0];
    spinner.text = `${chalk.bold(tohhmmss(sec))} - ${postfix}`;
  }, 1000)

  setTimeout(() => {
    clearInterval(interval);
    spinner.stop();
    console.log(`${chalk.yellow('Start working again, you can do it!')}`)
    notifier.notify({
      title: 'Heyheyhey!',
      message: 'Start working again, you can do it!'
    });
  }, total)
}