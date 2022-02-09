
//find first recursive character
 var pattern="ABABBC"
 var wc={} //A:1, B:1
 for(let char of pattern){
     //char =A
     if(char in wc){
         console.log(`${char} is first recursive character`);
         break;
     }
     else{
         wc[char]=1
     }
 }