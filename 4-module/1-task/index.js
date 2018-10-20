'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
  let list = document.createElement('ul');
  for (let item of friends) {
    let listItem = document.createElement('li');
    listItem.innerText += `${item.firstName} `;
    listItem.innerText += item.lastName;
    list.appendChild(listItem);
  }
  return list;
}
