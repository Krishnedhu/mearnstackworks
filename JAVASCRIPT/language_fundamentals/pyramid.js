// for(let row=1; row<=4;row++){
//     let str="";
//     for(let space=1;space<=(4-row); space++){ //4 4>1 3 3>1 2 2>1
    
//         str+=" ";//"   "
    
//     }
//     for(let col=1;col<=row;col++){
//         str+="* "
//     }
//     console.log(str);
// }


for(let row=1; row<=4;row++){
    let str="";
    for(let space=1;space<=(4-row); space++){ //4 4>1 3 3>1 2 2>1
    
        str+=" ";//"   "
    
    }
    for(let col=1;col<=row;col++){
        str+="# "
    }
    console.log(str);
}








for(let row=1;row<=4;row++){
    let str="";
    for(let col=1;col<=7;col++){
        if(row==4 || col+row==5 || col-row==3){

    
        str+="*"
    }
    else{
        str+=" "
    }
}
    console.log(str);
       
}