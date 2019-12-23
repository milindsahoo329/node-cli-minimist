const ora = require('ora');
const getExamples = require('../utils/examples');

module.exports = async (args) => {
  const word = args._[1];
  //console.log("word");
  const spinner = ora().start();

  try {
    const example = await getExamples(word);
    console.log(example);
    spinner.stop();
  } catch (err) {
    spinner.stop();
    console.log(err);
  }
}
