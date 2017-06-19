const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter first number. ', function(answer) {
  rl.question('Enter second number. ', function(answer1) {
    console.log(`Thank you for your valuable feedback: ${answer} & ${answer1}`);
    rl.close();
  });
});
