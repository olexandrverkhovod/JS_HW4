//Написать функцию, которая вычисляет факториал переданного ей числа.

function factorial(a = +prompt('Введите число')) {
    let buf = 1;
    for (let i = a; i >= 1; i--) {
        buf *= i;
    }
    return buf;
}

alert(factorial());

