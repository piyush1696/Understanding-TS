function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let sample = getRandomElement(['aer','wqe']);


// Generics Constraints

function merge<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}

let person = merge(
    { name: 'John' },
    {},
    // 25 -->not assignable because 25 is not an object.
);

console.log(person);

// extends keyof 
function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
let str = prop({ name: 'John' }, 'name');
console.log(str);

// Use "extends" keyword to constrain the type parameter to a specific type.
// Use "extends keyof" to constrain a type that is the property of another object.


// Stack using Generics

class Stack<T>{
    private elements: T[] = [];

    constructor(private size: number){
    }

    showStack(): T[]{
        return this.elements;
    }

    isEmpty(): boolean{
        return this.elements.length === 0;
    }

    isFull(): boolean{
        return this.elements.length === this.size;
    }

    push(element: T): void{
        if (this.elements.length === this.size){
            throw new Error('The Stack is overflow..!');
        }
        this.elements.push(element);
    }

    pop(): T{
        if (this.elements.length === 0){
            throw new Error('The stack is empty..!');
        }
        return this.elements.pop();
    }
}

let exampleStack = new Stack<number>(6);

exampleStack.push(56);
exampleStack.push(2);
exampleStack.push(5);
exampleStack.push(78);
exampleStack.push(34);
exampleStack.push(8);
console.log(exampleStack.showStack());