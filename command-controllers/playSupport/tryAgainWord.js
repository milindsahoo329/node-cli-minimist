const inquirer = require('inquirer');

module.exports = () => {
  const wordQuestion = [{
    name : "Word",
    type : "input",
    message : "Try Again.. "
  }];
  return inquirer.prompt(wordQuestion);
}
