public class FizzBuzz {
    public String FizzBuzzing(int number) {
        String result = "";
        if(number % 15 == 0) {
            result = "Your number was " + number + " And that is a FizzBuzz";
            // System.out.println(result);
        }
        else if (number % 5 == 0) {
            result = "Your number was " + number + " And that is a Buzz";
            // System.out.println(result);
        }
        else if(number % 3 == 0) {
            result = "Your number was " + number + " And that is a Fizz";
            // System.out.println(result);
        }
        else if(number % 2  == 0) {
            result = "Your number was " + number + " And that is a 2";
            // System.out.println(result);
        }
        return result;
    } 
}