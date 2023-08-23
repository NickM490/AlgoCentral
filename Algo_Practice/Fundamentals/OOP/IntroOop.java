public class IntroOop {

    // This is for making Houses
    private int yearMade;
    private String stories;
    private int numOfDoors;
    private int rooms;
    private boolean swimmingPool;
    private String recreations; 

    public void setYearMade(int number) {
        this.yearMade = number;
    }

    public void setStories(String floors) {
        this.stories = floors;
    }

    public void setNumDoors(int num) {
        this.numOfDoors = num;
    }

    public void setRooms(int num) {
        this.rooms = num;
    }

    public int getYear() {
        return yearMade;
    }

    public String getStories() {
        return stories;
    }

    public int getDoors() {
        return numOfDoors;
    }

    public int getRooms() {
        return rooms;
    }

    // public void swimmingPool(int num) {
    //     this.numOfDoors = num;
    // }



    // getter
    // public int getNumberOfWheels() {
    //     return numberOfWheels;
    // }
    
    // setter
    // public void setNumberOfWheels(int number) {
    //     numberOfWheels = number;
    // }
    // getter
    // public String getColor() {
    //     return color;
    // }
    // setter
    // public void setColor(String color) {
    //     this.color = color;       
    // }


    // public String greet(String name){
    //     return "Hello " + name;
    // }

    // public String greet(String name, int age){
    //     return "Hello " + name + age;
    // }

    // public String greet(){
    //     return "Hello World";
    // }

    // public String car(String engineSize, int topSpeed) {
    //     return "Engine size: " + engineSize + " Top Speed: " + topSpeed;
    // }

    // public String car(String engineSize, int topSpeed, String owner) {
    //     return "Engine size: " + engineSize + " Top Speed: " + topSpeed + " Owner: " + owner;
    // }
}
