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
    console.log('hello'+elem);
  }
  showItAfter= function(elem){   //Affiche après avoir terminé un précédent
    TweenLite.to(elem,0,{display:'inline-block'});
    appear(elem,0.5);
    console.log('hello'+elem);
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
});