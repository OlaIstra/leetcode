/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) {    
    return Array.from(new Set([...new Set(nums1)].filter(x => new Set(nums2).has(x))))
};
