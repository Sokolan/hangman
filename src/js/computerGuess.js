import Words from "../../words.csv";

const ComputerGuess = (wordLength) => {
  let potencialWords = Words.slice().filter(
    (element) => element[0].length <= wordLength,
  );
  const getPotencialWords = () => potencialWords;
  let currentWord = String("*").repeat(wordLength);

  const getNextLetter = () => {
    const hist = {};

    potencialWords.forEach((word) => {
      const uniqueLetters = new Set();
      word[0].split("").forEach((letter) => {
        if (uniqueLetters.has(letter)) return;
        uniqueLetters.add(letter);
        hist[letter] = hist[letter] !== undefined ? hist[letter] + 1 : 1;
      });
    });

    const maxValue = Object.entries(hist).reduce(
      (accumulated, current) =>
        current[1] > accumulated[1] ? current : accumulated,
      ["a", 0],
    );

    return maxValue[0];
  };

  const isWordFound = () => currentWord.indexOf("*") === -1 || potencialWords.length === 1;

  const wordContain = (letter, locations) => {
    potencialWords = potencialWords.filter((word) =>
      locations.every((location) => word[0].at(location) === letter),
    );
    locations.forEach((location) => {
      currentWord =
        currentWord.substring(0, location) +
        letter +
        currentWord.substring(location + 1);
    });
  };

  const wordDontContain = (letter) => {
    potencialWords = potencialWords.filter(
      (word) => word[0].indexOf(letter) === -1,
    );
  };

  return {
    getNextLetter,
    isWordFound,
    wordContain,
    wordDontContain,
    getPotencialWords,
  };
};

export default ComputerGuess;
