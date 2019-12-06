const processor = class {
    constructor(paths) {
        this.paths = paths
        this.grid = []
    }

    process(){
        this.paths.a.map((instruction) => {
            const tempArr = instruction.split('')
            const direction = tempArr.shift()
            const units = tempArr.join()
            console.log(direction, units)
        })
    }
}

module.exports = processor