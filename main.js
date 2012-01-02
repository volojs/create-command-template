'use strict';
/*jslint */
/*global define */

define(function (require, exports, module) {
    var fs = require('fs'),
        path = require('path'),
        main;

    main = {
        //Text summary used when listing commands.
        summary: 'TODO',

        //Longer doc text used with volo.js help
        //The 'text' module is available as part
        //of volo.js
        doc: require('text!./doc.md'),

        //Validate any arguments here.
        validate: function (namedArgs) {
            //Return an error to indicate a validation problem.
            //If everything is OK, do not return a value.
            //return new Error('There was a validation error.');
        },

        run: function (deferred, namedArgs) {
            var success = true;
            if (success) {
                deferred.resolve('Command is done.');
            } else {
                deferred.reject(new Error('There was an error.'));
            }
        }
    };

    return require('volo/commands').register(module.id, main);
});
