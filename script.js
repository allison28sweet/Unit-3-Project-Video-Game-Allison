let button1= document.querySelector(".option-two-screen");
let button2= document.querySelector(".option-two-screen");
let button3= document.querySelector(".option-three");
let storyOpening=document.querySelector(".story-opening");
let option1Screen=document.querySelector(".option-one-screen");
let option2Screen=document.querySelector(".option-two-screen");

button1.onclick=function(){
    storyOpening.style.display="none";
    option2Screen.style.display="block";
};
button2.onclick=function(){
    storyOpening.style.display="none";
    option2Screen.style.display="block";
};
button3.onclick=function(){
    storyOpening.style.display="none";
    option1Screen.style.display="block";
};


/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/


