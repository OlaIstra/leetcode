/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2) {
    const smallArray = nums1.length >= nums2.length ? nums2 : nums1;
    const largeArray = nums1.length < nums2.length ? nums2 : nums1;
    const intersection = [];
    for(let i=0; i<smallArray.length; i++) {
        if(largeArray.includes(smallArray[i])) {
            intersection.push(smallArray[i]);
            const index = largeArray.indexOf(smallArray[i]);
            largeArray.splice(index,1);
        }
    }
    return intersection;
}
