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
  const arrStr = strs.map(item => item.split(''))
  const short = arrStr.reduce((pre, next) => {
    return next.length < pre.length ? next : pre
  })
  for(let i = short.length - 1; i >= 0; i--) {
    console.log(i)
  }
  return ''
};
longestCommonPrefix(["flower","flow","flight"])