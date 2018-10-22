'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {String} -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let temp = "",
      result = [],
			index = 0;
	while (index < str.length) {
		if (str[index].match(/[-\d.]/)) {
			temp += str[index];
		};
		if (str[index].indexOf(",") !== -1 || str[index].indexOf(" ") !== -1 || index === str.length - 1) {
      result.push(+temp);
			temp = "";
		}
		index++;
	}
  alert(`min: ${Math.min(...result)}; max: ${Math.max(...result)}`);
	return {
		'min': Math.min(...result),
		'max': Math.max(...result)
	}
}
