/*
let a = 10;
let b = 10;

// Pré-incremento: incrementa primeiro e depois retorna o valor
console.log(++a);
// Pós-incremento: retorna o valor primeiro e depois incrementa
console.log(b++);
console.log(b);

let c = 10;
c += b;
console.log(c);
*/

// Operadores de comparação
let a = 5;
let b = "5";

// Igualdade (==) - compara apenas o valor, sem considerar o tipo
console.log(a == b); // true

// Identidade (===) - compara o valor e o tipo
console.log(a === b); // false

// Desigualdade (!=) - compara apenas o valor, sem considerar o tipo
console.log(a != b); // false

// Não identidade (!==) - compara o valor e o tipo
console.log(a !== b); // true

/* Operadores de comparação no JavaScript:
Operador | Significado
---------+----------------------
    <    | Menor que
---------+----------------------
    >    | Maior que 
---------+----------------------
   <=    | Menor ou igual que
---------+----------------------
   >=    | Maior ou igual que
---------+----------------------
   ==    | Igual ao (compara valor)
---------+----------------------
   !=    | Diferente de

   ===  | Estritamente igual (compara tipo e valor)
*/

let idadeAluno = prompt("Bem vindo a Autoescola Dirigemal! Digite a idade do aluno:  ");
if (idadeAluno >= 18) {
    alert("O aluno é maior de idade. Pode cursar na autoescola.");
} else {
    alert("O aluno é menor de idade. Pode cursar na autoescola.");
}