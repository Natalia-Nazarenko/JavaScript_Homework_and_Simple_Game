'use strict';

//Rock, paper, scissors

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 4);
    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors';
    }
    if (randomNumber === 3) {
        computerChoice = 'paper';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
};

function getResult() {
    if (computerChoice === userChoice) {
        result = 'it is a draw &#128563;'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You won &#128578;';
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You lost &#128533;'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You lost &#128533;'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You won &#128578;'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You won &#128578;'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You lost &#128533;'
    }
    resultDisplay.innerHTML = result;
};

// Array with employees' names and salaries + calculation of average salary

let employees = [];
let salaries = [];
let confirmMessage = confirm('Do you want to add new employee?');

function addNewEmployee() {
    let name = prompt('Enter the name of the employee');
    let salary = +prompt(`Enter ${name}'s salary`);
    employees.push({ name, salary });
    salaries.push(salary);
};

while (confirmMessage == true) {
    addNewEmployee();
    confirmMessage = confirm('Do you want to add new employee?');
};

let averageSalary;
let sum = 0;
function calcAverageSalary() {
    for (let n = 0; n < salaries.length; n++) {
        sum += salaries[n];
    };
    averageSalary = (sum / salaries.length).toFixed(1);
}
calcAverageSalary();

employees.sort((a, b) => { return a.salary - b.salary });
salaries.sort((a, b) => a - b);

console.log(employees);
console.log(salaries);
console.log(averageSalary);


// Check if number is "perfect". Perfect number is equal to the sum of its positive divisors, excluding the number itself.

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників, не враховуючи самого числа. Наприклад, число 6.

// * let sum = 0 already was in the code above

function checkIfPerfect(numb) {
    for (let n = 1; n < numb; n++) {
        if (numb % n !== 0) continue;
        // console.log(n);  // All divisors of a number
        sum = sum + n;
    }
    console.log(sum);  // Sum of all divisors of a number
    if (sum === numb) {
        alert('Wow. This is a perfect number!');
    };
}

checkIfPerfect(28);

//6) Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

//When there are 2 arguments:
// let rectSquare = (width, height) => width * height;
// console.log(rectSquare(3, 4));

//When there is possibility of entering 1 argument:

function calcRectSquare(width, height) {
    if (arguments.length === 1) {
        let result = width ** 2;
        console.log(result);
    } else {
        let result = width * height;
        console.log(result);
    }
}
calcRectSquare(6, 8);


