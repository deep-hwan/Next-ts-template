#!/usr/bin/env node

const execSync = require('child_process').execSync;
const path = require('path');
const fs = require('fs');

// Get the project name from the user input
const projectName = process.argv[2];
if (!projectName) {
  console.error('Please provide a project name:');
  console.error('npx create-next-speed-template my-app');
  process.exit(1); // 0 : 정상종료 / 0 아닌 : 비정상 종료
}

const projectPath = path.resolve(process.cwd(), projectName);

if (fs.existsSync(projectPath)) {
  console.error(`Project "${projectName}" already exists in the current directory.`);
  process.exit(1);
}

try {
  // Clone the template repository
  console.log('Cloning the template...');
  execSync(`git clone https://github.com/deep-hwan/Next-Ts-template.git ${projectName}`, { stdio: 'inherit' });

  // Change directory to the new project
  process.chdir(projectPath);

  // Remove Git history from the cloned template
  execSync('rm -rf .git', { stdio: 'inherit' });

  // Install dependencies using Yarn or npm
  console.log('Installing dependencies...');
  execSync('yarn install', { stdio: 'inherit' });

  console.log('Setup complete! Now you can start your project by running:');
  console.log(`cd ${projectName}`);
  console.log('yarn run dev');
} catch (error) {
  console.error('An error occurred during setup:', error);
}



// setting : chmod +x bin/create-next-speed-template.js    