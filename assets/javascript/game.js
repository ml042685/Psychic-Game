var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

        var wins = 0;
        var losses = 0;
        var numGuesses = 10;
        var guessChoices = [];

        document.onkeyup = function (event) {
            var userGuess = event.key;
            guessChoices.push(userGuess);
            var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];


                
                if (userGuess == "o") {
                wins++;
                numGuesses = 10;
                alert("You Win!");
            }

                else {
                numGuesses--;
            }

                if (numGuesses === 0) {
                    losses ++;
                    numGuesses = 10;
                    alert("You Lose!")
            }

                var html =
                "<h1> The Pyschic Game </h1>" +
                "<p>Guess what letter I'm thinking of!</p>" +
                "<p>Wins: " + wins + "</p>" +
                "<p>Losses: " + losses + "</p>" +
                "<p>Guesses left: " + numGuesses + "</p>" +
                "<p>Your Guesses fo far: " + guessChoices.join(", ") + "</p>";

                document.querySelector("#game").innerHTML = html;
            };
