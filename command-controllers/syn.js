const ora = require('ora');
const getRelatedWords = require('../utils/relatedWords');
const formatRelatedWords = require('../utils/formatRelatedWords');

module.exports = async (args) => {
  const word = args._[1];
  //console.log("word");
  const spinner = ora().start();

  try {
    const relatedWord = await getRelatedWords(word);
    let text = await formatRelatedWords(relatedWord,"synonym");
    console.log(text);
    spinner.stop();
  } catch (err) {
    spinner.stop();
    console.log(err);
  }

}
