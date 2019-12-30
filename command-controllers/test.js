const ora = require('ora');
const getRandomWord = require('../utils/randomWord');
const getDefinitions = require('../utils/definitions');
const getExamples = require('../utils/examples');
const getRelatedWords = require('../utils/relatedWords');

module.exports = async (args) => {
  //console.log("This is defn function !!!");
  const spinner = ora().start();

  try {
    const randomWord = await getRandomWord();
    console.log(randomWord);

    const definition = await getDefinitions(randomWord.word);
    console.log(definition);

    const example = await getExamples(randomWord.word);
    console.log(example);

    const relatedWord = await getRelatedWords(randomWord.word);
    console.log(relatedWord);

    spinner.stop();
  } catch (err) {
    spinner.stop();
    console.log(err);
  }

}
