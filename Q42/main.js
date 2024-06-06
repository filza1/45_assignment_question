function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
var magician_name = ["Hammad", "Ali", "Anas"];
var Great_magician = make_great(magician_name);
show_magician(Great_magician);
