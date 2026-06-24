var largestAltitude = function(gain) {
  
  let currentAltitud = 0;
  let maxAltitud = 0
  
    for (altitud in gain){
      currentAltitud += gain[altitud]
      console.log(currentAltitud)
      maxAltitud = Math.max(currentAltitud, maxAltitud)
    }
  return maxAltitud
};


console.log(largestAltitude([-5,1,5,0,-7]))


/*Example 1:

Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

*/