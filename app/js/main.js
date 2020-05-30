 $(document).ready(function(){
 	$('.faq__item__content').slideUp();
 	$('[data-accordion-link]').click(function(){
 		var id = $(this).attr('data-accordion-link');
 		$('[data-accordion-content="'+id+'"]').slideToggle();
 		$('[data-accordion-arrow="'+id+'"]').toggleClass('active');
 	});
 });