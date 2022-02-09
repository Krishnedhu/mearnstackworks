var num=8 , flag=0;
for(let i=2; i<num;i++){ //i=2 , i=3
    
    
    if(num%i==0){ //9%2==0 9%3==0
        flag=1;
        console.log("not prime");

      break;  
    }
    else{
        console.log("prime");
    } 
}
console.log(flag==0?"prime":"notprime");




//123 r1
//123 r2
//123 r3

// for (let row; row<=4;row++){ //row=1 1<=4
//     let str=""
//     for(let col=1;col<=3;col++){ //col=1 1<=3 col=2 2<=3 col=3 3<=3 col=4 4<=3
//         str+=col // str=1 2 3
//     }
//     console.log(str);
// }



// 1 1 1 1
// 2 2 2 2
// 3 3 3 3

for (let row=1; row<=3;row++){// row=1 1<=3 row=2 2<=3
    let str="";// str""
    for(let col=1;col<=4;col++){ //col=1 1<=4 col=2 2<=4 col=3 3<=4 col=4 4<=4 col=5 5<=5
        str+=row; // col str=1111
    }
}


//q1  find gcd of two number 24,48,12,60

//q2 

//####
//####
//####


//q3

//*
//**
//*** 
//**** 
