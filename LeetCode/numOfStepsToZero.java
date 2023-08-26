// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.



class Solution {

    public int numberOfSteps(int num) {
        int result = 0;
        if(num == 0 ) {
            return 0;
        }
        if(num == 1 ) {
            num = num -1;
            result += 1;
            return numberOfSteps(num, result);
        }
        else if (num % 2 == 0) {
            num = num/2;
            result += 1;
            return numberOfSteps(num, result);

        }
        else if (num % 2 != 0) {
            num = num-1;
            result += 1;
            return numberOfSteps(num, result);
        }
        else {
                return 0;
            }
    }
        
    public int numberOfSteps(int num, int result) {
        
        if(num == 0 ) {
            return result;
        }
        if(num == 1 ) {
            num = num -1;
            result += 1;
            return numberOfSteps(num, result);
        }
        else if (num % 2 == 0) {
            num = num/2;
            result += 1;
            return numberOfSteps(num, result);

        }
        else if (num % 2 != 0) {
            num = num-1;
            result += 1;
            return numberOfSteps(num, result);
        }
        else {
                return 0;
            }
        
        
    }
}