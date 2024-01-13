/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = function (chars) {
  let a = 1
  let b = 1
  let n = 1

  const handle = () => {
    if (n > 1 && n < 10) {
      chars[b] = n.toString()
      b++
    } else if (n >= 10) {
      for (const i of n.toString().split('')) {
        chars[b] = i
        b++
      }
    }
  }

  while (a < chars.length) {
    if (chars[a] === chars[a - 1]) {
      n++
    } else {
      handle()
      chars[b] = chars[a]
      b++
      n = 1
    }
    a++
  }
  handle()
  return b
}
// @lc code=end

const chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c']
console.log(compress(chars))
