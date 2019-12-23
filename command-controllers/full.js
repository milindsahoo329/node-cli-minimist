const ora = require('ora');
const getRandomWord = require('../utils/randomWord');
const getDefinitions = require('../utils/definitions');
const getExamples = require('../utils/examples');
const getRelatedWords = require('../utils/relatedWords');

module.exports = async (args) => {
  const word = args._[0];
  //console.log("word")
  const spinner = ora().start();

  try {

    const definition = await getDefinitions(word);
    console.log(definition);

    const example = await getExamples(word);
    console.log(example);

    const relatedWord = await getRelatedWords(word);
    console.log(relatedWord);


    spinner.stop();
  } catch (err) {
    spinner.stop();
    console.log(err);
  }

}
