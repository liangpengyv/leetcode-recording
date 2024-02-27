/*
 * @lc app=leetcode.cn id=841 lang=javascript
 *
 * [841] 钥匙和房间
 */

// @lc code=start
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function (rooms) {
  const vis = [true]
  let num = 0
  const q = [0]
  while (q.length > 0) {
    let size = q.length
    while (size--) {
      const x = q.shift()
      num++
      for (const it of rooms[x]) {
        if (!vis[it]) {
          vis[it] = true
          q.push(it)
        }
      }
    }
  }
  return rooms.length === num
}
// @lc code=end
