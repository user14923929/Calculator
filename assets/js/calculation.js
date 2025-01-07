const form = document.querySelector('form');
const answer = document.querySelector('input[name="answer"]');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const num1 = parseInt(form.querySelector('input[name="num1"]').value);
    const num2 = parseInt(form.querySelector('input[name="num2"]').value);
    const operator = form.querySelector('select[name="operator"]').value;
    let result;

    switch (operator) {
        case 'None':
            result = 'Please select an operator';
            break;
        case 'Add':
            result = num1 + num2;
            break;
        case 'Subtract':
            result = num1 - num2;
            break;
        case 'Multiply':
            result = num1 * num2;
            break;
        case 'Divide':
            result = num1 / num2;
            break;
        case 'Sin':
            result = Math.sin(num1);
            break;
        case 'Cos':
            result = Math.cos(num1);
            break;
        case 'Tan':
            result = Math.tan(num1);
            break;
        case 'Square Root':
            result = Math.sqrt(num1);
            break;
        default:
            result = 'Please select an operator';
            break;
    }

    answer.value = result;
});