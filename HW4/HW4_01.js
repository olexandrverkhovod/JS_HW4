// Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

function nums(a, b) {
    return (a < b ? -1 : 1);
}

alert(nums(3, 4));