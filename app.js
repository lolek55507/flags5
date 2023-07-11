const flags = document.querySelectorAll("#flagueName");
const counter = document.getElementById("Counter");
// const flagsPl = [
 //   "Unia Europejska", "Albania", "Andorra", "Austria", "bialorus", "Belgia", "Bosnia", "Bulgaria", "Chorwacja", "Cypr", "Czechy", "Dania", "Estonia", "Wyspy Owcze", "Finlandia", 
// "Francja", "Niemcy", "Gibraltar", "Grecja", "Grenlandia", "Wegry", "Islandia", "Irlandia", "Wlochy", "Lotwa", "Lichtenstain", "Litwa", "Luxemburg", "Macedonia", "Malta", "Moldawia",
  //  "Monaco", "Czarnogora", "Holandia", "Norwegia", "Polska", "Serbia", "Slowacja", "Slowenia", "Hiszpania", "Szwecja", "Szwajcaria", "Turcja", "Ukraina", "Wielka Brytania", "Watykan",
// ];
let answers = document.getElementById("answers");
const wrongAnswerSound = document.getElementById("audioW");
const correctAnswerSound = document.getElementById("audioC");
const tickingSound = document.getElementById('tickingSound');
let w = 0;
let countingInterval
let flagsAmount = 50;

    
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) { 
      checkForCorrect();
    }
  });
    function checkForWin() {
      if(flagsAmount === 0) {
        prompt("Cogratulation you have completed the thest you have done it in " + w + " sec.");
        stopPlaying();
        flagsAmount = 50;
      }
    }
  function startCountUp() {
    w++;
    counter.innerHTML = w + " sec";
    tickingSound.play();
  }

  function checkForCorrect() {
    let mat = false; 
    for (let m = flags.length - 1; m >= 0; m--) {
      if (flags[m].innerHTML.toLowerCase() === answers.value.toLowerCase() && flags[m].classList.contains("invisible")) {
        flags[m].classList.remove("invisible");
        correctAnswerSound.play();
        mat = true; 
        flagsAmount--;
        break; 
      }
    }
  
    if (!mat) {
      wrongAnswerSound.play();
    }
    checkForWin();
  }

function startPlaying() {
    console.log(flags);
    for (let i = flags.length - 1; i >= 0; i--) 
    flags[i].classList.add("invisible");
    countingInterval = setInterval(startCountUp, 1000);
}

function stopPlaying() {
    for (let m = flags.length - 1; m >= 0; m--) {
        
            flags[m].classList.remove("invisible");
            clearInterval(countingInterval);
            w = 0;
            flagsAmount = 50;
            counter.innerHTML = w;
        
        
    } 
}
