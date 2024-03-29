// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

class Solution {
    public int[] runningSum(int[] nums) {
        int[] newArray = new int[nums.length];
        newArray[0] = nums[0];
        for(int i = 1; i <= nums.length - 1; i++) {
            
            int result = nums[i] += nums[i-1];
            newArray[i] = result;
        }
        return newArray;

    }
}