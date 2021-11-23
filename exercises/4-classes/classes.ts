// Without constructor

class Person {
    name: string
    age: number
    profession: string
}

const person1 = new Person()
person1.age = 29
person1.name = 'John'
person1.profession = 'Software Engineer'

console.log(`[CLASSES - PERSON] ${person1.name}, ${person1.age}, is a ${person1.profession}`)

// With constructor

class Car {
    maker: string
    model: string
    hp: number

    constructor(maker: string, model: string, hp: number) {
        this.maker = maker
        this.model = model
        this.hp = hp
    }

    toString(): void {
        console.log(`[CLASSES - CAR] ${this.maker} ${this.model} - ${this.hp} horsepower`)
    }
}

const car = new Car('Suzuki', 'Escudo', 981)
car.toString()