const section = document.querySelector("section");
var icons = [
  "apple",
  "google",
  "facebook",
  "discord",
  "amazon",
  "github",
  "apple",
  "google",
  "facebook",
  "discord",
  "amazon",
  "github"
];
var state = "over";
const start = document.querySelector(".start");
start.addEventListener("click", play);
var first = null;
var second = null;
var score = 0;
var timer = null;

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

var i = 0;
function insertCard(state) {
  section.innerHTML = "";
  shuffleArray(icons);
  Array.from(icons).forEach((icon) => {
    i++;
    const card = document.createElement("div");
    card.className = "card " + icon + " turn";
    if (state == "play") {
      card.addEventListener("click", () => {
        if (first == null) {
          first = card;
          first.classList.add("turn");
        } else if (first != card && second == null) {
          second = card;
          second.classList.add("turn");
          console.log(first.className == second.className);
          if (first.className == second.className) {
            score++;
            setTimeout(() => {
              first.style.visibility = "hidden";
              second.style.visibility = "hidden";
              first = null;
              second = null;
            }, 1000);
            if (score == icons.length / 2) {
              endGame("Won");
            }
          } else {
            setTimeout(() => {
              first.classList.remove("turn");
              second.classList.remove("turn");
              first = null;
              second = null;
            }, 1000);
          }
        }
      });
    }
    section.append(card);
    setTimeout(() => {
      card.classList.toggle("turn");
    }, i * 80);
  });
}
insertCard("over");

function play() {
  if (state=="over"){
  state = "play"
  insertCard(state);
  first = null;
  second = null;
  score = 0;
  let time = 30;
  timer = setInterval(() => {
    start.innerHTML = time;
    time--;
    if (time == -1) {
      endGame("Lost");
    }
  }, 1000);
}
}

function endGame(result) {
  insertCard("over");
  clearInterval(timer);
  start.innerHTML = "RESTART";
  alert(`You ${result}`);
  state = "over"
}
