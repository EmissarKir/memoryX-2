let name: string;
// let name: any; - ЛЮБОЙ ТИП ДАННЫХ
let age: number | string; // может быть и числом и строкой
let isStudent: boolean;
name = "5";
age = 45;
isStudent = false;
let hobbies: string[];
// let bags: number[];
let role: [number, string];

hobbies = ["1", "45", "65"];
role = [45, "45"];

type Person = {
  name: string;
  age: number;
};
/////////////
// Типизация boolean
const isFetching: boolean = false;
const isLoading: boolean = true;
// Типизация числа
const num: number = 45;
// Типизация строки
const str: string = "Dan";
const message: string = "IHello typerscript";
// Типизация массива numbers
const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Типизация массива numbers
const arrGeneric: Array<string> = ["1", "2", "3"];
const arrGeneric2: string[] = ["1", "2", "3"];
// Tuple
const contacts: [string, number] = ["Piter", 500];
// Any
let variable: any = 45;
variable = "Name";

function Basics(name: string): void {}
Basics("sdsdds");

// Never - когда функция возвращает ошибку и никогда не заканчивает свою работу или когда поcтоянно что-либо делает
function trowError(message: string): never {
  throw new Error(message);
}
function infinite(): never {
  while (true) {}
}
export default Basics;
// Type
type Login = string;
const str2: Login = "Gasd";

type ID = string | number;
const id1: ID = 45;
const id2: ID = "45";

type SomeType = string | null | undefined;
