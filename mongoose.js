'use strict'

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {

});

var userSchema = mongoose.Schema({
    email: String,
    pwd: String
});

userSchema.methods.speak = function() {
    var greeting = this.email ? 'My email is ' + this.email : 'I don\'t have an email';
    console.log(greeting);
};


var User = mongoose.model('User', userSchema);

process.stdout.setEncoding('utf8');
process.stdout.write('What is your email? ');

process.stdin.setEncoding('utf8');
process.stdin.once('data', function(data) {
    var choi = new User({ email: data, pwd: 'mypwd' });

    choi.save(function(err, user) {
        if (err) {
            console.log(err);
        }
        user.speak();
    });

    User.find(function(err, users) {
        if (err) {
            console.log(err);
        }
        console.log(users);
    });
});


