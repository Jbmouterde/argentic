$(document).ready(function() {

    $('#aboutme').scroll(function(e){
        var scrollTop = $('#aboutme').scrollTop();
        var docHeight = $(document).height();
        var winHeight = $('#aboutme').height();
        var scrollPercent = (scrollTop) / (docHeight - winHeight);
        var scrollPercentRounded = Math.round(scrollPercent*100);

        $('#scrollPercentLabel>span').html(scrollPercentRounded);
        repositionLabel();
    });

    $(window).resize(function(){
        repositionLabel();
    });

    function repositionLabel() {
        $('#scrollPercentLabel').css({
            position:'fixed',
            left: ($('#aboutme').width() - $('#scrollPercentLabel').outerWidth()) / 2,
            top: (($('#aboutme').height() - $('#scrollPercentLabel').outerHeight()) / 2) - $('#scrollPercentLabel').height()
        });
    }

    repositionLabel();

});
 
console.log("hello")


// img 

function resizeImage(img) {
    img.style.width = "400px";
    img.style.height = "660px";
  }

  function resizeImage2(img) {
    img.style.width = "660px";
    img.style.height = "400px";
  }