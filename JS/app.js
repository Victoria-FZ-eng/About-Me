'use strict';
let userName = prompt ("Hi, What's your name?");
alert(userName + " ,Welcome to my website!");
console.log(userName + " ,Welcome to my website!");
let age = prompt ("Am I +18 years old ?");
age = age.toLowerCase();
if(age === "yes" || age === "y"){
    alert("Of coarse I am +18 .");
    console.log("Of coarse I am +18 .");

}
else if(age === "no" || age === "n") {
    alert("no,I'm 18 years old." );
    console.log("no,I'm 18 years old.");
}
else { 
     alert("It doesn't really matter xP! but i am +18");
     console.log("My age doesn't really matter xP! but i am +18");
};
let music = prompt("Do I like music?");
music = music.toLowerCase();
switch(music){
    case "yes":
    case "y": alert("Yes,I like music");
    console.log("Yes,I like music");
    break;
    case "no":
    case "n" : alert("Not really, I like music");
    console.log("Not really, I like music");
    break;
    default : alert("I like music");
    console.log("I like music");

}
let pet = prompt("Do I have any Pets?");
pet = pet.toLowerCase();
if(pet === "yes" || pet ==="y"){
    alert("No , I don't");
    console.log("No , I don't");

}
else if(pet === "no" || pet === "n") {
    alert("true,but i do like to have one");
    console.log("true,but i do like to have one");
}
else { 
    alert("I don't have any pet , but I would like to have one");
    console.log("I don't have any pet , but I would like to have one");
}

let food = prompt("Do I like shawerma?");
food = food.toLowerCase();
if(food === "yes" || food === "y"){
    alert("I love shawerma!");
    console.log("I love shawerma!");
}
else if(food === "no" || food ==="n"){
    alert("No one doesn't!!");
    console.log("No one doesn't!!");

}
else {
    alert("I would like to mention that I do");
    console.log("I would like to mention that I do");
}
let enjoy = prompt("Are you enjoying your time?");
enjoy = enjoy.toLowerCase();
switch(enjoy){
    case "yes":
    case "y" :
         alert("Thank you <3");
         console.log("Thank you <3");
    break;
    case "no" :
    case "n" :    
         alert("I'm so sorry!");
         console.log("I'm so sorry!");
    break;
    default: ("I hope you like my website!");
}
alert(userName + "Thank you for your time <3 !");

