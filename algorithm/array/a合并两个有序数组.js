// 给你两个有序整数数组 nums1 和 nums2 ，请你将 nums2 合并到 nums1 中，使 num1 成为⼀
// 个有序数组。
// 说明:
// 初始化 nums1 和 nums2 的元素数ᰁ分别为 m 和 n 。 你可以假设 nums1 有⾜够的空间（空间
// ⼤⼩⼤于或等于 m + n ）来保存 nums2 中的元素。

// 输⼊:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6], n = 3
// 输出: [1,2,2,3,5,6]

// 自带的方法效率也很高，sort 中数组长度<=22使用的是插入排序，大于的使用快排
var merge = function (nums1, m, nums2, n) {
  // nums1 = nums1.slice(0, m)
  nums1.length = m;
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
  console.log("nums1", nums1);
};
// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

// 双指针，省了点内存，从后往前填充
var merge = function (nums1, m, nums2, n) {
  // len 最终数组，len1 nums1, len2 nums2
  let len = m + n -1
  let len1 = m -1 
  let len2 = n -1
  // 比较len2中数据往len中加
  while(len2 >= 0) {
    // len1中数被消耗完直接将len2 放入
    if(len1 < 0) {
      nums1[len--] = nums2[len2--]
      continue
    }
    // 比较末尾数据大的直接插入
    nums1[len--] = nums2[len2] >= nums1[len1] ? nums2[len2--] : nums1[len1--]
  }
  console.log(nums1);

};
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

