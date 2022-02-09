// print fizz if num/by3 print buzz if num/by 5 print fizzbuzz if num / by 15

var num=15;

if(num%15==0){
    console.log("fizzbuzz");
}
else if(num%5==0){
    console.log("buzz");
}
else if(num%3==0){
    console.log("fizz");
}

var num=18;
if(num%3==0){
    console.log("fizz");
}
else if(num%5==0){
    console.log("buzz");
}
else if(num%15==0){
    console.log("fizzbuzz");
}