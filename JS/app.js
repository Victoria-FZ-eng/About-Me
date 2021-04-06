'use strict';
let userName = prompt ("Hi, What's your name?");
alert(userName + " ,Welcome to my website!");
console.log(userName + " ,Welcome to my website!");
let age = prompt ("Am I +18 years old ?","Yes, No");
age = age.toLowerCase();
if(age === "yes"){
    alert("Of coarse I am +18 .");
    console.log("Of coarse I am +18 .");

}
else if(age === "no") {
    alert("no,I'm 18 years old." );
    console.log("no,I'm 18 years old.");
}
else { 
     alert("It doesn/'t really matter xP!");
     console.log("My age doesn't really matter xP!");
};
let music = prompt("Do I like music?","Y, N");
music = music.toLowerCase();
switch(music){
    case "y": alert("Yes,I like music");
    console.log("Yes,I like music");
    break;
    case "n" : alert("Not really, I like music");
    console.log("Not really, I like music");
    break;
    default : alert("I like music");
    console.log("I like music");

}
let pet = prompt("Do I like Pets?","Yes,No");
pet = pet.toLowerCase();
if(pet === "yes"){
    alert("I like pets");
    console.log("I like pets");

}
else if(pet === "no") {
    alert("actually i do like pets");
    console.log("actually i do like pets");
}
let food = prompt("Do I like shawerma?","Yes,No");
food = food.toLowerCase();
if(food === "yes"){
    alert("I love shawerma!");
    console.log("I love shawerma!");
}
else if(food === "no"){
    alert("No one doesn't!!");
    console.log("No one doesn't!!");

}
let enjoy = prompt("Are you enjoying your time?");
enjoy = enjoy.toLowerCase();
switch(enjoy){
    case "yes":
    case "y" :
         alert("I like your website");
         console.log("I like your website");
    break;
    case "no" :
    case "n" :    
         alert("I am bored");
         console.log("I am bored");
    break;
    default: ("I hope you like my website!");
}
alert("Thank you for your time <3 !");

