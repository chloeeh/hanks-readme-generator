// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let licenseBadge = '';
  if(data.license === 'none') {
    licenseBadge = '';
    // don't use string literals, because this function will return a string that will be placed
    // within a string literal in the generateMarkdown() function
  } else if(data.license === 'MIT') {
    licenseBadge = '![GitHub ${data.license} License](https://img.shields.io/badge/License-MIT-red.svg)';
  } else if(data.license === 'GPL') {
    licenseBadge = '![GitHub ${data.license} License](https://img.shields.io/badge/License-GPL-blue.svg)';
  } else if(data.license === 'Apache') {
    licenseBadge = '![GitHub ${data.license} License](https://img.shields.io/badge/License-Apache%202.0-green.svg)';
  } 

  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  let licenseLink = '';
  if(data.license === "none") {
    licenseLink = '';
  } else {
    // don't use string literals, because this function will return a string that will be placed
    // within a string literal in the generateMarkdown() function
    licenseLink = '![Link to the license](https://choosealicense.com/licenses/${data.license}/)';
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';

  if(data.license === "none") {
    licenseSection = '';
  } else {
    // don't use string literals, because this function will return a string that will be placed
    // within a string literal in the generateMarkdown() function
    licenseSection = '> **Note 1**: This application is covered under the ${data.licese} license';
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributors](#Contributors)
- [Test](#Test)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub)

## Installation

${data.installation}


## Usage

${data.usage}


## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}


## Test

${data.test}

## Repository

- [Project Repo](${data.repo})

## GitHub

![Image of me](${githubInfo.githubImage})
- ${githubInfo.name}
- [GitHub Profile](${githubInfo.profile})
- <${githubInfo.email}>
  
  
  `;
}

module.exports = generateMarkdown;
