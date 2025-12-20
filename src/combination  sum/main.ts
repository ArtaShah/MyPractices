function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][]=[];
    function backTrack(start:number,remaining:number,path:number[]){
        if (remaining===0){
            result.push([...path]);
            return;
        }
        if(remaining<0){
            return;
        }
        for(let i=start;i<candidates.length;i++){
            const num=candidates[i];
            path.push(num);
            backTrack(i,remaining-num,path);
            path.pop();
        }
    }
    backTrack(0,target,[]);
    return result;
};