// var arr=[10,20,10,20,11,12]
// q1 print all duplicate numbers




//q2
// var arr=[2,3,4,5]
//sum=6
//(2,4)
// sum=7 (2,5)(3,4)



// var sum=9;
// count=1;
// for (let i of arr){
//     //i=2
//     for(let j of arr){
//         count++;
//         //j=2,3,4
//         if((i+j)==sum){ //2+2==9 2+3==9 2+4==9
//             console.log(`${i},${j} pairs`);
//             break;
//         }
//     }
// }
// console.log("iteration",count);


// var sum=6;
// var arr=[2,3,4,5];
// count=1;
// for (let i of arr){
    
//     for(let j of arr){
//         count++;
    
//         if((i+j)==sum){ 
//             console.log(`${i},${j} pairs`);
//             break;
//         }
//     }
// }
// console.log("iteration",count);



// var sum=7;
// var arr=[2,3,4,5];
// count=1;
// for (let i of arr){
    
//     for(let j of arr){
//         count++;
    
//         if((i+j)==sum){ 
//             console.log(`${i},${j} pairs`);
//             break;
//         }
//     }
// }
// console.log("iteration",count);



// var arr=[2,3,4,5]
// arr.sort((n1,n2)=>n1-n2)

// var pairNum=7
// var low=0,upp=arr.length-1;
// var flag=0;

// while(low<upp) {
//     let curSum=arr[low]+arr[upp]
//     if (curSum==pairNum){
//         flag=1;
//         console.log(`pairs(${arr[low]},${arr[upp]})`);
//         low++; //break;
//     }
//     else if(curSum<pairNum){
//    low++
// }
//    else if(curSum>pairNum){
//    upp--
// }
// }

// if(flag==0){
//     console.log("no pairs found");
// }







//q3 find common numbers from two array
// var arr1=[10,11,12,20,30]
// var arr2=[11,20,21,30,31]
// var count=0;

// for(let num1 of arr1){
//     for(let num2 of arr2){
//         if(num1==num2){
//             console.log(num1);
//         }
//         count++;
//     }
// }
// console.log(count);


//second method
var arr1=[10,11,12,20,30]
var arr2=[11,20,21,30,31]
var count=1;
var p1=0,p2=0;
while((p1<arr1 .length) && (p2<arr2 .length))
{
    if(arr1[p1]==arr2[p2]){
        console.log(`common element ${arr1[p1]}`);
        p1++;
        p2++;

    }
    else if(arr1[p1]<arr2[p2]){
        p1++;
    }
    else if(arr1[p1]>arr2[p2]){
        p2++;
    }
    count++;
}
console.log(count);

