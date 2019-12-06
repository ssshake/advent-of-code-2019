const OPCODES = {
    SUM: 1,
    MULTIPLY: 2,
    EXIT: 99
}

const processor = class {
    constructor(intcodes) {
        this.position = 0
        this.intcodes = [...intcodes]
    }

    sum(a,b) {
        return this.intcodes[a] + this.intcodes[b]
    }
    
    multiply(a,b) {
        return this.intcodes[a] * this.intcodes[b]
    }
    
    getOffset(index) {
        return this.position * 4 + index
    }

    modifyState(a, b) { //should take overrides
        this.intcodes[1] = a;
        this.intcodes[2] = b;
    }

    process () {
        let processing = true;
        while(processing){
            const opCode = this.intcodes[this.getOffset(0)];
            const a = this.intcodes[this.getOffset(1)];
            const b = this.intcodes[this.getOffset(2)];
            const output = this.intcodes[this.getOffset(3)];
    
            switch(opCode){
                case OPCODES.SUM:
                    this.intcodes[output] = this.sum(a,b);
                    break;
                case OPCODES.MULTIPLY:
                    this.intcodes[output] = this.multiply(a,b);
                    break;
                case OPCODES.EXIT:
                    processing = false;
                    break;
                default:
                    console.error(`INVALID OP CODE ${opCode}`) 
            }
            this.position++;
        }
    
        return this.intcodes;
    }    
}

module.exports = processor