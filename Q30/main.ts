let employee_name:string[] = ["admin","komal","areej","marium","urooj"];
employee_name.forEach(employee_name=> {
    if(employee_name === "admin" ){
        console.log('Hello admin,would you like to see a status report?');
    }else{
        console.log(`Hello ${employee_name},thank you for logging in again.`)
    }
    
});