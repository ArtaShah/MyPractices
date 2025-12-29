function multiply(num1: string, num2: string): string {
    if (num1 === "0" || num2 === "0") return "0";
    const n = num1.length;
    const m = num2.length;
    const result = new Array(n + m).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            const mul = (num1.charCodeAt(i) - 48) * (num2.charCodeAt(j) - 48);
            const sum = mul + result[i + j + 1];
            result[i + j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);
        }
    }
    let idx = 0;
    while (idx < result.length && result[idx] === 0) {
        idx++;
    }
    return result.slice(idx).join("");
}
