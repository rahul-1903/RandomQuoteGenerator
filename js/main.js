var quote;
var author;

$(document).ready(function() {
	function getNewQuote() {
		$.ajax({
			url: 'http://api.forismatic.com/api/1.0/',
			jsonp: 'jsonp',
			dataType: 'jsonp',
			data: {
				method: 'getQuote',
				lang: 'en',
				format: 'jsonp'
			},
			success: function(response) {
				console.log(response);
				quote = response.quoteText;
				author = response.quoteAuthor;
				$('#quote').text(quote);
				if(author) {
					$('#author').text("--by " + author);
				}else {
					$('#author').text("--Unknown");
				}
			}
		});
	}
	getNewQuote();
	$('#btn').on('click', function(event) {
		event.defaultPrevented;
		getNewQuote();
	});
	$('#share').on('click', function(event) {
		event.defaultPrevented;
		window.open("https://www.twitter.com/");
	});
});
