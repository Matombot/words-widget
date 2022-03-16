const sentenceElem = document.querySelector(".sentence");
const wordCountElem = document.querySelector(".wordCount");
const word_btn = document.querySelector(".word_btn");
const displaySentence = document.querySelector(".displaySentence")

const wordBtnClicked = () => {
    const sentences = sentenceElem.value;
//console.log(sentences);
    let word = sentences.split(" ")
//let word = sentences.split(" ").trim();

    
    const Words = word.map(words => {
        if (words.length >= 4) {
            words = `<mark>${words}</mark>`;
        }
        return words;

    })

    let sentencee = ""
    for (let i = 0; i < Words.length; i++) {
        sentencee += Words[i] + " ";

    }
    
    
    displaySentence.innerHTML = sentencee;
   // wordCountElem.innerHTML = sentencee.length
  
}


word_btn.addEventListener('click', wordBtnClicked)


