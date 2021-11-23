interface Person {
    name: string,
    age: number,
    profession: string
}

function printPerson(person: Person): void {
    console.log(`[FUNCTIONS] ${person.name}, ${person.age}, is a ${person.profession}`)
}

printPerson({
    name: 'John',
    age: 29,
    profession: 'Software Engineer'
})