'use strict';

var inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';


/**
 * Найти min/max в произвольной строке
 * @param   {String} входные данные
 * @returns {{min:Number, max:Number}}  объект
 */
function getMinMax(string) {
	let temp = "",
			min = 0,
			max = 0,
			index = 0;
	while (index < string.length) {
		if (string[index].match(/[-\d.]/)) {
			temp += string[index];
		};
		if (string[index].indexOf(",") !== -1 || string[index].indexOf(" ") !== -1 || index === string.length - 1) {
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
