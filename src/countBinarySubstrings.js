var countBinarySubstrings = function(s) {
    const counts = [];
    let ptr = 0, n = s.length;
    while (ptr < n) {
        const c = s.charAt(ptr);
        let count = 0;
        while (ptr < n && s.charAt(ptr) === c) {
            ++ptr;
            ++count;
        }
        counts.push(count);
    }
    let ans = 0;
    for (let i = 1; i < counts.length; ++i) {
        ans += Math.min(counts[i], counts[i - 1]);
    }
    return ans;
};

let result=countBinarySubstrings("10101");

console.log("result",result);