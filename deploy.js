#!/usr/bin/env node

const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n🚀 Vercel Deployment Helper\n');

function runCommand(command) {
  try {
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(`Failed to execute ${command}`, error);
    return false;
  }
}

function checkVercelCLI() {
  try {
    execSync('vercel --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

async function deploy() {
  // Check if Vercel CLI is installed
  if (!checkVercelCLI()) {
    console.log('❌ Vercel CLI is not installed. Installing now...');
    if (!runCommand('npm install -g vercel')) {
      console.error('Failed to install Vercel CLI. Please install it manually with: npm install -g vercel');
      process.exit(1);
    }
  }

  console.log('✅ Vercel CLI is installed');
  
  // Build the project
  console.log('\n📦 Building project...');
  if (!runCommand('npm run build')) {
    console.error('Build failed. Please fix the errors and try again.');
    process.exit(1);
  }
  
  console.log('\n🚀 Deploying to Vercel...');
  
  // Ask if user wants to deploy to production
  rl.question('Deploy to production? (y/N): ', (answer) => {
    const deployToProduction = answer.toLowerCase() === 'y';
    
    const deployCommand = deployToProduction 
      ? 'vercel --prod' 
      : 'vercel';
    
    if (runCommand(deployCommand)) {
      console.log('\n✅ Deployment successful!');
    } else {
      console.error('\n❌ Deployment failed.');
    }
    
    rl.close();
  });
}

deploy();