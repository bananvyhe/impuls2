//script for debug  toggle style bgimageLineGrid on/off mouse action
$(function() {
  $("<div/>", {
      "id": "clickme",
      text: "",
      function(){
          $('#content').removeClass('debug');
      },
      mouseenter: function(){
          $('#content').addClass('debug');
      },
      mouseleave: function(){
          $('#content').removeClass('debug');
      }
  }).appendTo("body");
});

