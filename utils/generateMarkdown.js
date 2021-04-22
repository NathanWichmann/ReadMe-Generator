// TODO: Create a function that returns a license badge based on which license is passed in

const inquirer = require("inquirer");


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
  ${Object.values}
  # THIS IS MY TITLE: :point_right:<br> 
  ${data.Title} 
  # DESCRIPTION: <br>
  ${data.Description}
  # TABLE OF CONTENTS: <br>
  - [TITLE](#Title)
  - [DESCRIPTION](#description)
  - [INSTALLTION](#installation)
  - [USAGE](#usage)
  - [CONTRIBUTORS](#contributors)
  - [LICENSE](#license)
  - [TEST](#tests)
  - [Questions](#questions) 
  
  # INSTALLATION: <br>
  ${data.Installation}
  # USAGE: :running: <br>
  ${data.Usage} 
  # CONTRIBUTION: :dancing_men:<br>
  ${data.Contribution}
  # License: <br>
  ${data.License} 
  # TESTS: :heavy_check_mark:<br>
  ${data.Tests}
  # QUESTIONS: <br>
  ${data.Questions} 
  ${data.questions}
  If you have any questions for me about this Application, please feel free to reach 
  out to me directly on Github on my profile page https://github.com/NathanWichmann <br>
  or you can email me directly at nathanwicker@hotmail.com
  `;
}

module.exports = generateMarkdown;
