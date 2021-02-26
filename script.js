import {ruswords} from "./words.js";
let important = document.getElementById("important");
let newbutton = document.getElementById("new");
let userInput = document.getElementById("userInput");
let words = ruswords;
// let words = ["снег","леопард","берёза","снеговик","энциклопедия"];
let secret = words[Math.floor(Math.random()*words.length)];
console.log(secret);
let cypher = document.getElementById("cypher");
let pictures = document.getElementById("pictures");
let main = document.getElementById("main");
let hints = document.getElementById("hints");
let letters = "";
let picturesNumber = 7;
cypher.innerHTML = "*".repeat(secret.length);
userInput.select();
important.onclick = function (event) {
    event.preventDefault();
    console.log(userInput.value);
    let letter = userInput.value;
    if (!letters.includes(letter)) {
        letters = letters + " " + letter;
    }
    //   includes-включает в себя
    if (secret.includes(letter)) {
        console.log("verno");
        let newCypher = "";
        for (let i = 0; i < secret.length; i = i + 1) {
            // console.log(i)
            if (letter == secret[i]) {
                newCypher = newCypher + letter;
            } else {
                newCypher = newCypher + cypher.innerHTML[i];
            }
        }
        cypher.innerHTML=newCypher;
        if(newCypher==secret){
            important.disabled=true;
            main.innerHTML="ты выиграл";   
        }
    } else {
        console.log("neverno");
        picturesNumber=picturesNumber -1;
        pictures.src="img/snowman"+picturesNumber+".jpg";
        if (picturesNumber==0){
         important.disabled=true;
         main.innerHTML="ты проиграл! "+ "загаданное слово-" + secret;
        }
    }
    userInput.select(); 
    hints.innerHTML="использованные буквы: "+ letters;
}
newbutton.onclick=function(event){
 event.preventDefault();
 main.innerHTML="Снеговик";
 secret = words[Math.floor(Math.random()*words.length)];
 cypher.innerHTML = "*".repeat(secret.length);
 picturesNumber= 7;
 pictures.src="img/snowman"+picturesNumber+".jpg";
 important.disabled=false;
 userInput.select();
 hints.innerHTML= "вводи букву и нажимай на проверить, если ты победил или проиграл, то нажимай новая игра";
}
