// 给定⼀个整数数组 nums 和⼀个⽬标值 target ，请你在该数组中找出和为⽬标值的那 两个 整
// 数，并返回他们的数组下标。
// 你可以假设每种输⼊只会对应⼀个答案。但是，你不能᯿复利⽤这个数组中同样的元素。
// 示例
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

var twoSum = function(nums, target) {
  const dataMap = {}
  for(let i = 0; i<nums.length; i++){
    if(dataMap[nums[i]] || dataMap[nums[i]] === 0){
      return [dataMap[nums[i]], i]
    }else{
      dataMap[(target - nums[i])] = i
    }
  }
}