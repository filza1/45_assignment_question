function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love typesript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(message, " print on shirt"));
}
make_shirt();
