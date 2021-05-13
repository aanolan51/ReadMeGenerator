// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(response) {
  return `![badge](https://img.shields.io/badge/License-${response.license}-blue)<br />
  `;
  function strReplace(){
    var myStr = '${response.license}';
    var newStr = myStr.replace(/-/g, "%");
  } 
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //Replace - with %20 for the badge URL
  var myStr = `${data.license}`;
  console.log(myStr);
  var newStr = myStr.replace(/-/g, "%20");
  console.log(newStr);

  //Create the document formatting:
  return `
  <h1 align=center>${data.title}</h1>
  ![badge](https://img.shields.io/badge/license-${newStr}-blue?style=flat-square)<br>

  ## Description
  ${data.description}

  ## Table of Contents

  

`;
}

module.exports = generateMarkdown;
