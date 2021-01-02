$(document).ready(function() {
  image_horizontal_padding = 15;

  upper_margin_offset = $("#upper-slider .slider-image:first").width() + 20;
  $('#upper-slider').css('margin-right', '-' + upper_margin_offset + 'px');

  bottom_margin_offset = $("#upper-slider .slider-image:first").width() + 20;
  $('#bottom-slider').css('margin-right', '-' + bottom_margin_offset + 'px');

  function switchImages(side) {
    if (side == 'left') {
      old_upper_last_image = $('#upper-slider .slider-image').last();
      old_bottom_last_image = $('#bottom-slider .slider-image').last();

      $('#upper-slider .slider-image').last().remove();
      $('#bottom-slider .slider-image').last().remove();

      $('#upper-slider').prepend(old_upper_last_image);
      $('#bottom-slider').prepend(old_bottom_last_image);

      upper_margin_offset = $('#upper-slider .slider-image')[0];
      bottom_margin_offset = $('#bottom-slider .slider-image')[0];

      $('#upper-slider').css('margin-right', '-' + (upper_margin_offset.width + image_horizontal_padding) + 'px');
      $('#bottom-slider').css('margin-right', '-' + (bottom_margin_offset.width + image_horizontal_padding) + 'px');
    } else {
      old_upper_first_image = $('#upper-slider .slider-image').first();
      old_bottom_first_image = $('#bottom-slider .slider-image').first();

      $('#upper-slider .slider-image').first().remove();
      $('#bottom-slider .slider-image').first().remove();

      $('#upper-slider').append(old_upper_first_image);
      $('#bottom-slider').append(old_bottom_first_image);

      upper_margin_offset = $('#upper-slider .slider-image')[0];
      bottom_margin_offset = $('#bottom-slider .slider-image')[0];      

      $('#upper-slider').css('margin-right', '-' + (upper_margin_offset.width + image_horizontal_padding) + 'px');
      $('#bottom-slider').css('margin-right', '-' + (bottom_margin_offset.width + image_horizontal_padding) + 'px');
    }
  }
  
  $(".arrow-image-button")
    .on('click', function(){
      $(".arrow-image-button").prop('disabled', true);
      $(".arrow-image-button").addClass('blocked-arrow-image-button');

      upper_first_image_width = ($("#upper-slider .slider-image")[0].width + image_horizontal_padding);
      bottom_first_image_width = ($("#bottom-slider .slider-image")[0].width + image_horizontal_padding);
      upper_second_image_width = ($("#upper-slider .slider-image")[1].width + image_horizontal_padding);
      bottom_second_image_width = ($("#bottom-slider .slider-image")[1].width + image_horizontal_padding);
      upper_last_image_width = ($("#upper-slider .slider-image").last()[0].width + image_horizontal_padding);
      bottom_last_image_width = ($("#bottom-slider .slider-image").last()[0].width + image_horizontal_padding);

      if (($(this).attr('id').slice(0,4) == 'left')) {
        $('#upper-slider').animate({
          marginRight: "+=" + upper_first_image_width + "px"
        }, {
          duration: 800,
          complete: function() {
            $(".arrow-image-button").prop('disabled', false);
            $(".arrow-image-button").removeClass('blocked-arrow-image-button');
          }
        });

        $('#bottom-slider').animate({
          marginRight: "+=" + bottom_first_image_width  + "px"
        }, {
          duration: 800,
          complete: function() {
            $(".arrow-image-button").prop('disabled', false);
            $(".arrow-image-button").removeClass('blocked-arrow-image-button');
            switchImages('left');
          }
        });

      } else {
        $('#upper-slider').animate({
          marginRight: "-=" + upper_second_image_width + "px"
        }, {
          duration: 800,
          complete: function() {
            $(".arrow-image-button").prop('disabled', false);
            $(".arrow-image-button").removeClass('blocked-arrow-image-button');
          }
        });

        $('#bottom-slider').animate({
          marginRight: "-=" + bottom_second_image_width  + "px"
        }, {
          duration: 800,
          complete: function() {
            $(".arrow-image-button").prop('disabled', false);
            $(".arrow-image-button").removeClass('blocked-arrow-image-button');
            switchImages('right');
          }
        });
      };
    });
});