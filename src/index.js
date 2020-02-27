#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const semver = require('semver');

const files = require('./lib/files');
const inquirer = require('./lib/inquirer');

const git = require('simple-git/promise')();

const run = async () => {
    inquirer.askForAction().then((r) => {
            fetchRepo().then(() => {
                console.log(chalk.green('Successfully fetched tags'));
                getTags().then((tagList) => {
                    if (tagList.latest) {
                        console.log(chalk.white('Latest tag:', tagList.latest));
                        const nextTag = bumpTag(tagList.latest, r.action);
                        console.log(chalk.white('next tag:', nextTag));
                        return addTag(nextTag)
                            .then(() => console.log(chalk.green('Successfully added tag', nextTag)))
                    } else {
                        console.log(chalk.red('No tag were found, please create initial semver tag before using git bump'));
                        console.log(chalk.white('Example:'));
                        console.log(chalk.white(''));
                        console.log(chalk.white('git tag v1.0.0'));

                    }
                });
            });
        }
    );
};


const fetchRepo = () => {
    const options = {
        '--tags': true,
    };
    return git.fetch(options)
};

const getTags = async () => {
    return git.tags()
};

const bumpTag = (tag, action) => {
    let newTag = semver.inc(tag, action);
    if (tag.startsWith('v')) {
        newTag = `v${newTag}`;
    }
    return newTag;
};

const addTag = async (tag) => {
    return git.tag([tag])
};

clear();

console.log(
    chalk.green(
        figlet.textSync('git bump')
    )
);

if (!files.directoryExists('.git')) {
    console.log(chalk.red('not a Git repository, bye'));
    process.exit(-1);
} else {
    run();
}

