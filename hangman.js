

const readline = require('readline');
var figlet = require('figlet');
var letter;
let alphabet=[] ;
let original_word;
let temp_word;
let update_word;
const indexes = [];

function Ask(query) {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout
    })
  
    return  new Promise(resolve => readline.question(query, ans => {
    readline.close();
    resolve(ans);
  }))
  }
  
   
  // example useage
  async function main() {
     
    let lives =10;
    let categories = [
        ["everton", "liverpool", "swansea", "chelsea", "hull", "manchester-city", "newcastle-united"],
        ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
        ["manchester", "milan", "madrid", "amsterdam", "prague"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    original_word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    update_word=original_word;
   // temp_word = original_word.replace(/./g, "*");
    console.log("You have 10 guesses"); 
    console.log("The word is :"); 
    console.log(original_word); 
   while(lives!=0)
   {
    var _letter = await Ask("what is your guess  ")
    letter=_letter;
    if(original_word.includes(letter) )
    {
        alphabet.push(letter);
        update(letter);
        console.log(temp_word); 
        lives--;
    }

   
   }
   
   
   
  }
  function  update()
  {
    a=chars(original_word)
    console.log(a);
    
    for (let index = 0; index < a.length; index++) {
      if (a[index] === letter) {
        indexes.push(index);
      }
    }
    console.log(indexes)
     for(let index = 0; index < indexes.length; index++)
     {
       
         a[indexes[index]]="*";
     }

    console.log(a.toString());
    
  }
  function chars (string) {  
    return Array.from(
      String(string)
    )
  }
  async function lol() {
  
    figlet('Hello Player!!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });
  }
 main();