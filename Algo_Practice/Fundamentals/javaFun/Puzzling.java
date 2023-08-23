import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Random;

public class Puzzling {
    public static void main(String[] args) {


    // ArrayList<String> names = new ArrayList<String>();
    // names.add("Nancy");
    // names.add("Jinichi");
    // names.add("Fujibayashi");
    // names.add("Momachi");
    // names.add("Ishikawa");
    
    // Collections.shuffle(names);
    // System.out.println(names);
    // Collections.sort(names);
    // System.out.println(names);
    // ArrayList<String> lessNames = new ArrayList<String>();

    // for(int i = 0; i < names.size(); i++) {
    //     if (names.get(i).length() > 5) {
    //         lessNames.add(names.get(i));
    //     }
    // System.out.println(names.get(i));

    // }
    // System.out.println(lessNames);

    // ArrayList<String> letters = new ArrayList<String>();
    // letters.add("a");
    // letters.add("b");
    // letters.add("c");
    // letters.add("d");
    // letters.add("e");
    // letters.add("f");
    // letters.add("g");
    // letters.add("h");
    // letters.add("i");
    // letters.add("j");
    // letters.add("k");
    // letters.add("l");
    // letters.add("m");
    // letters.add("n");
    // letters.add("o");

    // Collections.shuffle(letters);
    // System.out.println(letters.get(0));
    // System.out.println(letters.get(letters.size() - 1));

    // if(letters.get(0).equals("a") || letters.get(0).equals("e") || letters.get(0).equals("i") || letters.get(0).equals("o")) {
    //     System.out.println("We have found a vowel " + letters.get(0));
    // }

    Random randomNum = new Random();
    int randomInt = randomNum.nextInt(45) + 55;
    System.out.println(randomInt);
    
    
    System.out.println(randomNum.nextInt(100));

    ArrayList<Integer> random10 = new ArrayList<Integer>();
    
    for(int i = 0; i <= 9; i++) {
        int Inter = randomNum.nextInt(45) + 55;
        random10.add(Inter);


    }
    System.out.println(random10);
    Collections.sort(random10);
    System.out.println(random10);


    }
}