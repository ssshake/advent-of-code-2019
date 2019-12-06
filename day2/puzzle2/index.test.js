const Processor = require('./processor.js');
const intcodes = require('./input.js')

test('noun of 50 and verb of 64 produces 19690720', () => {
    const processor = new Processor(intcodes)
    processor.modifyState(50, 64);
    expect(processor.process()[0]).toStrictEqual(19690720);
})