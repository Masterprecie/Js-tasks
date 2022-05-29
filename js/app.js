// Question 1
document.querySelector('.group').innerHTML = 'Group Name:';
document.querySelector('.group').style.color = 'yellow';

document.querySelector('.name').innerHTML = 'Team Hercules';
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
console.log(person.bestMovie);

//Question 4 

let noun = 'Precious';
let verb = 'walks';
let adjective = 'slowly';

console.log(`${noun} ${verb} very ${adjective}`);
console.log(` He ${verb} to church ${adjective}`);
console.log(`${noun} friends ${verb} to school `);
console.log(`I love to ${verb} home from work ${adjective}`);
console.log(`${noun} and the boys ${verb} to the gym`);

//Question 5
alert('This is for Question 5');
let numerator= prompt ('Enter a value');
let denominator= prompt ('Enter a value');

function divide(numerator, denominator){
    return(numerator%denominator);
}
 console.log(numerator%denominator);


//Question 6

alert('This is for Question 6');
function solve(a,b,c) {
    a= prompt ('Enter a value for a');
    b= prompt ('Enter a value for b');
    c= prompt ('Enter a value for c');
    let result = (((-b) + Math.sqrt(Math.pow(b,2))-(4*a*c))/(2*a));
    let result2 = (((-b) - Math.sqrt(Math.pow(b,2))-(4*a*c))/(2*a));
    return `${result} and ${result2}`;
}
console.log(solve());


//Question 7

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
 
const wordBlanks = (`A ${myAdjective} ${myNoun} ${myVerb} across the road ${myAdverb}`);
console.log(wordBlanks);

//Question 8

const pi = 3.142;
let r= 9;
function areaCircle() {
    return pi*(Math.pow(9,2));
}
console.log(Math.ceil(areaCircle()));

//Question 9

let principal = 8200;
let rate = 17.5;
let time = 2.5;
const simpleInterest = principal*rate*time/100

console.log(simpleInterest);

//Question 10

let num1= 10;
let num2= 4;

console.log(num1%num2);

//Question 11

//Data 1

let meritWeight= 78;
let meritHeight= 1.69;
let nutJobWeight= 92;
let nutJobHeight= 1.95;

let meritBmi = meritWeight/(meritHeight*meritHeight);
console.log(`Merit's BMI = ${meritBmi}`);

let nutJobBmi = nutJobWeight/(nutJobHeight*nutJobHeight);
console.log(`Nutjob's BMI = ${nutJobBmi}`);

//Data 2

let meritNewWeight= 85;
let meritNewHeight= 1.76;
let nutJobNewWeight= 95;
let nutJobNewHeight= 1.88;

let newMeritBmi= meritNewWeight/(meritNewHeight*meritNewHeight);
console.log(`Merit's New BMI = ${newMeritBmi}`);

let newNutJobBmi= nutJobNewWeight/(nutJobNewHeight*nutJobNewHeight);
console.log(`Nutjob's New BMI = ${newNutJobBmi}`);


const meritHigherBMI = meritBmi > nutJobBmi && newMeritBmi > newNutJobBmi;
console.log(meritHigherBMI);
