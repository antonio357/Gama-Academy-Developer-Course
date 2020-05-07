/* Template String */
let firstName = "Antonio Carlos";
let lastName = "Albuquerque Alves";

/* Without template (using concatenation)*/
console.log("I'm " + firstName + " " + lastName + ".");

/* With string template */
console.log(`I'm ${firstName} ${lastName}.`);
console.log(`1 + 1 = ${1 + 1}`);
console.log(`json ${{ key: "value" }}`);
/* Template String */


/* Arrow functions */
/* Whithout  Arrow functions*/
const divide1 = function (a, b) {
    // the const means that the functions cannot be changed at any point
    return a / b;
};

/* Whith  Arrow functions*/
const divide2 = () => {
    return a / b;
};
const object = () => ({ name: "antonio", age: 20 });
/* Arrow functions */


/* Spread */
let list = [1, 2, 5];
let listInclude = [3, 4];

/* whithout spread */
/* Just to warn, this a terrible solution, a good solution would be to use (linked list) and (binary search algoritmh) */
for (let i = 0; i < listInclude.length; i++) {
    for (let j = 0; j < list.length; j++) {
        if (list[j] >= listInclude[i]) {
            list.splice(j, 0, listInclude[i]);
            j++;
        }
    }
}
/* Just to warn, this a terrible solution, a good solution would be to use (linked list) and (binary search algoritmh) */
console.log(`list = ${list}`);
console.log(`listInclude = ${listInclude}`);

/* with spread */
list_spread = [1, 2, ...listInclude, 5];
console.log(`list = ${list}`);

var list1 = [1, 2, 3];
var list1_copy = list1;

console.log(`list1 = ${list1}`);
console.log(`list1_copy = ${list1_copy}`);

list1_copy.push(4);
console.log("adding 4 to list1_copy whithout spread");

console.log(`list1 = ${list1}`);
console.log(`list1_copy = ${list1_copy}`);

var list1 = [1, 2, 3];
var list1_copy = [...list1];

list1_copy.push(4);
console.log("adding 4 to list1_copy whith spread");

console.log(`list1 = ${list1}`);
console.log(`list1_copy = ${list1_copy}`);
/* Spread */


/* Destruct */
const pessoa = {
    name: "antonio",
    last_Name: "Alves",
    age: 20,
    work: "programmer",
};

console.log(pessoa);

/* whithout Destruct */
let nome = pessoa.name;
let ultimoNome = pessoa.last_Name;
let idade = pessoa.age;
let trabalho = pessoa.work;

/* with destruct */
let { name, last_Name, age, work } = pessoa;

console.log(name, last_Name, age, work);
/* Destruct */


/* match */
let cpf = "my cpf is 123.456.789-10";

let regex = new RegExp("[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}");

console.log(cpf.match(regex));
/* match */
