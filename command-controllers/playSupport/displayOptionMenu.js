const inquirer = require('inquirer');

module.exports = () => {
  const menuQuestion = [{
    name : "Menu",
    type : "list",
    message : "Select any one - ",
    choices : ["1. Try Again", "2. Hints", "3. Quit game"],
    filter: function(val){
      return val.split(".")[0];
    }
  }];
  return inquirer.prompt(menuQuestion);
}
