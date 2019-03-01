/* eslint-disable capitalized-comments */
/* eslint-disable lines-between-class-members */
var Generator = require("yeoman-generator");
var chalk = require("chalk");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log("Initializing...");
  }

  async prompting() {
    this.userAnswers = await this.prompt([
      {
        type: "input",
        name: "repoName",
        message: "What is your project's name?",
        default: this.appname // Defaults to current folder name
        // TODO: can we check to see if this matches the repo name, and fail if it doesn't? Do we _want_ to do that?
      },
      {
        type: "input",
        name: "shortDescription",
        message: "What is a short, one-sentence description of this package?",
        validate: x => x.length > 0 ? true : "Providing a short description is required. Don't worry, you can always edit it later."
      }
    ]);
  }

  // configuring - save configs and create files like .editorconfig //#endregion

  writing() {
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      this.userAnswers
    );
  }

  // install, if anything
  // end
};
