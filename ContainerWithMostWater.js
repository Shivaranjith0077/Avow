let MaxArea=function(nums){
    let low=0,high=nums.length-1,area=0,maxi=nums[0]
    while(low<high){
        if(nums[low]<=nums[high]){
            area = nums[low] * (high-low)
            maxi=Math.max(maxi,area)
            low++
        }
        else{
            area=nums[high] * (high-low)
            maxi=Math.max(maxi,area)
            high--
        }
    }
    return maxi
}
const nums=[1,8,6,2,5,4,8,3,7]
console.log(MaxArea(nums))