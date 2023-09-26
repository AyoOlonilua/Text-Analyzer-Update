# Text Analyzer
By AYO-OLONILUA AYOMIPE

# TECHNOLOGIES USED

- HTML
- CSS
- Javascript
- Git
- Bootstrap

# Known Bugs

- no Known Bugs.

# Description

It is used to independently classify, sort, and extract information from text to identify patterns, relationships, sentiments, and other actionable knowledge.

# Setup/Installation Requirements

- Clone this respository to your desktop.
- Navigate to your top directory
- Open this project

# License
{MIT}

## Contact Information

- oloniluaayomipe@gmail.com
- 07033747755
- 09166132036



Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2

Describe: numberOfOccurrencesInText()
Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

