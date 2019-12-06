const Processor = require('./processor.js');

test('Route has length of 6', () => {
    const paths = {
        a: "R8,U5,L5,D3".split(","),
        b: "U7,R6,D4,L4".split(",")
    }
    
    const processor = new Processor(paths, 20)

    processor.makeGrid();


    expect(processor.process()).toBe(6);
})

// test('Route has length of 159', () => {
//     const paths = {
//         a: "R75,D30,R83,U83,L12,D49,R71,U7,L72".split(","),
//         b: "U62,R66,U55,R34,D71,R55,D58,R83".split(",")
//     }

//     const processor = new Processor(paths)

//     expect(processor.process()).toBe(159);
// })

// test('Route has length of 135', () => {
//     const paths = {
//         a: "R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51".split(","),
//         b: "U98,R91,D20,R16,D67,R40,U7,R15,U6,R7".split(",")
//     }

//     const processor = new Processor(paths)

//     expect(processor.process()).toBe(135);
// })