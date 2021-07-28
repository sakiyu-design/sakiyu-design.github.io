$(function(){

    //ドロワー
    $('.drawer-icon, .drawer-content-item').on('click', function(e){
        e.preventDefault();
        $('.drawer-icon').toggleClass('is-active')
        $('.drawer-content').toggleClass('is-active')
        $('.drawer-background').toggleClass('is-active')
    })

    //カルーセルスライダー
    $('.slider').slick({
        arrows:false,
        dots:true,
        dotsClass:'slide-dots',
        slidesToShow:2,
        infinite:true,
        variableWidth:true
    })

    //scroll-top
    $('a[href^="#"]').on('click', function() {

        var header = $('header').innerHeight()
        var id = $(this).attr('href')
        var position = 0
        if(id != '#') {
          position = $(id).offset().top - header
        }
        
        console.log(id)
        $('html, body').animate({
          scrollTop: position
        }, 300)
        
      })


    //qa-section
    $('.q-wrap').on('click', function (){
        $(this).next().slideToggle()
        $(this).children('.q-icon').toggleClass('is-open')
    })


    //送信時の処理
    let $form = $('#js-form')
    $form.submit(function(e) { 
        $.ajax({ 
        url: $form.attr('action'), 
        data: $form.serialize(), 
        type: "POST", 
        dataType: "xml", 
        statusCode: { 
            0: function() { 
              //送信に成功したときの処理 
              $form.slideUp()
              $('#js-success').slideDown()
            }, 
            200: function() { 
              //送信に失敗したときの処理 
              $form.slideUp()
              $('#js-error').slideDown()
            }
          } 
        })
        return false
      })


    //フォームとsubmitボタン
    var $submit = $('#js-submit')
    $('#js-form input, #js-form textarea').on('change', function(){

        if(
            $('#js-form input[type="text"]').val() !== "" &&
            $('#js-form input[type="email"]').val() !== "" &&
            $('#js-form input[name="entry.111125179"]').prop('checked') === true
        ) {
            $submit.prop('disabled', false)
            $submit.addClass('change')
        } else {
            $submit.prop('disabled' , true)
            $submit.removeClass('change')
        }
    })

    //wow
    new WOW().init();

})









