/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function(nums) {
    
    //Generate new array with the sum of pairs
/*  const sumArr = nums.map((num, i) => (num + nums[i + 1]))
  
  sumArr.pop()

  console.log(sumArr)*/
  
    const pairSum = [0, 0]
    let sumResult = 0
    let currentSum = 0
  
    for(num in nums){
      sumResult = nums[num] + nums[num - 1]
     if(sumResult < currentSum){
       pairSum = [nums[num], nums[num - 1]]
     }
    }
  console.log(sumResult) 

  

    // Take the lowest sum / pair
    // Replace the numbers with the sum result in the original array
  
  //repeat the action until the original array is sorted from less to more
    // return the number of actions


}

minimumPairRemoval([5,2,3,1])

/*
Input: nums = [5,2,3,1]

Output: 2

Explanation:

The pair (3,1) has the minimum sum of 4. After replacement, nums = [5,2,4].
The pair (2,4) has the minimum sum of 6. After replacement, nums = [5,6].
The array nums became non-decreasing in two operations.

*/