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
const tryAgainAfterSynonym = require('./playSupport/tryAgainAfterSynonym');

let getRandomWholeNumber = function(min,max){
  return Math.floor(Math.random()*(1 + max - min) + min);
}

module.exports = async (args) => {
  //get random words
  const randomWord = await getRandomWord();
  // get its synonyms
  const relatedWord = await getRelatedWords(randomWord.word);
  let synonymArray = ld.find(relatedWord,{relationshipType:"synonym"}).words;
  synonymArray.push(randomWord.word);

  //Enter the word to be find out randomly ( use some random function )
  let randomNumber = getRandomWholeNumber(0,synonymArray.length-1);
  console.log(synonymArray[randomNumber]);
  //console.log(synonymArray);

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

          if(ld.find(relatedWord,{relationshipType:"antonym"})){
            let antonymArray = ld.find(relatedWord,{relationshipType:"antonym"}).words;
            randomNumber = getRandomWholeNumber(0,antonymArray.length-1);
            console.log(antonymArray[randomNumber]);
            let tryAgainAfterAntonymAnswer = await tryAgainAfterAntonym();
            if(((ld.includes(synonymArray,tryAgainAfterAntonymAnswer.Word)))){
              console.log("Correct Answer !!!");
              keepDisplaying = 1;
            }
          } else {
            let randomNumber = getRandomWholeNumber(0,synonymArray.length-2);
            console.log(synonymArray[randomNumber]);
            let tryAgainAfterSynonymAnswer = await tryAgainAfterSynonym();
            if(((ld.includes(synonymArray,tryAgainAfterSynonymAnswer.Word)))){
              console.log("Correct Answer !!!");
              keepDisplaying = 1;
            }
          }

          break;

        //3
        case '3':
          keepDisplaying = 1;
          console.log("Thanks. Quitting...");
          console.log("Word was ", randomWord.word,"\n");
          break;

        default:
          console.error(`"${displayOptionMenuAnswer.Menu}" is not a option. Quitting`);
          break;
      }
    }

  }

}
