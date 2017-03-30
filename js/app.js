import { Storage } from './storage';


let wordInput = document.querySelector('#word-inpt');
let translateInput = document.querySelector('#translation-inpt');
let wordSubmitBtn = document.querySelector('#add-word-btn');

wordSubmitBtn.addEventListener('click', getWord);

function getWord(){
    Storage.addWord(wordInput.value, translateInput.value);
    console.log(Storage);
}
