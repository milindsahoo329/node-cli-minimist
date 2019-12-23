const ora = require('ora');
const getDefinitions = require('../utils/definitions');

module.exports = async (args) => {
  const word = args._[1];
  //console.log(word);
  const spinner = ora().start();
  try {
    const definition = await getDefinitions(word);
    console.log(definition);
    spinner.stop();
  } catch (err) {
    spinner.stop();
    console.log(err);
  }
}
