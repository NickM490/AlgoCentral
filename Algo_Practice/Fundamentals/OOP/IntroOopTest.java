public class IntroOopTest {
    public static void main(String[] args){

        IntroOop hW = new IntroOop();

        IntroOop waffleHouse = new IntroOop();
        IntroOop elonMagooHouse = new IntroOop();


        elonMagooHouse.setYearMade(2022);
        elonMagooHouse.setStories("Eleventy Five");
        elonMagooHouse.setNumDoors(77);
        elonMagooHouse.setRooms(10258);

        int year = elonMagooHouse.getYear();
        String stories = elonMagooHouse.getStories();
        int doors = elonMagooHouse.getDoors();
        int rooms = elonMagooHouse.getRooms();

        System.out.println(
            "Check out Elon Magoos House, it was built way back in "
            + year +
            " . It has "
            + stories + 
            " stories. This cool home has 15 portals and "
            + doors + 
            " doors. A very modest with only " 
            + rooms +
            " rooms."
        );







        // bike.setNumberOfWheels(2);
        // bike.setColor("red");
        // int bikeWheels = bike.getNumberOfWheels();
        // String bikeColor = bike.getColor();

        // car.setNumberOfWheels(4);
        // car.setColor("green");
        // int carWheels = car.getNumberOfWheels();
        // String carColor = car.getColor();


        // System.out.println("Bike object - Wheels: " + bikeWheels + ", Color: " + bikeColor);
        // System.out.println("Car object - Wheels: " + carWheels + ", Color: " + carColor);
    }


        // System.out.println(hW.car("V8 Juice", 20025));

        // System.out.println(hW.car("V10 Lemonada", 25, "Elon Magoo"));

        // String greeting = hW.greet();

        // String greetingWithName = hW.greet("Eduardo");
        // String greetingWithNameandAge = hW.greet("Nick", 95);

        // if (greeting.equals("Hello World") || greetingWithName.equals("Hello Eduardo")){
        //     System.out.println("Test successful");
        // } else{
        //     System.out.println("Test Fail");
        // }

        // System.out.println(greetingWithNameandAge);
    }

