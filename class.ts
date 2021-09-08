class Family{
    public name:string;
    protected age:number;
    private series : number;

    constructor(name:string, age:number, series:number){
        this.name = name;
        this.age = age;
        this.series = series;

        console.log('User '+ this.name + ' is created');
    }

    register(){
        console.log(this.name + ' is now registered.');
    }

}

let dominic = new Family('Dominic', 32, 9);
dominic.register();

class Points{
    public x : number;
    public y : number;

    constructor(x:number, y = 0){
        this.x = x;
        this.y = y;
    }
}


class Person{
    private _firstName: string;// By default it would have been public.
    private _lastName: string;
    private _age: number;
    readonly birthDate: Date; // Immutable property.

    constructor(_firstName: string, _lastName: string, birthDate: Date){
        this._firstName = _firstName;
        this._lastName = _lastName;
        this.birthDate = birthDate;
    }

    // Method
    getDetails(): string{
        return `I am ${this.fullName}.`
    }

    // getFullName(): string{
    //     return (`New Person created is: ${this._firstName} ${this._lastName}`);
    // }

    // getSrN(): string{
    //     return (`Serial number of ${this._firstName} is ${this.serialNumber}` )
    // }

    // Accessor and mutator.
    get age(){
        return this._age;
    }

    set age(theAge: number){
        if (theAge<=0 || theAge>=100){
            throw new Error('The age is invalid.');
        }
        this._age = theAge;
    }

    get fullName(){
        return `${this._firstName} ${this._lastName}`;
    }

    set fullName(name: string){
        let parts = name.split(' ');
        if (parts.length != 2){
            throw new Error('Invalid Name format: first last');
        }
        this._firstName = parts[0];
        this._lastName = parts[1];
    }
}


let p1 = new Person('Deepak', 'Shukla', new Date(1998, 6, 31));
// console.log(p1.getFullName());
// console.log(p1.getSrN());
console.log(p1.birthDate);
console.log(p1.fullName);
console.log(p1.age);
p1.age = 23;
console.log(p1.age);
console.log(p1.getDetails());


class Employee extends Person{
    constructor(
        private _post: string, 
        private _salary:number,
        firstName: string,
        lastName: string,
        birth: Date,
        ){
        super(firstName,lastName, birth);
    }

    // Method overriding
    getDetails(): string{
        return super.getDetails() + ` I am working as an ${this._post} & my salary is ${this._salary} per month.`
    }
}

const e1 = new Employee('Intern', 15000,'Naveen', "bansal", new Date(1988, 5, 23));
e1.age = 33;
console.log(e1.fullName);
console.log(e1.birthDate);
console.log(e1.age);
console.log(e1.getDetails());


// Function Overloading

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: string, b: number): string;
function add(a: any, b: any): any{
    return a + b;
}

console.log(add(3,40));
console.log(add('Valid', ' function'));
console.log(add('Bond',7)); // Doubt


function add2(a: any, b: any):any{
    return a+b;
}
console.log(add2('new', 4));


// Method Overloading

class Counter {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    }
}
let counter = new Counter();

console.log(counter.count()); // 1
console.log(counter.count(20)); // array[1-20]

// constructor overloading

interface IBox {    
    x : number;
    y : number;
    height : number;
    width : number;
}

class Box {
    public x: number;
    public y: number;
    public height: number;
    public width: number;

    constructor();
    constructor(obj: IBox); 
    constructor(obj?: any) {    
        this.x = obj && obj.x || 0
        this.y = obj && obj.y || 0
        this.height = obj && obj.height || 0
        this.width = obj && obj.width || 0;
    }   
}

// better way of constructor overloading

class Myclass{
    private value: string;
    
    static fromSingleValue(value: string): Myclass{
        var result = new Myclass;
        result.value = value;
        return result;
    }

    static fromTwoValues(first: string, second: string): Myclass{
        var result = new Myclass;
        result.value = first + second;
        return result;
    }
}

// Abstract Classes

abstract class Book{
    constructor(private name: string, private genre: string){
    }

    abstract getSerialN(): string;
    get genrePlusName(): string{
        return `${this.name} is of the genre ${this.genre}`;
    }
}

interface shelf{
    serialNumber: number;
    pages: number;
}

class Novels extends Book implements shelf{
    constructor(name: string, genre: string, public serialNumber: number, public pages: number){
        super(name, genre);
    }
    getSerialN(): string{
        return `The serial number of this book is ${this.serialNumber} having ${this.pages} number of pages.`;
    }
    
}

var book1 = new Novels('DragonTales', 'Fantasy', 1234, 230);
console.log(book1.genrePlusName);
console.log(book1.getSerialN());
console.log(book1 instanceof Novels);

