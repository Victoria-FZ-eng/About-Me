'use strict';
let userName = prompt ("Hi, What's your name?");
alert(userName + " ,Welcome to my website!");
console.log(userName + " ,Welcome to my website!");
let age = prompt ("Are you +18 years old ?","Yes, No");
age = age.toLowerCase();
if(age === "yes"){
    alert(age + " I am +18 .");
    console.log(age + " I am +18 .");

}
else if(age === "no") {
    alert(age + " I am under 18 years old." );
    console.log(age + " I am under 18 years old.");
}
else { 
     alert("It doesn/'t really matter xP!");
     console.log("Your age doesn't really matter xP!");
};
let music = prompt("Do you like music?","yes,no");
music = music.toLowerCase();
switch(music){
    case "yes": alert("I like music");
    console.log("I like music");
    break;
    case "no" : alert("I don't like music");
    console.log("I don't like music");
    break;
}
let pet = prompt("Do you like Pets?","Yes,No");
pet = pet.toLowerCase();
if(pet === "yes"){
    alert("I like pets");
    console.log("I like pets");

}
else if(pet === "no") {
    alert("I don't like pets");
    console.log("I don't like pets");
}
let food = prompt("Do You like shawerma?","Yes,No");
food = food.toLowerCase();
if(food === "yes"){
    alert("I love shawerma!");
    console.log("I love shawerma!");
}
else if(food === "no"){
    alert("I prefer pizza");
    console.log("I prefer pizza");

}
let enjoy = prompt("Are you enjoying your time?","Yes,No");
enjoy = enjoy.toLowerCase();
switch(enjoy){
    case "yes": alert("I like your website");
    console.log("I like your website");
    break;
    case "no" : alert("I am bored");
    console.log("I am bored");
    break;
}
alert("Thank you for your time <3 !");

