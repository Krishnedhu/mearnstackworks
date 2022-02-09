var arr=[10,1,11,2,3,23,100,1000,200]
// function compare(n1,n2){
//     if(n1<n2){
//         return -1
//     }
//     else{
//         return 1
//     }
// }
// arr.sort((n1,n2)=>n1-n2) //ascending sort => n1-n2 is not subtraction its a comparing of 2 numbers
// console.log(arr);



arr.sort((n1,n2)=>n2-n1) //descending sort
console.log(arr);

