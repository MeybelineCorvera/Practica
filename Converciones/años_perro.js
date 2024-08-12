let myAge = 18; //Mi edad humana

var earlyYears = 2; //Almaceno 2 en la variable earlyYears

var earlyYears = earlyYears * 10.5;

var laterYears = myAge - 2; //A la variable myAge le restamos 2 y el resultado se almacena en la variable laterYears

var laterYears = laterYears * 4; //Multiplicamos la variable laterYears por 4

console.log( earlyYears, laterYears); // Imprimo earlyYears y laterYears

let myAgeInDogYears = earlyYears + laterYears; //Almacenamos en una solo variable los valore de earlyYears y laterYears

let myName = "Meybeline".toLowerCase(); //Escribo mi nombre en la variable myName y utilizo el metodo integrado .toLowerCase() para pasar a minuscula 

console.log(`Mi nombre es ${myName}. Tengo ${myAge} años en años humanos, que son ${myAgeInDogYears} años en años de perro.`) //Utilizo la interpolación de cadena para mostrar mi nombre y edad en años humanos y en años perro