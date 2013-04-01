$(function(){

	// 
	// nyan cat animation
	// 

	var header_img = $('header img');
	var image_width = header_img.width();
	var window_width = $(window).innerWidth();

	var left_margin = (window_width - image_width)/2;

	header_img.css({marginLeft : left_margin});

	header_img.on('click', function(){
		$(this).animate({marginLeft: window_width}, 1000, function(){
			$(this).css({marginLeft: -image_width}).delay(1000).animate({marginLeft: left_margin}, 1000);
		});
	});

	// 
	// twitter
	// 

	var search_query = 'nyancat';
	var tweets = [];

	$.ajax({
		url: 'http://search.twitter.com/search.json?q=%40' + search_query,
		dataType: 'jsonp',
		error: function(){console.log('error getting tweets!')},
		success: parse_tweets
	});

	function parse_tweets(data){
		for(i=0;i<data.results.length;i++){
			tweets.push(data.results[i].text);
		};
		add_tweet(tweets);
	};

	function add_tweet(tweets) {
		$('.content h3').text(tweets.shift());
	};

	$('.moar').on('click', function(){
		add_tweet(tweets);
	});

	// 
	//  nyan cat song
	// 

	$('.lolz').on('click',function(){
		var song = $('.audio')[0];
		if (song.paused) {
			song.play();
		} else{
			song.pause();
		};		
	});

});