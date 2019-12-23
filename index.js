const minimist = require('minimist');

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  const firstArg = args._[0];
  //console.log("first argument - ",firstArg);
  //console.log("args - ",args);

  switch (firstArg) {
    case 'test':
      require('./command-controllers/test')(args);
      break;

    default:
      console.error(`"${firstArg}" is not a valid command!`);
      break;
  }

}
