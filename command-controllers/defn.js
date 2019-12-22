const ora = require('ora');
const getRandomWord = require('../utils/randomWord');

module.exports = async (args) => {
  console.log("This is defn function !!!");
  const spinner = ora().start();

  try {
    const weather = await getRandomWord();
    spinner.stop();
  } catch (err) {
    spinner.stop();
    console.log(err);
  }

}
