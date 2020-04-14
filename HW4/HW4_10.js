//Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс».

function timeDifference(a, b, c, d, e, f) {
    let time1 = time(a, b, c),
        time2 = time(d, e, f),
        difference = time1 > time2 ? time1 - time2 : time2 - time1;
    return timeinseconds(difference);
}

function timeinseconds(a) {
    let sec = a % 60;
    let min = ((a - sec) / 60) % 60;
    let hr = (a - sec - min * 60) / 3600;

    return hr + " : " + min + " : " + sec;
}

function time(a, b, c) {
    return a * 3600 + b * 60 + c;
}

alert(timeDifference(20, 14, 3, 20, 15, 30));