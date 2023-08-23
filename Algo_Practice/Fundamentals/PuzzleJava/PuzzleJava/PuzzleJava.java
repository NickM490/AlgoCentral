import java.util.ArrayList;
import java.util.Random;
public class PuzzleJava{
    Random randMachine = new Random();
    public ArrayList<Integer> getTenRolls() {
        ArrayList<Integer> myArray = new ArrayList<Integer>();
        for (int i = 0; i < 10; i++){
            int int_random = randMachine.nextInt(100);
            myArray.add(int_random);
        }
        return myArray;
    }
    public char getRandomLetter(){
        char[] myArray = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};
        int int_random = randMachine.nextInt(25);
        return myArray[int_random];
    }
    public String generatePassword(){
        String myString = "";
        for (int i=0; i<8; i++){
            char new_char = getRandomLetter();
            myString = myString + new_char;
        }
        return myString;
    }
    public ArrayList<String> getNewPasswordSet(int num){
        ArrayList<String> myArray = new ArrayList<String>();
        for (int i = 0; i < num; i++){
            String password  = generatePassword();
            myArray.add(password);
        }
        return myArray;
    }
}