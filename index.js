/////////////////// A CLI Quiz App About Me //////////////////////

// Get Modules 
const readlineSync = require("readline-sync");
const chalk = require("chalk");

// Copy of log method of console to use simply log
const log = console.log;


// Questions On Cricket
const questionsOnCricket = [
  {
    question: "Which Cricket Player has the Highest Number of Centuries in the  World ?",
    options: ["A. MS Dhoni", "B. Sachin Tendulkar", "C. Virat Kohli"],
    answer: "B"
  },
  {
    question: "Which Cricket Player is Known as \"Run Machine\" ?",
    options: ["A. Virat Kohli", "B. MS Dhoni", "C. Sachin Tendulkar"],
    answer: "A"
  },
  {
    question: "Which Cricket Player is Known as the \"God of Cricket\" ?",
    options: ["Kane Williamson", "B. Chris Gayle", "C. Sachin Tendulkar"],
    answer: "C"
  },
  {
    question: "In Which Year India Won the First Cricket World Cup ?",
    options: ["A. 2011", "B. 1983", "C. 2013"],
    answer: "B"
  },
  {
    question: "Which Country Own the Maximum Number of World Cups in Cricket ?",
    options: ["A. Australia", "B. India", "C. New Zealand"],
    answer: "A"
  },
];


// Questions On Bollywood
const questionsOnBollywood = [
  {
    question: "Who is as Known as King Khan",
    options: ["A. Shahrukh Khan", "B. Salman Khan", "C. Aamir Khan"],
    answer: "A"
  },
  {
    question: "Which Indian Actor is Known as \"Mr. Perfectionist\" ?",
    options: ["A. Hrithik Roshan", "B. Shahrukh Khan", "C. Aamir Khan"],
    answer: "C"
  },
  {
    question: "Which is the highest-grossing Indian Movie Worldwide ?",
    options: ["A. Dangal", "B. Bajrangi Bhaijaan", "C. Pathan"],
    answer: "A"
  },
  {
    question: "Which Actor Plays the Role of Superhero \"Krrish\" ?",
    options: ["A. Aamir Khan", "B. Akshay Kumar", "C. Hrithik Roshan"],
    answer: "C"
  },
  {
    question: "Which is the highest-grossing Movie in India ?",
    options: ["A. KGF-2", "B. RRR", "C. Baahubali-2"],
    answer: "C"
  },
];


// Questions On Marvel
const questionsOnMarvel = [
  {
    question: "What is the name of the alien race that invades Earth in The Avengers (2012)",
    options: ["A. Chitauri", "B. Kree", "C. Skrulls"],
    answer: "A"
  },
  {
    question: "What is the real name of the Black Panther, the king of Wakanda ?",
    options: ["A. M’Baku", "B.  N’Jobu", "C.  T’Challa"],
    answer: "C"
  },
  {
    question: "Which Infinity Stone is embedded in Vision’s forehead ?",
    options: ["A. Reality Stone", "B. Mind Stone", "C. Soul Stone"],
    answer: "B"
  },
  {
    question: "What is the name of Thor’s hammer, which can only be lifted by those who are worthy ?",
    options: ["A. Mjolnir", "B. Jarnbjorn", "C. Stormbreaker"],
    answer: "A"
  },
  {
    question: "Who is the director of S.H.I.E.L.D. and the leader of the Avengers Initiative ?",
    options: ["A. Maria Hill", "B. Nick Fury", "C. Phil Coulson"],
    answer: "B"
  },
];

// Questions List of All Topics
const allTopicsQuestionsList = [questionsOnCricket, questionsOnBollywood, questionsOnMarvel];

// Questions List of User's Choice (Default to Questions On Cricket)
let selectedQuestionsList = allTopicsQuestionsList[0];

// Set selectedIndex According to user's choice 
let selectedIndex = 0

// User's Score and Highest Scorers
let userScore = 0;
let highestScorersInCricket = [
  {
    nameOfPlayer: "harman",
    score: 6
  },
  {
    nameOfPlayer: "karan",
    score: 3
  }
];

let highestScorersInBollywood = [
  {
    nameOfPlayer: "aman",
    score: 6
  },
  {
    nameOfPlayer: "kamal",
    score: 4
  }
];

let highestScorersInMarvel = [
  {
    nameOfPlayer: "anurag",
    score: 6
  },
  {
    nameOfPlayer: "mohit",
    score: 4
  }
];

// List of Highest Scorers On Quiz of Every Topic
let highestScorersList = [highestScorersInCricket, highestScorersInBollywood, highestScorersInMarvel];




// function to display final result
function finalResult() {

  // Clear Console
  console.clear();

  // Clear Console
  log(chalk.black.bgWhiteBright.bold("\nGame End !!!"));

  // Final Score
  log(chalk.greenBright.bold("\n🤩 Your Final Score => " + userScore));

  // Show Highest 
  let highestScorers = highestScorersList[selectedIndex];
  log(chalk.black.bgCyan.bold("\n🥇 ----- Highest Scorers ---- 🥇"));
  for (let i = 0; i < highestScorers.length; i++) {
    log(chalk.cyan("\n_________________________________\n"));
    log(chalk.whiteBright.bold("Name => " + highestScorers[i].nameOfPlayer));
    log(chalk.whiteBright.bold("Scored => " + highestScorers[i].score));
  }
  log(chalk.cyan("\n_________________________________\n"));


  log(chalk.redBright.bold("\n⚠️  NOTE - IF YOU HAVE BEATEN ONE OF THE THE HIGHEST SCORERS THAN SEND ME SCREENSHOT OF YOUR SCORES AND YOUR NAME, SO I WILL UPDATE THE HIGHEST SCORERS BOARD"));
  log(chalk.whiteBright.bold("\n👉 VISIT HERE ") + chalk.cyan.bold.underline("\"https://webwithaman.netlify.app\"") + chalk.whiteBright.bold(" ON MY PORTFOLIO AND CONTACT ME VIA ANY MEDIA "));

  console.log("\n............................................................\n");

  // Get user's choice whether he/she wants to Play Again 
  log(chalk.black.bgCyan.bold("\n🤔 Do You Want to Play Again ?"));
  log(chalk.black.bgWhiteBright.bold("\nYes") + chalk.whiteBright("  Press Y/y key Then Enter"));
  log(chalk.black.bgWhiteBright.bold("\nNo") + chalk.whiteBright("  Press Any key Then Enter"));
  const userChoiceToPlay = readlineSync.question(chalk.whiteBright("\n👉 Enter Your Choice => "));

  if (userChoice.toLowerCase() == 'y')
    startGameAndPlay();
  else
    log(chalk.whiteBright("\n🙂 Its Ok, As You Wish...\nProgram Terminated..."));
}


// // function to Evaluate Answer whether the answer is Right or Wrong. Also Increment or Decrement score based on result
function evaluateAnsAndShowResult(correctAnswer, userAnswer) {

  // Display userAnswer
  log(chalk.cyan("\n👉 Your Answer => " + userAnswer));

  // Check Right Or Wrong
  if (correctAnswer.toLowerCase() == userAnswer.toLowerCase()) {
    log(chalk.black.greenBright.bold("\n✅ You Are Right"));
    userScore++;
  } else {
    log(chalk.black.redBright.bold("\n❎ You Are Wrong"));
    log(chalk.greenBright.bold("\n🟩 Correct Answer => " + correctAnswer));
    userScore--;
  }

  // Display User's score
  log(chalk.greenBright.bold("\n📋 Your Current Score => " + userScore));
}


// // function to display question, take answer and return the answer
function askQuesAndTakeAns(question, options, answer) {

  // Show question 
  log(chalk.redBright.bold("\n🔴 Question") + " " + chalk.whiteBright(question));


  // Show Options
  log(chalk.black.bgCyan.bold("\n👇 Options 👇"));
  for (let i = 0; i < options.length; i++) {
    log(chalk.whiteBright("\n" + options[i]));
  }

  // Take Answer and return
  return readlineSync.question(chalk.greenBright.bold("\n🟢 Answer ") + " ");
}


// // function to show question and result
function showQuesAndResult(question, options, answer) {
  log(chalk.cyanBright("\n--------------------------------------------"));
  const userAnswer = askQuesAndTakeAns(question, options, answer);
  evaluateAnsAndShowResult(answer, userAnswer);
}


// Function to Start Game and Play
function startGameAndPlay() {

  // Set Questions Related to Selected Topics
  selectedQuestionsList = allTopicsQuestionsList[selectedIndex];

  // Reset Score
  userScore = 0;

  // Clear Console
  console.clear();

  // Display Initial Score
  log(chalk.greenBright.bold("\n📋 Your Score Before Starting the Game => " + userScore));

  // Game Started
  log(chalk.whiteBright.bgCyan.bold("\n>>>>>>>>>>> 🔰 Game Started 🔰 <<<<<<<<<<<<<"));

  // Display Questions One by One
  for (let i = 0; i < selectedQuestionsList .length; i++) {
    const currentQuestion = selectedQuestionsList [i];
    showQuesAndResult(currentQuestion.question, currentQuestion.options, currentQuestion.answer);

    // Get user's choice to move forward
    log(chalk.black.bgCyan.bold("\n🤔 Do You Want to Quit ?"));
    log(chalk.black.bgWhiteBright.bold("\nYes") + chalk.whiteBright("  Press Y/y key Then Enter"));
    log(chalk.black.bgWhiteBright.bold("\nNo") + chalk.whiteBright("  Press Any key Then Enter"));
    const userChoiceToPlay = readlineSync.question(chalk.whiteBright("\n👉 Enter Your Choice => "));

    if (userChoiceToPlay.toLowerCase() == 'y'){
      log(chalk.whiteBright("\n🙂 Its Ok, As You Wish...\nProgram Terminated..."));
      break;
    }
  }

  // Display Final Result
  finalResult();
}


// // Function to Take User Choice to Play Quiz Related to Given Topics
function userChoiceOnQuizTopic() {

  // Get user's choice to Play Quiz on Which Topics
  log(chalk.black.bgCyan.bold("\n👇 You Can Play Quiz Game Related to the Following Topics 👇"));
  log(chalk.black.bgWhiteBright.bold("\nCricket") + chalk.whiteBright("  Press 1 Then Enter"));
  log(chalk.black.bgWhiteBright.bold("\nBollywood") + chalk.whiteBright("  Press 2 Then Enter"));
  log(chalk.black.bgWhiteBright.bold("\nMarvel") + chalk.whiteBright("  Press 3 Then Enter"));
  log(chalk.black.bgWhiteBright.bold("\nExit") + chalk.whiteBright("  Press Any Key Then Enter"));
  const userChoiceTopic = +readlineSync.question(chalk.whiteBright("\n👉 Enter Your Choice => "));

  let programTerminated = false;

  // Play Quiz On the basis of user's choice
  if (userChoiceTopic == 1)
    selectedIndex = 0;
  else if (userChoiceTopic == 2)
    selectedIndex = 1;
  else if (userChoiceTopic == 3)
    selectedIndex = 2;
  else {
    log(chalk.whiteBright("\n🙂 Its Ok, As You Wish...\nProgram Terminated..."));
    programTerminated = true;
  }

  if (!programTerminated)
    startGameAndPlay();
}


// // Function to Perform Intro , Welcome And Get User's choices
function introWelcomeAndChoices() {

  // Welcome to Quiz With Aman
  log(chalk.black.bgWhiteBright.bold("\n🌝 Welcome to Quiz With Aman 🌝"));

  // Take user's name and Also Welcome them
  const userName = readlineSync.question(chalk.whiteBright("\n🖐️  Hi Buddy !!, What is Your Name => "));
  const welcomeMessage = "\n🌝 Welcome " + userName + " 🌝";
  log(chalk.cyan.bold(welcomeMessage));

  // Get user's choice whether he/she wants to Play Game or not
  log(chalk.black.bgCyan.bold("\nHey " + userName + ", 🤔 Do You Want to Play A Quiz Game ?"));
  log(chalk.black.bgWhiteBright.bold("\nYes") + chalk.whiteBright("  Press Y/y key Then Enter"));
  log(chalk.black.bgWhiteBright.bold("\nNo") + chalk.whiteBright("  Press Any key Then Enter"));
  const userChoiceToPlay = readlineSync.question(chalk.whiteBright("\n👉 Enter Your Choice => "));

  // Take Action Based On User Choice
  if (userChoiceToPlay.toLowerCase() == 'y')
    userChoiceOnQuizTopic();
  else
    log(chalk.whiteBright("\n🙂 Its Ok, As You Wish...\nProgram Terminated..."));

}

////////////////////////////// Starting of Program ////////////////////////////
introWelcomeAndChoices();
