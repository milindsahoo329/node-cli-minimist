const minimist = require('minimist');
const ld = require('lodash');

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  let firstArg;
  if(args._.length == 0){
    firstArg = "scenario-random";
  } else {
    firstArg = args._[0];
    if((ld.includes(['defn','syn','ant','ex','play'],firstArg))){

    } else {
      firstArg = "scenario-full";
    }
  }

  //console.log("first argument - ",firstArg);
  //console.log("args - ",args);

  switch (firstArg) {
    case 'scenario-test':
      require('./command-controllers/test')(args);
      break;

    //1
    case 'defn':
      require('./command-controllers/defn')(args);
      break;

    //2
    case 'syn':
      require('./command-controllers/syn')(args);
      break;

    //3
    case 'ant':
      require('./command-controllers/ant')(args);
      break;

    //4
    case 'ex':
      require('./command-controllers/ex')(args);
      break;

    //5
    case 'scenario-full':
      require('./command-controllers/full')(args);
      break;

    //6
    case 'scenario-random':
      require('./command-controllers/random')(args);
      break;

    //7
    case 'play':
      require('./command-controllers/play')(args);
      break;

    default:
      console.error(`"${firstArg}" is not a valid command!`);
      break;
  }

}
