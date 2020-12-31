$(document).ready(function() {
  function switchImages(side) {
    if (side == 'left') {
      old_upper_first_image = $('#upper-slider .slider-image').first();
      old_bottom_first_image = $('#bottom-slider .slider-image').first();

      $('#upper-slider .slider-image').first().remove();
      $('#bottom-slider .slider-image').first().remove();

      $('#upper-slider').append(old_upper_first_image);
      $('#bottom-slider').append(old_bottom_first_image);

      $('#upper-slider').css('margin-left', '+=' + (old_upper_first_image.width() + 10) + 'px');
      $('#bottom-slider').css('margin-left', '+=' + (old_bottom_first_image.width() + 10) + 'px');

    } else {
      old_upper_last_image = $('#upper-slider .slider-image').last();
      old_bottom_last_image = $('#bottom-slider .slider-image').last();

      $('#upper-slider .slider-image').last().remove();
      $('#bottom-slider .slider-image').last().remove();

      $('#upper-slider').prepend(old_upper_last_image);
      $('#bottom-slider').prepend(old_bottom_last_image);

      $('#upper-slider').css('margin-left', '-=' + (old_upper_last_image.width() + 10) + 'px');
      $('#bottom-slider').css('margin-left', '-=' + (old_bottom_last_image.width() + 10)+ 'px');
    }
  }
  
  $(".arrow-image-button")
    .mouseenter(function() {
    //   if ($(this).attr('id').slice(0,4) == 'left') {
    //     $(this).attr("src", "images/arrow-blue-left.png");
    //   } else {
    //     $(this).attr("src", "images/arrow-blue-right.png");
    //   }
    })
    .mouseleave(function() {
    //   if ($(this).attr('id').slice(0,4) == 'left') {
    //     $(this).attr("src", "images/arrow-gray-left.png");
    //   } else {
    //     $(this).attr("src", "images/arrow-gray-right.png");
    //   }
    })
    .on('click', function(){
      $(".arrow-image-button").prop('disabled', true);
      upper_last_image_width = ($("#upper-slider .slider-image").last()[0].width + 10);
      bottom_last_image_width = ($("#bottom-slider .slider-image").last()[0].width + 10);

      if (($(this).attr('id').slice(0,4) == 'left')) {
        $('#upper-slider').animate({
          marginLeft: "-=" + upper_last_image_width + "px"
        }, {
          duration: 800,
          complete: function() {
            $(".arrow-image-button").prop('disabled', false);
          }
        });

        $('#bottom-slider').animate({
          marginLeft: "-=" + bottom_last_image_width  + "px"
        }, {
          duration: 800,
          complete: function() {
            $(".arrow-image-button").prop('disabled', false);
            switchImages('left');
          }
        });

      } else {
        $('#upper-slider').animate({
          marginLeft: "+=" + upper_last_image_width + "px"
        }, {
          duration: 800,
          complete: function() {
            $(".arrow-image-button").prop('disabled', false);
          }
        });

        $('#bottom-slider').animate({
          marginLeft: "+=" + bottom_last_image_width  + "px"
        }, {
          duration: 800,
          complete: function() {
            $(".arrow-image-button").prop('disabled', false);
            switchImages('right');
          }
        });
      };
    });
});
