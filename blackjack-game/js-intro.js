let hasAccount = true;
if (hasAccount) {
    console.log('Welcome back!')
} else {
    console.log('Please create an account to continue')
}

let money = 5;

console.log('WHILE LOOPS');
while (money > 0) {
    console.log(money);
    money -= 1;
}

console.log("\n" + "FOR LOOPS");
for (let amount = 0; amount < 10; amount++) {
    console.log(amount);
}

let playerNames = ['Gavin', 'Mark', 'Chad'];
console.log('\n' + 'FOR OF LOOPS');
for (name of playerNames) {
    console.log(name);
}