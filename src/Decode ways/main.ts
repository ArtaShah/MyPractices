function numDecodings(s: string): number {
    const n=s.length;
    if(s[0]==='0')
        return 0;
    const dp=new Array(n+1).fill(0);
    dp[0]=1;
    dp[1]=1;
    for(let i=2;i<=n;i++){
        const oneDigits=s[i-1];
        const twoDigits=parseInt(s.slice(i-2,i));
        if(oneDigits!=='0')
            dp[i]+=dp[i-1];
        if(twoDigits>=10&&twoDigits<=26)
            dp[i]+=dp[i-2];
    }
    return dp[n];
};