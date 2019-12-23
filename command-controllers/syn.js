const ora = require('ora');
const getRelatedWords = require('../utils/relatedWords');

module.exports = async (args) => {
  const word = args._[1];
  //console.log("word");
  const spinner = ora().start();

  try {
    const relatedWord = await getRelatedWords(word);
    console.log(relatedWord);
    spinner.stop();
  } catch (err) {
    spinner.stop();
    console.log(err);
  }

}
