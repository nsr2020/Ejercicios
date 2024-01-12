/* 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme */
console.log(document.querySelector(".showme"));

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

console.log(document.querySelector("#pillado"));
//1.3 Usa querySelector para mostrar por consola todos los p

const p = document.querySelectorAll('p')
console.log(p)

//1.4 Usa querySelector para mostrar por consola todos los elementos conla clase.pokemon

const h4 = document.querySelectorAll('h4')
console.log(h4)

//1.5 Usa querySelector para mostrar por consola todos los elementos conel atributo data-function="testMe".
console.log(document.querySelectorAll("[data-function='testMe']"));

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
console.log(document.querySelectorAll("[data-function='testMe']")[2]);
