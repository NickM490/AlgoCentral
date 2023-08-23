// Apples and Oranges

// There are three boxes, one contains only apples, one contains only oranges, 
// and one contains both apples and oranges. The boxes have been incorrectly 
// labeled such that no label identifies the actual contents of its box. 
// Opening just one box, and without looking in the box, you take out one piece of fruit. 
// By looking at the fruit, how can you immediately label all of the boxes correctly?

//                                              Solution:
// So, you know all 3 boxes are incorrectly labeled.

// Go to the box labeled “Apples + Oranges.” Since the label is wrong, it must have one or the other.

// This is the box to take one piece of fruit from. Whichever comes out is what that box contains. If you took out an apple, 
// the box has only apples. If you took out an orange, vice versa.

// Here’s where it gets tricky a bit tricky. But we’re almost done…

// Let’s say you grabbed an apple. Move the “Apples” label over to that box. Now it’s correctly labeled.

// You know the “Oranges” box is still labeled wrong (because all 3 were labeled wrong to start and you haven’t touched it). 
// And you know it’s not “Apples”.

// So it has to be “Apples + Oranges”.

// The last box is “Oranges”.

// The same process above would work if you had pulled out an orange at the start.