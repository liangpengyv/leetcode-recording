/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function (s) {
  const stack = []
  const sList = s.split('')
  for (let i = 0; i < sList.length; i++) {
    if (sList[i] === ']') {
      const tempStrList = []
      while (stack[stack.length - 1] !== '[') {
        tempStrList.unshift(stack.pop())
      }
      stack.pop()
      const tempStr = tempStrList.join('')

      const tempNumList = []
      while (!isNaN(parseInt(stack[stack.length - 1]))) {
        tempNumList.unshift(stack.pop())
      }
      let tempNum = parseInt(tempNumList.join(''))

      while (tempNum--) {
        stack.push(tempStr)
      }
    } else {
      stack.push(sList[i])
    }
  }
  return stack.join('')
}
// @lc code=end

const s = 'abc3[cd]xyz'
console.log(decodeString(s))
