// Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.

function range(a = +prompt('Введите первое число диапазона'), b = +prompt('Введите второечисло диапазона')) {
    let min = a > b ? b : a,
        max = a < b ? b : a,
        buf = '';
    for (let i = min; i <= max; i++) {
        if (perfectNum(i) == true) {
            buf += i + ' ';
        }
    }
    return buf;
}

function perfectNum(a) {
    let buf = 0;
    for (let i = 1; i < a; i++) {
        if (a % i == 0) {
            buf += i;
        }
    }
    return buf == a;
}

alert(range());