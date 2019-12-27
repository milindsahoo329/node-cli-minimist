const ora = require('ora');
const getRandomWord = require('../utils/randomWord');
const getDefinitions = require('../utils/definitions');
const getExamples = require('../utils/examples');
const getRelatedWords = require('../utils/relatedWords');

const formatExamples = require('../utils/formatExamples');
const formatDefinitions = require('../utils/formatDefinitions');
const formatRelatedWords = require('../utils/formatRelatedWords');

module.exports = async (args) => {
  const word = args._[0];
  //console.log("word")
  const spinner = ora().start();

  try {

    const definition = await getDefinitions(word);
    let text_def = await formatDefinitions(definition);
    console.log("DEFINITION - ",text_def);

    const example = await getExamples(word);
    let text_ex = await formatExamples(example);
    console.log("EXAMPLES - ",text_ex);

    const relatedWord = await getRelatedWords(word);
    let text_ant = await formatRelatedWords(relatedWord,"antonym");
    console.log("ANTONYMS - ",text_ant);

    let text_syn = await formatRelatedWords(relatedWord,"synonym");
    console.log("SYNONYMS - ",text_syn);

    spinner.stop();
  } catch (err) {
    spinner.stop();
    console.log(err);
  }

}
