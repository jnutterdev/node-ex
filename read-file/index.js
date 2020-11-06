const fs = require('fs');
const readline = require('readline').createInterface({ //creates terminal prompt for user
    input: process.stdin, // takes an input from user
    output: process.stdout // output to terminal
});

readline.question('filename: ', function(filename) {
    readline.close();
    fs.readFile(filename, function(error, buffer) {
        if (error) {
            console.log(error.message);
            return;
        }
        const content = buffer.toString();
        const upperCased = content.toUpperCase();
        console.log(upperCased);
    });
});