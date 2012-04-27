$(document).ready(function(){
	
	var $feedBox = $('#newsfeed'),
			limit = $feedBox.find('p').length,
			elem_height = ($('p').height()) * $('p').length,
			feed_height = $feedBox.height();
			
			//console.log(elem_height, feed_height)
			if(elem_height < feed_height){
				$feedBox.children().children().clone().addClass('clone').appendTo($feedBox.find('#inner'));
			}	
	function rewind(timer, funct ){
			var scrollNews = funct; 
			
			clearInterval(timer);
			timer = null;
			$('#newsfeed p').css('marginTop','').animate({
				opacity: 1
			});
			scrollNews();
	}
	function scrollNews(){
		$feedBox.each(function(index){
				window.timer = setInterval(function(){
				
				if(index < limit){
					console.log(index, limit)
					
					$('p').eq(index).animate({
						opacity: 0,
						marginTop: '-' + $('p').eq(index).offset().top
					});
					index++;	
					
				} else {
					console.log('else firing');
					rewind(timer, scrollNews);
				}
			}, 2000);
		});
	}
	scrollNews();
	
	$feedBox.hover(function(){
		clearInterval(window.timer);
		window.timer = null;
		$feedBox.find('p').clearQueue();
	},
	
	function(){
		rewind(timer, scrollNews);
	});
	
});

