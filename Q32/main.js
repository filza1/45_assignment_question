var currentUser = ["*", "Mumtaz", "Faraz", "Sidra", "Sahifa"];
var newUser = ["Areej", "Komal", "Ritaj", "Hammad", "Arshman"];
newUser.forEach(function (new_user) {
    if (currentUser.some(function (currentUser) { return currentUser.toLowerCase() === new_user.toLowerCase(); })) {
        console.log("".concat(new_user, " will need to enter a new username."));
    }
    else {
        console.log("".concat(new_user, " is available."));
    }
});
