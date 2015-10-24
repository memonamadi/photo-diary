(function getImages() {
	var baseUrl, url, flickrMethod, apiKey, userId, privacy_filter, format;

	baseUrl = "https://api.flickr.com/services/rest/?",
	flickrMethod = "method=flickr.people.getPhotos",
	apiKey = "&api_key=8e60c6375f7a67331221eef287e89570",
	userId = "&user_id=133997903%40N08",
	privacy_filter = "&privacy_filter=1",
	format = "&format=json&nojsoncallback=1",
	URL = baseUrl + flickrMethod + apiKey + userId + privacy_filter + format;

	$.getJSON(URL, function(data) {
		$.each(data.photos.photo, function(i, item) {
			var img_src, img_url, img_thumbnail;

			img_src = "https://farm" + item.farm + ".staticflickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_c.jpg";
			img_url = "https://www.flickr.com/photos/" + item.owner + "/" + item.id;
			img_thumbnail = ("<div class='grid-item'><a href='" + img_url + "'>");
			img_thumbnail += ("<img src='" + img_src + "'/>");
			img_thumbnail += ("</a></div>");
			$(img_thumbnail).appendTo(".grid-container");
		});

		if(document.documentElement.clientWidth > 520){
			var $grid = $('.grid').imagesLoaded( function() {
	    		$grid.masonry({
	      			itemSelector: '.grid-item',
	      			columnWidth: 500,
	      			isFitWidth: true
	    		}); 
	  		});
	  	} else if(document.documentElement.clientWidth < 520){
	  		var $grid = $('.grid').imagesLoaded( function() {
	    		$grid.masonry({
	      			itemSelector: '.grid-item',
	      			columnWidth: 300,
	      			isFitWidth: true
	    		}); 
	  		});
	  	}
	});
})();

  


