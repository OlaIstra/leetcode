/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function(nums1, nums2) {
    return nums1.map(n => {
        let idx = nums2.indexOf(n);
        
        if (idx !== -1) {
            // find the next greater element's index
            while (nums2[++idx] < n);
            // -1 if not found
            if (idx >= nums2.length) idx = -1;
            else idx = nums2[idx];
        }
        
        return idx;
    });
};
