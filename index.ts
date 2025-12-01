
// 1) Quali sono i tipi primitivi principali in TypeScript?

// I tipi primitivi in Typscript sono: string, number, boolean, undefined, null, any, never

// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età,
// e un booleano che indica se stai studiando TypeScript.

let nome : string = 'Mattia';
let eta : number = 19;
let studyTypeScript : boolean = true;

// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => [ return "Ciao" + name)

const greet = (name : string) : string => { return "Ciao" + name}

// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => {return a + b }

//Il tipo di ritorno è number perchè restituisce la somma

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

const iva = (price: number): number => {
  return price * 1.22;
};

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

const stringLenght  = (a: string, b: string): number => {
  return (a + b).length;
};

// 7) Cos'è un Type Union e come si scrive?

//Un Union Type indica che una variabile può assumere più tipi diversi e si scrive usando il carattere |.

// 8) Crea una variabile che possa contenere un numero, null o undefined.

let x: number | null | undefined;

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.

type DayOfWeek = | "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica";

// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]

const numbers: number[] = [1, 2, 3];
const numbers2: Array<number> = [1, 2, 3];

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

const elements: [string, string, string, number, number] = [
  "a",
  "b",
  "c",
  1,
  2
];

// 12) Qual è la differenza tra type e interface?

/*type: può rappresentare: unione, intersezione, tipi primitivi, funzioni, tuple. Non può essere riaperto (non estendibile dopo la definizione).
interface: usata per descrivere oggetti e classi. Può essere estesa e può essere “riaperta” aggiungendo proprietà in più definizioni.*/

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

interface Person {
  firstname: string;
  lastname: string;
  age: number;
}

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

interface User {
  email: string;
  phone?: string;
}

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

interface Studente {
  nome: string;
  voto: number;
}

const studenti: Studente[] = [
  { nome: "Mario", voto: 28 },
  { nome: "Luisa", voto: 30 }
];

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

interface Veicolo {
  marca: string;
  modello: string;
}

interface Auto extends Veicolo {
  porte: number;
}

// 17) Crea un oggetto che implementi l'interfaccia Auto.

const miaAuto: Auto = {
  marca: "Fiat",
  modello: "Panda",
  porte: 5
};

// 18) Cosa sono i Generics in TypeScript?

//Sono una funzionalità che permette di creare tipi riutilizzabili e flessibili, passando un tipo come parametro.

// 19) È possibile avere più tipi generici in un'interfaccia?

interface Pair<A, B> {
  first: A;
  second: B;
}

// 20) Crea un interfaccia generica per una richiesta API 

interface ApiResponse<T> {
  data: T;
  status: number;
  success: boolean;
}
