
// 快排，取中间一个值比对大小分割数组，分割后的继续分割，直到数组长度为1，拼接起来实现

const quickSort = function(arr = []) {
  let len = arr.length - 1, mid = Math.floor(len/2), arr1=[], arr2=[], midValue = arr.splice(mid, 1)[0]
  if(mid < 0){
    return arr
  }
  for(let i =0; i< arr.length; i++){
    if(arr[i] <= midValue){
      arr1.push(arr[i])
    }else{
      arr2.push(arr[i])
    }
  }
  return quickSort(arr1).concat([midValue],quickSort(arr2))
}

console.log(quickSort([1, 2, 7, 0,4, 3, 0]));