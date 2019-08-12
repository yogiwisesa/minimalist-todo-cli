const ora = require('ora');

const pad = (num) => {
  return ("0" + num).slice(-2);
}

const tohhmmss = (secs) => {
  var minutes = Math.floor(secs / 60);
  secs = secs % 60;
  var hours = Math.floor(minutes / 60)
  minutes = minutes % 60;
  return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
}

module.exports = (dur) => {
  let duration = 25;

  if (_.isNumber(dur)) {
    duration = dur
  }

  console.log(`${chalk.blue('Working for')} ${chalk.green.bold(duration)} ${chalk.blue('min...')}`)

  let sec = 0
  const total = duration * 1000 * 60
  const postfix = `${chalk.yellow('Stay productive, You can do it!')}`;
  const spinner = ora(`${chalk.bold(`00:00:00`)} - ${postfix}`).start();

  const interval = setInterval(() => {
    sec++;

    spinner.color = colors[Math.floor(Math.random() * (+8 - +0)) + +0];
    spinner.text = `${chalk.bold(tohhmmss(sec))} - ${postfix}`;
  }, 1000)

  setTimeout(() => {
    clearInterval(interval);
    spinner.stop();
    console.log(`${chalk.yellow('Congratulations!🎉\nYou finished your task!')}`)
  }, total)
}