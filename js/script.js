//Billeterie 1 correspond jour 1 sans camping 2 jour 1 avec camping
$(document).ready(function(){
	var id_b= 0;
	$('#day1').click(function(){
       if(id_b%2==0 && id_b>0){
          $('#day2').removeClass('active');
          $('#day1').addClass('active');
          document.getElementById('d1').click();
          if(id_b==4){
          	id_b=3;
          }
          else{
          	id_b=1;
          }
       }
       if (id_b==0){
       	  $('#day1').addClass('active');
       	  document.getElementById('d1').click();
       	  id_b=1;
       }
	});
	$('#day2').click(function(){                    // Actions sur pass 2 jours
       if(id_b%2==1 && id_b>0){                     // Cas cliqué sur 1 jour
          $('#day1').removeClass('active');
          $('#day2').addClass('active');
          document.getElementById('d2').click();    // Cocher automatiquement la box
          if(id_b==3){                              // Cas camping
          	id_b=4;
          }
          else{                                     //Cas non camping
          	id_b=2;
          }
       }
       if (id_b==0){                               //Cas premier clique
       	  $('#day2').addClass('active');
          document.getElementById('d2').click();
       	  id_b=2;
       }
	});
    $('#camp').click(function(){
      if(id_b<3 && id_b!=0){
        $('#camp').addClass('active');
        document.getElementById('c1').click();
        if(id_b==1)                              //Probleme avec le clique le if
            id_b=3
        if(id_b==2)                          
            id_b=4
      }
      else if(id_b>2){
        $('#camp').removeClass('active');
        document.getElementById('c1').click();
        if(id_b==3)                              //Probleme avec le clique le if
            id_b=1
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