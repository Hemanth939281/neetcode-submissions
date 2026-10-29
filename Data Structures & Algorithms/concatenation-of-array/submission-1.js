class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let i=0;
        const ans = []
        while(i<2){
            for(let i=0; i<nums.length; i++){
                ans.push(nums[i])
            }
            i+=1;
        }
        return ans;
    }
}
