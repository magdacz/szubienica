var words = ["karakan", "introwertyk", "struś", "promocja", "konfabulacja", "tatuaż"];
var word = words[Math.floor(Math.random() * words.length)];

var answers = [];
for (var i = 0; i < word.length; i++) {
    answers[i] = "_";
}

var othersLetters = word.length;

//Główna pętla gry 

while(othersLetters > 0) {
    alert(answers.join(" "))
    //strzał użytkownika
    var playerShot = prompt("Podaj literę, albo kliknij 'Anuluj', aby przerwać grę.").toLowerCase();
    
    if(playerShot === null) {
        break;
        
    } else if (playerShot.length !== 1) {
        alert("Możesz podać tylko jedną literę!")
    } else {
        for (var j = 0; j < word.length; j++) {
            if(word[j] === playerShot) {
                answers[j] = playerShot;
                othersLetters--;
            }
        }
    }
}

alert(answers.join(" "));
alert("Gratulacje! Szukane słowo to " + word);