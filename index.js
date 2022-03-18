const sentenceElem = document.querySelector(".sentence");
const wordCountElem = document.querySelector(".wordCount");
const word_btn = document.querySelector(".word_btn");
const displaySentence = document.querySelector(".displaySentence")
const hideWords = document.querySelector(".hideWords")
const longest_word = document.querySelector(".longest_word")
displaylastWords = document.querySelector(".last5Words")

const wordBtnClicked = () => {
    let sentences = sentenceElem.value;
    //console.log(sentences);
    let word = sentences.split(" ")
    //let word = sentences.split(" ").trim();
    let lastWords = [];


    let Words = word.map(words => {
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

    wordCountElem.innerHTML = word.length;
    


hideWords.addEventListener('click', function(){

    let string = " ";
    let longWord = " ";
    const longestWord =sentenceElem.value.split(" ");
    for (let i = 0; i < longestWord.length; i++) {
const longestWords = longestWord[i];

if (hideWords.checked === true){
   if(longestWords.length > 5 && longestWords.length>= longWord.length){
    string += `<mark style = 'color :red'>${longestWords}</mark>` + " "; 
    longWord = longestWords;

}
displaySentence.innerHTML =`display words that has more than five characters : ${string}`;
longest_word.innerHTML = `longestword is displayed here: <mark style = 'color :green'> ${longWord} </mark>`;
 
  }
 else{displaySentence.innerHTML = sentencee;

 }

    }  

})
if (lastWords.length < 5 ){
    lastWords.push(sentences)
}
console.log(lastWords);
displaylastWords.innerHTML = `${lastWords}`
}

word_btn.addEventListener('click', wordBtnClicked)
