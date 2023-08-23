// The Burning Rope

// This “burning rope” problem is a classic logic puzzle. You have two ropes that each take an hour to burn,
//  but burn at inconsistent rates. How can you measure 45 minutes?

//                                              Solution:

// Because the ropes burn at inconsistent rates, you can't simply measure 75 percent of the way down one rope and call
//  that 45 minutes. The rope might burn slightly faster or slower in that last 25 percent. However, if you light one 
//  of the ropes on fire at both ends at the same time, it will burn up in 30 minutes, even if one side burns faster than the other.

// So here's what you do: Light one of the ropes on fire on both ends and light the second rope on one end at the same time. 
// When the first rope burns out, 30 minutes have elapsed. At that exact moment, you light the unlit end of the second rope.
// Because 30 minutes of the second rope have already been used up, 30 more remain (though this does not necessarily mean that
//      half of the rope's length has been burned, it could be more or less). Lighting the other end at the moment the first rope 
//      burns up will cause the remaining part of the second rope to burn up in 15 minutes. Once the second rope has been consumed
//       by the flames, exactly 45 minutes have passed.