

function test() {
    console.log('Start of ths script');
    var x = 100;
    console.log(x);
    let myValue = x + x / 2;
    let isOdd = x % 2 == 0
    console.log(typeof isOdd);
    let myNumber = NaN;
    console.log(typeof myNumber);
    let variable1 = "ana";
    let variable2 = "are mere";
    console.log(variable1 + ' ' + variable2);
    let y = "2";
    console.log(x + y);
    const T = true
    const F = false
    console.log(( T && (F || T )) || F);
    let num1 = 2;
    let num2 = 5;
    console.log(num1 + " is " + (num1 > num2 ? 'greater' : 'smaller') + " than " + num2);
    console.log(`${num1} is ${(num1 > num2 ? "greater" : "smaller")} than ${num2}`);
}

const add = function (a = 100, b = 200) {
    console.log(arguments);
    return a + b;
}

console.log(add(400, 500));
// console.log(add);

const arrowAdd = (a = 100, b = 600) => a + b;
const arrowSubtract = (a, b) => a - b;
console.log(arrowAdd(500,600));
console.log(typeof arrowAdd);

function evaluate(x, y, f) {
    return f(x, y);
}

console.log(evaluate(100, 200, arrowAdd));
console.log(evaluate(100, 200, arrowSubtract));

const arrayFunc = () =>  {
    const myfunc = (a,b,c) => a + b * c;
    let myarr = [1,2,3];
    let mixArr = [6, 'ana are mere', myarr, myfunc];
    return mixArr;
}

console.log(arrayFunc()[3](1,5,7));
console.log(arrayFunc()[2][1]);

function arrayStuff() {
    const myArray = [];
    myArray.push("ana");
    myArray.push("andrei");
    myArray.push("andreea");
    console.log(myArray);
    console.log(myArray.pop());
    console.log(myArray);
    myArray.unshift("gabriel");
    myArray.unshift("daniela");
    console.log(myArray);
    console.log(myArray.shift());
    console.log(myArray);

    let i = 0;
    while (i < myArray.length) {
        console.log(myArray[i]);
        i++;
    }

    let j = 0;
    do  {
        console.log(myArray[j]);
        j++;
    }
    while(j < myArray.length);

    for(let i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }

    for (const val of myArray) {
        console.log(val);
    }
}

const animal1 = {
    type: "dog",
    name: "toby",
    age: 5,
    race: "labrador",
    eat() {
        console.log(`My ${this.type} is called ${this.name} and has ${this.age} years. It is a ${this.race} that is well fed now`);
    }
}

animal1.eat();

const a1 = new Animal("dog", "toby", 5, "labrador");
console.log(a1);
a1.printAnimal();
console.log(a1.getName());
a1.color = "Brown";
const d1 = new Dog("sophie", 5, "labrador");
d1.color="White";
console.log(d1);
d1.printAnimal();