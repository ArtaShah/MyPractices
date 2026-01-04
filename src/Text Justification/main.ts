function fullJustify(words: string[], maxWidth: number): string[] {
    const result:string[]=[];
    let i=0;
    while(i<words.length){
        let lineLen=words[i].length;
        let j=i+1;
        while(j<words.length&&lineLen+1+words[j].length<=maxWidth){
            lineLen+=1+words[j].length;
            j++;
        }
        const lineWords=words.slice(i,j);
        const isLastLine=j===words.length;
        let line='';
        if(lineWords.length===1||isLastLine){
            line=lineWords.join(' ');
            line+=' '.repeat(maxWidth-line.length);
        }
        else{
            const totalLetters=lineWords.reduce((Sum,w)=>Sum+w.length,0);
            const totalSpaces=maxWidth-totalLetters;
            const gaps=lineWords.length-1;
            const spacesPerGap=Math.floor(totalSpaces/gaps);
            let extraSpaces=totalSpaces%gaps;
            for(let x=0;x<lineWords.length;x++){
                line+=lineWords[x];
                if(x<gaps){
                    if(extraSpaces>0){
                        line+=' '.repeat(spacesPerGap+1);
                        extraSpaces--;
                    }
                    else
                        line+=' '.repeat(spacesPerGap);
                }
            }
        }
        result.push(line);
        i=j;
    }
    return result;
};