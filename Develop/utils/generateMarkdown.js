//Use switch to test individual cases:
function renderLicenseLink(license) {
  let link;
  
  switch (license) {
    case "apache-2.0":
      link = "apache-2.0";
      break;
    case "artistic-2.0":
      link = "artistic-2.0";
      break;
    case "bsd-3-clause":
      link  = "bsd-3-clause";
      break;
    case "bsd-3-clause-clear":
      link  = "bsd-3-clause-clear";
      break;
    case "ecl-2.0":
      path = "ecl-2.0";
      break;
    case "agpl-3.0":
      link  = "agpl-3.0";
      break;
    case "gpl-3.0":
      link  = "gpl-3.0";
      break;
    case "MIT":
      link  = "mit";
      break;
    case "NCSA":
      link  = "ncsa";
      break;
    case "Unlicense":
      link  = "unlicense";
      break;
  }
  return `https://choosealicense.com/licenses/${link}/`;
}

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
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Testing](#testing)
  - [Contributions](#contributions)  
  - [Questions and Contact](#questions-and-contact)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This application is licensed under the ${data.license} license. Please click the link to read more about the license!<br>
  ![badge](https://img.shields.io/badge/license-${newStr}-blue?style=flat-square)<br>
  [License Information](${renderLicenseLink(data.license)})

  ## Testing
  ${data.tests}
  
  ## Contributions
  ${data.contributions}

  ## Questions and Contact
  ${data.questions}<br><br>
  Please visit my GitHub profile <br>
  https://github.com/${data.githubUser} <br><br>
  Feel free to drop me a line! <br> ${data.email}

`;
}

module.exports = generateMarkdown;
