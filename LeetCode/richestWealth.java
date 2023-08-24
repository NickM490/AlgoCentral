// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank.
// Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts.
// The richest customer is the customer that has the maximum wealth.


public class richestWealth {

    class Solution {
        public int maximumWealth(int[][] accounts) {
            int max = accounts[0][0];
            for (int i = 0; i <= accounts.length - 1; i++) {
                int tempSum = 0;
                for (int j = 0; j <= accounts[i].length - 1; j++) {
                    tempSum += accounts[i][j];
                }
                if (tempSum > max) {
                    max = tempSum;
                }
                System.out.println(tempSum);
            }
            return max;
        }
    }
}
