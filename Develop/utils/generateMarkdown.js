function generateReadme(answers) {
    return `
<h1 align="center">${answers.projectTitle}</h1>
  
## Description
${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${answers.installation}
## Usage
${answers.usage}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-blueviolet)<br />
${answers.license} is the license used on this project. 
## Contributing
${answers.contributing}
## Tests
${answers.tests}
## Questions
GitHub: [${answers.username}](https://github.com/${answers.username})<br /> <br />
Feel free to email me with any questions: ${answers.email}
`;
}
  
  module.exports = generateReadme;