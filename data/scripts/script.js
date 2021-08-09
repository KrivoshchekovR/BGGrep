//let m
//m = prompt('Введите ваше имя', 'Графоуни');
let login = prompt('Введите ваш Логин', 'Admin');
let pas;
if (login === 'Admin') {
    pas = prompt('Ваш пароль пожалуйста', '');
    if (pas === 'Я главный') {
        alert('Добро пожаловать Государь!');
    } else {
        if (pas === null) {
            alert('Отмена');
        } else {
            alert('Не верный пароль');
        }
    }
} else {
    if (login === null) {
        alert('Отмена');
    } else {
        'Я вас не знаю'
    }
}