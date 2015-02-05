// TODO Disable hand click on radio and checkbox
//Billeterie 1 correspond jour 1 sans camping 2 jour 1 avec camping
$(document).ready(function(){
	var id_b= 0;
  appear=function(elem,del){                              // Animation quand l'élément apparait
  TweenLite.to(elem,1,{opacity:1,delay:del,});
  TweenLite.from(elem,1,{ease: Back.easeOut.config(1.7), y: "5%",delay:del});
}
  showIt= function(elem){      // Affiche
    TweenLite.to(elem,0, {display:'inline-block',onComplete:appear(elem,0)});
  }
  showItAfter= function(elem){   //Affiche après avoir terminé un précédent
    TweenLite.to(elem,0,{display:'inline-block'});
    appear(elem,0.5);
  }
  hideIt=function(elem,callback){  //Cache
    TweenLite.to(elem,0.5, {opacity:0, display:'none'});
  }
  $('#c1').unbind('click',false);                // Desactive le click sur la case camping
  $('#day1').click(function(){
   if(id_b%2==0 && id_b>0){
    $('#day2').removeClass('active');
    $('#day1').addClass('active');
    $('#d2').prop('checked',false);
    $('#d1').prop('checked', true);
    if(id_b==4){
      hideIt('.pass2');
      showItAfter('.pass1c');
      id_b=3;
    }
    else if(id_b==2){
     hideIt('.pass2');
     showItAfter('.pass1');
     id_b=1;
   }
 }
 if (id_b==0){
  $('#day1').addClass('active');
  $('#d1').prop('checked', true);
  showIt('.pass1');
  id_b=1;
}
});
	$('#day2').click(function(){                      // Actions sur pass 2 jours
       if(id_b%2==1 && id_b>0){                     // Cas cliqué sur 1 jour
        $('#day1').removeClass('active');
        $('#day2').addClass('active');
        $('#d1').prop('checked',false);
          $('#d2').prop('checked', true);    // Cocher automatiquement la box
          if(id_b==3){                              // Cas camping
             hideIt('.pass1c');    // On enleve pass2 et quand l'action se termine on affiche pass1
             showItAfter('.pass2');
             id_b=4;                                
           }
          else{                                     //Cas non camping
           hideIt('.pass1');
           showItAfter('.pass2');
           id_b=2;
         }
       }
       if (id_b==0){                                //Cas premier clique
        $('#day2').addClass('active'); 
        $('#d2').prop('checked', true);
        showIt('.pass2');
        id_b=2;
      }
    });
  $('#camp').click(function(){
    if(id_b<3 && id_b!=0){
      $('#camp').addClass('active');
      $('#c1').prop('checked', true);
      if(id_b==1){                              
       id_b=3;
       hideIt('.pass1');
       showItAfter('.pass1c');
     }
     if(id_b==2)                         
      id_b=4
  }
  else if(id_b>2){
    $('#camp').removeClass('active');
    $('#c1').prop('checked', false);
        if(id_b==3){                              //Probleme avec le clique le if
          id_b=1;
          hideIt('.pass1c');
          showItAfter('.pass1');
        }
        if(id_b==4)                          
          id_b=2
      }
      else{
        $('#camp').addClass('active');
        $('#c1').attr('checked', true);
        $('#d1').attr('checked', true);
        $('#day1').addClass('active');
        id_b=3;
        showIt('.pass1c');
      }
    });
// CHANGE VIEW ON MENU
//     $('.nav-item').click(function(){
//       var self= this;
//       console.log($(self).attr('id'));
//       $('.opened').fadeOut(500, function(){
//         $('.'+$(self).attr('id')).fadeIn(500);
//         $('.'+$(self).attr('id')).addClass('opened');
//       });
//       $('.opened').removeClass('opened');
//     });
$('#art').click(function(){
  if(!($('.art').hasClass('opened'))){
    $('.art').show();
    $('.opened_menu').hide("slide",{},500,function(){
      $(this).removeClass('opened_menu');
      $('.artiste').addClass('opened_menu');
      $('.artiste').show("slide",{},500,function(){
        $('.opened_content').hide("blind",{},500,function(){
          $(this).removeClass('opened_content');
          $('.art_content').addClass('opened_content');
          $('.art_content').show("blind",{},500,function(){
            $('.opened').hide();
            $('.opened').removeClass('opened');
            $('.art').addClass('opened');          
          });
        });
      });
    });
  }
});

$('#bte').click(function(){
  if(!($('.bte').hasClass('opened'))){
    $('.bte').show();
    $('.opened_menu').hide("slide",{},500,function(){
      $(this).removeClass('opened_menu');
      $('.billeterie').addClass('opened_menu');
      $('.billeterie').show("slide",{},500,function(){
        $('.opened_content').hide("blind",{},500,function(){
          $(this).removeClass('opened_content');
          $('.tickets').addClass('opened_content');          
          $('.tickets').show("blind",{},500,function(){
            $('.opened').hide();
            $('.opened').removeClass('opened');
            $('.bte').addClass('opened');
          });
        });
      });
    });
  }
});


$('#mdl').click(function(){
  if(!($('.mdl').hasClass('opened'))){
    $('.mdl').show();
    $('.opened_menu').hide("slide",{},500,function(){
      $(this).removeClass('opened_menu');
      $('.pano').addClass('opened_menu');
      $('.pano').show("slide",{},500,function(){
        $('.opened_content').hide("blind",{},500,function(){
          $(this).removeClass('opened_content');
          $('.pano_content').addClass('opened_content');          
          $('.pano_content').show("blind",{},500,function(){
            $('.opened').hide();
            $('.opened').removeClass('opened');
            $('.mdl').addClass('opened');
            showIt('.timeline_container');
          });
        });
      });
    });
  }
});
$('#inf').click(function(){
  if(!($('.inf').hasClass('opened'))){
    $('.inf').show();
    $('.opened_menu').hide("slide",{},500,function(){
      $(this).removeClass('opened_menu');
      $('.info').addClass('opened_menu');
      $('.info').show("slide",{},500,function(){
        $('.opened_content').hide("blind",{},500,function(){
          $(this).removeClass('opened_content');
          $('.info_content').addClass('opened_content');
          $('.info_content').show("blind",{},500,function(){
            $('.opened').hide();
            $('.opened').removeClass('opened');
            $('.inf').addClass('opened');          
          });
        });
      });
    });
  }
});

// $('#info').click(function(){
//   if(!($('.inf').hasClass('opened'))){
//   $('.inf').show();
//   $('.opened_menu').hide("slide",{},500,function(){
//       $(this).removeClass('opened_menu');
//       $('.info').addClass('opened_menu');
//       $('.info').show("slide",{},500,function(){
//         $('.opened_content').hide("blind",{},500,function(){
//           $(this).removeClass('opened_content');
//           $('.info_content').addClass('opened_content');          
//           $('.info_content').show("blind",{},500,function(){
//                 $('.opened').hide();
//                 $('.opened').removeClass('opened');
//                 $('.inf').addClass('opened');
//           });
//           });
//       });
//   });
// }
// });   


var rowOpen = false;
$('.row1').click(function(){
if(rowOpen==false || rowOpen==this){
  var parent = $(this).parent('.repeat');
  var $target = $(this).children('.art_name');
  parent.children('.row_art').slideToggle(500);
  if(!rowOpen){
   TweenLite.to($target, 0.5, {scale : 0.5,bottom:"20%",left:"17%"});
   rowOpen=this;
 }
 else if(rowOpen==this){
  TweenLite.to($target, 1, {scale : 1,bottom:"0%",left:"20%"});
  rowOpen=false;
}
}
});

$('.leave').click(function(){
  var parent = $(this).parents('.repeat');
  $('.list').trigger();
  var $target = parent.find('.art_name'); 
  parent.children('.row_art').slideToggle(500);
  console.log($target.hasClass('art_name')); 
  TweenLite.to($target, 1, {scale : 1,bottom:"0%",left:"20%"});
  rowOpen=false;
});

//Range Slider
$("#range").ionRangeSlider({
  type: "double",
  grid: true,
  values: ["19h30", "20h30", "21h30", "22h30", "23h30", "00h30", "01h30", "02h30", "03h30", "04h30"],
  from: 0,
  to: 9,
  grid: false,
  hide_min_max: true
});

//DIV to IMG
$( ".line_container" ).click(function() {
html2canvas($('.timeline_container'), {
  onrendered: function(canvas) {
    var img = canvas.toDataURL()
    window.open(img);
  }
});
});



//Animation sur artiste

var widthImg = Math.min(1280, window.innerWidth);

TweenLite.set($('.row__img__wrapper--color'), {x : widthImg});
TweenLite.set($('.row__img__wrapper--color .row__img'), {x : widthImg});

var DURATION = 0.7,
EASE = Power4.easeInOut;


$('.list').on('mouseenter', '.row1', function(e) {
  if(rowOpen==false){
    var $imgWrapper = $(e.currentTarget).children('.row__img__wrapper--color');
    var $img = $imgWrapper.children('.row__img');

    TweenLite.set($imgWrapper, {x : -widthImg});
    TweenLite.set($img, {x : widthImg});

    TweenLite.to($imgWrapper, DURATION, {x : 0, ease : EASE});
    TweenLite.to($img, DURATION, {x : 0, ease : EASE});

  }
});
$('.list').on('mouseleave', '.row1', function(e) {
  if(rowOpen==false){
    var $imgWrapper = $(e.currentTarget).children('.row__img__wrapper--color');
    var $img = $imgWrapper.children('.row__img');
      /*
      TweenLite.to($imgWrapper, DURATION, {x : widthImg, ease : EASE});
      TweenLite.to($img, DURATION, {x : -widthImg, ease : EASE});
      */
      
      TweenLite.to($imgWrapper, DURATION, {x : -widthImg, ease : Power4.easeOut});
      TweenLite.to($img, DURATION, {x : widthImg, ease : Power4.easeOut});
    }
  });

//Déplacement sur artist
$('.art_content').mousemove(function(e) {
        var h = $('.art_content').height()-$(window).height();
        var z = e.clientY - h/2;
        var v = e.clientY - $(window).height()/2;
        var vit = Math.abs(v);
        var ind=0;
        if(v>0)
          ind=-h;
        if(vit>100)
        TweenLite.to('.art_content',300/(vit-100),{y:ind+'px',ease:Power1.easeIn,});
        if(vit<100)
        TweenLite.to('.art_content',100000,{y:ind+'px',ease:Power1.easeIn,});  
});
$('.artiste').mousemove(function(e) {
        var h = $('.artiste').height();
        var z = e.clientY - h/2;
        var v = e.clientY - $(window).height()/2;
        var vit = Math.abs(v);
        var ind=0;
        if(v>0)
          ind=-30;
        if(vit>150)
        TweenLite.to('.artiste',500/vit,{y:ind+'px',ease:Cubic.easeOut,});
        if(vit<150)
        TweenLite.to('.artiste',100000,{y:ind+'px',ease:Cubic.easeOut,});  
});
});

