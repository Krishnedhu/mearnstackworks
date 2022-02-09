var arr=[
    [10,50],
    [20,60],
    [1,2],
    [5,8],
    [30,40]
]

//includes()
// var arr=["ram","ravi","arun"]
// console.log(arr.includes("ravi"));

//flat() which is used to change nested array into single array
// console.log(arr.flat());

// if flat() not supporting in node js use this method
//var flattenArray=[]
//for(let subarray of arr){
//     for(let num of subarray){
//         flattenArray.push(num)
//     }
// }
// flattenArray.filter(num=>num>10).forEach(num=>console.log(num);

//print all numbers >10
// arr.flat().filter(num=>num>10).forEach(n=>console.log(n))


//print squares of all numbers
// arr.flat().map(num=>num**2).forEach(n=>console.log(n))

//print total sum


//print highest element




//Array.from() used to convert string into an array
// var string="hello"
// console.log(Array.from(string));
// Array.from(string).map(char=>char.toUpperCase()).forEach(char=>console.log(char))