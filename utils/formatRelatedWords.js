
module.exports = function(relatedArray,typeOfWord){
  return new Promise(function(resolve, reject) {

    let stringResult = '';
    relatedArray.map((x)=>{
      if(x.relationshipType == typeOfWord){
        stringResult = x.words.toString();
      }
    })
    return resolve(stringResult);

  });
}
