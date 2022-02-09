//arrays
//collections of different type of datas reference using same name

//define[]
//no length limit

// var frameworks=["express","django","flask","fastapi","angular",".net"]
// //                0         1        2        3         4         5

// for(let framework of frameworks){
//     console.log(framework);
// }

// var expenses=[25000,30000,35000,28000,27000]
// //             0      1     2     3     4
// for(let amount of expenses){
//     console.log(amount);
// }

// console.log(expenses[1]);
// console.log(expenses[2]);
// console.log(expenses.length);


// var mobiles=["ipone13","millhyper","samsungfes","motrolaedge"]

// for(let item of mobiles){
//     console.log(item);
// }


// var expenses=[10000,15000,12000,23000,25000,30000]
//  //               0     1     2    3     4       5
//  console.log();


//find total expense
var expenses=[10000,15000,8000,12000,23000,25000,30000]
// var total=0;
// for(let amount of expenses){
//     total+=amount
// }
// console.log("total expense till now",total);
// var total=expenses.reduce((am1,am2) => am1+am2);
// console.log(total);
// console.log(expenses.reduce((am1,am2) => am1+am2));


  



//find highestexpense

// var maxExp=0;//0<10000 10k,10k<15k 15k, 15<12k 15k, 15k<23k 23k
// for(let amount of expenses){
//     //amount=10k
//     if(maxExp<amount){ //0<10k,10k<15k
//     maxExp=amount //maxExp=15k
// }
// }
// console.log(maxExp);







//find lowestexpense  
var minExp=expenses[0]//minExp=10k
for(let amount of expenses){
    //amount=10k 15k
    if(amount<minExp){ //10k<10k 15k<10k 8k<10k
        minExp=amount; //8k
    }
}
console.log(minExp);





//data structure => internally organised
//linear ds=> array,queue,stack,linked list
//non linear ds=>trees,graph