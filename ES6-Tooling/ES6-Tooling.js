// # History Javascript
// Criado em 10 dias - 1996 - Padrão ECMA em 1998 - Netscape - Paper detalhando Asynchronicity - AJAX
// Funções rodando no background da aplicação Web
  // Created in 10 Days - Built-in language in Netscape in 1996
  // Standardised by the ECMA International - 1998
  // Release of white paper describing AJAX - Asynchronicity
  // Web Apps - Data can be loaded in the background
  // No more need full page reloads
// ECMAScript - 2009 ECMAScript 3.1 -> ECMAScript (ES5)
// Harmony project: new cycle of evolution and innovation
// Nodejs - JS as a server-side lang.
// 2015 - Release of ECMAScript 2015 (ES6)

// JavaScript Frameworks - Vue; Angular; Ember; React; Redux
// Utilizar o console do browser para simular códigos em Javascript
// ES6 Refresher
let name = 'Boris';
console.log(name);
let name = 'Romain'
console.log(name);

// Block-scoped instead function scoped.
  if (name === 'Boris') {
    let sentence = `Hello ${name}`;
    console.log(sentence);
  }
// Variables - const - Cannot be reassigned a value
const name = 'Boris';

const user = {
  name: 'Boris',
  role: 'Ceo'
};
user.name = 'Boris Paillard' // Not immutable - Start with const and after use let.

// Template Literals
const age = 18;
console.log(`I'm ${age} years old`);

// Support for multi-lines - nested
const people = [
  { name: 'Alice', age: 24 },
  { name: 'Bob', age: 32 },
  { name: 'Charles', age: 45 }
];
// Support HTML in pure Javascript
const markup = `
 <ul class="people">
 ${people.map(person => {
 `<li>${person.name} is ${person.age} years old</li>`
 }).join('')}
 </ul>
`;

// Arrow Functions

function() {
  // JS
}
() => {
  // JS
}

// Concision in JS - Chamada da função dentro do método map
const numbers = [ 1, 2, 3];
const squares = number.map(function(number) {
  return number * number;
});
// Becomes in ES6 - Concisão dentro do método sem a necessidade de chamar a função novamente.
const numbers = [ 1, 2, 3];
const squares = numbers.map((number) => {
  return number * number;
})
// Implicit Return
const numbers = [ 1, 2, 3];
const squares = numbers.map(n => n * n);