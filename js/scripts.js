// Utility Logic
function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

// Business Logic

let offensiveWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop", "nigga"];

function inputWords(text) {
  if (text.trim().length === 0) {
    return 0;
  }

  // const words = text.toLowerCase().split(' ').filter((element) => element > 0);
  const words = text.toLowerCase().split(' ').filter((element) => element.trim() !== '');
  return words;
}

function getCommonWords(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  // Removes offensive words
  text = removeOffensiveWords(text);

  // Extract inputWords into an array
  let words = text.split(" ");

  // Count the common words
  let commonWords = [];

  words.forEach(function(element) {
    let word = element.toLowerCase().trim();

    // Check if the word is not an empty string
    if (word !== '') {
    // Initialize a flag variable to keep track if the word is found in the commonWords array
    let found = false;
  
    // Loop through the commonWords array to check if the word already exists
    for (let i = 0; i < commonWords.length; i++) {
    // If the word is found in the array, increment its count and set the 'found' flag to true
    if (commonWords[i].word === word) {
      commonWords[i].count++;
      found = true;
      // Exit the loop since the word is already in the array
      break;
    }
  }
  
    // If the word is not found in the array, add it along with a count of 1
    if (!found) {
      commonWords.push({ word: word, count: 1 });
    }
  }

  });


  commonWords.sort(function(a, b) {
    return b.count - a.count;
  });



  // Get 3 Common Words
  let mostCommonWords = commonWords.slice(0, 3);

  return mostCommonWords;
}


function removeOffensiveWords(text) {
  offensiveWords.forEach(function(element) {
    const censor = "*".repeat(element.length);
    let index = text.toLowerCase().indexOf(element.toLowerCase());

    while (index !== -1) {
      text = text.substring(0, index) + censor + text.substring(index + element.length);
      index = text.toLowerCase().indexOf(element.toLowerCase(), index + censor.length);
    }
  });

  return text;
}



function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }

  const wordArray = text.toLowerCase().split(" ");
  let wordCount = 0;

  wordArray.forEach(function(element) {
    if (element.includes(word.toLowerCase())) {
      wordCount++;
    }
  });

  return wordCount;
}



// UI Logic

$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const commonWords = getCommonWords(passage);
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-words").html(occurrencesOfWord);
    $("#passage").html(passage);

    $("#most-used").empty();
    commonWords.forEach(function(element) {
      $("#most-used").append(element.word + ": " + element.count + "<br>");
    });
  });
});