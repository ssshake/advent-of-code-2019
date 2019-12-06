let intcodes = require('./input.js')

const OPCODES = {
    SUM: 1,
    MULTIPLY: 2,
    EXIT: 99
}

let POSITION = 0;

const sum = (a,b) => {
    return intcodes[a] + intcodes[b]
}

const multiply = (a,b) => {
    return intcodes[a] * intcodes[b]
}

const getOffset = (index) => {
    return POSITION * 4 + index
}

const modifyState = () => {
    intcodes[1] = 12;
    intcodes[2] = 2;
}

const process = () => {
    let processing = true;
    while(processing){
        const opCode = intcodes[getOffset(0)];
        const a = intcodes[getOffset(1)];
        const b = intcodes[getOffset(2)];
        const output = intcodes[getOffset(3)];

        switch(opCode){
            case OPCODES.SUM:
                intcodes[output] = sum(a,b);
                break;
            case OPCODES.MULTIPLY:
                intcodes[output] = multiply(a,b);
                break;
            case OPCODES.EXIT:
                processing = false;
                break;
            default:
                console.error(`INVALID OP CODE ${opCode}`) 
        }
        POSITION++;
    }
}

modifyState();
process();
console.log(intcodes)

