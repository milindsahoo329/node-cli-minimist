
module.exports = function(relatedArray,typeOfWord){
  return new Promise(function(resolve, reject) {

    let stringResult = '', count = 0;
    relatedArray.map((x)=>{
      if(x.relationshipType == typeOfWord){
        stringResult = x.words.toString();
        count = 1;
      }
    });
    if(count != 1){
      return resolve("No antonym for this word..");
    } else {
      return resolve(stringResult);
    }

  });
}
