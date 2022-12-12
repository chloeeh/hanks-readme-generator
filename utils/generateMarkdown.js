// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {

  let licenseBadge = `![License](https://img.shields.io/badge/License-${data.license}-red)`;
  if (data.license === "none") {
    licenseBadge = '';
  }

return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {

  let licenseLink = '';
  if(data.license === "none") {
    licenseLink = '';
  } else if (data.license === "other") {
    licenseLink = 'Contact author to determine the license used for this project'
  } else {
    licenseLink = `[Link to the license](https://choosealicense.com/licenses/${data.license.toLowerCase()}/)`;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  let licenseSection = '';

  if(data.license === ("none" || "other")) {
    licenseSection = '';
  } else {
    // don't use string literals, because this function will return a string that will be placed
    // within a string literal in the generateMarkdown() function
    licenseSection = `> **Note 1**: This application is covered under ${data.license} license`;
  }
  return licenseSection;
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data);
  renderLicenseLink(data);
  renderLicenseSection(data)

  var myLicenseBadge = renderLicenseBadge(data);
  var myLicenseLink = renderLicenseLink(data);
  var myLicenseSection = renderLicenseSection(data);

  // ![license](https://img.shields.io/badge/License-${myLicenseBadge}-red)

  return `# ${data.title}

  ${myLicenseBadge}


## <a name="Description"

${data.description}

## Table of contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Licence](#license)
- [Contributors](#contributors)
- [Test](#test)
- [Repository Link](#repository)
- [GitHub Info](#gitHub)

## Installation

${data.installation}


## Usage

${data.usage}


## License

${myLicenseSection}

${myLicenseLink}

## Test

${data.test}

## Questions?

Send any inquires to ${data.email}

GitHub Account:
https://github.com/${data.github}
  
  
  `;
}

module.exports = generateMarkdown;
