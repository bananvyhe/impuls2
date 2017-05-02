//script for debug  toggle style bgimageLineGrid on/off mouse action
$(function() {
  $("<div/>", {
      "id": "clickme",
      text: "",
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

