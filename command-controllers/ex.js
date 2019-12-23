const ora = require('ora');
const getExamples = require('../utils/examples');
const formatExamples = require('../utils/formatExamples');

module.exports = async (args) => {
  const word = args._[1];
  //console.log("word");
  const spinner = ora().start();

  try {
    const example = await getExamples(word);
    let text = await formatExamples(example);
    console.log(text);
    spinner.stop();
  } catch (err) {
    spinner.stop();
    console.log(err);
  }
}
