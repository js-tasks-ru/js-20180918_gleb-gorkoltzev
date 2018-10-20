'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {str} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let temp = "",
			min = 0,
			max = 0,
			index = 0;
	while (index < str.length) {
		if (str[index].match(/[-\d.]/)) {
			temp += str[index];
		};
		if (str[index].indexOf(",") !== -1 || str[index].indexOf(" ") !== -1 || index === str.length - 1) {
			if (temp && +temp <= min) {
				min = +temp;
				temp = "";
			}
			if (temp && +temp >= max) {
				max = +temp;
				temp = "";
			}
			temp = "";
		}
		index++;
	}
	return {
		'min': min,
		'max': max
	}
}
