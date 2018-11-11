'use strict';

/**
 * Эту функцию трогать не нужно
 */
function print (text) {
    alert(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid (name) {
  if (name !== "" && name.length >= 4 && name.indexOf(" ") === -1) {
    return true;
  } else {
    return false;
  }
}

function sayHello () {
    let userName = 'Ilia';

    if (isValid(userName)) {
        print('Welcome back, ' + userName + '!');
    } else {
        print('Некорректное имя');
    }
}

sayHello();
