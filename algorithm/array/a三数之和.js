// 给你⼀个包含 n 个整数的数组 nums ，判断 nums 中是否存在三个元素 a ， b ， c ，使得 a
// + b + c = 0 ？请你找出所有满⾜条件且不᯿复的三元组。
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]
// const twoSum = function(nums, target) {
//  let map = new Map()
//  for(let i = 0; i< nums.length; i++) {
//  let k = target-nums[i]
//  if(map.has(k)) {
//  return [map.get(k), i]
//  }
//  map.set(nums[i], i)
//  }
//  return [];
// };
// 注意： 答案中不可以包含᯿复的三元组。
// 示例
// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
// 满⾜要求的三元组集合为：
// [
//  [-1, 0, 1],
//  [-1, -1, 2] ]
