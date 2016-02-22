/*
Date : 2016-01-19

Mean Stack Scaffold Maker Test
 */

'use strict'

var fs = require('fs');

ask('Name', /.+/, function(name) {
    createFile(name);
});

function createFile(fileNm) {
    //Checking File Exist
    fs.stat(fileNm, function(err, stats) {
        if (stats !== undefined) {
            console.log(fileNm + ' is already exist!');
        }
        process.exit();
    });

    //Create File
    fs.writeFile(fileNm, "'strict use'", function(err) {
        if (err) throw err;
        console.log('it\'s saved!');
        process.exit();
    });
}

function ask(question, format, callback) {
    var stdin = process.stdin,
        stdout = process.stdout;

    stdin.resume();
    stdout.write(question + ": ");

    stdin.once('data', function(data) {
        data = data.toString().trim();

        if (format.test(data)) {
            callback(data);
        } else {
            stdout.write('It should match: ' + format + '\n');
            ask(question, format, callback);
        }
    });
}
