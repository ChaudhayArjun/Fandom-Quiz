import readlineSync from 'readline-sync';
import chalk from "chalk";

var userName = readlineSync.question("Hi What is your name? ");
console.log("---------------");

console.log("Welcome " + chalk.red(userName) + " to this Little Quize Game?",
);
console.log("---------------");

var userAnsWer = readlineSync.question("Press Y to Continue Or N to Exit: ");
console.log("---------------");
if (userAnsWer == "y" || userAnsWer == "Y") {
  console.log(chalk.blueBright("     QUIZ     "));
  console.log(chalk.magenta("-: Level 1 :- "));
  console.log(chalk.green("Answer All Five to procced to Final Level "));
  console.log("---------------");

  var highScore = {
    name: "Arjun",
    score: 12,
  };

  var score = 0;

  // Level 1
  var questions = [
    {
      question:
        "1. What is the colour of Raichu's cheeks? A.Yellow  B.Red  C.Blue ",
      ans: "A",
    },
    {
      question:
        "2. Which type of Pokemon is Gyarados? A.Water and flying  B.Water and dark  C.Water and grass ",
      ans: "A",
    },
    {
      question:
        "3. What is the only Pokemon that could change its gender?A.Drowzee  B.Rhydon  C.Azurill ",
      ans: "C",
    },
    {
      question:
        "4. Which electronic device is used to record and provide information about different species of Pokemon? A.Pokemon encyclopedia  B.Poke ball  C.Pokedex ",
      ans: "C",
    },
    {
      question:
        "5. Which Pokemon researcher in the series is considered to be the best scientist about Pokemon? A.Professor Agatha  B.Professor Oak  C.Professor Elm ",
      ans: "B",
    },
  ];

  function play(question, ans) {
    var userAns = readlineSync.question(question);
    if (userAns.toLowerCase() === ans.toLowerCase()) {
      console.log(chalk.green("Right!"));
      score += 1;
    } else {
      console.log(chalk.red("Wrong!"));
    }
    console.log("---------------");
  }

  for (let i = 0; i < questions.length; i++) {
    var currQuestion = questions[i];
    play(currQuestion.question, currQuestion.ans);
  }

  // Level 2
  if (score == 5) {
    console.log(
      chalk.green("Congratulations! ") + "You have reached Finale Level"
    );
    console.log("---------------");

    var questions2 = [
      {
        // 1
        question:
          "1. Weezing belongs to which type of Pokemon? A.Poison  B.Flying  C.Normal ",
        ans: "A",
      },
      {
        // 2
        question:
          "2. Which Pokemon is able to mimic others? A.Ditto  B.Jynx  C.Totodile ",
        ans: "A",
      },
      {
        // 3
        question:
          "3. What is the name of the main protagonist in the Pokemon anime? A.Brock  B.Misty  C.Ash ",
        ans: "C",
      },
      {
        // 4
        question:
          "4. Which Pokemon can evolve into 8 different forms, depending on how it is raised? A.Ditto  B.Eevee  C.Metapod ",
        ans: "B",
      },
      {
        // 5
        question:
          "5. What is the difference between a female and a male Pikachu? A.The shape of the tail  B.The colour of the cheeks  C.The weight of the body ",
        ans: "A",
      },
      {
        // 6
        question:
          "6. What is the slogan of the Pokemon franchise? A.Catch ‘em if you can  B.Catch ‘em all  C.Gotta catch ‘em all ",
        ans: "C",
      },
      {
        // 7
        question:
          "7. Which of the following Pokemon is able to control time? A.Palkia  B.Dialga  C.Darkrai ",
        ans: "B",
      },
      {
        // 8
        question:
          "8. In its highest evolved form, how many heads will Diglett have? A.Two heads  B.Three heads  C.Four heads ",
        ans: "B",
      },
      {
        // 9
        question:
          "9. 32. At the beginning of the Pokemon anime, why does Misty follow Ash Ketchum? A.Because Ash stole Misty’s bicycle  B.Because Ash stole Misty’s rod  C.Because Misty just wanted to do it ",
        ans: "C",
      },
      {
        // 10
        question:
          "10. Which of the following Pokemon seems to have a headache at all times? A.Psyduck  B.Zapdos  C.Kangaskhan ",
        ans: "A",
      },
    ];

    for (let i = 0; i < questions2.length; i++) {
      var currQuestion = questions2[i];
      play(currQuestion.question, currQuestion.ans);
    }

    if (score > highScore.score) {
      console.log(chalk.green("Congratulations! "));
      console.log(chalk.yellow("You have beaten the high score "));

      highScore.name = userName;
      highScore.score = score;
    }

    console.log("scored! " + score + " out of 15");
  } else {
    console.log(chalk.red("Better Luck Next Time!"));
  }

  console.log("---------------");

  var high = readlineSync.question("Want to see the High Score? ");

  if (high.toLowerCase === yes) {
    console.log("");
    console.log(highScore.name + " : " + highScore.score);
  }
} else {
  console.log(chalk.red("Byeee "));
}