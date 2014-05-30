jQuery(document).ready(function($) {
	
	//Страница мои фото добавление класов для фото
	console.log($.browser.msie);
	if($.browser.msie || $.browser.mozilla){
		if($.browser.version == 8){
			$('.tab_nav').width(211);
		}
		$('head').append('<link rel="stylesheet" href="css/ie8_style.css">')
	};
	if($('.wrap_myPhoto').size()){
		var count_element = $('.wrap_myPhoto').size();
		// каждому 2 в ряду
		for (var i = 1; i <= count_element; ++i) {
			$('.tabs').each(function() {
				$(this).children('.wrap_myPhoto').eq(i).addClass('second');
			});
			i += 2;
		};
		// каждому 3 в ряду
		for (var i = 2; i <= count_element; ++i) {
			$('.tabs').each(function() {
				$(this).children('.wrap_myPhoto').eq(i).addClass('third');
			});
			i += 2;
		};
		//табы на странице мои фото
		$('.tab_nav').on('click', function(event){
			$('.tabs').hide();
			$('.tab_nav').removeClass('active');
			var show_tabs = $(this).addClass('active').data('tab');
			$('#'+show_tabs).show();
			return false;
		});
		// рейтинг фото на странице мои фото
		$('.wrap_myPhoto').children('.rating').hover(function() {
			var this_block = $(this);
			$(this).children('i').eq(0).addClass('active');
			$(this).children('i').hover(function() {
				var this_i = $(this).index();
				this_block.children('i').slice(0, this_i+1).addClass('active');
			}, function(){
				$(this).removeClass('active');
			});
		}, function() {
			$(this).children('i').removeClass('active');
		});
	};

	if ( $('.mysel').length ) {
		$('.mysel').selectbox();
	}
	if ( $('#withPhoto').length ) {
		$('#withPhoto').checkbox();
	}
});