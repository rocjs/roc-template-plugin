const defaultPrompt = require('roc').defaultPrompt;

const prompt =
    defaultPrompt.concat([{
        type: 'input',
        name: 'rocGitRepository',
        message: 'What\'s the git repository url?'
    }, {
        type: 'input',
        name: 'rocTravisUrl',
        message: 'What\'s the Travis url?',
        default: 'USERNAME/PROJECT'
    }]);

module.exports = {
    prompt: prompt,
    completionMessage: 'Done. Please run "npm run link" to link everything.'
}
