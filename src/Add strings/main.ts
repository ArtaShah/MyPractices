function addStrings(num1: string, num2: string): string {
    let i=num1.length-1;
    let j=num2.length-1;
    let carry=0;
    let result=''
    while(i>=0||j>=0||carry>0){
        const d1= i>=0 ? num1.charCodeAt(i)-48:0;
        const d2= j>=0 ? num2.charCodeAt(j)-48:0;
        const sum=d1+d2+carry;
        carry=Math.floor(sum/10);
        result=(sum%10)+result;
        i--;
        j--;
    }
    return result;;;;;;;;;;;;;;;;
};