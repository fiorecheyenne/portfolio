var title = $("#title");
var works = $(".works");
var about = $(".about");
var driftc = $(".driftcontent");
var drift = $("#drift");
var giphy = $("#giphyi");
var giphin = $(".giphyinfo");
var triviain = $(".triviainfo");
var trivia = $("#triviai");


$("#button").on("click", function () {
title.fadeToggle("slow","linear");
triangles();
showWorks();
})

function showWorks(){
    works.fadeToggle(3000);
}

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
$(".links").fadeToggle("3000");
$(".links").css({
    "position":"absolute",
    "top":"0",
    "left":"0",
    "margin-top":"0px"
   
})
$('i.fab').css({
    "font-size": "5em",
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
})