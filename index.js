const sentenceElem = document.querySelector(".sentence");
const wordCountElem = document.querySelector(".wordCount");
const word_btn = document.querySelector(".word_btn");
const displaySentence = document.querySelector(".displaySentence")
const hideWords = document.querySelector(".hideWords")
const longest_word = document.querySelector(".longest_word")
displaylast5Sentence = document.querySelector(".last5Words")

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



    hideWords.addEventListener('click', function () {
var x = longestword(sentenceElem.value);
console.log(x);
        let string = " ";
        const longestWord = sentenceElem.value.split(" ");
        for (let i = 0; i < longestWord.length; i++) {
            const longestWords = longestWord[i];

            if (hideWords.checked === true) {
                if (longestWords.length >= x.length && longestWords.length >= 5 ){
                   string += `<mark style = 'color :green'> ${longestWords} </mark>` + " ";
                }
                else if (longestWords.length >= 5 ) {
                    string += `<mark style = 'color :red'>${longestWords}</mark>` + " ";
                    
                }
                

            }


           else {
                displaySentence.innerHTML = sentencee;

           }
            

        }
        displaySentence.innerHTML = `hide all words shorter than 5 characters : ${string}`;
               // longest_word.innerHTML = `longestword is displayed here: `;

    })

    
    //last 5 sentence
    //..i have to store input in an empty array and push it to something

    //if (lastWords.length < 5 ){
    //   lastWords.push(sentences)
    //}
    //console.log(lastWords);
    //displaylastWords.innerHTML = `${lastWords}`
}
const longestword =(word) =>{
    
    const longWord = word.split(" ");
    let longWords = " ";
    for(var i=0;i<longWord.length;i++){
        if (longWord[i].length >= longWords.length){
            longWords =longWord[i];
        }
        
    }
    return longWords;
}

word_btn.addEventListener('click', wordBtnClicked)
