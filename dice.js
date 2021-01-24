function startGame ()
{
  var playerOne = Math.floor(Math.random() * 6)+1;
  var playerTwo = Math.floor(Math.random() * 6)+1;

  document.querySelector(".img1").setAttribute('src','images/dice'+playerOne+'.png');
  document.querySelector(".img2").setAttribute('src','images/dice'+playerTwo+'.png');

  if(playerOne>playerTwo)
  {
    document.querySelector("h1").innerHTML="<i class='bi bi-trophy cup'> <span class='header'>Player One Wins</span>";
  }
  else if (playerOne<playerTwo) {
    document.querySelector("h1").innerHTML="Player Two Wins <i class='bi bi-trophy cup'>";
  }
  else{
    document.querySelector("h1").innerHTML="Draw";
  }
}
