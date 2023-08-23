import java.util.Arrays;

import java.util.ArrayList;

public class FirstJavaTest {

    public static void main(String[] args) {

        

        // This is creating an instance of our FirstJava class. 


        // System.out.println(intro.hello2);


        // String name = intro.hithere();

        // String greeting = intro.combine1();

        // System.out.println(greeting);

        // String greeting2 = intro.combine2("Jimi", 17, "Cleveland");

        // System.out.println(greeting2);

        // Integer room1 = intro.findArea(10,15);
        // System.out.println(room1);
        
        // Integer room2 = intro.findArea(20,45);
        // System.out.println(room2);

        // Integer totalArea = room1 + room2;
        // System.out.println(totalArea);

        // System.out.println(intro.multNums(4,4));

        // int legA = 15.5;
        // int legB = 10.5;
        // System.out.println(intro.calcHypo(12, 15));
        
        FirstJava intro = new FirstJava();


        int[] thisArray = {1,5,-10,-2};
        // Object[] this = intro.maxMinAvg(thisArray);
        // System.out.println(Arrays.toString(this));
        System.out.println(intro.maxMinAvg(thisArray));
    } 
}