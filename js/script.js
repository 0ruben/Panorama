// TODO Disable hand click on radio and checkbox
//Billeterie 1 correspond jour 1 sans camping 2 jour 1 avec camping
$(window).load(function(){
  $('.nav_range').removeClass('hidden');
  $('.loader').addClass('hidden');
});

$(document).ready(function(){

  var count = 1000;
  var nav_clicked = false;
  TweenLite.set('nav',{x:$(window).width()+'px'});
    
   //Splashscreen
   $('.splashscreen').height($(window).height());
   $('.nav-item-range').mouseenter(function() {
    $(this).find('h2').css('visibility','visible');
   });
   $('.nav-item-range').mouseleave(function() {
    $(this).find('h2').css('visibility','hidden');
   });

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
        if(target == '.mdl') showIt('.timeline_container');
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
              if(id == 'mdl') showIt('.timeline_container');
              if(id == 'art'){
                if(window.location.href.indexOf('ven')>-1) $('.ven_art').click(); 
                if(window.location.href.indexOf('sam')>-1) $('.sam_art').click(); 
                if(window.location.href.indexOf('dim')>-1) $('.dim_art').click();                                 
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
});


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

$(window).resize(function() {
  widthImg = (window.innerWidth);
  widthContent = Math.min($(window).width()-260,1550);  
  TweenLite.set('.art_name',{ width : widthContent});  
});

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




//Dropdown artist
var opened_art = []; //index of open artists.
for (var k=0;k<37;k++){opened_art.push(k+'')};
var sizeList = $('.list').attr('data-size');
var rowOpen = false;
$('.row1').click(function(e){  
  var bottom = [-15,25];
  if($(window).width()<1280) bottom = [0,45];
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
    if(z>400) z=300;
    else if(z>200) z=100;
    else z=0;
    if(!rowOpen){
     $('.player'+$(this).attr('data-position')).YTPlayer();
     TweenLite.to(parent.children('.row_art'),0.5,{opacity:1});
     TweenLite.to($target, 1, {scale:0.5,ease:Quint.easeOut,bottom:bottom[0]+"px"});
     TweenLite.to(this,1,{height:"100px",ease:Quint.easeOut});
     TweenLite.to('.toHide',1,{opacity:0.5,position:"absolute"});
     rowOpen=this;
     TweenLite.to('.art_content',1,{y:-200*position+'px',ease:Power1.easeIn}); 
   }
   else if(rowOpen==this){
    if(parent.find('.play_button').attr('isClicked')=='true'){
      $('.player'+$(this).attr('data-position')).pauseYTP();
    }
    TweenLite.to(parent.children('.row_art'),0.5,{opacity:0});
    TweenLite.to(this,1,{height:"200px",ease:Quint.easeOut});
    TweenLite.to('.toHide',1,{opacity:0,position:"relative"});
    TweenLite.to($target, 1, {scale : 1,bottom:bottom[1]+"px",ease:Quint.easeOut,onCompleteParams: function(){
      if(index>sizeList-3)
        $('.art_content').height(sizeList*200);
  }});  // Fix height of the div
    rowOpen=false;          
  }
}
});

$('.leave').click(function(){
  var parent = $(this).parents('.repeat');
  var $target = parent.find('.art_name'); 
  var self = parent.find('.row1');
  if(parent.find('.play_button').attr('isClicked')=='true'){
    $('.player'+$(self).attr('data-position')).pauseYTP();
  }  
  TweenLite.to(parent.children('.row_art'),0.5,{opacity:0});
  TweenLite.to(self,1,{height:"200px",ease:Quint.easeOut});  
  parent.children('.row_art').slideToggle(500); 
  TweenLite.to('.toHide',1,{opacity:0,position:"relative"});  
  TweenLite.to($target, 1, {scale : 1,bottom:bottom[1]+"px",ease:Quint.easeOut,onCompleteParams: function(){
    if(index>sizeList-3)
      $('.art_content').height(sizeList*200);
  }
  });  // Fix height of the div
  rowOpen=false;          
});



//Déplacement sur artist
$('.art_content').mousemove(function(e) {
  if(rowOpen==false){
        var h = $('.art_content').height()-$(window).height();
        var z = e.clientY - h/2;
        var v = e.clientY - $(window).height()/2;
        var vit = Math.abs(v);
        var ind=0;
        if(v>0)
          ind=-h;
        if(vit>50)
        TweenLite.to('.art_content',800/(vit-50),{y:ind+'px',ease:Power1.easeInOut});
        if(vit<50)
        TweenLite.killTweensOf('.art_content');
  }
});
$('.art_content').mouseout(function(e) {
  var h = $('.art_content').height()-$(window).height();
  var z = e.clientY - h/2;
  var v = e.clientY - $(window).height()/2;
  var vit = Math.abs(v);
  var ind=0;
  TweenLite.killTweensOf('.art_content');
});
$('.artiste').mousemove(function(e) {
  var ind = $('.artiste').height()-$(window).height();
  var v = e.clientY - $(window).height()/2;
  var vit = Math.abs(v);
  if(v<0)
    ind=0;
  if(vit>150)
    TweenLite.to('.artiste',300/vit,{y:-ind+'px',ease:Power1.easeIn});
  if(vit<150)
  TweenLite.killTweensOf('.art_content'); 
});
//Effet pour clicker sur les radios a partir de la div + selection.  TODO Fusionner les deux dernières fonctions
$('.radi_container').click(function(){
  // $(this).find('input').prop('checked',true);
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
  console.log(opened_art);
  },50);
  setDefault();
  TweenLite.to('.art_content',0.5,{y:0+'px',ease:Power1.easeIn});  
});
// Selection avec slider
$('.slider').click(function(){
  setTimeout(function(){
    var value= $('.input_h').attr('data-range');
    var val = value.split(';');
    val = [parseInt(val[0]),parseInt(val[1])];
    console.log(val);
    var elems = $('.row1');
    _.each(elems,function(elem){
      var test_day = $(elem).attr('data-hide-day');
      var test_salle = $(elem).attr('data-hide-salle');      
      var heureId = $(elem).attr('data-time');   
      if(heureId>18) heureId-=24;
      if(val[0]>18) val[0]-=24;
      if(val[1]>18) val[1]-=24;
      var test_heure= val[0]<=heureId && val[1]>heureId;   
      if(!test_heure){
        if(!($(elem).hasClass('hidden')))
          $(elem).addClass('hidden');
      }
      if(test_heure && (test_day=='false') && (test_salle=='false')){
        if(($(elem).hasClass('hidden')))
          $(elem).removeClass('hidden');
      }      
    });
  },50);
  setDefault();
  TweenLite.to('.art_content',0.5,{y:0+'px',ease:Power1.easeIn}); 
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
 if (posY>1090) {
  $('.sub_info').addClass('hidden');
  $('.active').removeClass('active');
  $('.inf_2').addClass('active');
  $('#entree').prop('checked',true)}
  else if($('.sub_info').hasClass('hidden')) $('.sub_info').removeClass('hidden');
  if (posY>2025) {
    $('.sub_info_1').addClass('hidden');
    $('.active').removeClass('active');
    $('.inf_3').addClass('active');
    $('#transport').prop('checked',true)}
    else if ($('.sub_info_1').hasClass('hidden')) $('.sub_info_1').removeClass('hidden');
    if (posY>2880) {
      $('.sub_info_2').addClass('hidden');
      $('.active').removeClass('active');
      $('.inf_4').addClass('active');
      $('#camping').prop('checked',true)}
      else if ($('.sub_info_2').hasClass('hidden')) $('.sub_info_2').removeClass('hidden');
      if (posY>3965) {
        $('.sub_info_3').addClass('hidden');
        $('.active').removeClass('active');
        $('.inf_5').addClass('active');
        $('#savoir').prop('checked',true)}
        else if ($('.sub_info_3').hasClass('hidden')) $('.sub_info_3').removeClass('hidden');
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
  if (self.hasClass('input_acces')) target.scrollTo("0px",1000);
  if (self.hasClass('input_entree')) target.scrollTo("1095px",1000);
  if (self.hasClass('input_transport')) target.scrollTo("2030px",1000);
  if (self.hasClass('input_camping')) target.scrollTo("2885px",1000);
  if (self.hasClass('input_savoir')) target.scrollTo("3970px",1000);
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

});

