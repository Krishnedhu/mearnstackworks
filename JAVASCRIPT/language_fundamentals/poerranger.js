// 2
// 2 + 22=24
// 3+33+333=369
//  4 + 44+ 444 +4444   
// 
var num=3;
var i=1;
var str=""
var sum=0;
while(i<=num){//1<3 2<3 3<3
    str+=num;      // str=""+3="3" str="3"+3
     console.log(str);// "3" "33" "333"  
    sum=sum+Number(str)
    i++;
}
console.log(sum);


// var num=3;
// var i=1;
// var sum=0; 
//  total=0;
// while(i<=num){
//     sum=sum*10+num;
//     total+=sum;
// i++;
// }
// console.log(total);


