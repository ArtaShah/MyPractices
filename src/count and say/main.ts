function countAndSay(n: number): string {
    let s="1";
    for(let k=1;k<n;k++){
        let newS="";
        let i=0;
        while(i<s.length){
            let count=1;
            while(i+1<s.length && s[i]===s[i+1]){
                count++;
                i++;
            }
            newS+=count.toString()+s[i];
            i++;
        }
        s=newS;
    }
    return s;
}