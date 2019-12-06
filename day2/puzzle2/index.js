const Processor = require('./processor.js');
const intcodes = require('./input.js')

for (let noun = 0; noun <= 99; noun++){
    for (let verb = 0; verb <= 99; verb++){

        const processor = new Processor(intcodes);
        processor.modifyState(noun, verb);
        const result = processor.process();
        
        if (result[0] === 19690720) {
            console.log(100 * noun + verb)
        }

    }
}
