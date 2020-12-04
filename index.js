var myRandomNumer1 = Math.floor(Math.random() * 6) + 1;
var myRandomNumer2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src","images/dice"+myRandomNumer1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+myRandomNumer2+".png");

if ( myRandomNumer1 > myRandomNumer2 ) {
  document.querySelector("h1").textContent="🏆 Player 1 Wins !";
} else if ( myRandomNumer1 < myRandomNumer2 ) {
  document.querySelector("h1").textContent="Player 2 Wins ! 🏆";
} else {
  document.querySelector("h1").textContent="Draw !!!"
}
