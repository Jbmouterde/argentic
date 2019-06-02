$(document).ready(function() {

    $(window).scroll(function(e){
        var scrollTop = $(document).scrollTop();
        var docHeight = $(document).height();
        var winHeight = $(window).height();
        var scrollPercent = (scrollTop) / (docHeight - winHeight);
        var scrollPercentRounded = Math.round(scrollPercent*100);

        $('#scrollPercentLabel>span').html(scrollPercentRounded);
        repositionLabel();
    });

    $(window).resize(function(){
        repositionLabel();
    });

    // function repositionLabel() {
    //     $('#scrollPercentLabel').css({
    //         position:'fixed',
    //         left: ($(window).width() - $('#scrollPercentLabel').outerWidth()) / 2,
    //         top: (($(window).height() - $('#scrollPercentLabel').outerHeight()) / 2) - $('#scrollPercentLabel').height()
    //     });
    // }

    repositionLabel();

});
 
console.log("hello")


// img 

const INCREASE = true
const DECREASE = false

let state = INCREASE

function resizeImage(img) {
    img.style.width = "400px";
    img.style.height = "660px";
    $('#aboutme').css({height : '700px'});
    $('#friends').css({height : '700px'});

    }


  function resizeImage2(img) {
    img.style.width = "660px";
    img.style.height = "400px";
    $('#aboutme').css({height : '700px'});
    $('#friends').css({height : '700px'});

}
