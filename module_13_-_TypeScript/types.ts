// Boolean
const bool: boolean = true

// Number
const num: number = 3

// String
const stg: string = "Antonio"

// Array
const numList: number[] = [1, 2, 3]
const numList1: Array<number> = [1, 2, 3]

//Tuple
let types: [boolean, number, string]
types = [true, 1, "hay"]

// Enum
enum triForce {
    courage = 'Courage',
    wisdom = 'Wisdom',
    power = 'Power'
}
const Link: triForce = triForce.courage
const Zelda: triForce = triForce.wisdom
const Ganondorf: triForce = triForce.power

// Any
const APIreturn: any = ["return", 13, true]
const APIreturn1: any = {}

// Void
function printName(name: string): void { // you dont realy need to especify the return of the function
    console.log(name)
}

// Null, Undefined
const n: null = null
const u: undefined = undefined

// Object
function getHTML(url: string): object {
    return {}
}
const html: object = getHTML("https://www.*")

// Never
function infinityLoop(): never {
    while (true) {
        console.log("inside infinity loop")
    }
}
function error(message: string): never {
    throw new Error(message)
}
function fail(): never {
    error("something went wrong")
}

// Union Types
function print(info: string | number) {
    console.log(`the information is ${info}`)
}
print('string')
print(918237981273)

// Alias
type personStruct = {
    name: string,
    surname: string,
    skillLevel: number,
    alive: boolean
}
type people = Array<personStruct>
const array: people = [
    {name: 'Link', surname: 'Hylian', skillLevel: 128937, alive: true},
    {name: 'Zelda', surname: 'Hylian', skillLevel: 128937, alive: true},
    {name: 'Ganon', surname: 'Gerudo', skillLevel: 128937, alive: true}
]
function printArray(characters: people) {
    for (const character of characters) {
        console.log(`character: ${character.name}`)
    }
}
printArray(array)

// tsconfig { "strictNullChecks": false } allows 
let variable = 1.4; // which means this a number type variable
variable = null

// optional types
type gameCharacter = {
    name: string,
    power?: string // the '?' it makes this atribute opcional
}
const protagonist: gameCharacter = {
    name: "Link",
    power: "Courage"
} 
const npc: gameCharacter = {
    name: "Hylian"
}

// Type Assertion // its like Casting
const age: any = 32;
(age as number).toString()
const age1: any = 42;
(<number>age1).toString()
const input = document.getElementById('inputElement') as HTMLInputElement
console.log(input.value)