public class TestPuzzleJava {
    public static void main(String[] args) {
        PuzzleJava tester = new PuzzleJava();
        System.out.println(tester.getTenRolls());
        System.out.println(tester.getRandomLetter());
        System.out.println(tester.generatePassword());
        int num = 6;
        System.out.println(tester.getNewPasswordSet(num));
    }
}