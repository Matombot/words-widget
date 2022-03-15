let sentenceElem = document.querySelector(".sentence");
let wordCountElem = document.querySelector(".wordCount");
const word_btn = document.querySelector(".word_btn");

const wordBtnClicked = () => {
    countWords.parseSentence(sentenceElem.value);
    wordCountElem.innerHTML = countWords.wordCount();
}

word_btn.addEventListener('click', wordBtnClicked)