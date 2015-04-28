var leftButtonDown = false;
var rightButtonDown = false;
var currentScroll = $(this).scrollTop();

$(document).mousedown(function(md) {
  if(md.which == 1) {
    leftButtonDown = true;
  } else if (md.which == 3) {
    rightButtonDown = true;
  }

  if(leftButtonDown && rightButtonDown) { // we're gripped.   
    $('body').addClass('noContext');   
    var startPos = md.pageY;

    $(document).on('mousemove', function(e){
      var moveAmount = e.pageY - startPos;
      var newLoc = (currentScroll - moveAmount)
      window.scrollTo(md.pageX, newLoc);
      currentScroll = newLoc;
    });
    md.preventDefault();
  }
});

$(document).mouseup(function(e) {
  if(e.which == 1) {
    leftButtonDown = false;
  } else if (e.which == 3) {
    rightButtonDown = false;
  }
  $(document).unbind('mousemove');
});
