// Define a function with a rest parameter that accept items arugement representing our sandwich 
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(function (singleitems) { return console.log(singleitems); });
    console.log("\n Now Enjoy Sandwich");
}
//  call the function 3 times with 3 diiferent number of arguments
make_sandwich("Chicken", "Cheese", "Mayo", "salt", "Egg");
make_sandwich("Bread", "Butter");
