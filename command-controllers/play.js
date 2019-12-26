const ora = require('ora');
const ld = require('lodash');

const getRandomWord = require('../utils/randomWord');
const getDefinitions = require('../utils/definitions');
const getExamples = require('../utils/examples');
const getRelatedWords = require('../utils/relatedWords');

const askWordOnBasisOfMeaning = require('./playSupport/askWordOnBasisOfMeaning');
const displayOptionMenu = require('./playSupport/displayOptionMenu');
const tryAgainWord = require('./playSupport/tryAgainWord');
const tryAgainAfterAntonym = require('./playSupport/tryAgainAfterAntonym');

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

  let askWordOnBasisOfMeaningAnswer = await askWordOnBasisOfMeaning();

  if(((ld.includes(synonymArray,askWordOnBasisOfMeaningAnswer.Word)))){
    // if user guesses it right
    console.log("Correct Answer !!!");
  } else {
    // display options
    let keepDisplaying = 0;
    while(keepDisplaying == 0) {
      const displayOptionMenuAnswer = await displayOptionMenu();
      switch (displayOptionMenuAnswer.Menu) {

        //1
        case '1':
          console.log("Enter the word");
          let tryAgainWordAnswer = await tryAgainWord();
          if(((ld.includes(synonymArray,tryAgainWordAnswer.Word)))){
            console.log("Correct Answer !!!");
            keepDisplaying = 1;
          }
          break;

        //2
        case '2':
          // Displaying some antonyms
          let antonymArray = ld.find(relatedWord,{relationshipType:"antonym"}).words;
          console.log(antonymArray[antonymArray.length-1]);
          let tryAgainAfterAntonymAnswer = await tryAgainAfterAntonym();
          if(((ld.includes(synonymArray,tryAgainAfterAntonymAnswer.Word)))){
            console.log("Correct Answer !!!");
            keepDisplaying = 1;
          }
          break;

        //3
        case '3':
          keepDisplaying = 1;
          console.log("Thanks. Quitting...");
          break;

        default:
          console.error(`"${displayOptionMenuAnswer.Menu}" is not a option. Quitting`);
          break;
      }
    }

  }

}
