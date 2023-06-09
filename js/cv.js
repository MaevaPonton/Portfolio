$(document).ready(function(){
    animateDiv('.a');
    animateDiv('.b');
    animateDiv('.c');
    animateDiv('.d');
    animateDiv('.e');
    animateDiv('.f');
    animateDiv('.g');
    animateDiv('.h');
    animateDiv('.i');
    animateDiv('.j');
    animateDiv('.k');
    animateDiv('.l');
    animateDiv('.m');
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 6000,   function(){
      animateDiv(myclass);        
    });
    
};


var runFunction = function() {
    var container = $('.title-container');
    
    container.removeClass('open');
    
    var slideWidth = (container.outerWidth() - container.outerHeight()) / 2 - 3;
    $('.slide').css('width',slideWidth);
    
    container.addClass('open');
  }
  
  setTimeout(runFunction,500);
  
  $('.run-button button').on('click', runFunction);