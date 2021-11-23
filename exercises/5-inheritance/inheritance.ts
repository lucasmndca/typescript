class Motorcycle {
    maker: string
    model: string
    color: string
    wheels: number
    hp: number

    constructor(maker: string, model: string, color: string, wheels: number, hp: number) {
        this.maker = maker
        this.model = model
        this.color = color
        this.wheels = wheels
        this.hp = hp
    }

    accelerate(): void {
        console.log(`[Motorcycle] ${this.maker} ${this.model} Accelerates!`)  
    }

    slowDown(): void {
        console.log(`[Motorcycle] ${this.maker} ${this.model} Slows down!`)  
    }
}

class HarleyDavidson extends Motorcycle {
    hasRadio: boolean
    
    constructor() {
        super('Harley Davidson', '883', 'Orange', 2, 52)
    }

    toString(): void {
        console.log(`[Harley Davidson] ${this.maker} ${this.model} ${this.hasRadio ? 'has a radio' : 'does not have a radio'}`)  
        this.accelerate()
        this.slowDown()
    }
}

class Ducati extends Motorcycle {
    sportTyres: boolean
    
    constructor() {
        super('Ducati', 'Diavel', 'Black', 2, 162)
        this.sportTyres = true
    }

    toString(): void {
        console.log(`[Harley Davidson] ${this.maker} ${this.model} ${this.sportTyres ? 'has sport tyres' : 'does not have sport tyres'}`)  
        this.accelerate()
        this.slowDown()
    }
}

const hd = new HarleyDavidson()
const ducati = new Ducati()

hd.toString()
ducati.toString()