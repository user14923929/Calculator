const form = document.querySelector('form');
const answer = document.querySelector('#answer');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const num1 = parseFloat(form.num1.value);
    const operator = form.operator.value;
    if (operator === 'Feet to Inches') {
        answer.value = num1 * 12;
    } else if (operator === 'Inches to Feet') {
        answer.value = num1 / 12;
    } else if (operator === 'Feet to Meters') {
        answer.value = num1 / 3.281;
    } else if (operator === 'Meters to Feet') {
        answer.value = num1 * 3.281;
    } else if (operator === 'Feet to Centimeters') {
        answer.value = num1 * 30.48;
    } else if (operator === 'Centimeters to Feet') {
        answer.value = num1 / 30.48;
    } else if (operator === 'Feet to Kilometers') {
        answer.value = num1 / 3281;
    } else if (operator === 'Kilometers to Feet') {
        answer.value = num1 * 3281;
    } else if (operator === 'Feet to Miles') {
        answer.value = num1 / 5280;
    } else if (operator === 'Miles to Feet') {
        answer.value = num1 * 5280;
    } else {
        answer.value = 'Invalid Operator';
            }
});