const sumPlus = (firstNumber,secondNumber) =>  firstNumber + secondNumber;
const sumMinus = (firstNumber,secondNumber) => firstNumber - secondNumber;
const sumDivide = (firstNumber,secondNumber) => firstNumber / secondNumber;
const sumMultiply = (firstNumber,secondNumber) => firstNumber * secondNumber;

 function calculator () {
     const firstNumber =  parseFloat(prompt('Введите первое число'));
     const secondNumber = parseFloat(prompt('Введите второе число'));
     const operation =    prompt('Введите действие');

        if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert('Вы ввели не число');
        return;
    }

    if (operation === '+' )     {
        alert(sumPlus(firstNumber,secondNumber));
    }else if(operation === '-') {
        alert(sumMinus(firstNumber,secondNumber));
    }else if(operation === '/') {
        alert(sumDivide(firstNumber,secondNumber));
    }else if (operation === '*') {
        alert (sumMultiply(firstNumber,secondNumber));
    }else {
        alert('Вы ввели не коректную операцию');
    }

}

calculator();


