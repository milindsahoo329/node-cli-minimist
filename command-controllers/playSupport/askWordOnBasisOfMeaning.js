const inquirer = require('inquirer');

module.exports = () => {
  const wordQuestion = [{
    name : "Word",
    type : "input",
    message : "Enter the word whose synonym is as above "
  }];
  return inquirer.prompt(wordQuestion);
}
