// Using an example, explain the difference between block,global and function scope in variables.

// global=
let glo = "hi my name is tara";
console.log(glo); // ✔

function global() {
  console.log(glo);
} // ✔

// function=

function functionTest() {
  let func = "hi my name is tara";
  console.log(func); // ✔
}

console.log(func); // ❌

// block=

{
  let block = "hi my name is tara";

  console.log(block); // ✔
}

console.log(block); // ❌