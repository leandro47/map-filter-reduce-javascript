// let numero01 = 0;
// let numero02 = -5;
// let numero03 = -9;
// let numero04 = 8;
// let numero05 = 1;


// var numeros = [numero01, numero02, numero03, numero04, numero05];

// //Função para valores pares
// vlrPar = 0;
// numeros.forEach(element => {
//     if((element % 2) == 0)
//     vlrPar = vlrPar + 1
// });
// console.log(vlrPar);

// //Função para valores impares
// vlrImpar = 0;
// numeros.forEach(element => {
//     if((element % 2) != 0)
//     vlrImpar = vlrImpar + 1
// });
// console.log(vlrImpar);


// // Função para valor positivos
// vlrPositivo = 0;
// numeros.forEach(element => {
//     if(element >= 0)
//     vlrPositivo = vlrPositivo + 1
// });
// console.log(vlrPositivo);

// //função para valor negativo 
// vlrNegativo = 0;
// numeros.forEach(element => {
//     if(element < 0)
//     vlrNegativo = vlrNegativo + 1
// });
// console.log(vlrNegativo);

let numero01 = 11257;

function ajuste(nr, casas) {
    const og = Math.pow(10, casas)
    return Math.floor(nr * og) / og;
}

console.log(numero01);

if ((numero01 / 100) >= 1) {
    console.log(ajuste((numero01 / 100), 0) + ' nota(s) de R$ 100,00');
    numero01 = numero01 % 100;
} else
    console.log(0 + ' nota(s) de R$ 100,00');

if ((numero01 / 50) >= 1) {
    console.log(ajuste((numero01 / 50), 0) + ' nota(s) de R$ 50,00');
    numero01 = numero01 % 50;
} else
    console.log(0 + ' nota(s) de R$ 50,00');

if ((numero01 / 20) >= 1) {
    console.log(ajuste((numero01 / 20), 0) + ' nota(s) de R$ 20,00');
    numero01 = numero01 % 20;
} else
    console.log(0 + ' nota(s) de R$ 20,00');

if ((numero01 / 10) >= 1) {
    console.log(ajuste((numero01 / 10), 0) + ' nota(s) de R$ 10,00');
    numero01 = numero01 % 10;

} else
    console.log(0 + ' nota(s) de R$ 10,00');

if ((numero01 / 5) >= 1) {
    console.log(ajuste((numero01 / 5), 0 )+ ' nota(s) de R$ 5,00');
    numero01 = numero01 % 5;

} else
    console.log(0 + ' nota(s) de R$ 5,00');

if ((numero01 / 2) >= 1) {
    console.log(ajuste((numero01 / 2),0 )+ ' nota(s) de R$ 2,00');
    numero01 = numero01 % 2;

} else
    console.log(0 + ' nota(s) de R$ 2,00');

if ((numero01 / 1) >= 1) {
    console.log(ajuste((numero01 / 1), 0 )+ ' nota(s) de R$ 1,00');
} else
    console.log(0 + ' nota(s) de R$ 1,00');
