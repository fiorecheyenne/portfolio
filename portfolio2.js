var title = $("#title");
var works = $(".works");
var about = $(".about");
var driftc = $(".driftcontent");
var drift = $("#drift");
var giphy = $("#giphyi");
var giphin = $(".giphyinfo");
var triviain = $(".triviainfo");
var trivia = $("#triviai");
var home = $("#home");

$("#button").on("click", function () {
title.fadeToggle(900);
triangles();
showWorks();
})

function showWorks(){
    works.fadeToggle(5000);
}

// function hideWorks() {
//     works.fadeToggle(3000);
// }

function triangles(){
$(".splitleft").css({
    "transform":"skewY(315deg)",
    "transition": "transform 2s",
    "transform-origin":"bottom left"   
})
$(".splitright").css({
    "transform":"skewY(-315deg)",
    "transition": "transform 2s",
    "transform-origin":"bottom right"
})
$(".links").fadeToggle("5000");
$(".links").css({
    "position":"absolute",
    "top":"0",
    "left":"0",
    "margin-top":"0px",
    "margin-left":"10px"
   
})
$('i.fab').css({
    "font-size": "5em",
    "letter-spacing":"50px"
})
$('i.fas').css({
    "font-size":"5em",
    "letter-spacing":"50px"
})
}


(drift).on("click", function () {
giphin.hide();
triviain.hide();
       driftc.show();
   }
);

(giphy).on("click", function (){
    driftc.hide();
    triviain.hide();
    giphin.show();
});

(trivia).on("click", function (){
    driftc.hide();
    giphin.hide();
    triviain.show();
});

// (home).on("click", function (){
// hideWorks();
// title.fadeToggle(3000);

// })
