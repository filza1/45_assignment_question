var employeeName = ["admin", "komal", "areej", "marium", "urooj"];
employeeName.forEach(function (employeeName) {
    if (employeeName === "admin") {
        console.log('Hello admin,would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(employeeName, ",thank you for logging in again."));
    }
});
