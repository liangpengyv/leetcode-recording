/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  if (digits === '') {
    return []
  }

  const dict = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }

  const getNewList = (listA, listB) => {
    const newList = []
    for (let i = 0; i < listA.length; i++) {
      for (let j = 0; j < listB.length; j++) {
        newList.push(listA[i] + listB[j])
      }
    }
    return newList
  }

  const digitList = digits.split('')
  let curList = dict[digitList[0]]
  for (let i = 1; i < digitList.length; i++) {
    const nextList = dict[digitList[i]]
    curList = getNewList(curList, nextList)
  }

  return curList
}
// @lc code=end
