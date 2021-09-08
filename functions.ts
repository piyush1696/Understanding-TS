function mySum(num1:number, num2:number):number{
    return num1+num2;
}

console.log(mySum(9,8));// completely valid code.

// next change that we can provide is validation

function newSum(num1:any, num2:any):number{
    if (typeof num1=='string'){
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string'){
        num2 = parseInt(num2);
    }
    return num1 + num2;
}

console.log(newSum('23','234')); // again valid one.

// Optional parameters
function myString(firstName:string, lastName?:string):string{
    if (lastName==undefined){ // when not given any parameter the space will be filled with undefined.
        return firstName;
    }
    return firstName+' '+lastName;
}
console.log(myString('Deepak')); // without if output will be Deepak undefined
console.log(myString('Deepak', 'Shukla'));

// void returning function
function myVoid(name:string):void{
    console.log('Hello '+name+' sir');
}
myVoid('Deepak');

// Never type

function raiseError(message:string): never{
    throw new Error(message);
}

function reject(){
    return raiseError('Rejected');
}

var rejection = reject();
console.log(typeof rejection);