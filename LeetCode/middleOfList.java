// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

public class middleOfList {

    /**
     * Definition for singly-linked list.
     * public class ListNode {
     * int val;
     * ListNode next;
     * ListNode() {}
     * ListNode(int val) { this.val = val; }
     * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
     * }
     */

    class Solution {
        public ListNode middleNode(ListNode head) {
            if (head.next == null) {
                return head;
            }
            ListNode runner;
            runner = head;
            int counter = 1;
            while (runner.next != null) {
                counter += 1;
                runner = runner.next;
            }
            if (counter % 2 != 0) {
                // newCount = Math.round(counter/2);
                int newCount = 0;
                runner = head;
                while (newCount < Math.round(counter / 2)) {
                    runner = runner.next;
                    newCount += 1;
                }
                head = runner;
                return head;
            } else {
                int newCount = 0;
                runner = head;
                while (newCount < counter / 2) {
                    runner = runner.next;
                    newCount += 1;
                }
                head = runner;
                return head;
            }

            // System.out.println(counter);

            // return runner;
        }
    }

}
