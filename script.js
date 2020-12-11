$(document).ready(function() {
  jQuery.fn.extend({
    changePhoto: function(side) { 
      if (side == 'left') {
        // $('.photoImageContainer')
        //   .animate({
        //     opacity: 0
        //     }, 'slow', 'linear');

        // ne uspijevam delayati zamjenu fotki do zavrsetka animacije pa onda bolje izgleda bez animacije

        $('.photoImageContainer').previousPhoto();

        // $('.photoImageContainer')
        //   .animate({
        //     opacity: 100
        //     }, 'slow', 'linear');

      } else {
        // $('.photoImageContainer')
        //   .animate({
        //     opacity: 0
        //     }, 'slow', 'linear');
        $('.photoImageContainer').nextPhoto()
        // $('.photoImageContainer')
        //   .animate({
        //     opacity: 100
        //     }, 'slow', 'linear');
      }
    },

    nextPhoto: function() {
      $('.photoImageContainer img').each(function() {
        image_number = $(this).attr('src').split('-')[2].split('.')[0];

        // ovo je strasno :S ali kako god izvucem src dobijem undefined classu koju mogu obradjivati kao string
        switch(image_number) {
          case '1':
            $(this).attr("src", "images/arrow-blue-left.png");
            image_path = "images/slider-image-9.jpg"
            break;
          case '2':
            image_path = "images/slider-image-1.jpg"
            break;
          case '3':
            image_path = "images/slider-image-2.jpg"
            break;
          case '4':
            image_path = "images/slider-image-3.jpg"
            break;
          case '5':
            image_path = "images/slider-image-4.jpg"
            break;
          case '6':
            image_path = "images/slider-image-5.jpg"
            break;
          case '7':
            image_path = "images/slider-image-6.jpg"
            break;
          case '8':
            image_path = "images/slider-image-7.jpg"
            break;
          case '9':
            image_path = "images/slider-image-8.jpg"
            break;
        }
        $(this).attr('src', image_path);
      });
    },

    previousPhoto: function() {
      $('.photoImageContainer img').each(function() {
        image_number = $(this).attr('src').split('-')[2].split('.')[0];

        switch(image_number) {
          case '1':
            $(this).attr("src", "images/arrow-blue-left.png");
            image_path = "images/slider-image-2.jpg"
            break;
          case '2':
            image_path = "images/slider-image-3.jpg"
            break;
          case '3':
            image_path = "images/slider-image-4.jpg"
            break;
          case '4':
            image_path = "images/slider-image-5.jpg"
            break;
          case '5':
            image_path = "images/slider-image-6.jpg"
            break;
          case '6':
            image_path = "images/slider-image-7.jpg"
            break;
          case '7':
            image_path = "images/slider-image-8.jpg"
            break;
          case '8':
            image_path = "images/slider-image-9.jpg"
            break;
          case '9':
            image_path = "images/slider-image-1.jpg"
            break;
        }
         $(this).attr('src', image_path);
      });
    }
  });


  $(".arrowImage")
    .mouseenter(function() {
      if ($(this).attr('id').slice(0,4) == 'left') {
        $(this).attr("src", "images/arrow-blue-left.png");
      } else {
        $(this).attr("src", "images/arrow-blue-right.png");
      }
    })
    .mouseleave(function() {
      if ($(this).attr('id').slice(0,4) == 'left') {
        $(this).attr("src", "images/arrow-gray-left.png");
      } else {
        $(this).attr("src", "images/arrow-gray-right.png");
      }
    })
    .on('click', function(){
      if ($(this).attr('id').slice(0,4) == 'left') {
        $('.photoImageContainer').changePhoto('left');
      } else {
        $('.photoImageContainer').changePhoto('right');
      };
    });
});