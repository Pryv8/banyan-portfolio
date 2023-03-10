
var letter = "X";
var turn = 1;
var counter = 0;


function nextPlay(arg) {
    var message = "";
    var player1Letter = 'X';
    var player2Letter = 'O';
    var player;


//  Players input Modal section



    if (document.forms['playerNames']["player1Letter"].value != "") {
        player1Letter = document.forms['playerNames']["player1Letter"].value;
        player1Letter.toUpperCase();
        document.getElementById('player1Slot').innerHTML = "Player 1:" + document.forms['playerNames']['player1'].value;

    }
    else {
        return alert('Please press start and choose your marker')
    }

    if (document.forms['playerNames']["player2Letter"].value != "") {
        player2Letter = document.forms['playerNames']["player2Letter"].value;
        player2Letter.toUpperCase();
document.getElementById('player2Slot').innerHTML = "Player 2: " + document.forms['playerNames']['player2'].value;  
    }
    else {
        return alert('Please press start and choose your marker')
    }




    if (document.getElementById(arg).innerHTML == "") {
        if (turn == 1) {
            letter = player1Letter;
            player = document.forms['playerNames']["player1"].value;
            turn = 2;

        }
        else {
            letter = player2Letter;
            player = document.forms['playerNames']["player2"].value;
            turn = 1;
        }

        document.getElementById(arg).innerHTML = letter;
        counter = counter + 1;

    }
    else {
        alert('Please choose an unoccupied square')

    }


    // Possible results to win

    if (document.getElementById('top-left').innerHTML == letter && document.getElementById('top-mid').innerHTML == letter && document.getElementById('top-right').innerHTML == letter) {
      message = "Congratulations " + player  + "You Won! Would You like to play again?"
      console.log(message);
    }
    else {
        message = document.forms['playerNames']['player2'].value + ", Your Turn!";
    }


    if (document.getElementById('mid-left').innerHTML == letter && document.getElementById('mid-mid').innerHTML == letter && document.getElementById('mid-right').innerHTML == letter) {
      message = "Congratulations " + player + " You Won! Would You like to play again?"
    }
    else {
        message = document.forms['playerNames']['player2'].value + ", Your Turn!";
    } 


    if (document.getElementById('bottom-left').innerHTML == letter && document.getElementById('bottom-mid').innerHTML == letter && document.getElementById('bottom-right').innerHTML == letter) {
      message = "Congratulations " + player + " You Won! Would You like to play again?"
    }
    else {
       message = document.forms['playerNames']['player2'].value + ", Your Turn!";
    }

    
    if (document.getElementById('top-left').innerHTML == letter && document.getElementById('mid-mid').innerHTML == letter && document.getElementById('bottom-right').innerHTML == letter) {
      message = "Congratulations " + player + " You Won! Would You like to play again?"
    }
    else {
        message = document.forms['playerNames']['player2'].value + ", Your Turn!";
    }
    

    if (document.getElementById('top-left').innerHTML == letter && document.getElementById('mid-left').innerHTML == letter && document.getElementById('bottom-left').innerHTML == letter) {
      message = "Congratulations " + player + " You Won! Would You like to play again?"
      
    }
    else {
        message = document.forms['playerNames']['player2'].value + ", Your Turn!";
    }


    if (document.getElementById('top-mid').innerHTML == letter && document.getElementById('mid-mid').innerHTML == letter && document.getElementById('bottom-mid').innerHTML == letter) {
      message = "Congratulations " + player + " You Won! Would You like to play again?"
    }
    else {
        message = document.forms['playerNames']['player2'].value + ", Your Turn!";
    }


    if (document.getElementById('top-right').innerHTML == letter && document.getElementById('mid-right').innerHTML == letter && document.getElementById('bottom-right').innerHTML == letter) {
       message = "Congratulations " + player + " You Won! Would You like to play again?"
    }
    else {
        message = document.forms['playerNames']['player2'].value + ", Your Turn!";
     } 


        if (document.getElementById('bottom-left').innerHTML == letter && document.getElementById('mid-mid').innerHTML == letter && document.getElementById('top-right').innerHTML == letter) {
          message = "Congratulations " + player + " You Won! Would You like to play again?"
        }
        else {

            if (counter < 9) {
                if (turn == 1) {
                    message = document.forms['playerNames']['player1'].value + ", Your Turn!";
                }
                else {
                    document.forms['playerNames']['player2'].value + ", Your Turn!";
                }
            }
            else {
                alert("Draw Game! Better luck next time.");
                location.reload();
            }
        

        
        }
        document.getElementById('message').innerHTML = message;
    };

























