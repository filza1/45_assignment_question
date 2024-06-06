let myNumber1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i=0;i<myNumber1.length;i++){
    if(myNumber1[i] === 1){
        console.log(`${myNumber1[i]}st`); 

    }else if (myNumber1[i] === 2){
        console.log(`${myNumber1[i]}nd`); 

    }else if (myNumber1[i] === 3){
        console.log(`${myNumber1[i]}rd`);
    }else if (myNumber1[i] >=4 && myNumber1[i]<=9){
        console.log(`${myNumber1[i]}th`);
    }};