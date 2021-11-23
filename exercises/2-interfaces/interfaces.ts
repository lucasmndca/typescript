interface Person {
    name: string,
    age: number,
    profession: string
}

const person: Person = {
    name: 'John',
    age: 29,
    profession: 'Software Engineer'
}

console.log(`[INTERFACES] ${person.name}, ${person.age}, is a ${person.profession}`)
