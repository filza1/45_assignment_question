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
//inform that only two guests can be invited for dinner
console.log("unfortunately, the new dinner table wont arrive on time, so i can onlu invited two guest to dinner with me");
//Using whiile loop to remove guests from the array until only two names remaining
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry,".concat(removeGuest, " i cant invite tou to dinner"));
}
// Sending a invitations to the last guest on the list
console.log("Invitatations to the last 2 guests ");
guestList.forEach(function (lastTwo) { return console.log("luckily ".concat(lastTwo, ",you are still invited to dinner")); });
//Removing last two guest from the list 
guestList.pop();
guestList.pop();
console.log('Empty list:', guestList);
