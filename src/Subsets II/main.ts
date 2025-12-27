function subsetsWithDup(nums: number[]): number[][] {
    nums.sort((a,b)=>a-b);
    const result:number[][]=[];
    const path:number[]=[];
    function backTrack(start:number){
        result.push([...path]);
        for(let i=start;i<nums.length;i++){
            if(i>start&&nums[i]===nums[i-1])
                continue;
            path.push(nums[i]);
            backTrack(i+1);
            path.pop();
        }
    }
    backTrack(0);
    return result;
};