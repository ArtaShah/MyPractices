function permute(nums: number[]): number[][] {
    const results: number[][] = [];
    const used: boolean[] = new Array(nums.length).fill(false);
    function backtrack(path: number[]) {
        if (path.length === nums.length) {
            results.push([...path]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            path.push(nums[i]);
            backtrack(path);
            path.pop();
            used[i] = false;
        }
    }
    backtrack([]);
    return results;
};