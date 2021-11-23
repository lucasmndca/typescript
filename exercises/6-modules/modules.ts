import { getTimestamp } from "./time"
import sum from "./sum"

console.log(`[MODULES] Welcome. App is starting at ${getTimestamp()}`)

const a: number = 10
const b: number = 100

console.log(`[MODULES] First number is ${a}`)
console.log(`[MODULES] Second number is ${b}`)
console.log(`[MODULES] Sum is ${sum(a, b)}`)