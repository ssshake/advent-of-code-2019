const Processor = require('./processor.js');

const paths = {
    a: "R8,U5,L5,D3".split(","),
    b: "U7,R6,D4,L4".split(",")
}

const processor = new Processor(paths, 20)

processor.makeGrid();
processor.process();
