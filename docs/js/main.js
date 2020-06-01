 $(document).ready(function(){
 	$('.faq__item__content').slideUp();
 	$('[data-accordion-link]').click(function(){
 		var id = $(this).attr('data-accordion-link');
 		$('[data-accordion-content="'+id+'"]').slideToggle();
 		$('[data-accordion-arrow="'+id+'"]').toggleClass('active');
 	});

 	$('.kvest__slider').owlCarousel({
 		//items: 3,
 		center: true,
 		loop: true,
 		margin: 30,
 		nav: true,
 		navText: ["<img src=\"img/arrow__slider__left.png\">","<img src=\"img/arrow__slider__right.png\" >"],
 	});
 });