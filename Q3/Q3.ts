// Lower case
let personalName: string ="Abdullah khan"
console.log("lowercase", personalName.toLocaleLowerCase());

// Upper case
console.log("uppercase",personalName.toUpperCase());

// Title case
console.log("titlecase:",personalName.replace(/\bw/g,c => c.toUpperCase()));