/*
 * @lc app=leetcode id=6 lang=typescript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
function convert(s: string, numRows: number): string {
  const rows: string[] = new Array(numRows).fill("")

  let direction = 1
  let y = 0
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i)
    rows[y] += char
    
    if (numRows > 1) y += direction
    if (y >= numRows - 1 || y <= 0) direction *= -1
  }

  return rows.join("")
};
// @lc code=end

