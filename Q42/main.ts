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

//  call make_magician that show modified list of magician
let Great_magician = make_great(magician_name);
 show_magician(Great_magician);