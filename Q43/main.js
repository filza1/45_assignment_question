// Define the function to show magician name
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// function to make magician great through .map it will be modified by array
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
// Define array for magician names
var magician_name = ["Hammad", "Ali", "Anas"];
// Making a copy of original array through .silce() function
var copy_magician_name = magician_name.slice();
// Modified the copy array to include "The Great" with their names
var copy_great_magician = make_great(copy_magician_name);
// Show both array original amd copy
// original
show_magician(magician_name);
// Copied
show_magician(copy_great_magician);
