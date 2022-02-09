// function add(num1,num2){
//     console.log("inside 2 arg method");

//     return num1+num2
// }

// function add(n1,n2,n3){
//     console.log("inside 3 arg method");

//     return n1+n2+n3
// }

// function add(n1,n2,n3,n4){
//     console.log("inside 4 arg method");
//     return n1+n2+n3+n4
// }

// console.log(add(10,20,30,40));
// console.log(add(10,20,30));
// console.log(add(10,20));


//function overloading
//same function name different number of parameters [x]

//js doesnot support function overloading method so that we use spread operator (...)

//spread operator

// function add(...args){
//     console.log("args method");
//     console.log(args);
// }
// add(10)
// add(10,20)
// add(10,20,30,40)




// function add(...args){
//     return args.reduce((n1,n2)=>n1+n2)
// }
// console.log(add(10,20,30,40));

// function findMax(...args){
//     return args.reduce((n1,n2)=>n1>n2?n1:n2)

// }
// console.log(findMax(10,20,30,40,50,60,70));

// var arr=[1,20,30]
// arr.push(10,20,30)
// console.log(arr);

var MyArray={
    push(...item){
        console.log(item);
    }
}
MyArray.push(10,20,30)