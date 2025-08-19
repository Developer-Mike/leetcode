/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const charmap: Map<string, number> = new Map()
  let min: number = -1
  let max: number = 0
  
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i)

    if (charmap.has(char)) {
      const length = (i - 1) - min
      if (length > max) max = length

      const newMin = charmap.get(char)!
      if (newMin > min) min = newMin
    }

    charmap.set(char, i)
  }

  const current = s.length - 1 - min
  return max > current ? max : current
};
// @lc code=end

