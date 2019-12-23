const ora = require('ora');
const getDefinitions = require('../utils/definitions');
const formatDefinitions = require('../utils/formatDefinitions');

module.exports = async (args) => {
  const word = args._[1];
  //console.log(word);
  const spinner = ora().start();
  try {
    const definition = await getDefinitions(word);
    let text = await formatDefinitions(definition);
    console.log(text);
    spinner.stop();
  } catch (err) {
    spinner.stop();
    console.log(err);
  }
}
