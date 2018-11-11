/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find (obj, value) {
  let resultPath = "",
      pathsArr = [];
  for (let key in obj) {
    resultPath = key + ".";
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      let result = find(obj[key], value);

      if (result) {
        resultPath += result;
        pathsArr.push(resultPath);
      }
      continue;
    }
    if (obj[key] === value) {
      return key
    } else {
      return false;
    };
  }
  if (pathsArr.length === 1) {
    return pathsArr[0];
  } else if (pathsArr.length === 0) {
    return null;
  }
  return pathsArr;
}
