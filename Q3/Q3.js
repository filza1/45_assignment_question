// Lower case
var personalName = "Abdullah khan";
console.log("lowercase", personalName.toLocaleLowerCase());
// Upper case
console.log("uppercase", personalName.toUpperCase());
// Title case
console.log("titlecase:", personalName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
