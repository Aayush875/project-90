player_1=localStorage.getItem("player1")
player_2=localStorage.getItem("player2")

player_1score=0
player_2score=0

document.getElementById("player1_name").innerHTML=player_1 + " : "
document.getElementById("player2_name").innerHTML=player_2 + " : "

document.getElementById("player1_score").innerHTML=player_1score 
document.getElementById("player2_score").innerHTML=player_2score 

document.getElementById("player_question").innerHTML="question turn- "+ player_1
document.getElementById("player_answer").innerHTML="Answer turn- "+ player_2

