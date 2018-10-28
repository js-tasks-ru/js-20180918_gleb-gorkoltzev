'use strict';

// Напишите функцию highlight, которая для каждой строки tr таблицы:
// - Проставит класс available/unavailable, в зависимости от значения атрибута data-available у ячейки Status
// - Проставит аттрибут hidden, если такого атрибута нет вообще
// - Проставит класс male/female, в зависимости от содержимого ячекйки Gender
// - Установит inline-стиль style="text-decoration: line-through", если значение ячейки Age меньше 18

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let tableRows = table.querySelector('tbody').querySelectorAll('tr');
  for (let row of tableRows) {
    if (row.children[3].dataset.available) {
      if (row.children[3].dataset.available === "true") {
        row.classList.add('available');
      } else {
        row.classList.add('unavailable');
      }
    } else {
      row.setAttribute('hidden', '');
    }
    if (+row.children[1].textContent < 18) {
      row.style.textDecoration = "line-through";
    }
    row.classList.add((row.children[2].textContent === 'm') ? 'male' : 'female');
  }
}
