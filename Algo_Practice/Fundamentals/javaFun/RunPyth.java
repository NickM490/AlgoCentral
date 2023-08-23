public class RunPyth {
    public static void main(String[] args) {
        Pythagorean test = new Pythagorean();
        double currentPyth = test.calculateHypotenuse(24, 55);
        System.out.println("The Hypotenuse is " + currentPyth);
    }
}