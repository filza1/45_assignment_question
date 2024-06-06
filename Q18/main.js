
//Making a array of countries and print its orginal order
var countriesToVisit = ["china", "brazil", "india", "pakistan"];
console.log("orginal order:", countriesToVisit);
// print the array in alphabetical order witgout modifying the actual array list
console.log("Alphabetical order:", __spreadArray([], countriesToVisit, true).sort());
// show the array is still in its original order
console.log('Still in original order:', countriesToVisit);
// Print a array in reverse order without modifying the actual array list
console.log("Reverse order:", __spreadArray([], countriesToVisit, true).reverse());
// show the array is still in its original order
console.log('Still in original order:', countriesToVisit);
// We have changed the original order now
console.log("Original reverse:", countriesToVisit.reverse());
// Print the array to show that its back to its orginal order
console.log("Original order:", countriesToVisit.reverse());
// Print the array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical order:", countriesToVisit.sort());
// We have changed again the original order reverse again
console.log("Original reverse:", countriesToVisit.reverse());
