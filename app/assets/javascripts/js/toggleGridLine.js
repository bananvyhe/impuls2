//script for debug  toggle style bgimageLineGrid on/off mouse action
$(function() {
  $("<div/>", {
      "class": "clickme",
      text: "+",
      function(){
          $('#main').removeClass('main');
      },
      mouseenter: function(){
          $('#main').addClass('main');
      },
      mouseleave: function(){
          $('#main').removeClass('main');
      }
  }).appendTo("body");
});

