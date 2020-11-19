console.log("Hello World!");
//задать переменные / declare a varible
let name = "Harry Potter";
let age = 18;
let survived = true;
let city = "London";
let drivingLincese= "";
let commentary= "";
//console.log("Character:", name, ". age:", age, ", city ", city);
console.log(`Caracter:${name}.); Age: ${age}. City ${city}.`);

if(survived){
    commentary = "Survived the batle for hogwarts.";
} else{
    commentary = "Died in the battle for Hogwarts."
}
console.log(`Character ${name} ${commentary}`);

if(age< 18) {
    drivingLincese =`${name} is too young to drive a car.´;`
} else {
    console.log(`${name} is old enouhg to drive a car.`);
}

console.log (` driveLincese `);

const html =  `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>City: ${city}</li>
<li>He: ${He}</li>
<li>drivingLincese: ${drivingLincese}</li>
    </ul>
`;

document.body.innerHTML= html;