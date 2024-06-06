// Define a fumction of to create a car object with options 
function create_car(manufacturer,model,...options){
    // Intitialize a car object with manufacaturer and model
    let car = {
        manufacturer:manufacturer,
        model:model
    };

// Add additional options to the car object
options.forEach(Option => {
    let[key, value] =Option.split(":");
    car[key.trim()] = value.trim();
});
   return car;
}
// call the function to create a car object

let my_car = create_car("Toyota","Corrola","color:black","sunroof:true","year:2024-");

// Print the variable to ensure all the information is stored correctly in the car object
console.log(my_car); 