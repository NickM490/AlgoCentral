import java.lang.Math;
import java.util.ArrayList;
public class FirstJava {

    // String hello = "Hi there, I also worky worky";
    // String hello2 = "Hi there, I am the second hello.";

    // String name = "John Elway";
    // int age = 37;
    // String hometown = "Denver";

    // public String hithere() {
    //     return hello;
    // }


    // public String combine1() {
    //     return "Hello my name is " + name + ". I am " + age + " years old and I am from " + hometown + ", Colorado!";
    // }



    // public String combine2(String name, int age, String hometown) {
    //     return "Hello my name is " + name + ". I am " + age + " years old and I am from " + hometown;
    // }

    //Make a method that multiplies two numbers. 

    // public Integer findArea(int width, int height) {
    //     return width * height;
    // }


    public double calcHypo(int legA, int legB) {

        // a squared plus b squared the square root of the result.
        double legA2 = legA * legA;
        double legB2 = legB * legB;
        double bothLegs = legA2 + legB2;
        double hypoteneuse = Math.sqrt(bothLegs);

        return hypoteneuse;


    }

    public int[] printArray() {
        int[] myArray = {1,3,5,7,9,13};
        for (int i = 0; i < myArray.length; i++) {
            System.out.println(myArray[i]);
        }
        return myArray;
    } 

    public ArrayList<Object> maxMinAvg(int[] myArray) {
        ArrayList <Object> list = new ArrayList<Object>();
        int max = myArray[0];
        int min = myArray[0];
        double sum = 0;
        for(int i = 0; i < myArray.length; i++) {
            sum += myArray[i];
            if (myArray[i] > max) {
                max = myArray[i];
            }
            if (myArray[i] < max) {
                min = myArray[i];
            }
        }
        double avg = sum/myArray.length;
        list.add(max);
        list.add(min);
        list.add(avg);
        return list;
    }

}