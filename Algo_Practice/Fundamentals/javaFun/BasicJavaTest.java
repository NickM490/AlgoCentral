import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Arrays;


public class BasicJavaTest {
    public static void main(String[] args){

    // BasicJava basic1 = new BasicJava();
    // Integer a = basic1.print1225();
    // System.out.println(a);
    // System.out.println(basic1.print1225());


    // for(int i = 0; i <= 255; i++) {
    //     System.out.println(i);
    // }

    // for(int i = 0; i <= 255; i++){
    //     if (i % 2 != 0) {
    //         System.out.println(i);
    //     }
    // }

    // int sum = 0;
    // for(int i = 0; i <= 255; i++) {
    //     sum += i;
    //     System.out.println("New Number: " + i + " Sum: " + sum);
    // }
    int[] myArray = {1,3,5,17,0,13};

    // for(int i = 0; i < myArray.length; i++) {
    //     // System.out.printIn(myArray[i]);
    //     System.out.println(myArray[i]);
    // }


    // int max = 0;
    // for(int i = 0; i < myArray.length - 1; i++) {
    //     if(myArray[i] > max) {
    //         max = myArray[i];
    //     }
    //     System.out.println(myArray[i]);
    //     System.out.println(max);
    // }

    // int temp = 0;
    // int avg = 0;
    // for(int  i = 0; i < myArray.length; i++) {
    //     temp += myArray[i]; 
    //     System.out.println(temp);
    // }
    // System.out.println(temp / myArray.length);


    // LinkedList<Integer> odd = new LinkedList<Integer>();
    // for(int i = 0; i <= 255; i++) {
    //     if(i % 2 != 0) {
    //         odd.add(i);
    //     }
    // }
    // System.out.println(odd);

    // int counter = 0;
    // int value = 0;
    // int y = 4;
    // int[] yArray = {5,3,4,9,2,1};
    // for(int i = 0; i < yArray.length; i++){
    //     if(y < yArray[i]) {
    //         counter++;
    //     }
    // }
    // System.out.println(counter);


    int[] sqArray = {1,5,10,-2};
    for(int i = 0; i < sqArray.length; i++) {
        sqArray[i] *= sqArray[i];
        System.out.println(sqArray[i]);
    }
    return Array.toString(sqarray);
    System.out.println(Arrays.toString(sqArray));


    // int[] negArray = {1,5,10,-2};
    // for(int i = 0; i < negArray.length; i++) {
    //     if(negArray[i] < 0) {
    //         negArray[i] = 0;
    //     }
    //     System.out.println(negArray[i]);
    // }
    // System.out.println(Arrays.toString(negArray));
    

    // int[] origArray = {5,9,15,23};
    // int max = origArray[0];
    // int min = origArray[0];
    // int sum = 0;
    // int avg = 0;
    // // int[] newArray = int(3);
    // for(int i = 0; i < origArray.length; i++) {
    //     if(max < origArray[i]) {
    //         max = origArray[i];
    //     }
    //     if(min > origArray[i]) {
    //         min = origArray[i];
    //     }
    //     sum += origArray[i];

    // }
    // avg = sum / origArray.length;
    // int[] newArray = {
    //     max, 
    //     min, 
    //     avg
    // };
    // System.out.println(Arrays.toString(newArray));


    int[] shiftArray = {1,5,10,7,-2};
    for(int i = 0; i < shiftArray.length - 1; i++) {
        shiftArray[i] = shiftArray[i + 1];
    }
    shiftArray[shiftArray.length - 1] = 0;
    System.out.println(Arrays.toString(shiftArray));


    }
}