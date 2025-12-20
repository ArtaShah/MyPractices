function restoreIpAddresses(s: string): string[] {
    const result:string[]=[]
    function backTrack(start:number,parts:string[]){
        if (parts.length===4){
            if(start===s.length){
                result.push(parts.join("."));
            }
            return;

        }
        for(let len=1;len<=3;len++){
            if(start+len>s.length){
                break;
            }
            const segment=s.slice(start,start+len);
            if(segment.length>1&&segment[0]==="0"){
                continue;
            }
            const value=Number(segment);
            if(value>255){
                continue;
            }
            backTrack(start+len,[...parts,segment]);
        }
    }
    backTrack(0,[]);
    return result;
};