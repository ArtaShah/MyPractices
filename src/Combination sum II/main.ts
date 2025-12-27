function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort((a,b)=>a-b);
    const result:number[][]=[];
    const path:number[]=[];
    function backTrack(start:number,remaining:number){
        if(remaining===0){
            result.push([...path]);
            return;
        }
        for(let i=start;i<candidates.length;i++){
            if(i>start&&candidates[i]===candidates[i-1])
                continue;
            if(candidates[i]>remaining)
                break;
            path.push(candidates[i]);
            backTrack(i+1,remaining-candidates[i]);
            path.pop();
        }
    }
    backTrack(0,target);
    return result;
};