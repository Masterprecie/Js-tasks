// Question 1

document.querySelector('.group').style.color = 'yellow';
document.querySelector('.name').style.color = 'blue';


// Question 2

let teamHercules= ['asafesquare', 'Precious', 'Rhema', 'Edward', 'Victor', 'Michael'];
console.log(teamHercules[1]);

//Question 3

let person= {
firstName: 'Precious',
lastName:'Ikpa',
bestMovie:'3 Idiots',
bestFood:'Rice and Beans',
complextion:'Fair',
birthMonth:'May',
state:'Imo',
groupName:'Team Hercules',
};
console.log(person.state);

//Question 4 

let noun = 'Precious';
let verb = 'sings';
let adjective = 'slowly';

// console.log('The way ${noun} ${verb} is so ${adjective}');

console.log('Precious' + ' ' +  'sings' + ' ' + 'slowly' + ' ' + 'in' + ' ' + 'the' + ' ' + 'bus');
console.log('He' + ' ' +  'sings' + ' ' + 'slowly' + ' ' + 'in' + ' ' + 'the' + ' ' + 'bus');
console.log('The' + ' ' +  'boys' + ' ' + 'were' + ' ' + 'singing' + ' ' + 'slowly');
console.log('I' + ' ' +  'love' + ' ' + 'singing' + ' ' + 'slowly' + ' ' + 'at' + ' ' + 'home');
console.log('Precious' + ' ' +  'can' + ' ' + 'sing' + ' ' + 'slowly' + ' ' + 'somethings');

//Question 5

// let a= prompt ('Enter a number');
// let b= prompt ('Enter a number');
let numer1= 5;
let number2= 3;
function divide(number1,number2) {
    return(number1/number2);
}
    console.log(numer1%number2);


//Question 6

let a = 2;
let b = 3;
let c = 4;

function equation (a,b,c) {
    let eqn = b*b - 4*a*c;
    let division= eqn/(2*a);
    const result =Math.sqrt(-division);
    x=-b+result;
    y=-b-result;
    console.log(x);
    console.log(y);
}
equation (2,3,4);

//Question 7

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
 
const wordBlanks = ('the ${myAdjective} ${myNoun} ${myVerb} ${myAdjerb}');
console.log(wordBlanks);

//Question 8

const pi = 3.142;
let r = 9;

function areaCircle(pi, r) {
    return(pi*r*r)
}
console.log(pi*r*r);

//Question 9

const money = 8200;
const percent= 17.5;
const years= 2.5;

const interest = 8200*2.5*(17.5/100);
console.log(interest);

//Question 10

let num1= 10;
let num2= 4;

console.log(num1%num2);

//Question 11

//Data 1

let meritWeight= 78;
let meritHeight= 1.69;
let nutJobWeighht= 92;
let nutJobHeight= 1.95;

let testDataMerit= meritWeight/(meritHeight*meritHeight);
let testDataNutJob= nutJobHeight/(nutJobHeight*nutJobHeight);


console.log(testDataMerit, testDataNutJob);
if (testDataMerit > testDataNutJob){
    console.log(true);
} else{
    console.log(false);
}

//Data 2

let meritNewWeight= 85;
let meritNewHeight= 1.76;
let nutJobNewWeighht= 95;
let nutJobNewHeight= 1.88;

let newTestDataMerit= meritNewWeight/(meritNewHeight*meritNewHeight);
let newTestDataNutJob= nutJobNewHeight/(nutJobNewHeight*nutJobNewHeight);

console.log(newTestDataMerit, newTestDataNutJob);
if (newTestDataMerit > newTestDataNutJob){
    console.log(true);
} else{
    console.log(false);
}