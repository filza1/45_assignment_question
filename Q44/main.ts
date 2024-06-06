// Define a function with a rest parameter that accept items arugement representing our sandwich 
function make_sandwich(...items:string[]){
    console.log("\nMaking a sandwich with the following items: \n");

    items.forEach(singleitems=>console.log(singleitems));

    console.log("\n Now Enjoy Sandwich");
}
//  call the function 3 times with 3 diiferent number of arguments
make_sandwich("Chicken","Cheese","Mayo","salt","Egg");
make_sandwich("Bread","Butter");