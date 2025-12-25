function convert(s:string,numRows:number):string {
    if(numRows===1|| numRows>=s.length){
        return s;
    }
    let rows:string[]=new Array(numRows).fill("");
    let row=0;
    let step=1;
    for(const char of s){
        rows[row]+=char;
        if(row===0){
            step=1;
        }else if(row===numRows-1){
            step= -1;
        }
        row+=step;
    }
    return rows.join("");
}