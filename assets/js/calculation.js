const form = document.querySelector('form');
const answer = document.querySelector('input[name="answer"]');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = form.querySelector('input[name="input"]').value;
    let result;

    if (!inputValue) {
        result = "Please enter the math problem";
        answer.value = result;
    } else {
        try {
            result = Function('"use strict"; return (' + inputValue + ')')();
            answer.value = result;
        } catch (error) {
            result = "Invalid math expression";
            answer.value = result;
        }
    }
});