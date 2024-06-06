// Define the function to show magician name
function show_magician(magician:string[]){
    magician.forEach(name=>console.log(name));
}
// function to make magician great through .map it will be modified by array
function make_great(magician:string[]){
   return magician.map(name => `The Great ${name}`);
}
// Define array for magician names
let magician_name=["Hammad","Ali","Anas"];

// Making a copy of original array through .silce() function

let copy_magician_name = magician_name.slice()

// Modified the copy array to include "The Great" with their names
let copy_great_magician = make_great(copy_magician_name)

// Show both array original amd copy
 
// original
show_magician(magician_name);

// Copied
show_magician(copy_great_magician);