class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
     isAnagram(s, t) {
       if (s.length !== t.length) return false;

const count = {};

for (const ch of s) {
    count[ch] = (count[ch] || 0) + 1;
}

for (const ch of t) {
    count[ch] = (count[ch] || 0) - 1;
}

for (const key in count) {
    if (count[key] !== 0) {
        return false;
    }
}
return true;
    }};
