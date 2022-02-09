var num1=70;
var num2=70;
var num3=70;

if(num1>num2 && num1>num3){
    console.log(`${num1} is maximum`);
}
else if(num2>num1 && num2>num3){
    console.log(`${num2} is maximum`);
}
else if(num3>num1 && num3>num2){
    console.log(`${num3} is maximum`);
}
else if(num1==num2 && num1==num3){
    console.log("3 are equal");
}