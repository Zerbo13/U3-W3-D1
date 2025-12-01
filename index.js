// 1) Quali sono i tipi primitivi principali in TypeScript?
// I tipi primitivi in Typscript sono: string, number, boolean, undefined, null, any, never
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età,
// e un booleano che indica se stai studiando TypeScript.
var nome = 'Mattia';
var eta = 19;
var studyTypeScript = true;
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => [ return "Ciao" + name)
var greet = function (name) { return "Ciao" + name; };
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => {return a + b }
//Il tipo di ritorno è number perchè restituisce la somma
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var iva = function (price) {
    return price * 1.22;
};
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var stringLenght = function (a, b) {
    return (a + b).length;
};
// 7) Cos'è un Type Union e come si scrive?
//Un Union Type indica che una variabile può assumere più tipi diversi e si scrive usando il carattere |.
// 8) Crea una variabile che possa contenere un numero, null o undefined.
var x;
// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]
var numbers = [1, 2, 3];
var numbers2 = [1, 2, 3];
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var elements = [
    "a",
    "b",
    "c",
    1,
    2
];
var studenti = [
    { nome: "Mario", voto: 28 },
    { nome: "Luisa", voto: 30 }
];
// 17) Crea un oggetto che implementi l'interfaccia Auto.
var miaAuto = {
    marca: "Fiat",
    modello: "Panda",
    porte: 5
};
