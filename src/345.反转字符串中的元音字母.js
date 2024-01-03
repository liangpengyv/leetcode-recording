/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  const list = s.split('')
  let p1 = 0
  let p2 = list.length - 1

  while (p1 < p2) {
    if (!vowels.includes(list[p1])) {
      p1++
      continue
    }
    if (!vowels.includes(list[p2])) {
      p2--
      continue
    }

    const temp = list[p1]
    list[p1] = list[p2]
    list[p2] = temp
    p1++
    p2--
  }

  return list.join('')
}
// @lc code=end

console.log(reverseVowels('hello'))
