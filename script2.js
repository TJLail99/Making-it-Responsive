$( document ).ready(function() {
    $("#top").hover( 
          function() {
      $( this ).css("color", "#FD6A02").text("Halloween Edition");
    },
       function(){
      $( this ).css("color", "White").text("T.J.'s first GitHub website.")
       }
    );

    $('.w').click( function(){
        $(".text").css("color", "white");
    });
        
    $('.g').click( function(){
        $(".text").css("color", "green");
    });
        
    $('.b').click( function(){
        $(".text").css("color", "black");
    });


    const rollSound = new Audio("Thanos.mp3");
    $('.Thanos').click(e => rollSound.play()); 

 
     $('.pumpkin').hover(function(){
         $("body").css("background-color", "#FD6A02");
     });
   

     $('.pumpkin').click( function(){
         $(".halloween").css("visibility", "visible");
    });
});

     
 


