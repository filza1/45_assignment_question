// Create a guest list array
var guestList = ['Arshman', ' arsalan bhai', 'Komal', 'Abdullah'];
// making a variable those person can"t come
var dontCome = guestList[0];
// print the name who can"t come
console.log(dontCome, "You could not come");
// Add remove value from guest list array
guestList.splice(0, 1, "Amir");
//Message print for bigger table
console.log("Good news ! we have found a bigger table for dinner");
//Add a new value at starting index of array
guestList.unshift("Ali");
// Adding a new value at ending index array
guestList.push('zain');
// Get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of aaray
guestList.splice(middleIndex, 0, "Usama");
// Print message of updated list
console.log('Updated list of our guest');
//Sending a invitation message to our guests one by one with their name
guestList.forEach(function (oneguest) { return console.log("Salam! ".concat(oneguest, ", would you like to dinner with me")); });
