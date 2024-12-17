function getName(){
let name = prompt ("Vad är ditt namn?");
return name.toUpperCase();
}

function showMessage(){
let name = getName();
console.log(name);
let numberLetters = name.length;
alert("Hej " + name + " visste du att ditt namn har " + numberLetters + " bokstäver?");}

showMessage();