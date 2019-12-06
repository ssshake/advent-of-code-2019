const Processor = require('./processor.js');

test('positon 0 becomes value of 2', () => {
    const processor = new Processor([1,0,0,0,99])
    expect(processor.process()).toStrictEqual([2,0,0,0,99]);
})

test('positon 3 becomes value of 6', () => {
    const processor = new Processor([2,3,0,3,99])
    expect(processor.process()).toStrictEqual([2,3,0,6,99]);
})

test('positon 5 becomes value of 9801', () => {
    const processor = new Processor([2,4,4,5,99,0])
    expect(processor.process()).toStrictEqual([2,4,4,5,99,9801]);
})

test('positon 0 becomes value of 30', () => {
    const processor = new Processor([1,1,1,4,99,5,6,0,99])
    expect(processor.process()).toStrictEqual([30,1,1,4,2,5,6,0,99]);
})