// function to generate markdown for README

function generateMarkdown(answers) {
  return `# ${answers.title}

## Description 
${answers.description}

## Instalation 
${answers.installation}

## Usage 
${answers.usage}

`;
}

module.exports = generateMarkdown;
