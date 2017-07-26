$(function(){

	$('#my-menu').mmenu({
		extensions: ['effect-menu-slide', 'pagedim-black', 'theme-black' ],
		navbar:{
			title:'<img src="img/Group_6.png" alt="фотограф Dorian Clover">'
		},
		offCanvas:{
			position: 'right'
		}
	});

   var $menu = $("#my-menu").mmenu({
   //   options
});

   var $icon = $("#my-icon");
   var API = $("#my-menu").data( "mmenu" );

   $icon.on( "click", function() {
      API.open();
   });

   API.bind( "open:finish", function() {
      setTimeout(function() {
         $icon.addClass( "is-active" );
         $('.soc').css("visibility","hidden");
      }, 50);
   });
   API.bind( "close:finish", function() {
      setTimeout(function() {
         $icon.removeClass( "is-active" );
         $('.soc').css("visibility","visible");
      }, 50);
   });
   $(".carousel-albums").owlCarousel({
      loop: true,
      nav:true,
      smartSpeed: 700,
      navText:['<i class="fa fa-chevron-circle-left"</i>', '<i class="fa fa-chevron-circle-right"></i>'],
      responsiveClass: true,
      responsive:{
         0:{
            items:1
         },
         800:{
            items:2
         },
         1100:{
            items:3
         }
      }
   });
   function onResize(){
      $('.carousel-albums-item').equalHeights();
   }onResize();
   window.onresize = function() {onResize()};
   

});