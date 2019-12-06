const Processor = require('./processor.js');
const intcodes = require('./input.js')

const processor = new Processor(intcodes);

processor.modifyState(12, 2);

const result = processor.process();

console.log(result)
