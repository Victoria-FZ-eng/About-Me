'use strict';

let userName = prompt ('Hi, What\'s your name?');
alert(userName + ' ,Welcome to my website!');
//console.log(userName + " ,Welcome to my website!");

let score = 0;

function question1(){
let age = prompt ('Am I +18 years old ?');
age = age.toLowerCase();
if(age === 'yes' || age === 'y'){
  alert('Of coarse I am +18 .');
  score++;
  //console.log("Of coarse I am +18 .");

}
else if(age === 'no' || age === 'n') {
  alert('no,I\'m 18 years old.' );
  //console.log("no,I'm 18 years old.");
}
else {
  alert('It doesn\'t really matter xP! but i am +18');
  //console.log("My age doesn't really matter xP! but i am +18");
}
}
question1();

function question2(){
let music = prompt('Do I like music?');
music = music.toLowerCase();
switch(music){
case 'yes':
case 'y': alert('Yes,I like music');
  //console.log("Yes,I like music");
  score++;
  break;
case 'no':
case 'n' : alert('Not really, I like music');
  //console.log("Not really, I like music");
  break;
default : alert('I like music');
    //console.log("I like music");

}
}
question2();

function question3(){
let pet = prompt('Do I have any Pets?');
pet = pet.toLowerCase();
if(pet === 'yes' || pet ==='y'){
  alert('No , I don\'t');
  //console.log("No , I don't");

}
else if(pet === 'no' || pet === 'n') {
  alert('true,but i do like to have one');
  score++;
  //console.log("true,but i do like to have one");
}
else {
  alert('I don\'t have any pet , but I would like to have one');
  //console.log("I don't have any pet , but I would like to have one");
}
}
question3();

function question4(){
let food = prompt('Do I like shawerma?');
food = food.toLowerCase();
if(food === 'yes' || food === 'y'){
  alert('I love shawerma!');
  score++;
  //console.log("I love shawerma!");
}
else if(food === 'no' || food ==='n'){
  alert('No one doesn\'t!!');
  //console.log("No one doesn't!!");

}
else {
  alert('I would like to mention that I do');
  //console.log("I would like to mention that I do");
}
}
question4();

function question5(){
let glasses = prompt('Do you think I wear glasses?');
glasses = glasses.toLowerCase();
switch(glasses){
case 'yes':
case 'y' :
  alert('right');
  score++;
  //console.log("right");
  break;
case 'no' :
case 'n' :
  alert('actually I do');
  //console.log("actually I do");
  break;
default: ('I do wear glasses');
}
}

question5();


function question6(){


let year = prompt('In what year do you think i was born? , Hint: within 90\'s , you only have 4 attempts');
for (let i = 1 ; i <= 4 ; i++){
  year = parseInt(year);
  if(i === 4){
    alert('Hard Luck! I was born on 1996');
    break;
  }
  if( year < 1990 || year > 1999 ) {
    year = prompt('I mentioned that it\'s between 1990-1999 , try again');

  }
  else if( year < 1996 ) {
    year = prompt('I\'m a bit younger! ,try again');
  }
  else if( year > 1996) {
    year = prompt('I\'m a bit older! , try again');
  }
  else if ( year === 1996 ){
    alert('That\'s correct! I was born in 1996 ');
    score++;
    break;
  }
}
return year; 
}
question6();

function question7(){
let favDrink = ['green tea','coffee','coktails','avocado','grapefruit','lemon and mint','juices','water'];
let guess = prompt('What is my favorite drink?, Hint: its healthy, You only have 6 attempts');
let y = 0;
let x = true;

for ( let i = 0 ; i<= 5 ; i++){
  guess = guess.toLowerCase();

  for( y = 0 ; y < favDrink.length ; y++) {
    if ( guess === favDrink[y]) {
      alert('True this is one of my favorites.!');
      x = true;
      score++;
      break;
    } else {
      x = false;}

  }
  if (x) {
    break;
  }
  if ( i === 5) {
    alert('You are out of attempts');
  }else if ( i < 5 ) {
    guess = prompt ('Try again..');
  }
}
return guess;
}
question7();
alert(userName + 'Thank you for your time <3 ! , your score is ' + score + 'out of 7');

//console.log(userName + "Thank you for your time <3 !");






