const inquirer = require('inquirer');

module.exports = () => {
  const wordQuestion = [{
    name : "Word",
    type : "input",
    message : "The above word is an antonym for the original word.. "
  }];
  return inquirer.prompt(wordQuestion);
}
