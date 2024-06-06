var guestArr = ["Arshaman", "Arsalan Bhai", "Komal appi", "Abdullah"];
var canNotAttend = "Abdullah";
console.log(canNotAttend + ' ' + "Can not make it,for Dinner");
var newGuest = "Fatima";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
guestArr.map(function (item) {
    return console.log("Dear ".concat(item, ", You are invited to a Dinner"));
});
