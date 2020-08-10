/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

var twoSum = function (nums, target) {
  let val = "";
 
  for (let j = 0; j < nums.length; j++) {
    if(val&&(val[0]<val[1])){
        break;
    }
    for (let k = 0; k < nums.length; k++) {
      if (nums[j] + nums[k] == target) {
        val = [j, k];
      }
    }
  }

  return val;
};

let retsult=twoSum([2, 7, 11, 15], 13);

//let retsult=twoSum([3,2,4], 6);

// let retsult=twoSum([3,3], 6);

console.log(retsult);
