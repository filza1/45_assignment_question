var guestArr = ["Arshaman", "Arsalan Bhai", "Komal appi", "Abdullah"];
let canNotAttend="Abdullah";
console.log(canNotAttend+ ' '+ "Can not make it,for Dinner");

let newGuest:string="Fatima";
guestArr[guestArr.indexOf(canNotAttend)]=newGuest;
console.log(guestArr);
guestArr.map((item)=>
console.log(`Dear ${item}, You are invited to a Dinner`))
