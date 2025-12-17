function topKFrequent(nums: number[], k: number): number[] {
    const freq=new Map<number,number>();
    for(const num of nums){
        freq.set(num,(freq.get(num)??0)+1);
    }
    const entries=Array.from(freq.entries());
    entries.sort((a,b)=>b[1]-a[1]);
    return entries.slice(0,k).map(entry=>entry[0]);
};