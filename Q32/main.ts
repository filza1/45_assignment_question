let CurrentUser1:string[]=["*","Mumtaz","Faraz","Sidra","Sahifa"];
let newUser1:string[]=["Areej","Komal","Ritaj","Hammad","Arshman"];

newUser1.forEach((new_user) => {
    if (
        CurrentUser1.some(
            (CurrentUser1) => CurrentUser1.toLowerCase() === new_user.toLowerCase()
        )

        ){
            console.log(`${new_user} will need to enter a new username.`);

        } else{
            console.log(`${new_user} is available.`)
        }
});
