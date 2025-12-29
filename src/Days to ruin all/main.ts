function daysToRuinAll(arr: number[][]): number {
    const rows = arr.length;
    const cols = arr[0].length;
    const queue: [number, number, number][] = [];
    let healthyCount = 0;
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            if (arr[x][y] === 2) queue.push([x, y, 0]);
            else if (arr[x][y] === 1) healthyCount++;
        }
    }
    const directions = [[1,0],[-1,0],[0,1],[0,-1]];
    let maxDays = 0;
    let head = 0;
    while (head < queue.length) {
        const [x, y, day] = queue[head++];
        maxDays = Math.max(maxDays, day);
        for (const [dx, dy] of directions) {
            const nx = x + dx, ny = y + dy;
            if (nx>=0 && nx<rows && ny>=0 && ny<cols && arr[nx][ny] === 1) {
                arr[nx][ny] = 2;
                healthyCount--;
                queue.push([nx, ny, day + 1]);
            }
        }
    }
    if(healthyCount===0)
        return maxDays;
    else
        return -1;
}