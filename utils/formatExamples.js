
module.exports = function(examplesObject){
  return new Promise(function(resolve, reject) {

    let stringResult = '';
    examplesObject.examples.map((x)=>{
      stringResult = stringResult + x.text +"\n";
    })
    return resolve(stringResult);

  });
}
