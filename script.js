// $(document).ready(function() {

//     $(window).scroll(function(e){
//         var scrollTop = $(document).scrollTop();
//         var docHeight = $(document).height();
//         var winHeight = $(window).height();
//         var scrollPercent = (scrollTop) / (docHeight - winHeight);
//         var scrollPercentRounded = Math.round(scrollPercent*100);

//         $('#scrollPercentLabel>span').html(scrollPercentRounded);
//         // repositionLabel();
//     });

//     // $(window).resize(function(){
//     //     repositionLabel();
//     // });

//     // function repositionLabel() {
//     //     $('#scrollPercentLabel').css({
//     //         position:'fixed',
//     //         left: ($(window).width() - $('#scrollPercentLabel').outerWidth()) / 2,
//     //         top: (($(window).height() - $('#scrollPercentLabel').outerHeight()) / 2) - $('#scrollPercentLabel').height()
//     //     });
//     // }

//     // repositionLabel();

// });
 
console.log("hello")


// img 

const INCREASE = true
const DECREASE = false

let state = INCREASE

function resizeImage(img) {
    if(state == INCREASE){
        img.style.width = "400px";
        img.style.height = "660px";
        $('#aboutme').css({height : '700px'});
        $('#friends').css({height : '700px'});
        $('#trip').css({height : '700px'});

        console.log(state)
        state = DECREASE
        console.log(state)
}   
    else(
        img.style.width = "200px",
        img.style.height = "330px",
        $('#aboutme').css({height : '500px'}),
        $('#friends').css({height : '500px'}),
        $('#trip').css({height : '500px'}),

        console.log(state),
        state = INCREASE

    )
    }


  function resizeImage2(img) {
    if(state == INCREASE){
        img.style.width = "660px";
        img.style.height = "400px";
        $('#aboutme').css({height : '700px'});
        $('#friends').css({height : '700px'});
        $('#trip').css({height : '700px'});
        console.log(state)
        state = DECREASE
        console.log(state)
}   
    else(
        img.style.width = "330px",
        img.style.height = "200px",
        $('#aboutme').css({height : '500px'}),
        $('#friends').css({height : '700px'}),
        $('#trip').css({height : '500px'}),

        console.log(state),
        state = INCREASE

    )
    }



    $("body > header > div > nav > ul > li:nth-child(1) > a").click(function(){
        window.location.href = "index.html"
        // $("body > div.instructions.cache1").slideToggle(1500);
      });


    
     
