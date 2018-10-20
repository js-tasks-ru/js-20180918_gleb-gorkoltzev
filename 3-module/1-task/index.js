/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let outputResult = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i]['age'] <= age) {
      if (outputResult !== "") {
        outputResult += "\n";
      }
      outputResult += `${data[i].name}, ${data[i].balance}`;
    }
  }
  outputResult.slice(outputResult.lastIndexOf('\n'), outputResult.lastIndexOf('\n') + 2);
  return outputResult;
}
