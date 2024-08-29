var threeSum=function(nums){
    nums.sort((a,b)=>a-b)
    const ans=[]
    for(let i=0;i<nums.length;i++){
        if(i!=0 && nums[i]==nums[i-1]) continue
        var j=i+1,k=nums.length-1
        while(j<k){
            sum=nums[i]+nums[j]+nums[k]
            if(sum<0){
                j++
            }
            else if(sum>0){
                k--
            }
            else{
                ans.push([nums[i],nums[j],nums[k]])
                j++
                while(j<k && nums[j]==nums[j-1]) j++
            }
        }
    }
    return ans
}
const nums=[-1,0,1,2,-1,-4]
console.log(threeSum(nums))