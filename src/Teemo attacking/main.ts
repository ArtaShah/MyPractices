function findPoisonedDuration(timeSeries: number[], duration: number): number {
    if(timeSeries.length==0||duration==0){
        return 0;
    }
    let total=0;
    for (let i=0;i<timeSeries.length-1;i++){
        const gap=timeSeries[i+1]-timeSeries[i];
        total+=Math.min(gap,duration);
    }
    total+=duration;
    return total
};