$.imagesFirstLoad= function() {
  upper_random_order = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(function() { return 0.5 - Math.random() });
  bottom_random_order = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(function() { return 0.5 - Math.random() });

  upper_random_order.forEach(function(img) { 
    $('#upper-slider').append("<img class='slider-image' id='slider-image-"+ img + "' src='images/slider-image-" + img + ".jpg' />")
  });

  bottom_random_order.forEach(function(img, i) { 
  	if (i+1 < bottom_random_order.length) {
    	$('#bottom-slider').prepend("<img class='slider-image' id='slider-image-"+ img + "' src='images/slider-image-" + img + ".jpg' />")
  	} else {
  		$('#bottom-slider').append("<img class='slider-image' id='slider-image-"+ img + "' src='images/slider-image-" + img + ".jpg' />")
  	}
  });
};