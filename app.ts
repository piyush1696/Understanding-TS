document.getElementById('new').innerHTML = 'Welcome Deepak Sir';
console.log(w);
var w = () => 'Arrow Funtion';
console.log(w());

console.log(declare);
function declare(){ // I don't know why it is showing like this
    console.log('Declared Function');
    // Am i visible or not
}
declare();
// Who knows what goes inside

var ex = 23;
console.log(ex);

var myString : string = 'Hello Deepak Sir';
var myNum : number = 1998;
var myBool : boolean = true;
var myArr : string[] = ['Creative', 'Smart', 'less confident but filled with superpowers'];
var myNumArr : number[] = [12,34,54,557,76,4];
console.log(myArr,myBool,myNum,myNumArr,myString);
// myString = 45;
var deepak = 'owner';
// deepak = 45; error because of type inference.

var newArr : Array<string> = ['kisdfih', 'sef', 'sefwer'];
console.log(newArr);

let value : (string|number|boolean)[] = ['Deepak',56,null,true,null,undefined]//Doubt
console.log(value);

myArr.push('revised');

console.log(myArr);

let newTuple : [string, number] = ['Real', 4];//we cannot assign extra values i.e. more than 2 and types apart from the defined ones and it must be in the same count and sequence.


let tupleArr : [string, number][] = [['deepak', 98],['rensjdbf', 76]];
console.log(tupleArr, newTuple);

//Enumerations
enum UserResponse {
    No = 0,
    yes = 4,
    repeat = 'yes', 
  }
   
  function respond(recipient: string, message: UserResponse): void {
    // ...
    console.log(recipient, message)
  }
   
  respond("Princess Caroline", 45);


enum rankings{
    'deepak'=3,
    rupam,
    'shubham' = 4, 
    mohit, 'naveen' = 5, hrishabh
};
console.log(rankings[5]);
console.log(rankings[4]);
console.log(rankings[1]);
console.log(rankings['hrishabh']);
console.log(rankings['deepak']);
console.log(rankings);

enum loc{
    'deepak' = 'Anuppur',
    shubham = 'Khargon',
    shivam = 'Khargon',
    mohit = 'Ahemdabad',
}
console.log(loc);

enum FileAccess {
    // constant members
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // computed member
    G = "123".length,
  }
console.log(FileAccess);

let classTeacher = 90;
console.log(typeof classTeacher);
let newTeacher = <number> classTeacher;
let example = classTeacher as number;
console.log(typeof newTeacher);
console.log(typeof classTeacher);