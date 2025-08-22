/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
function reverse(x: number): number {
  const sign = Math.sign(x)
  if (sign < 0) x = -x

  const digits = Math.ceil(Math.log10(x))
  let reversed = 0
  for (let i = 0; i < digits; i++) {
    const oppositeOffsetDecimal = x / Math.pow(10, digits - i)
    const oppositeDecimal = oppositeOffsetDecimal - Math.floor(oppositeOffsetDecimal)
    const oppositeDigit = Math.floor(oppositeDecimal * 10)
    reversed += Math.pow(10, i) * oppositeDigit
  }

  return sign * reversed
};
// @lc code=end

