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
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname // Default to current folder name
      },
      {
        type: "confirm",
        name: "cool",
        message: "Would you like to enable the Cool feature?"
      }
    ]);
  }

  // configuring - save configs and create files like .editorconfig //#endregion
  // writing
  writing() {
    this.log("Creating documentation in the project...", this.contextRoot);
    this.log("Writing documentation from templates ", this.sourceRoot());

    // copy a template file
    this.fs.copyTpl(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('foo/test.txt'),
      { title: this.answers.name }
    );
  }
  // install, if anything
  // end
};
