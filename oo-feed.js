$(document).ready(function(){
	var Feed = {
	  		feedBox : $('#newsfeed'),
			limit : Feed.feedBox.find('p').length,
			elem_height : ($('p').height()) * $('p').length,
			feed_height : this.feedBox.height(),
			rewind: function (timer, funct ){
				var scrollNews = funct; 
			
				clearInterval(timer);
				timer = null;
				$('#newsfeed p').css('marginTop','').animate({
					opacity: 1
				});
				this.scrollNews();
			},
			scrollNews: function(){
				this.feedBox.each(function(index){
						window.timer = setInterval(function(){
				
						if(index < this.limit){
							console.log(index, this.limit)
					
							$('p').eq(index).animate({
								opacity: 0,
								marginTop: '-' + $('p').eq(index).offset().top
							});
							index++;	
					
						} else {
							console.log('else firing');
							this.rewind(timer, this.scrollNews);
						}
					}, 2000);
				});
			}
	}
	  		
		
	if(Feed.elem_height < Feed.feed_height){
		Feed.feedBox
		.children().children()
		.clone().addClass('clone')
		.appendTo(Feed.feedBox.find('#inner'));
	}	
			
	//Init Everything
	Feed.scrollNews();
	
	$feedBox.hover(function(){
		clearInterval(window.timer);
		window.timer = null;
		Feed.feedBox.find('p').clearQueue();
		},
	
		function(){
			Feed.rewind(timer, Feed.scrollNews);
	});
	
});

