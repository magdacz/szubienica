var word = selectWord();
var answers = addLetters(word);
var othersLetters = word.length;
var counterShots = word.length + 10;

function selectWord() {
  var words = ["karakan", "introwertyk", "reklama", "promocja", "konstrukcja", "prowincja", "osiedle"];
  var word = words[Math.floor(Math.random() * words.length)];
  return word;
}

function currentResult(answers) {
  alert(answers.join(" "));
}

function addShot() {
  return prompt("Podaj literę, albo kliknij 'Anuluj', aby przerwać grę.");
}

function addLetters(word) {
  var answers = [];
  for (var i = 0; i < word.length; i++) {
     answers[i] = "_";
  }
  return answers;
}

function stateGame(word, playerShot, answers) {
    counterShots--;
    playerShot = playerShot.toLowerCase();
    for (var j = 0; j < word.length; j++) {
      if(word[j] === playerShot && answers[j] === "_") {
        answers[j] = playerShot;
        othersLetters--;
       }
    }
}

function congratulations() {
  currentResult(answers);
  if(counterShots > 0 && playerShot !== null) { 
  // playerShot !== null zapobiega wyświetlaniu gratulacji w przypadku gdy nie podamy litery a klikniemy ok i anulujemy przy następnym wyskakującym okienku
    alert("Gratulacje! Szukane słowo to " + answers.join("")); 
  }  else if ( playerShot === null) {
      alert("Może jednak zagrasz?");
     } else {
        alert("Niestety nie odgadłeś słowa.");
      }
}
  
///Główna pętla gry 

while(othersLetters > 0 && counterShots > 0 ) {
  currentResult(answers);
   //strzał użytkownika
   var playerShot = addShot();
  
   if(playerShot === null) {
        break;
    } else if (playerShot.length !== 1) {
        alert("Możesz podać tylko jedną literę!");
    } else {
      stateGame(word, playerShot, answers);
    }
}
  
  congratulations();