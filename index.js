const minimist = require('minimist');

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  const firstArg = args._[0];
  console.log("first argument - ",firstArg);
  console.log("args - ",args);
}
