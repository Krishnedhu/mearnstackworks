// var arr=[10,11,1,2,3,14] //linear search

// var element=2;
// var flag=0;
// var count=1;
// for (let num of arr){
// //num=10
// if(num==element){ //10==2

// flag=1; //flag=1
// break;

// }
// count++;
// }
// console.log(flag==0?"element not found":"element found");
//console.log(count);


// for(let pos in arr){ //position of array & position of array with element
// if(element==arr[pos]){ //3==arr[0] 
//     console.log(pos);
//     flag=1;
//     break;

// }

    // console.log(pos);
// }
// console.log(flag==0?"not found":"found");



// for(let index in arr){ //index of array
//     if(element==arr[index]){ //3==arr[0]  
//         console.log("position" , index);
//         flag=1;
//         break;
    
//     }
    
        // console.log(pos);
    // }
    // console.log(flag==0?"not found":"found");

    //Binary search
    var arr=[10,11,12,15,16,17]
    arr.sort((n1,n2)=>n1-n2)
    var element=11;
    var flag=0;
    var count=1;
    var low=0,upp=arr.length-1 //low=0 upp=5
    while(low<=upp){ //0<5 
       let mid=Math.floor((low+upp)/2) //mid=0+5/2=2.5=2 mid=0+1/2=0.5=0
       //case 1 
       if (element>arr[mid]){ //11>arr[2] 11>12 11>10
            low=mid+1;
        }
        //case 2
        else if(element<arr[mid]){ //11<12
            upp=mid-1
        }
        //case 3
        else if (element==arr[mid]){
            flag=1;
            break;
        }
        count++;
    }
    console.log(count);
    console.log(flag==0?"element not found":"element found");

//mid value mid=(low+upp)/2 (0+5)/2=5/2=2.5 math.floor(2.5)=2
    //case 1
    // if (element>arr[mid]){
    //     low=mid+1
    // }
    //case 2
    // else if(element<arr[mid]){

    // }
    // case 3
    // else if(element==arr[mid]){

    // }
    
    

