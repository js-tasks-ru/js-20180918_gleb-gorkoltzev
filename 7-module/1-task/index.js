'use strict';

/**
 * Функция декоратор makeLogging(fn, log), для функции fn
 * возвращающий обёртку, которая при каждом вызове добавляет её аргументы в массив log.
 * @param {Function} fn - декорируемая функция
 * @param {Array} log - массив для записи логов
 * @return {Function}
 */
function makeLogging(fn, log) {
  return function() {
    log.push(arguments);
    if (this) {
      return fn.apply(this, ...arguments);
    }
    return fn(...arguments);
  }
}
// 
// let log = [];
// let work = makeLogging(function (a,b) {return a + b;}, log);
// work(1,2);
//
// console.log(log[0][0] === 1, log[0][1] === 2);
