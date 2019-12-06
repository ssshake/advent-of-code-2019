const Processor = require('./processor.js');
const intcodes = require('./input.js')

const processor = new Processor(intcodes);

processor.modifyState();

const result = processor.process(intcodes);

console.log(result)
