//  Problem and Solutions -  https://www.geeksforgeeks.org/puzzle-two-robot-parachute-line/

// Interactive -   https://david-peter.de/parachuting-robots/



// Problem
// Two robots land with their parachutes on an infinite one-dimensional number line. 
// They both release their parachutes as soon as they land and start moving. 
// They are allowed only to make use of the following functions.


// I. moveLeft() // robot moves to left by 1 unit in 1 unit time

// II. moveRight() // robot moves to right by 1 unit in 1 unit time

// III. noOperation() // robot does not move and takes 1 unit time

// IV. onTopOfParachute() // returns true if the robot is standing on top of either of the parachute, else false

// V. didWeMeet() // returns true if the robot meets to the other robot, else false



// Write a function in order to make the robots meet each other. Robots will be executing the same copy of this function.


class Robot {
    constructor(name, position) {
        this.name = name;
        this.position = position;
        this.parachute = position
    }

    moveleft() {
        this.position += 1
    }
    moveright() {
        this.position -= 1
    }
    donothing() {
        this.position = this.position
    }
    checkParachute(parachute) {
        return parachute == this.position
    }

}

robot1 = new Robot("Robot1", Math.floor(Math.random() * 1000))
robot2 = new Robot("Robot2", Math.floor(Math.random() * 1000))
robotsmeet = false
var incrementor = 1
while (!robotsmeet) {
    if (robot1.position == robot2.position) {
        robotsmeet = true
        return console.log("robot1 was at " + robot1.parachute + " robot2 was at " + robot2.parachute + " robots were " + (incrementor - 1) + " steps away")
    }
    for (let i = 0; i < incrementor; i++) { robot1.moveleft(); robot2.moveleft() }

    if (robot1.checkParachute(robot2.parachute)) {
        while (robot1.checkParachute(robot2.parachute)) {
            robot1.donothing(); break;

        }
    }
    else { for (let j = 0; j < incrementor; j++) { robot1.moveright() } }

    if (robot2.checkParachute(robot1.parachute)) {
        while (robot2.checkParachute(robot1.parachute)) { robot2.donothing(); break; }
    }
    else { for (let j = 0; j < incrementor; j++) { robot2.moveright() } }
    incrementor++
}