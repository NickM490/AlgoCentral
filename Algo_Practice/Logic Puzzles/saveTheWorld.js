// The apocalypse finally happened. There was a massive outbreak, a pandemic with no cure. 
// The world has been torn apart, cities crumbled to the ground, no hope for mankind in sight. 
// After 3 years of surviving you find yourself and your group traveling towards a small town somewhere 
// in the MidWest. On the side of the road lay a dying man. Your group tries to help him but the 
// sickness has taken over and he only has moments left. With his last words he tells you that there is a cure.
//  "In the tall building at the end of the road, on the 6th floor, at the end of the hall, there is a room 
//  with a digital scale and a cabinet. Inside the cabinet are 20 pill bottles, each bottle containing 20 
//  pills each. One bottle contains the cure, the pills in that bottle weigh 1.01 grams each. The rest of 
//  the bottles contain pills that weigh 1 gram each and when consumed will kill you. The scale in the room 
//  works but it only has enough battery life to weigh something once. It will give you one reading then it 
//  will die...". Your group sets forth to the breakout room of your choice to save the world.

// Simple solution:
// Take one pill from the first Bottle, two from the ScriptProcessorNode, three from the third..etc.
// Place all the pills on the scale and the decimel point will tell you what bottle is the correct one. 




class Pill {
    constructor(weight) {
        this.weight = weight;
    }
}
class Bottle {
    constructor(Pills = []) {
        this.pills = Pills
    }
}
let randomBottle = Math.ceil(Math.random() * 20);
let BottleArr = []
let pillWeight = 1
for (let j = 0; j < 20; j++) {
    BottleArr[j] = new Bottle
    if (j == randomBottle) { pillWeight = 1.01 }
    else { pillWeight = 1 }
    for (let i = 0; i < 20; i++) {
        BottleArr[j].pills.push(new Pill(pillWeight))
    }
}
let result = 0;
for (let n = 0; n < 20; n++) {
    result += (n * (BottleArr[n].pills[0].weight))
}
output = Math.ceil((result - 190) * 100)
console.log("the " + output + " bottle had the right pills")