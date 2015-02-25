// TODO Disable hand click on radio and checkbox
//Billeterie 1 correspond jour 1 sans camping 2 jour 1 avec camping
$(window).load(function(){
  $('.nav_range').removeClass('hidden');
  $('.loader').addClass('hidden');
});

$(document).ready(function(){


$(window).resize(function() {
  widthImg = (window.innerWidth);
  widthContent = Math.min($(window).width()-260,1550);  
  TweenLite.set('.art_name',{ width : widthContent});  
   pos_acces = $('.ban-acces').position().top;
   pos_entree = $('.ban-entree').position().top;
   pos_trsp = $('.ban-trsp').position().top;
   pos_camping = $('.ban-camping').position().top;
   pos_savoir = $('.ban-savoir').position().top;
   pos_accredi =$('.img-accredi-bis').position().top;
   pos_parte =$('.img-parte-bis').position().top;
   if($(window).width()<=1320) bottom = [0,45];
   if($(window).width()<=768) hrow = 100;
});

  var pos_acces, pos_entree, pos_trsp, pos_camping, pos_savoir, pos_accredi, pos_parte;


  var count = 1000;
  var nav_clicked = false;
  TweenLite.set('nav',{x:$(window).width()+'px'});
   //Splashscreen
   $('.splashscreen').height($(window).height());
   if($(window).width()>768){
   $('.nav-item-range').mouseenter(function() {
    var target = $(this).find('h2');
    TweenLite.to(target,0.5,{opacity:1});
   });
   $('.nav-item-range').mouseleave(function() {
    var target = $(this).find('h2');
    TweenLite.to(target,0.5,{opacity:0});
   });
 }

   $('.nav-item-range').click(function(){
    var self = this;
    TweenLite.to('nav',1,{x:0+'px',opacity:1,ease:Quint.easeOut});
    setTimeout(function(){
     var target = '.'+$(self).attr('data-target');
     var sub_menu= $(target).find('.sub_menu');
     var content = $(target).find('.contains'); 
     count++;
     $(target).zIndex(count);
     $(target).show();
     sub_menu.show("slide",{easing:'easeInQuart'},500,function(){
      sub_menu.addClass('opened_menu');
      content.show("blind",{easing:'easeInQuart'},500,function(){  
        content.addClass('opened_content');               
        if($('.active').length==0) $('.default').click(); 
        if(target == '.mdl') showIt('.all_content_pano');
        if(target == '.inf'){
                  pos_acces = $('.ban-acces').position().top;
                  pos_entree = $('.ban-entree').position().top;
                  pos_trsp = $('.ban-trsp').position().top;
                  pos_camping = $('.ban-camping').position().top;
                  pos_savoir = $('.ban-savoir').position().top;
                  pos_accredi =$('.img-accredi-bis').position().top;
                  pos_parte =$('.img-parte-bis').position().top;
        } 
        $(target).addClass('opened');
        $('.splashscreen').hide(); 
        });
      });  
    },1500);  
   });

	var id_b= 0;
  setTimeout(function(){$('.default').click();},50);
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
$('.nav-item').click(function(){
  var id = $(this).attr('id');
  var target = $('.'+id);
  var sub_menu= target.find('.sub_menu');
  var content = target.find('.contains');
  count++;
  target.zIndex(count);
  if(!(target.hasClass('opened'))&&!(nav_clicked)){
      nav_clicked = true;
      target.show();
      sub_menu.show("slide",{easing:'easeInQuart'},500,function(){
       $('.opened_menu').hide(0,function(){
          $(this).removeClass('opened_menu');
          sub_menu.addClass('opened_menu');
          content.show("blind",{easing:'easeInQuart'},500,function(){    
             $('.opened_content').hide("blind",{easing:'easeInQuart'},0,function(){  
              $(this).removeClass('opened_content');
              content.addClass('opened_content');               
              if($('.active').length==0) $('.default').click(); 
              if(id == 'mdl') showIt('.all_content_pano');
              if(id == 'art'){
                if(window.location.href.indexOf('ven')>-1) $('.ven_art').click(); 
                if(window.location.href.indexOf('sam')>-1) $('.sam_art').click(); 
                if(window.location.href.indexOf('dim')>-1) $('.dim_art').click();                                 
              }
              if(id == 'inf'){
                  pos_acces = $('.ban-acces').position().top;
                  pos_entree = $('.ban-entree').position().top;
                  pos_trsp = $('.ban-trsp').position().top;
                  pos_camping = $('.ban-camping').position().top;
                  pos_savoir = $('.ban-savoir').position().top;
              }      
              $('.opened').hide();
              $('.opened').removeClass('opened');
              target.addClass('opened'); 
              nav_clicked=false;    
          });
        });
      });
    });
  }
});

$('.bottom_btn').click(function(){
  $('#art').click();
});

//Range Slider
$("#range").ionRangeSlider({
  type: "double",
  values: [19, 20, 21, 22, 23, 00, 01, 02, 03, 04, 05],
  from: 0,
  to: 10,
  postfix:"h",
  grid: false,
  hide_min_max: true
}).draggable();


//DIV to IMG
function capture() {
  $('#tc').html2canvas({
    onrendered: function (canvas) {
                //Set hidden field's value to image data (base-64 string)
                $('#img_val').val(canvas.toDataURL("image/png"));
                //Submit the form manually
                document.getElementById("myForm").submit();
              }
            });
}



//Animation sur artiste
  var widthImg = (window.innerWidth);
  var DURATION = 0.7,
  EASE = Power4.easeInOut;
  var widthContent = Math.min($(window).width()-260,1550); 
  TweenLite.set('.art_name',{ width : widthContent});    
var setDefault = function(){
  TweenLite.set($('.row__img__wrapper--color'), {x : widthImg});
  TweenLite.set($('.row__img__wrapper--color .row__img'), {x : widthImg});
}
 setDefault();


$('.list').on('mouseenter', '.row1', function(e) {
  if(rowOpen==false){
    var $imgWrapper = $(e.currentTarget).children('.row__img__wrapper--color');
    var $img = $imgWrapper.children('.row__img');

    TweenLite.set($imgWrapper, {x : -widthImg});
    TweenLite.set($img, {x : widthImg});

    TweenLite.to($imgWrapper, DURATION, {x : 0, ease : EASE});
    TweenLite.to($img, DURATION, {x : 0, ease : EASE});
    //   , onComplete:function(){
    // TweenLite.to($(e.currentTarget).parents(".row2"), 0.5, {y:200});
    // }});

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




//Dropdown artist
var opened_art = []; //index of open artists.
for (var k=0;k<41;k++){opened_art.push(k+'')};
var sizeList = $('.list').attr('data-size');
var rowOpen = false;
var bottom = [-15,25];
if($(window).width()<=1320) bottom = [0,45];
if($(window).width()<=768) bottom = [0,35];
var hrow= 200;
if($(window).width()<=768) hrow = 100;
$('.row1').click(function(e){  
  $('.buttonBar').addClass('hidden');  
  var index = $(this).attr('data-position');
  var position = opened_art.indexOf(index);
  if(rowOpen==false || rowOpen==this){
    var parent = $(this).parent('.repeat');
    if(parent.find('.play_button').attr('isClicked')=='false'){
      parent.find('.buttonBar').addClass('hidden');  
    }
    var $target = $(this).children('.art_name');
    var colorRow = $(this).children('.row__img__wrapper--color');
    parent.children('.row_art').slideToggle(500);
    var z = e.clientY;
    if(!rowOpen){
     rowOpen=this;
     $('.player'+$(this).attr('data-position')).YTPlayer();
     TweenLite.to(parent.children('.row_art'),0.5,{opacity:1});
     TweenLite.to(this,0.5,{height:hrow/2+"px",ease:Quint.easeOut});
     TweenLite.to($target, 0.5, {scale:0.5,ease:Quint.easeOut,bottom:bottom[0]+"px",onComplete: function(){
     TweenLite.to('.toHide',0.25,{opacity:0.5,display:'block',onComplete: function(){;
     // TweenMax.to('.art_content',0.5,{,ease:Power1.easeIn});
     if(hrow==200) $('.art_content').scrollTo(hrow*position+"px",500,{ease:'easeOutQuint'})
   }});
   }});
   }
   else if(rowOpen==this){
    if(parent.find('.play_button').attr('isClicked')=='true'){
      $('.player'+$(this).attr('data-position')).pauseYTP();
    }
    TweenLite.to(parent.children('.row_art'),0.5,{opacity:0});
    TweenLite.to(this,1,{height:hrow+"px",ease:Quint.easeOut});
    TweenLite.to('.toHide',0.25,{opacity:0,display:'none'});
    TweenLite.to($target, 1, {scale : 1,bottom:bottom[1]+"px",ease:Quint.easeOut,onComplete: function(){
  }}); // Fix height of the div  
    rowOpen=false;      
  }
}
});



$('.leave').click(function(){
  var bottom = [-15,25];
  if($(window).width()<=768) bottom = [0,35];
  else if($(window).width()<=1320) bottom = [0,45];
  var hrow= 200;
  if($(window).width()<=768) hrow = 100;
  var parent = $(this).parents('.repeat');
  var $target = parent.find('.art_name'); 
  var self = parent.find('.row1');
  if(parent.find('.play_button').attr('isClicked')=='true'){
    $('.player'+$(self).attr('data-position')).pauseYTP();
  }  
  TweenLite.to(parent.children('.row_art'),0.5,{opacity:0});
  TweenLite.to(self,1,{height:hrow+"px",ease:Quint.easeOut});  
  parent.children('.row_art').slideToggle(500); 
  TweenLite.to('.toHide',1,{opacity:0,display:'none'});  
  TweenLite.to($target, 1, {scale : 1,bottom:bottom[1]+"px",ease:Quint.easeOut,onCompleteParams: function(){
  }
  });  // Fix height of the div
  rowOpen=false;         
});

$('.toHide').click(function(){
    if(rowOpen){
  var $target = $(rowOpen).children('.art_name');
  var index = $(rowOpen).attr('data-position');
  var colorRow = $(rowOpen).children('.row__img__wrapper--color');
  var parent = $(rowOpen).parent('.repeat');
     if(parent.find('.play_button').attr('isClicked')=='true'){
     $('.player'+$(rowOpen).attr('data-position')).pauseYTP();
    }
    TweenLite.to(parent.children('.row_art'),0.5,{opacity:0});
    TweenLite.to(rowOpen,1,{height:hrow+"px",ease:Quint.easeOut});
    parent.children('.row_art').slideToggle(500); 
    TweenLite.to('.toHide',1,{opacity:0,display:'none'});
    TweenLite.to($target, 1, {scale : 1,bottom:bottom[1]+"px",ease:Quint.easeOut,onComplete: function(){      
  }});  // Fix height of the div
    rowOpen=false;   
  }
});


//Déplacement sur artist
// $('.art_content').mousemove(function(e) {
//   if(rowOpen==false){
//         var h = $('.art_content').height()-$(window).height();
//         var z = e.clientY - h/2;
//         var v = e.clientY - $(window).height()/2;
//           console.log(e.clientY);
//         var vit = Math.abs(v);
//         var ind=0;
//         if(v>0)
//           ind=-h;
//         if(vit>50)
//         TweenLite.to('.art_content',500/(vit-50),{y:ind+'px',ease:Power1.easeInOut});
//         if(vit<50)
//         TweenLite.killTweensOf('.art_content');
//   }
// });
// $('.art_content').mouseout(function(e) {
//   var h = $('.art_content').height()-$(window).height();
//   var z = e.clientY - h/2;
//   var v = e.clientY - $(window).height()/2;
//   var vit = Math.abs(v);
//   var ind=0;
//   TweenLite.killTweensOf('.art_content');
// });
// $('.artiste').mousemove(function(e) {
//   var ind = $('.artiste').height()-$(window).height();
//   var v = e.clientY - $(window).height()/2;
//   var vit = Math.abs(v);
//   if(v<0)
//     ind=0;
//   if(vit>150)
//     TweenLite.to('.artiste',200/vit,{y:-ind+'px',ease:Power1.easeIn});
//   if(vit<150)
//   TweenLite.killTweensOf('.art_content'); 
// });
//Effet pour clicker sur les radios a partir de la div + selection.  TODO Fusionner les deux dernières fonctions
$('.radi_container').click(function(){
  // $(this).find('input').prop('checked',true);
  // CLOSE OPENED ROW 
  if(rowOpen){
  var $target = $(rowOpen).children('.art_name');
  var index = $(rowOpen).attr('data-position');
  var colorRow = $(rowOpen).children('.row__img__wrapper--color');
  var parent = $(rowOpen).parent('.repeat');
     if(parent.find('.play_button').attr('isClicked')=='true'){
     $('.player'+$(rowOpen).attr('data-position')).pauseYTP();
    }
    TweenLite.to(parent.children('.row_art'),0.5,{opacity:0});
    TweenLite.to(rowOpen,1,{height:hrow+"px",ease:Quint.easeOut});
    parent.children('.row_art').slideToggle(500); 
    TweenLite.to('.toHide',1,{opacity:0,display:'none'});
    TweenLite.to($target, 1, {scale : 1,bottom:bottom[1]+"px",ease:Quint.easeOut,onComplete: function(){      
  }});  // Fix height of the div
    rowOpen=false;   
  }
// END CLOSING
  $(this).parent('form').find('.active').removeClass('active');
  $(this).addClass('active');
  setTimeout(function(){
    var elems = $('.row1');
    _.each(elems, function(elem){
      var value= $('.input_h').attr('data-range');
      var index = $(elem).attr('data-position');
      if(value=="") value="19;5";
      var val = value.split(';');
      val = [parseInt(val[0]),parseInt(val[1])];    
      var test_day = $(elem).attr('data-hide-day');
      var test_salle = $(elem).attr('data-hide-salle');
      var heureId = $(elem).attr('data-time');  
      if(heureId>18) heureId-=24;
      if(val[0]>18) val[0]-=24;
      if(val[1]>18) val[1]-=24;
      var test_heure= val[0]<=heureId && val[1]>heureId;
      if(!($(elem).hasClass('hidden'))){
        if(test_day=='true'||test_salle=='true'){
          $(elem).addClass('hidden');
          opened_art.splice(opened_art.indexOf(index),1);
        } 
      }
      else if($(elem).hasClass('hidden')){
        if(test_day=='false'&&test_salle=='false'&&test_heure){
          $(elem).removeClass('hidden');
          opened_art.push(index);          
        }
      }
    });
  opened_art.sort(function(a,b){return a-b});
    $('.art_content').scrollTo('0px',1000,{ease:'easeOutQuint'});  
  },50);
  setDefault();
});
// Selection avec slider
$('.slider').click(function(){

    // CLOSE OPENED ROW 
  if(rowOpen){
  var $target = $(rowOpen).children('.art_name');
  var index = $(rowOpen).attr('data-position');
  var colorRow = $(rowOpen).children('.row__img__wrapper--color');
  var parent = $(rowOpen).parent('.repeat');
     if(parent.find('.play_button').attr('isClicked')=='true'){
     $('.player'+$(rowOpen).attr('data-position')).pauseYTP();
    }
    TweenLite.to(parent.children('.row_art'),0.5,{opacity:0});
    TweenLite.to(rowOpen,1,{height:hrow+"px",ease:Quint.easeOut});
    parent.children('.row_art').slideToggle(500); 
    TweenLite.to('.toHide',1,{opacity:0,display:'none'});
    TweenLite.to($target, 1, {scale : 1,bottom:bottom[1]+"px",ease:Quint.easeOut,onComplete: function(){      
  }});  // Fix height of the div
    rowOpen=false;   
  }
// END CLOSING

  setTimeout(function(){
    var value= $('.input_h').attr('data-range');
    var val = value.split(';');
    val = [parseInt(val[0]),parseInt(val[1])];
    var elems = $('.row1');
    _.each(elems,function(elem){
      var index = $(elem).attr('data-position');      
      var test_day = $(elem).attr('data-hide-day');
      var test_salle = $(elem).attr('data-hide-salle');      
      var heureId = $(elem).attr('data-time');   
      if(heureId>18) heureId-=24;
      if(val[0]>18) val[0]-=24;
      if(val[1]>18) val[1]-=24;
      var test_heure= val[0]<=heureId && val[1]>heureId;   
      if(!test_heure){
        if(!($(elem).hasClass('hidden'))){
          $(elem).addClass('hidden');
          opened_art.splice(opened_art.indexOf(index),1);
        }  
      }
      if(test_heure && (test_day=='false') && (test_salle=='false')){
        if(($(elem).hasClass('hidden'))){
          $(elem).removeClass('hidden');
           opened_art.push(index); 
        }
      }      
    });
    opened_art.sort(function(a,b){return a-b});
    $('.art_content').scrollTop(500,{ease:'easeOutQuint'}); 
  },50);
  setDefault();
});

$('.radi_container_pano').click(function(){
  $('.active').removeClass('active');
  $(this).find('input').prop('checked',true);
  $(this).parent('form').find('.active').removeClass('active');
  $(this).parent('form').find('.active').removeClass('active');
  $(this).addClass('active');
});

$('.info_content').scroll(function(e){
  var posY= $('.info_content').offset().top + $('.info_content').scrollTop();
 if ($('.ban-entree').offset().top<0) {
  $('.sub_info').addClass('hidden');
  $('.active').removeClass('active');
  $('.inf_2').addClass('active');
  $('#entree').prop('checked',true)}
  else if($('.sub_info').hasClass('hidden')) $('.sub_info').removeClass('hidden');
  if ($('.ban-trsp').offset().top<0) {
    $('.sub_info_1').addClass('hidden');
    $('.active').removeClass('active');
    $('.inf_3').addClass('active');
    $('#transport').prop('checked',true)}
    else if ($('.sub_info_1').hasClass('hidden')) $('.sub_info_1').removeClass('hidden');
  if ($('.ban-camping').offset().top<0) {
      $('.sub_info_2').addClass('hidden');
      $('.active').removeClass('active');
      $('.inf_4').addClass('active');
      $('#camping').prop('checked',true)}
      else if ($('.sub_info_2').hasClass('hidden')) $('.sub_info_2').removeClass('hidden');
  if ($('.ban-savoir').offset().top<0) {
        $('.sub_info_3').addClass('hidden');
        $('.active').removeClass('active');
        $('.inf_5').addClass('active');
        $('#savoir').prop('checked',true)}
        else if ($('.sub_info_3').hasClass('hidden')) $('.sub_info_3').removeClass('hidden');
 if ($('.img-accredi-bis').offset().top<100) {
        $('.sub_info_4').addClass('hidden');
        $('.active').removeClass('active');
        $('.inf_6').addClass('active');
        $('#accredi').prop('checked',true)}
        else if ($('.sub_info_4').hasClass('hidden')) $('.sub_info_4').removeClass('hidden');
if ($('.img-parte-bis').offset().top<0) {
        $('.sub_info_5').addClass('hidden');
        $('.active').removeClass('active');
        $('.inf_7').addClass('active');
        $('#parte').prop('checked',true)}
        else if ($('.sub_info_4').hasClass('hidden')) $('.sub_info_5').removeClass('hidden');
        if (posY<1090) { $('.active').removeClass('active');
        $('.inf_1').addClass('active');
        $('#acces').prop('checked',true)}
      });

$('.imput_container_art').click(function() {
  var self = $(this);
  self.find('input').prop('checked',true);
  self.parent('form').find('.active').removeClass('active');
  self.addClass('active');
  self=self.find('.input');
  var target = $('.info_content');
  if (self.hasClass('input_acces')) target.scrollTo(pos_acces+5+"px",1000);
  if (self.hasClass('input_entree')) target.scrollTo(pos_entree+5+"px",1000);
  if (self.hasClass('input_transport')) target.scrollTo(pos_trsp+5+"px",1000);
  if (self.hasClass('input_camping')) target.scrollTo(pos_camping+5+"px",1000);
  if (self.hasClass('input_savoir')) target.scrollTo(pos_savoir+5+"px",1000);
  if (self.hasClass('input_accredi')) target.scrollTo(pos_accredi+5+"px",1000);
  if (self.hasClass('input_parte')) target.scrollTo(pos_parte+5+"px",1000);
});

$('.play_button').click(function(){
  var row=$(this).parents('.repeat');
  var player=row.find('.player');
  $(this).attr('isClicked','true');
  row.find('.art_main').addClass('marged');
  row.find('.buttonBar').removeClass('hidden');
  player.playYTP();
  $(this).fadeOut(500); 

});

$('input[type=radio][name=day_pano]').change(function(){

  $('#generate').removeClass('hidden');
  $('.url_pano').addClass('hidden');
});
// Easing mobile right scrolling
//  if($(window).width()<=768){
//   var ableScroll = true;
//   var isScrolled = false
// $('.content').scroll(function(){
//   if(ableScroll && !($(this).hasClass('inf'))){
//   ableScroll = false;
//   if(isScrolled){
//     $(this).scrollTo(0,0);
//     isScrolled = false;
//   }
//   else{
//    $(this).scrollTo(100+'%',0);
//     isScrolled = true;
//   }
//   setTimeout(function(){ableScroll = true},500);
// }
  
// });
// }
});

