const chalk = require('chalk');

const processor = class {
    constructor(paths, gridSize = 200) {
        this.paths = paths
        this.grid = []
        this.gridSize = gridSize
        this.origin = this.gridSize / 2
        this.intersections = []
    }

    makeGrid(){
        for (let i = 0; i <= this.gridSize; i++){
            this.grid.push([]);

            for (let j = 0; j <= this.gridSize; j++){
                this.grid[i].push('_')
            }
        }

        this.grid[this.origin][this.origin] = "O"

    }

    resetXY(){
        console.log(this.origin)
        this.X = this.origin
        this.Y = this.origin
    }

    drawPath(label, otherLabel, path){
        this.resetXY()

        path.map((instruction) => {
            const tempArr = instruction.split('')
            const direction = tempArr.shift()
            const units = tempArr.join('')
            // console.log(units, direction)

            for (let i = 0; i < units; i++){

                
                switch(direction){
                    case "U":
                        this.Y -= 1;
                        break;
                    case "D":
                        this.Y += 1;
                        break;
                    case "L":
                        this.X -= 1;
                        break;
                    case "R":
                        this.X += 1;
                        break;                            
                }

                // if (this.Y > this.gridSize || this.X > this.gridSize || this.Y < 0 || this.X < 0){
                //     return
                // }

                if (this.grid[this.Y][this.X] === otherLabel){
                    this.grid[this.Y][this.X] = 'X'
                    // console.log('---------')
                    // console.log(this.X, this.Y, this.origin)
                    // console.log( (this.X - this.origin),  (this.Y - this.origin))

                    const manhattan = Math.abs((this.X - this.origin)) + Math.abs((this.Y - this.origin))

                    this.intersections.push(manhattan)
                } else {
                    this.grid[this.Y][this.X] = label
                }
            }

        })
    }

    process(){
        this.drawPath('A', 'B', this.paths.a)
        this.drawPath('B', 'A', this.paths.b)

        this.grid.map((row) => {
            // console.log(row.toString()
            //     .replace(/A/g, chalk.blue('A'))
            //     .replace(/B/g, chalk.green('B'))
            //     .replace(/X/g, chalk.red('X'))
            //     .replace(/O/g, chalk.yellow('O'))
            // )
        })
        this.intersections = this.intersections.sort()
        console.log(this.intersections)
        return this.intersections
    }
}

module.exports = processor