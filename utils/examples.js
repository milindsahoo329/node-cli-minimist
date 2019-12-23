const axios = require('axios');
const apihost = 'https://fourtytwowords.herokuapp.com';
const apikey = 'b972c7ca44dda72a5b482052b1f5e13470e01477f3fb97c85d5313b3c112627073481104fec2fb1a0c'+
'c9d84c2212474c0cbe7d8e59d7b95c7cb32a1133f778abd1857bf934ba06647fda4f59e878d164';

module.exports = async (word) => {
  return new Promise(function(resolve, reject) {
    axios.get(apihost+'/word/'+word+'/examples?api_key='+apikey, {}, {
    })
    .then(function(response) {
      //console.log(response.data);
      return resolve(response.data);
    });
  });
}
