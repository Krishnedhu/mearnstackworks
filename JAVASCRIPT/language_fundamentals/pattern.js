// *
// **
// ***
// ****


// for(let row=1; row<=4; row++){ //row=1 1<=4 row=2 2<=4
//     let str=""; //str""
//     for(let col=1;col<=row;col++){ //col=1 1<=2,col=2 2<=2,col=3 3<=2
//         str+="*"; //str="**"
    
//     }
//     console.log(str);//*
//                       //** 
// }


//#
//##
//###
//####


 for(let row=1; row<=4; row++){ //row=1 1<=4 row=2 2<=4
        let str=""; //str""
        for(let col=1;col<=row;col++){ //col=1 1<=2,col=2 2<=2,col=3 3<=2
            str+="#"; //str="##"
        
        }
        console.log(str);//##
                          //##
    }

//1
//22
//333
//4444

for(let row=1; row<=4; row++){
    let str="";
    for (let col=1;col<=row;col++){
        str+=col; //str+=row;
    }

    console.log(str);

}