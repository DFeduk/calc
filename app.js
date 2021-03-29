function multiplication() {
    let first = parseFloat(document.getElementById('amount').value);
    let second = parseFloat(document.getElementById('interest').value);
    let result = document.getElementById('kek');
    if(isNaN(first) || isNaN(second)) {
        alert('Введите число!');
    } else {
        result.value = first * second;
    }
}
function division() {
    let first = parseFloat(document.getElementById('amount').value);
    let second = parseFloat(document.getElementById('interest').value);
    let result = document.getElementById('kek');
    if(isNaN(first) || isNaN(second)) {
        alert('Введите число!');
    } else {
        result.value = first / second;
    }
}
function addition() {
    let first = parseFloat(document.getElementById('amount').value);
    let second = parseFloat(document.getElementById('interest').value);
    let result = document.getElementById('kek');
    if(isNaN(first) || isNaN(second)) {
        alert('Введите число!');
    } else {
        result.value = first + second;
    }
}

function subtraction() {
    let first = parseFloat(document.getElementById('amount').value);
    let second = parseFloat(document.getElementById('interest').value);
    let result = document.getElementById('kek');
    if(isNaN(first) || isNaN(second)) {
        alert('Введите число!');
    } else {
        result.value = first - second;
    }
}

