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
      link = "ecl-2.0";
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
  //Variables to check if input has been received:
  let titleInput = `${data.title}`;

  //If statement to check that titleInput is empty:
  if(titleInput !== ''){
    var titleFinal = `<h1 align=center>${data.title}</h1><br>`;
  }else{var titleFinal = '';}

  //Create the document formatting:
  return titleFinal +  
  `
  
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
  :toolbox:<br>
  ${data.installation}

  ## Usage
  :books:<br>
  ${data.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${newStr}-blue?style=flat-square)<br>
  This application is licensed under the ${data.license} license. Please click the link to read more about the license!<br>
  [License Information](${renderLicenseLink(data.license)})

  ## Testing
  ${data.tests}
  
  ## Contributions
  :busts_in_silhouette:<br>
  ${data.contributions}

  ## Questions and Contact
  :grey_question::grey_question:<br>
  ${data.questions}<br><br>
  Please visit my GitHub profile <br>
  :octocat: https://github.com/${data.githubUser} <br><br>
  Feel free to drop me a line! <br> :fountain_pen: ${data.email}

`;
}

module.exports = generateMarkdown;
