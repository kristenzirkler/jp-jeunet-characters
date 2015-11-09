$(function(){
  
  // Card Display & Sorting
  $('#ItemList').mixItUp({
    load: {
      sort: 'random'
    },
    callbacks: {
      onMixEnd: function(state){
        var catString = $('[data-filter="'+state.activeFilter+'"]').html();
       
        if (catString !== undefined) {
           $('#filter-name').html('<i class="icon-filter"></i>'+catString).show('fast');
        }
        
      }
    }
  });
  
  
  // Movie Details
  $('.mix').click(function() {
    var movieString = $(this).data('movie'), 
        videoID = $('.movie-'+movieString).data('video');
   
    $('.movie-'+movieString+' iframe').attr('src','//www.youtube.com/embed/'+videoID+'?autohide=1&modestbranding=1&rel=0&showinfo=0');
    
    $('.movie-'+movieString).show('slow');
    
  });
  $('.movie').click(function() {
    $('.movie').hide('fast');
    $('.movie iframe').attr('src','');
  });
/*  
  // Navigation Show on Scroll
  $(document).scroll(function () {
    var y = $(document).scrollTop();
    var t = $('.controls').offset().top;

    if (y > t) {
        $('.control').addClass('sticky');
    } else {
        $('.control').removeClass('sticky');
    }
	});
*/
  // Navigation Dropdowns
  $('.dropdown label').click(function() {
    if ($(this).parent().hasClass('active')) {
      $('.dropdown').removeClass('active');
    } else {
      $('.dropdown label .toggle').removeClass('icon-cancel').addClass('icon-down-open');
      $('.dropdown').removeClass('active');
      $(this).parent().toggleClass('active');
    }

    $(this).find('.toggle').toggleClass('icon-down-open').toggleClass('icon-cancel');
  });
  $('.filter').click(function() {
      $('.dropdown').removeClass('active');
      $('.dropdown label .toggle').removeClass('icon-cancel').addClass('icon-down-open');
  });
  $('#filter-name').click(function() {
      $(this).hide();
  });
  $('#filter-name').hover(function() {
    $(this).find('i').toggleClass('icon-filter').toggleClass('icon-cancel');
  });
    
});