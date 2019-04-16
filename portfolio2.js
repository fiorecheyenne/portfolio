var title = $("#title");
var works = $(".works");
var about = $(".about");
var driftc = $(".driftcontent");
var drift = $("#drift");
var giphy = $("#giphyi");
var giphin = $(".giphyinfo");

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
}


(drift).on("click", function () {
giphin.hide();
       driftc.show();
   }
);

(giphy).on("click", function (){
    driftc.hide();
    giphin.show();
});