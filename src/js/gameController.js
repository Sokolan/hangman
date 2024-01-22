import ComputerGuess from "./computerGuess";

const GameController = () => {
  let lives;
  let computerGuess;
  let lastLetterGuess;

  const startNewGame = (wordLength) => {
    computerGuess = ComputerGuess(wordLength);
    lives = 8;
  };

  const getNextGuess = () => {
    lastLetterGuess = computerGuess.getNextLetterGuess();
    return lastLetterGuess;
  };

  const updateGuessStatus = (isGuessCorrect, locations) => {
    if (isGuessCorrect) {
      computerGuess.wordContain(lastLetterGuess, locations);
    } else {
      computerGuess.wordDontContain(lastLetterGuess);
      lives -= 1;
    }
    return { lives, isGameDecided: computerGuess.isWordFound() };
  };

  const getFoundWord = () =>
    computerGuess.isWordFound()
      ? computerGuess.getNextLetterGuess()
      : "WORD WASN'T FOUND YET";

  return {
    startNewGame,
    getNextGuess,
    updateGuessStatus,
    getFoundWord,
  };
};

export default GameController;
