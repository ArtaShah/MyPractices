function grayCode(n:number):number[]{
    const result:number[]=[];
    const size=2**n;
    for(let i=0;i<size;i++){
        result.push(i^(i>>1));
    }
    return result;
}