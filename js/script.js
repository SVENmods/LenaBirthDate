$(document).ready(function () {
  $(".main-container__content").fadeOut();
  $(".main-container__content:first").fadeIn();
  $("ul.tabs li a").click(function() {
    $(".main-container__content").hide();
    var activeTab = $(this).attr("href"); 
    $(activeTab).fadeIn();    
    $("ul.tabs li a").removeClass("active");
    $(this).addClass("active");
  });
});

function autoType(elementClass, typingSpeed){
  var thhis = $(elementClass);
  thhis.css({
    "position": "relative",
    "display": "inline-block"
  });
  thhis.prepend('<div class="cursor-text" style="right: initial; left:0;"></div>');
  thhis = thhis.find(".text-js");
  var text = thhis.text().trim().split('');
  var amntOfChars = text.length;
  var newString = "";
  thhis.text("|");
  setTimeout(function(){
    thhis.css("opacity",1);
    thhis.prev().removeAttr("style");
    thhis.text("");
    for(var i = 0; i < amntOfChars; i++){
      (function(i,char){
        setTimeout(function() {        
          newString += char;
          thhis.text(newString);
        },i*typingSpeed);
      })(i+1,text[i]);
      }
  },1500);
};

$(document).ready(function(){
    autoType(".type-js",200);
    setTimeout(function(){
      $(".main-container__main-text").fadeIn("slow");
    },6000);
});