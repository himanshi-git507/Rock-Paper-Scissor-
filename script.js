let user_score = 0;
let ai_score = 0;

function play(user){
    let num = parseInt(Math.random() * 10);
    let ai;

    if(num >= 0 && num <= 3) ai = "scissor";
    else if(num >= 4 && num <= 7) ai = "paper";
    else ai = "rock";

    if(user == "paper" && ai == "rock" ||
       user == "rock" && ai == "scissor" ||
       user == "scissor" && ai == "paper"){

        document.getElementById("user").innerHTML = "You have choosen " + user;
        document.getElementById("ai").innerHTML = "AI has choosen " + ai;
        document.getElementById("winner").innerHTML = "You won!";
        user_score++;
    }

    else if(ai == "paper" && user == "rock" ||
         ai == "rock" && user == "scissor" ||
         ai == "scissor" && user == "paper"){

          document.getElementById("user").innerHTML ="You have choosen " + user;
          document.getElementById("ai").innerHTML ="AI has choosen " + ai;
          document.getElementById("winner").innerHTML ="AI won !";
          ai_score++;
        }

        else {
          document.getElementById("user").innerHTML = "You have choosen " + user;
          document.getElementById("ai").innerHTML = "AI has choosen " + ai;
          document.getElementById("winner").innerHTML = "Game drawn!";
        }
  
        document.getElementById("u_s").innerHTML = "Your score:" + user_score;
        document.getElementById("ai_s").innerHTML = "AI Score:" + ai_score;
}