(function($) {

    var collapseAll = true;

   $(document).ready(function() {
        var titles = $(".accordion__title"),
            texts = $(".accordion_line"),
            hamburger = $(".hamburger"),
            cross = $(".cross"),
            menu = $(".menu");

 // początek funkcji dotyczącej akordeona menu

cross.hide();
hamburger.click(function() {
menu.slideToggle( "fast", function() {
hamburger.hide();
cross.show();
});
});

cross.click(function() {
menu.slideToggle( "fast", function() {
cross.hide();
hamburger.show();
});
});// koniec funkcji dotyczącej akordeona menu

      /*  texts.hide();
        //titles.hide();

        texts.first().show();
        //titles.first().show();

        titles.children("p").first("p").addClass("accordion__title--active");

        titles.on("click", function() { // początek funkcji dotyczącej akordeona

            if(collapseAll) {
                titles.children("p").removeClass("accordion__title--active");
                texts.stop().slideUp(300);
            }

            var that = $(this),
                text = that.next(".accordion_line"),
                isVisible = text.is(":visible");

            that.children("p").first("p").toggleClass("accordion__title--active", !isVisible);

            if(!isVisible) {
                text.stop().slideDown(300);
            } else {
                text.stop().slideUp(300);
            } // koniec funkcji dotyczącej akordeona */

             /*    var ilosc_dni = 7; 

for(var i = 0; i < ilosc_dni; i++) {
	
	d = new Date();
	d.setDate(d.getDate() + i);
	data = d.getDate() + "-" + (d.getMonth()+1) + "-" + d.getFullYear();
	var x = document.getElementsByClassName(data);
    x[0].style.display = "block";
} */ // funkcja dotyczaca filtra na akrdeonie

        }); // koniec funkcji czekającej na uruchomienie strony www

   /* funkcja linkow */

    $('a').click(function(){
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 2000);
    return false;
});

   /* koniec funkcj linków */

        $('.bxslider').bxSlider({
   			slideWidth: 800,
   			buildPager: function(slideIndex){
    switch(slideIndex){
      case 0:
        return '<img src="./compas/gfx/mini-team0.jpg">';
      case 1:
        return '<img src="./compas/gfx/mini-team1.jpg">';
      case 2:
        return '<img src="./compas/gfx/mini-team2.jpg">';
      case 3:
        return '<img src="./compas/gfx/mini-team3.jpg">';
    }
  }
        });	 // koniec bx slidera



})(jQuery);