/**
 * 
 * @param nums 
 * @param target 
 * 
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 */
function twoSum(nums: any, target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    if (nums.includes(target - nums[i])) {
      let tari = nums.findIndex((item: any) => item === target - nums[i])
      if (i !== tari) {
        return [i, tari]
      }
    }
  }
  return []
};
// console.log(twoSum([3, 3], 6))

/**
 * 
 * @param x 
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 * 输入: 123  输出: 321
 * 输入: -123 输出: -321
 * 输入: 120  输出: 21
 */
function reverse(x: number): number {
  const num = String(x).split('')
  const sign = num.filter(item => isNaN(Number(item)))
  const numArr = num.filter(item => item !== sign[0])
  function reset(arr: any): [] {
    if (arr[0] == 0) {
      let newArr = arr.concat()
      newArr.shift()
      return reset(newArr)
    }
    return arr
  }
  const newNum = Number(reset(numArr.reverse()).join(''))
  if (newNum > Math.pow(2,31)) return 0
  return sign.length ? Number(sign[0] + newNum) : Number(newNum)
};
// console.log(reverse(15342369))

/**
 * 
 * @param x 
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 */
// function isPalindrome(x: number): boolean {
//   const strNum = String(x)
//   const reverseNum = Number(strNum.split('').reverse().join(''))
//   return x === reverseNum
// };

// 你能不将整数转为字符串来解决这个问题吗？
function isPalindrome(x: number): boolean {
  return false
};
// console.log(isPalindrome(1221))

/**
 * 
 * @param strs 
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 */
function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return ''
  const arrStr = strs.map(item => item.split(''))
  const short = arrStr.reduce((pre, next) => {
    return next.length < pre.length ? next : pre
  })
  for(let i = short.length; i >= 0; i--) {
    const prefix = short.slice(0, i).join('')
    if (strs.every(item => item.substr(0, i) === prefix)) {
      return prefix
    }
  }
  return ''
};
// console.log(longestCommonPrefix(["flower","flow","flowight"]))

/**
 * 
 * @param s 
 * 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 通常情况下，罗马数字中小的数字在大的数字的右边
 * I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
 * X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
 * C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 * 
 */
function romanToInt(s: string): number {
  const baseSort: any = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
  const baseMatch: any = {
    'I': '1',
    'V': '5',
    'X': '10',
    'L': '50',
    'C': '100',
    'D': '500',
    'M': '1000'
  }
  const strArr = s.split('')
  const result: any = []
  const jump: any = []
  strArr.forEach((item, index: number) => {
    // 特殊需相减的数处理后 跳过
    if (jump.includes(index)) return
    const curIndex: any = baseSort.findIndex((b: any) => b === item)
    const nextIndex: any = baseSort.findIndex((b: any) => b === strArr[index + 1])
    // 特殊需相减的数
    if (nextIndex != -1 && nextIndex > curIndex) {
      result.push(baseMatch[baseSort[nextIndex]] - baseMatch[item])
      jump.push(index + 1)
      return
    }
    result.push(baseMatch[item])
  })
  return result.map((item: any) => Number(item)).reduce((pre: any, next: any) => {
    return pre += next
  }, 0)
};
// romanToInt('MCMXCIV') // 1994
// romanToInt('LVIII')