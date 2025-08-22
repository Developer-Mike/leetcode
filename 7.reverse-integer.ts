/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
function reverse(x: number): number {
  const sign = Math.sign(x)
  if (sign < 0) x = -x

  const reversed = parseInt(
    x.toString()
    .split("").reverse().join("")
  )

  if (reversed > Math.pow(2, 31)) return 0
  return sign * reversed
};
// @lc code=end

