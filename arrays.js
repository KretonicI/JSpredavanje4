var arr = ['Ivana', 'Martina','Domagoj', 'Luka','Mihovil','Iva','Ivan','Martina'];
var arrNum =[1, 2, 3, 4, 5, 6];
var arrCombo = [ 1, 'ime', 2, 'prezime'];
console.log ('Niz ima ' + arr.length + 'elemenata');

var duljina = 0;
var minduljina =0;
for (i = 0; i<arr.length; i ++){
    console.log('Item' + i + '=' + arr[i]);
    duljina = arr[i].length;
    console.log('ime' + arr[i] + 'sadrži '+ duljina + ' znakova');
    if (minduljina == 0){
        minduljina = duljina
    }
    if (duljina < minduljina){
        minduljina = duljina
    }
}
console.log('ime sa najmanje znakova sadrži' + minduljina + 'znakova' );
