/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

function evaluador(){
    var miv = $('.vlor');
    var img = document.getElementById('resp');
    var c = 0;
    for(var i=0;i<miv.length;i++)
    {
        if(miv[i].checked)
            resultado=miv[i].value;
    }

    var cont = 0;
    for (var x=0; x < miv.length; x++) {
        if (miv[x].checked){
            r = miv[x].value;
            if(r == 1 || r == 2 || r == 3 || r == 4 || r == 5){
                cont = cont + 1;
            }else{
                cont = cont;
            }

        }

    }
    if(resultado == 1){
        img.src="img/smiley-150841_1280.png";
        $('#bienvenida').html("Que bien. Prestaste Atención. Me alegro").show();
        $('.contador').html(cont+' <i class="glyphicon glyphicon-ok text-success"></i>');
    }else if(resultado == 2){
        img.src="img/smiley-150841_1280.png";
        $('#bienvenida').html("Que bien vas por la segunda . Me alegro").show();
        $('.contador').html(cont+' <i class="glyphicon glyphicon-ok text-success"></i>');
    }else if(resultado == 3){
        img.src="img/smiley-150841_1280.png";
        $('#bienvenida').html("Ooh! .Bien hecho. Me alegro").show();
        $('.contador').html(cont+' <i class="glyphicon glyphicon-ok text-success"></i>');
    }else if(resultado == 4){
        img.src="img/smiley-150841_1280.png";
        $('#bienvenida').html("Interesante estuvo la pregunta. Bien hecho. Me alegro").show();
        $('.contador').html(cont+' <i class="glyphicon glyphicon-ok text-success"></i>');
    }else if(resultado == 5){
        img.src="img/smiley-150841_1280.png";
        $('#bienvenida').html("No tengo nada que decir. Gracias por jugar conmigo").show();
        $('.contador').html(cont+' <i class="glyphicon glyphicon-ok text-success"></i>');
    }else{
        img.src="img/smiley-150837_1280.png";
        $('#bienvenida').html("Ooh! no Prestaste Atención. Que mal").show();
    }

}