var num1=10;
var num2=20;
var num3=30;

if(num1>num2 && num1>3){
    // console.log(`${num1} is maximum`);
    
    if(num2>num3){
        // console.log(`second largest${num2}`);
        console.log(num1,num2,num3); 

    }
    else{
        // console.log(`second largest ${num3}`);
        console.log(num1,num3,num2);
    }
}
else if(num2>num1 && num2>num3){
    // console.log(`${num2} is maximum`);
    if(num1>num3){
        // console.log(`second largest ${num1}`);
        console.log(num2,num1,num3);
    }
    else {
        // console.log(`second largest ${num3}`);
        console.log(num2,num3,num1);
    }
}
else if(num3>num1 && num3>num2){
    // console.log(`${num3} is maximum`);
    if(num1>num2){
        // console.log(`second largest ${num1}`);
        console.log(num3,num1,num2);
    }
    else{
        // console.log(`second largest ${num2}`);
        console.log(num3,num2,num1);
    }
}
else if(num1==num2 && num1==num3){
    console.log("3 are equal");
} 

 