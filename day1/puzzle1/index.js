const inputs = require('./input.json');
console.dir(inputs);

let answer = 0;

const calculate = (input) => {
    return Math.floor(input / 3) - 2;
}

inputs.map((input) => {
    answer += calculate(input);
})

console.log(answer)


