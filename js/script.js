var id_b= 0;
//Billeterie 1 correspond jour 1 sans camping 2 jour 1 avec camping
$(document).ready(function(){
	$('#day1').click(function(){
       if(id_b%2==0 && id_b>0){
          $('#day2').removeClass('active');
          $('#day1').addClass('active');
        //  $('#d1').click();
          if(id_b==4){
          	id_b=3;
          }
          else{
          	id_b=1;
          }
       }
       if (id_b==0){
       	  $('#day1').addClass('active');
       	  $('#d1').click();
       	  id_b=1;
       }
	});
	$('#day2').click(function(){
       if(id_b%2==1 && id_b>0){
          $('#day1').removeClass('active');
          $('#day2').addClass('active');
        //  $('#d2').click();
          if(id_b==3){
          	id_b=4;
          }
          else{
          	id_b=2;
          }
       }
       if (id_b==0){
       	  $('#day2').addClass('active');
       //	  $('#d2').click();
       	  id_b=2;
       }
	});
});