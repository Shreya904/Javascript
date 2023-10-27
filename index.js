console.log('hello world!');

let person = {
    name: 'shreya',
    age: 19
}
console.log(person);

person.age = 20;
console.log(person.age);
person['name'] = 'sri';
console.log(person.name);

let selectedFruits = ['apple','orange',3];
console.log(selectedFruits);
function greet(name,lastName){
    console.log('hello'+ name +' '+ lastName);
}
greet('shreya','srivastava');
function cube(number){
    return number*number*number;
}
let number = cube(2);
console.log(number);
console.log(cube(3));