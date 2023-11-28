// Basic types JS

let id: number = 10;
let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = "Hello";

// arrays
let ids: number[] = [1, 2, 3, 4, 5];
ids.push(10);
let arr: any[] = [1, true, "Hello"];

// Tuple
let person: [number, string, boolean] = [1, "Brad", true];

// Tuple Array
let employee: [number, string][];

employee = [
  [1, "Brad"],
  [2, "John"],
  [3, "Jill"],
];

// Union
let pid: string | number = 22;
pid = "22";

// Enum
enum Direction1 {
  Up = 0,
  Down,
  Left,
  Right,
}

console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction2.Up);
console.log(Direction2.Down);
console.log(Direction2.Left);
console.log(Direction2.Right);

// Objects
type TUser = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

console.log(user);

// Type Assertion
let cid: any = 1;
let customerId = <number>cid;
// let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(1, 2));

// Void
function log(message: string | number): void {
  console.log(message);
}

log("Hello");

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};

console.log(user1);

// Interface with functions
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

console.log(add(1, 2));
console.log(sub(1, 2));

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  //   private id: number; // private, public, protected
  //   protected id: number; // private, public, protected
  id: number; // private, public, protected
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const brad = new Person(1, "Brad Traversy");
const mike = new Person(2, "Mike Jordan");

console.log(brad.register());
console.log(mike);

// Subclasses
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name); // call parent constructor
    this.position = position; // add new property
  }
}

const emp = new Employee(3, "Shawn", "Developer");
console.log(emp.register());

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brad", "John", "Jill"]);

numArray.push(1);
strArray.push("Hello");

console.log(numArray);
console.log(strArray);
