var Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log("Initializing...");
  }

  async prompting() {
    this.userAnswers = await this.prompt([
      {
        type: "input",
        name: "projectName",
        message: "What is your project's name?",
        default: this.projectName // Defaults to current folder name
      },
      {
        type: "input",
        name: "shortDescription",
        message: "What is a short, one-sentence description of this package?",
        validate: x =>
          x.length > 0
            ? true
            : "Providing a short description is required. Don't worry, you can always edit it later."
      },
      {
        name: "banner",
        message: "Do you have a banner image?",
        type: "confirm",
        default: false
      },
      {
        name: "bannerPath",
        message:
          "What is the local file path to the banner image? For example: 'images/banner.jpg'",
        type: "input",
        when: answers => answers.banner
      },
      {
        name: "badges",
        message: "Do you want badges?",
        type: "confirm",
        default: false
      },
      {
        name: "install",
        message:
          "Does installing this package have dev environment Prerequisites or package Dependencies?",
        type: "list",
        choices: ["None", "Prerequisites", "Dependencies"],
        default: 0
      },
      {
        name: "background",
        message: "Do you need a Background section?",
        type: "confirm",
        default: false
      },
      {
        name: "security",
        message: "Do you need a prioritized Security section?",
        type: "confirm",
        default: false
      },
      {
        name: "CLI",
        message: "Do you need an CLI section?",
        type: "confirm",
        default: false
      },
      {
        name: "extras",
        message: "Do you need room for extra sections?",
        type: "confirm",
        default: false
      },
      {
        name: "API",
        message: "Do you need an API section?",
        type: "confirm",
        default: false
      },
      {
        name: "maintainers",
        message:
          "What is the handle (GitHub/GitLab account) of a primary maintainer? @",
        type: "input"
      },
      {
        name: "oss",
        message: "Is this an Open Source project?",
        type: "confirm",
        default: true
      },
      {
        name: "prs",
        message: "Are PRs and contributions accepted on this project?",
        type: "confirm",
        default: true
      },
      {
        name: "license",
        message: "What license do you want to use?",
        type: "list",
        choices: [
          "MIT (recommended)",
          "Apache2",
          "ISC",
          "None (not recommended)"
        ],
        default: 0
      }
    ]);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("README.md"),
      this.destinationPath("README.md"),
      this.userAnswers
    );
  }
};
