/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) {
  let num = parseInt(m);
  if (num < 0 || n < 0) {
    return;
  }
  for (let x = 1; x < parseInt(n); ++x) {
    m *= num;
  }
  return m;
}
