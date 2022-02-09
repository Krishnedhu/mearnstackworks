var arr=[4,5,6]
// //[11,10,9]
arr.push(10)
console.log(arr);


// //step 1 find sum
// var sum=0;
// for(let num of arr){
//     sum+=num
// }
// for(let num of arr){
//     console.log(sum-num);

// }

var op=[], sum=0;
for(let num of arr){
    sum+=num;

}
for(let num of arr){
    op.push((sum-num))
}
console.log(op);



  
 