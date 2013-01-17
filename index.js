var fs = require('fs'),
    path = require('path');

module.exports = {
    summary: 'A sample volo command that prints a greeting.',

    //This is a longer form version of the help. markdown
    //is the suggested file format to use.
    doc: fs.readFileSync(path.join(__dirname, 'doc.md'), 'utf8'),

    //Any flags you want to support. Note, -h is already handled
    //by volo itself -- volo will print out the text from the "doc"
    //property.
    flags: {
        'u': 'upper'
    },

    //Optional, validate the arguments
    validate: function (namedArgs, arg1, arg2) {
        if (!arg1) {
            return new Error('Please enter a greeting');
        }
        if (!arg2) {
            return new Error('Please enter a name.');
        }
    },

    run: function (d, v, namedArgs, arg1, arg2) {
        var message = arg1 + ' ' + arg2 + '!';
        if (namedArgs.upper) {
            message = message.toUpperCase();
        }

        d.resolve(message);
    }
};
