// generating Readme function for the README.md
function generateReadme(answers) {
    return `
<h1 align="center">${answers.title} 👋</h1>

## Description
🔍 ${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [purpose](#purpose)
- [Contributing](#contributing)
- [license](#license)

## Usage
💻 ${answers.usage}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 

## Installation
💾 ${answers.installation} 

## Contributing
👪 ${answers.contributors}

✉️ Email me with any questions: ${answers.email}<br /><br />

## Tests
✏️ ${answers.tests}<br />
<br />


This README was generated with ❤️ by [Langdonsreadme-Generator](https://github.com/LangdonEcho/LangdonsReadME-Generator)`;
  }
  
  module.exports = generateReadme;