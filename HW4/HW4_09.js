//Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

function timeinseconds(a) {
    let sec = a % 60;
    let min = ((a - sec) / 60) % 60;
    let hr = (a - sec - min * 60) / 3600;

    return hr + " : " + min + " : " + sec;
}
alert(timeinseconds(72782));