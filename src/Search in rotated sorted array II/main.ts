function search(nums: number[], target: number): boolean {
    nums.sort((a,b)=>a-b);
    let left=0;
    let right=nums.length-1;
    while(left<=right){
        const mid=Math.floor((left+right)/2);
        if(nums[mid]===target)
            return true;
        else if(nums[mid]<target)
            left=mid+1;
        else
            right=mid-1;
    }
    return false;
};