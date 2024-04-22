//Kreirajte varijable firstNama i lastName i spojite ih u varijablu fullName, ali s ratmakomom
var firstName = 'Ivan';
var lastName = 'Horvat';
var fullName = firstName.trim() + ' ' + lastName.trim();
console.log(fullName);


//Razlomite ovu ternarnu operaciju na 3 različite operacije
var z= 6;
var y= 0;

var x = z ===2 ? y : 5;

if (z===2){
    x=y;
} else {
    x=5;
}
console.log('x=' + x);


//Napišite petlju koja će prolaziti kroz brojeve od 1 do 20. Za svaku će iteraciju provjeriti trenutni broj parni ili neparan

for (x=1; x<20; x++){
    if ( x%2==0){

console.log( "Broj " + x+ " je paran");
    }
}