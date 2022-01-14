$(window).scroll(function(evt){
  if($(window).scrollTop()<497) {
  $(".navbar").removeClass("bg-light");
  $(".navbar").addClass("navbar-light");  
  $(".navbar-light").css("background-color","")
  }else{
    $(".navbar-light").css("background-color","#c9d7ef")
    }
});

var s = skrollr.init();

document.body.id = "skrollr-body"

var vm = new Vue({
  el: "#app",
  methods: {
    test: function(){
      ga('send','event','夢魘','點選','點選夢魘二字')
      
    }

}})