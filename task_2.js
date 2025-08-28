class Point{
    constructor(x, y){
        this.x = x
        this.y = y 

    }

    static distance(d1, d2){
        const dx = d1.x - d2.x
        const dy = d1.y - d2.y

        return Math.sqrt(dx * dx + dy * dy)
    }
}


let d1 = new Point(5, 5)
let d2 = new Point(9, 8)

console.log(Point.distance(d1, d2))