//1. napišite while petlju koja će ispisivati brojeve od 3 do 20, osim onih djeljivih sa 9
/*var x = 0;
while (x<20){
    x++;
    if( x<=3){
    console.log('manji od 3');
    continue;
}
if( x % 9=== 0) {
    continue;
}
console.log('x=' + x)
}
*/

//2. Koja je vrijednost ispisana u konzoli?

var varOne = 0;
for (i =0; i <4; i++){
    for (j=0; j < 4; j++) {
        varOne++;
    }
}
console.log(varOne);