var natural = require('natural');
//import sw  from 'stopword';
sw = require('stopword')
//import fs from 'fs'
const fs = require("fs");
function doStemming(data){ 
    //var natural = require('natural');
    var tokenizer = new natural.WordTokenizer(); 
    var tokens = tokenizer.tokenize(data); 
    //sw = require('stopword')
    const newString = sw.removeStopwords(tokens);
    return newString ; 
   
  } 
class Func{

  readTextFile(fileN)
{
  
  //const fs = require("fs");


  var text = fs.readFileSync("./"+fileN, "utf-8");
    //var textByLine = text.split("\n")
    //console.log(textByLine[1]);
    return text;

}

  findMostRepeatedWord(str) 
{ 
  let words=doStemming(str);
  let occurances = {}; 
  for (let word of words) { 
    if (occurances[word]) { 
      occurances[word]++; 
    } 
    else { 
      occurances[word] = 1; 
    } 
  } 
  // Here occurances will give count of each word
  let max = 0; 
  let mostRepeatedWord = ''; 
  for (let word of words) { 
    if (occurances[word] > max) 
    { 
      max = occurances[word]; mostRepeatedWord = word; 
    } 
  } 
  
  return mostRepeatedWord; 
}
}
module.exports=Func;
