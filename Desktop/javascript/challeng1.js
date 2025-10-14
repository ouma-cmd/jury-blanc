const prompt = require("prompt-sync")();

console.log("Exercice 1 :")
let nom =prompt("Entrer Votre nom ");
let prenom =prompt("Entrer Votre prenom ");
let age =prompt("Entrer Votre age ")
let sexe =prompt("Entrer Votre sexe ")
let numeroDeTelephone =prompt("Entrer Votre numero de Telephone ")

console.log(`Votre nom est ${nom}`)
console.log(`Votre prenom est ${prenom}`)
console.log(`Votre age est ${age}`)
console.log(`Votre sexe est ${sexe}`)
console.log(`Votre numeroDeTelephone est ${numeroDeTelephone}`)

console.log("Exercice 2 :")

let Ccc = prompt("Entrer tempurature en Celsius ")
let F = (Ccc * 1.8)+32 
console.log(`la temperatur en  Fahrenheit est ${F}`)

console.log("Exercice 3 :")
let A ,B ,C ;
A = B ;
B = C ;
C = A ;

console.log("Exercice 4 :")
let num1 = prompt("Entrer un nembre ")
let num2 = prompt("Entrer le deuxième nembre ")
let sum = num1 + num2 ;
let mod = num1 % num2 ;
console.log(`${num1} + ${num2} = ${Number(num1) + Number(num2)}`)
console.log(`${num1} - ${num2} = ${Number(num1) - Number(num2)}`)
console.log(`${num1} * ${num2} = ${Number(num1) * Number(num2)}`)
console.log(`${num1} / ${num2} = ${Number(num1) / Number(num2)}`)
console.log(`${num1} % ${num2} = ${Number(num1) % Number(num2)}`)

console.log("Exercice 5 :")

let num11 = prompt("entrer le premier nembre ")
let num22 = prompt("entrer le deuxième nembre ")
let num3 = prompt("entrer le troixieme nembre ")
let num4 = prompt("entrer le quatriame nembre ")

let summ = Number(num11) + Number(num22) + Number(num3) + Number(num4) ;
let moy = sum /4 ;

console.log(`la somme est ${summ}`)
console.log(`la moyenne est ${moy}`)

console.log("Exercice 6 :")

let distance = prompt("entrer la distance d'une voiture ")
let vitesse = prompt("entrer la vitesse d'une voiture ")

let temp = Number(distance) / Number(vitesse)

console.log(`le tempt de trajet est ${temp *60} min`)

console.log("Exercice 7 :")
let R = prompt("entrer le rayon d'un cercle")
let Cc = 2 * Math.PI * Number(R)

console.log(`la circonférence est ${Cc}`)

console.log("Exercice 8 :")

let num = "234";
console.log(num)
let reverse = num.split("").reverse().join("")
console.log(`reverc est ${reverse}`)

console.log("Exercice 9 :")

let distance2 = prompt("Entrer un distance en kilometre")

let Mile = Number(distance2) *1.609

console.log(`la distance en mile est ${Mile} mile`)

console.log("Exercice 9 :")
let prix = prompt("entrer un prix en euros")

let mad = prix * 10.61 

console.log(`le prix en dirham est ${mad}`)




