#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');
const mongoose = require('mongoose');
const controllers = require('./controllers');
const config = require('./config');

mongoose.connect(process.env.DB_HOST || config.DB_HOST, err => {
    if (err) console.log('error connected mongodb');
});

program
    .version('0.0.1')
    .description('TODO app');

// Craft questions to present to users
const createQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter title ...'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter description ...'
    },
];

const updateQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter new title ...'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter new description ...'
    },
];

const commentQuestions = [
    {
        type: 'input',
        name: 'comment',
        message: 'Enter comment ...'
    },
];

const todos = [];

program
    .command('create')
    .alias('cr')
    .description('Create new TODO item')
    .action(() => {
        prompt(createQuestions).then(answers => {
            controllers.create(answers)
                .then(data => {
                    console.log(`todo successfully added ${data}`);
                })
                .catch(err => {
                    console.log(`error: ${err}`);
                });
        });
    });

program
    .command('update <id>')
    .alias('upd')
    .description('Update TODO item')
    .action((id) => {
        prompt(updateQuestions).then(answers => {
            // TODO update todo
        });
    });

program
    .command('remove <id>')
    .alias('rm')
    .description('Remove TODO item by id')
    .action((id) => {
        controllers.remove(id)
            .then(data => {
                console.log(`todo with id ${id} successfully removed`);
            })
            .catch(err => {
                console.log(`error: ${err}`);
            });
    });

program
    .command('list')
    .alias('ls')
    .description('List all TODOs')
    .action(() => {
        controllers.list()
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(`error: ${err}`);
            });
    });

program
    .command('like <id>')
    .alias('lk')
    .description('Like TODO item')
    .action((id) => {
        // TODO mark todo item as liked
    });

program
    .command('comment <id>')
    .alias('cmt')
    .description('Comment TODO item')
    .action((id) => {
        prompt(commentQuestions).then(answers => {
            // TODO comment for todo item
        });
    });

program.parse(process.argv);