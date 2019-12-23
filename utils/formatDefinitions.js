
module.exports = function(definitionArray){
  return new Promise(function(resolve, reject) {

    let stringResult = '';
    definitionArray.map((x)=>{
      stringResult = stringResult + x.text +"\n";
    })
    return resolve(stringResult);

  });
}
