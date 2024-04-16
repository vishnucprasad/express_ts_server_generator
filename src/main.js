#!/usr/bin/env node
const yargs = require('yargs');
const { execSync } = require('child_process');
const gitClone = require('git-clone');
const path = require('path');
const rimraf = require('rimraf');

// ANSI escape codes for color
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    cyan: '\x1b[36m',
    yellow: '\x1b[33m'
};

function cloneRepoAndInitialize(projectName) {
    const projectPath = path.join(process.cwd(), projectName);
    // Clone the repository
    gitClone('https://github.com/vishnucprasad/express_ts.git', projectName, null, err => {
        if (err) {
            console.error('Error cloning repository:', err);
            process.exit(1);
        }
        // Remove the .git directory
        rimraf.sync(path.join(projectPath, '.git'));
        // Reinitialize Git
        try {
            execSync('git init', { cwd: projectPath, stdio: 'inherit' });
        } catch (gitInitError) {
            console.error('Error reinitializing Git:', gitInitError);
            process.exit(1);
        }
        // Change directory to the newly created project
        process.chdir(projectPath);
        // Install dependencies
        try {
            execSync('pnpm install', { stdio: 'inherit' });
            console.log(colors.green, 'Project initialized successfully!', colors.reset);
            console.log(colors.yellow, '\nTo start the server, first navigate to the project directory:', colors.reset);
            console.log(colors.cyan, `cd ${projectName}`, colors.reset);
            console.log(colors.yellow, '\nStart in production mode:', colors.reset);
            console.log(colors.cyan, 'pnpm start', colors.reset);
            console.log(colors.yellow, '\nStart in debug mode:', colors.reset);
            console.log(colors.cyan, 'pnpm start:dev', colors.reset);
            console.log(colors.yellow, '\nTo run test suite:', colors.reset);
            console.log(colors.cyan, 'pnpm test', colors.reset);
        } catch (installError) {
            console.error('Error installing dependencies:', installError);
            process.exit(1);
        }
    });
}

// Define CLI command
yargs
    .command('new <projectName>', 'Create a new express ts project', {}, argv => {
        const { projectName } = argv;
        console.log(`Creating new express ts project - ${projectName}`);
        cloneRepoAndInitialize(projectName);
    })
    .demandCommand()
    .help()
    .argv;
