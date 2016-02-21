/*
Date : 2016-01-19

Mean Stack Scaffold Maker Test
 */

'use strict'

var fs = require('fs');

//Checking File Exist
var fileNm = 'std2.js';
fs.stat(fileNm, function(err, stats) {
	if(stats === undefined) {
		createFile(fileNm);
	}
});

function createFile(fileNm) {
	fs.writeFile(fileNm, "'strict use'", function(err) {
		if(err) throw err;
		console.log('it\'s saved!');
	});
}