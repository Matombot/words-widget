const sentenceElem = document.querySelector(".sentence");
const wordCountElem = document.querySelector(".wordCount");
const word_btn = document.querySelector(".word_btn");
const displaySentence = document.querySelector(".displaySentence")
const hideWords = document.querySelector(".hideWords")
const longest_word = document.querySelector(".longest_word")

const wordBtnClicked = () => {
    let sentences = sentenceElem.value;
    //console.log(sentences);
    let word = sentences.split(" ")
    //let word = sentences.split(" ").trim();


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
    //let longestWord =word.m


hideWords.addEventListener('click', function(){

    let string = " ";
    const longestWord =sentenceElem.value.split(" ");
    for (let i = 0; i < longestWord.length; i++) {
const longestWords = longestWord[i];

if (hideWords.checked == true){
   if(longestWords.length >=5 ){
    string += `<mark style = 'color :red'>${longestWords}</mark>` + " "; 

}
displaySentence.innerHTML =`display words that has more than five characters : ${string}`;

  }
 else{displaySentence.innerHTML = sentencee;

 }

    }  

 
})

}

word_btn.addEventListener('click', wordBtnClicked)
