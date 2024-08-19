let timer = 60;
let hitwa = 0;
let score = 0;

function makebubble() {
  clutter = "";

  for (i = 0; i < 120; i++) {
    janu = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble"> ${janu} </div>`;
  }

  document.querySelector("#btmbar").innerHTML = clutter;
}

function scorecall() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function setTimer() {
  let setted = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerwala").textContent = timer;
    } else {
      clearInterval(setted);
      document.querySelector(
        "#btmbar"
      ).textContent = `Game Over " Your score is : ${score} "`;
    }
  }, 1000);
}

function bringHit() {
  hitwa = Math.floor(Math.random() * 10);
  document.querySelector("#hitwala").textContent = hitwa;
}

function Scoreis() {
  document.querySelector("#btmbar").addEventListener("click", function (dets) {
    let clicked = Number(dets.target.innerHTML);

    if (clicked === hitwa) {
      scorecall();
      bringHit();
      makebubble();
    }
  });
}

setTimer();
makebubble();
bringHit();
Scoreis();

// Project done by AstraCalce, on 19 August 2024 , completed at 04 : 33 PM ! :)
