/*
 * @lc app=leetcode id=6 lang=typescript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
function convert(s: string, numRows: number): string {
  const rows: string[] = new Array(numRows).fill("")

  let count = 0
  let up = true
  while (count < s.length) {
    for (let i = up ? 0 : 1; i < (up ? numRows : numRows - 1); i++) {
      const char = s.charAt(count)

      rows[up ? i : (numRows - i - 1)] += char

      count++
      if (count >= s.length) break
    }
    
    up = !up
  }

  return rows.join("")
};
// @lc code=end

