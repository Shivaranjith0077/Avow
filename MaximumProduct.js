let maxProduct=function(nums){
    let prefix=1,suffix=1,maxi=nums[0]
    for(let i=0;i<nums.length;i++){
        if(prefix==0) prefix=nums[i]
        else prefix*=nums[i]
        if(suffix==0) suffix=nums[nums.length-1-i]
        else suffix*=nums[nums.length-1-i]
        maxi=Math.max(maxi,Math.max(prefix,suffix))
    }
    return maxi
}
const nums=[-2,0,-1]
console.log(maxProduct(nums))
