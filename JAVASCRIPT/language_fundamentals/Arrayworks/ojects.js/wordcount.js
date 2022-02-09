//wordcount={hello:2 hai:2}
// step 1 split string in to words
var text="hello hai hello hai"  
// var words=text.split(" ")
// console.log(words);
var wordCount={}

// for(let word of words){
//     if(word in wordCount){
//         wordCount[word]+=1
//     }
//     else{
//         wordCount[word]=1
//     }
// }
// console.log(wordCount);
text.split(" ").map(word=>word in wordCount?wordCount[word]+=1:wordCount[word]=1)
console.log(wordCount); 


