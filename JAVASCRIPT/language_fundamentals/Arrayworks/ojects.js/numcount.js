var arr=[10,10,20,20,30,30,40,40,50,50,50] //output {10:2,20:2,30:2,40:2,50:3}
var out={}

arr .map(num=>num in out?out[num]+=1:out[num]=1)
console.log(out);

// var numCount={}
// for(let num of arr){
//         if(num in numCount){
//             numCount[num]+=1
//         }
//         else{
//             numCount[num]=1
//         }
//     }
//     console.log(numCount);