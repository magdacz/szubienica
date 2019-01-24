var words = ["karakan", "introwertyk", "struś", "promocja", "konfabulacja", "tatuaż"];
var word = words[Math.floor(Math.random() * words.length)];

var answers = [];
for (var i = 0; i < word.length; i++) {
    answers[i] = "_";
}

var othersLetters = word.length;
var counterShots = word.length + 10;

//Główna pętla gry 

while(othersLetters > 0 && counterShots > 0) {
    alert(answers.join(" "))
    //strzał użytkownika
    var playerShot = prompt("Podaj literę, albo kliknij 'Anuluj', aby przerwać grę.").toLowerCase();
    
    if(playerShot === null) {
        break;
        
    } else if (playerShot.length !== 1) {
        alert("Musisz podać jedną literę!")
    } else {
        counterShots--;
        for (var j = 0; j < word.length; j++) {
            if(word[j] === playerShot && answers[j] === "_") {
                answers[j] = playerShot;
                othersLetters--;
            }
        }
    }
}

alert(answers.join(" "));
if(counterShots > 0 && playerShot !== null) { 
  // playerShot !== null zapobiega wyświetlaniu gratulacji w przypadku gdy nie podamy litery a klikniemy ok i anulujemy przy następnym wyskakującym okienku
  alert("Gratulacje! Szukane słowo to " + word); 
}  else {
  alert("Niestety nie odgadłeś słowa.")
}
