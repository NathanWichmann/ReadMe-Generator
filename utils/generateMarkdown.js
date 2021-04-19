// TODO: Create a function that returns a license badge based on which license is passed in

const inquirer = require("inquirer");
// const LicenseWebpackPlugin = require('license-webpack-plugin').LicenseWebpackPlugin;

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return ` :EMOJICODE:
  # THIS IS MY TITLE: :point_left:<br> 
  ${data.Title} 
  # DESCRIPTION: <br>
  ${data.Description}
  # TABLE OF CONTENTS: <br>
  ${data.Contents}
  # INSTALLATION: <br>
  ${data.Installation}
  # USAGE: :running: <br>
  ${data.Usage} 
  # CONTRIBUTION: :dancing_men:<br>
  ${data.Contribution}
  # License: :shipit:<br>
  ${data.License}
  # TESTS: :heavy_check_mark:<br>
  ${data.Tests}
  # QUESTIONS: <br>
  ${data.Questions}
  `;
}

module.exports = generateMarkdown;
// module.exports = {
//   plugins: [
//     new LicenseWebpackPlugin()
//   ]
// };
