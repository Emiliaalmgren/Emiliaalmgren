const sec = document.getElementById("sec");

function setSecond(seconds){
  this.seconds = seconds
}

const SecondSelection = [
  new setSecond("15 sek"),
  new setSecond("30 sek"),
  new setSecond("60 sek")
]

const selectedSeconds = [...new Set(SecondSelection.map(function(item){return item.seconds}))];
for (let i = 0; i < SecondSelection.length; i++){
  let option = document.createElement("option");
  option.text = selectedSeconds[i];
  sec.appendChild(option);
}

sec.addEventListener("change", selectedSeconds);

let currentTime = 15;

function timeDropdown(){
  if (currentTime > 0) {
    currentTime--;
    let timeElement = document.querySelector(".time b");
    timeElement = currentTime;
  }
}
setInterval(timeDropdown,1000);

//------------------------------------------------------
//Restart button

const restart = document.getElementById("restart");

restart.addEventListener("click", fromBeginning);

function fromBeginning(){
  const cards = document.getElementsByClassName("card");
  for (let i = 0; i < cards.length; i++){
    const frontView = cards[i].querySelector(".view.front-view");
    const backView = cards[i].querySelector(".view.back-view");

    frontView.style.display = "flex";
    backView.style.display = "none";
  }
}

//--------------------------------------------------------------
//Make images clickable
const cards = document.getElementsByClassName("card");

for(let i = 0; i < cards.length; i++){
  cards[i].addEventListener("click", turnCardAround);
}

function turnCardAround(){
  const frontView = this.querySelector(".view.front-view");
  const backView = this.querySelector(".view.back-view");

  if (frontView.style.display !== "none"){
    backView.style.display = "flex";
    frontView.style.display = "none";
  } 
  else {
    frontView.style.display = "flex";
    backView.style.display = "none";
  }
}
