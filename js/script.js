// TODO Disable hand click on radio and checkbox
//Billeterie 1 correspond jour 1 sans camping 2 jour 1 avec camping
$(document).ready(function(){
	var id_b= 0;
	$('#day1').click(function(){
    console.log('Le un'+id_b);
       if(id_b%2==0 && id_b>0){
          $('#day2').removeClass('active');
          $('#day1').addClass('active');
          document.getElementById('d1').click();
          if(id_b==4){
            $('.pass2').fadeOut(500,function(){$('.pass1c').fadeIn(1000);});
          	id_b=3;
          }
          else if(id_b==2){
            $('.pass2').fadeOut(500,function(){$('.pass1').fadeIn(1000);});
          	id_b=1;
          }
       }
       if (id_b==0){
       	  $('#day1').addClass('active');
       	  document.getElementById('d1').click();
          $('.pass1').fadeIn(1000);
       	  id_b=1;
       }
	});
	$('#day2').click(function(){                      // Actions sur pass 2 jours
    console.log('Le deux'+id_b);
       if(id_b%2==1 && id_b>0){                     // Cas cliqué sur 1 jour
          $('#day1').removeClass('active');
          $('#day2').addClass('active');
          document.getElementById('d2').click();    // Cocher automatiquement la box
          if(id_b==3){                              // Cas camping
            $('.pass1c').fadeOut(500,function(){$('.pass2').fadeIn(1000);});    // On enleve pass2 et quand l'action se termine on affiche pass1
          	id_b=4;                                
          }
          else{                                     //Cas non camping
            $('.pass1').fadeOut(500,function(){$('.pass2').fadeIn(1000);});
          	id_b=2;
          }
       }
       if (id_b==0){                                //Cas premier clique
       	  $('#day2').addClass('active'); 
          document.getElementById('d2').click();
          $('.pass2').fadeIn(1000);
       	  id_b=2;
       }
	});
    $('#camp').click(function(){
      if(id_b<3 && id_b!=0){
        $('#camp').addClass('active');
        document.getElementById('c1').click();
        if(id_b==1){                              //Probleme avec le clique le if
            id_b=3;
            $('.pass1').fadeOut(500,function(){$('.pass1c').fadeIn(1000);});
        }
        if(id_b==2)                          
            id_b=4
      }
      else if(id_b>2){
        $('#camp').removeClass('active');
        document.getElementById('c1').click();
        if(id_b==3){                              //Probleme avec le clique le if
            id_b=1;
            $('.pass1c').fadeOut(500,function(){$('.pass1').fadeIn(1000);});
        }
        if(id_b==4)                          
            id_b=2
      }
      else{
        $('#camp').addClass('active');
        document.getElementById('c1').click();
        $('#day1').addClass('active');
        document.getElementById('d1').click();
        id_b=3;
      }
    });
});