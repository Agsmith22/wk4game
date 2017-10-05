$(document).ready(function(){
  var Random=Math.floor(Math.random()*101+19)
  
  $("#randomNumber").text(Random);
 
    var num1= Math.floor(Math.random()*11+1)
   var num2= Math.floor(Math.random()*11+1)     //GIVES A RANDOM NUMBER BETWEEN 1-12
   var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
  
  var userTotal= 0; 
  var wins= 0;              /// WINS/LOSS AND GAME SCORE BOX
    var losses = 0;
 
      $("#numberWins").text(wins);      // PUTS WINS AND LOSES ON SCREEN
      $("#numberLosses").text(losses);
  
    
    function reset(){
        Random=Math.floor(Math.random()*101+19);    //WHEN YOU REFRESH THE PAGE/WIN OR LOSE
         $("#randomNumber").text(Random);
            num1= Math.floor(Math.random()*11+1);
            num2= Math.floor(Math.random()*11+1);
            num3= Math.floor(Math.random()*11+1);
            num4= Math.floor(Math.random()*11+1);
            userTotal= 0;
        $("#finalTotal").text(userTotal);
      } 

      function winner(){
        alert("CONGRATS! You won!");   //ADDSWINS AND REFRESHES GAME
          wins++; 
        $("#numberWins").text(wins);
      reset();
}

function loser(){
alert ("You lose! Try again");
  losses++;                          //ADDS LOSS AND REFRESHSS GAME
  $("#numberLosses").text(losses);
  reset()
}


  $("#gemOne").on("click", function(){
    userTotal = userTotal + num1;

      $("#finalTotal").text(userTotal);   //CLICK FUNCTION/ SPITS OUT WIN LOSS FUNCTION/RESET
            if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        }   
  })


  $("#gemTwo").on("click", function(){
    userTotal = userTotal + num2;

    $("#finalTotal").text(userTotal);   //CLICK FUNCTION/ SPITS OUT WIN LOSS FUNCTION/RESET
        if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        } 
  }) 


  $("#gemThree").on("click", function(){
    userTotal = userTotal + num3;
    $("#finalTotal").text(userTotal);     //CLICK FUNCTION/ SPITS OUT WIN LOSS FUNCTION/RESET

          if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        } 
  }) 


  $("#gemFour").on("click", function(){
    userTotal = userTotal + num4;
    
    $("#finalTotal").text(userTotal);     //CLICK FUNCTION/ SPITS OUT WIN LOSS FUNCTION/RESET
      
          if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        }
  });   
}); 