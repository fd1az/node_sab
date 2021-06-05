let string = 'alsñkdnañsldgkjnasñdlfknasñdlfknasñldkfn';
let miTypeString: string;

let obj = {
  prop1: 'hola',
  prop2: 120,
};

let array: (string | number | (() => void) | boolean | object | [])[] = [
  'lalala',
  32132,
  () => {},
];

array.push(true);

function printNumbers(array: number[]): void {
  array.forEach((e) => console.log(e));
}

let arr1 = ['1', '2', '3'];
let arr2 = [1, 2, 3];

printNumbers(arr2);

function doble(num: number): number {
  return num * 2;
}

let doblede20 = doble(20);

console.log(doblede20);

let persona: { name: string; age?: number } = {
  name: 'Victor',
};

interface Editor {
  name: string;
  age?: number;
}

interface Admin {
  name: string;
  age?: number;
  edit: boolean;
}

let persona2: Editor = {
  name: 'Victor',
};

let persona3: Editor = {
  name: 'Victor',
};

let persona4: Admin = {
  name: 'Victor',
  age: 20,
  edit: true,
};

type User = Editor | Admin;

function printObj(obj: User) {
  if (obj.age) {
    console.log(obj.age * 2);
  }
}

printObj(persona4);

interface Movil {
  avanzar(): string;
}

interface Auto {
  chasis: string;
  motor: string;
  avanzar(): string;
}

interface Bicicleta {
  nombre: string;
  cuadro: string;
  rodado: number;
  avanzar(): string;
}

let auto1: Auto = {
  chasis: '12321321',
  motor: '21a3sd21as3d5a1sd',
  avanzar: () => {
    return 'Auto avanzo';
  },
};

let bici1: Bicicleta = {
  nombre: 'piola',
  cuadro: '21a3sd21as3d5a1sd',
  rodado: 26,
  avanzar: () => {
    return 'Bici avanzo';
  },
};

function prinMovil(movil: Movil) {
  console.log(movil.avanzar());
}

prinMovil(auto1);
prinMovil(bici1);

function printArray<T>(array: T[]): void {
  array.forEach((element) => {
    console.log(element);
  });
}

let arrayNum = [1, 2, 3];
let arrayString = ['1', '2', '3'];

printArray<number>(arrayNum);
printArray<string>(arrayString);
