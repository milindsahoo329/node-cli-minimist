const ora = require('ora');
const ld = require('lodash');

const getRandomWord = require('../utils/randomWord');
const getDefinitions = require('../utils/definitions');
const getExamples = require('../utils/examples');
const getRelatedWords = require('../utils/relatedWords');

const askWordOnBasisOfMeaning = require('./playSupport/askWordOnBasisOfMeaning');
const displayOptionMenu = require('./playSupport/displayOptionMenu');

module.exports = async (args) => {
  //get random words
  const randomWord = await getRandomWord();
  // get its synonyms
  const relatedWord = await getRelatedWords(randomWord.word);
  let synonymArray = ld.find(relatedWord,{relationshipType:"synonym"}).words;
  synonymArray.push(randomWord.word);

  //Enter the word to be find out randomly ( use some random function )
  console.log(synonymArray[synonymArray.length-2]);
  console.log(synonymArray);

  const askWordOnBasisOfMeaningAnswer = await askWordOnBasisOfMeaning();

  if(((ld.includes(synonymArray,askWordOnBasisOfMeaningAnswer.Word)))){
    // if user guesses it right
    console.log("Correct Answer !!!");
  } else {
    // display options
    const displayOptionMenuAnswer = await displayOptionMenu();
    console.log(displayOptionMenuAnswer);
  }

}
