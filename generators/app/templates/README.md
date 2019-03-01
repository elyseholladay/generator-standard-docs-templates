# <%= projectName %>

> <%= shortDescription %>

<% if (banner) { %>
![banner](<%= bannerPath %>)
<% } %>

<% if (badges) { %>
TODO: Badges go here, if any.
<% } %>

TODO: Write an overview of the tool or package. This section should describe the tool in broad terms. A list of features or a description of the tool's value or selling points is most helpful. This section should answer the question, "Why should I care about or use this tool?"

Remember, the goal of the README is to help a consumer understand if this package will fulfill their need. Each section of the README should provide more detailed information, starting here with the broadest information, and moving deeper into specific details, such as usage, installation, history, or code examples.

Ideally, someone who's slightly familiar with this tool should be able to refresh their memory without further reading. The table of contents below should allow them to jump directly to relevant sections if necessary.

## Table of Contents

<% if (background) { %>*   [Background](#background)<% } %>
<% if (security) { %>*   [Security](#security)<% } %>
*   [Install](#install)
*   [Usage](#usage)
<% if (extras) { %>*   [Extra Sections](#extra-sections)<% } %>
<% if (API) { %>*   [API](#api)<% } %>
*   [Releases](#releases)
*   [Maintainers](#maintainers)
*   [Contributing](#contributing)
<% if (license) { %>*   [License](#license)<% } %>

<% if (background) { %>
## Background
This optional section can cover motivation for building the tool, domain specific knowledge that may be required, alternatives considered, or relevant historical knowledge. Be brief; this section should only be included if this information is important for a user of the tool to know before reading any other information.
<% } %>

<% if (security) { %>
## Security
This optional section should describe any important security concerns a user must know before continuing.
<% } %>

## Install
This required section should describe how to install this tool. Use code blocks to show installation instructions.

```
npm install this-package
```

<% if (!install) { %>
### Prerequisites
This optional section should describe any prerequisites or development environment dependencies. Prefer linking to existing documentation for environment setup or prerequisite package installation instructions.

### Dependencies
This optional section should describe any code or package dependencies required to use this tool. Prefer linking to existing documentation for installation instructions of dependencies.
<% } %>

## Usage
This required section should contain concise descriptions of how to use the tool, including code blocks illustrating common examples.

If available or relevant, point to a runnable file or demo app for the usage code.


```
module.exports = require('this-package')();
```

Briefly cover usage options that may affect usage, configurations, and other steps required to use the tool. If this section becomes extremely long, consider breaking it up into multiple files and linking them from this section.

Use the API section below for more detail.

<% if (CLI) { %>### CLI
If the tool has a CLI, add this optional section to describe CLI functionality.
<% } %>

<% if (extras) { %>## Extra Sections
Zero or more sections can be included after Usage but before API, each with their own H2 heading title. (This should not be called Extra Sections.)

Other sections might include: Configuration, Example or Skeleton App, Submodules, Security (if relevant but not important enough to be placed above), Polyfills/Fallbacks, Browser Support.
<% } %>

<% if (API) { %>## API
This required section should describe exported functions and objects. If using an external API generastor, point to an external API.md file. This can be the only item in the section, if present.
<% } %>

## Releases
This project follows [Semantic Versioning](https://semver.org/). Release versions can be found in the [Releases page](link/to/page) and on the [this-project website](link/to/url).

## Maintainers
This project is maintained by:
*   [@<%= maintainers %>](<%= maintainers %>)

<% if (oss) { %>
If the project is Open Source, it should contain an [OSSMETADA file](https://github.com/Netflix/osstracker/blob/master/OSSMETADATA) containing machine readable that indicate the status of the project.
<% } %>

## Contributing
<% if (prs) { %>Contributions and PRs are accepted on this project.<% } %>

Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for information on how to contribute.

To submit bugs or feature requests, [file an issue](link/to/issues). Describe responsiveness SLOs on this project, if any.

`this-project` is governed by the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md).

### Local Development
Insert a link to a separate file containing detailed local development instructions.

## License
`this-project` is licensed under the [LICENSE_NAME](LICENSE.md).

<%= license %>
