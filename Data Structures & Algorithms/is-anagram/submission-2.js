class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length!=t.length) return false 
        let string1 = s.split("");
    let string2 = t.split("");

    let s1_freq = new Map();
    let s2_freq = new Map();

    for(let s of string1){
        if(s1_freq.has(s)){
            s1_freq.set(s, s1_freq.get(s)+1);
        }else{
            s1_freq.set(s,1);
        }
    }

    for(let s of string2){
        if(s2_freq.has(s)){
            s2_freq.set(s, s2_freq.get(s)+1);
        }else{
            s2_freq.set(s,1);
        }
    }

    for(const [key, value] of s1_freq){
        if(value!=s2_freq.get(key)){
            return false;
        }
    }
    
    return true;
    }
}
