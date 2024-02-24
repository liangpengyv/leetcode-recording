/*
 * @lc app=leetcode.cn id=649 lang=javascript
 *
 * [649] Dota2 参议院
 */

// @lc code=start
/**
 * @param {string} senate
 * @return {string}
 */
const predictPartyVictory = function (senate) {
  const list = senate.split('')
  const qR = []
  const qD = []
  for (let i = 0; i < list.length; i++) {
    if (list[i] === 'R') {
      qR.push(i)
    } else {
      qD.push(i)
    }
  }

  while (qR.length > 0 && qD.length > 0) {
    if (qR[0] < qD[0]) {
      qR.push(qR[0] + list.length)
    } else {
      qD.push(qD[0] + list.length)
    }
    qR.shift()
    qD.shift()
  }

  return qR.length > 0 ? 'Radiant' : 'Dire'
}
// @lc code=end

const senate = 'DRRDRDRDRDDRDRDR'
console.log(predictPartyVictory(senate))
