var maxSubArray = function(nums) {
    if(nums.length<=1){
        return nums[0]
    }
    let sum=0,maxi=nums[0]
    for(let num of nums){
        if(sum<0){
            sum=0
        }
        sum+=num
        maxi=Math.max(maxi,sum)
    }
    return maxi
};
const nums=[5,4,-1,7,8]
console.log(maxSubArray(nums))
