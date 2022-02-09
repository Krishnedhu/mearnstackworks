// armstrong number
// 123 (1**3+)
// 153

// var num=123
// var num=153;
// var sum=0;
// while (num!=0){ //153!=0  15!=0 1!=0 0!=0
//     let digit=num%10;//3 15%10=5 1%10=1
//     sum+=digit**3// sum=0+27=27+125=152 =152+1=153
//     num=Math.floor(num/10)//153/10=15.3=15 1 1/10=0. 1=0
// }
// console.log(sum);// 153

// factorial of a number num=4(1*2*3*4)
// var num=5, i=1;
// var fact=1;
// while(i<=num){
//     fact*=i
//     i++;
// }
// console.log(fact);


// upper and lower
var num=3, low=8, upp=36;        //num square=2,cube=3
var i=1;
while(i<=upp){//2<=36 3<=36
    let res=i**num;//1**3=1 res=2**2=4 res=3**2=9
    if(res>=low && res<=upp){//1>=8 4>=8 9>=8 && 9<=36
        console.log(i);
    }
    
    i++;//i=2,3
}

