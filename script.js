const textElement = document.getElementById('randomText');
const inputElement = document.getElementById('textInput');
const resultElement = document.getElementById('result');
const startButton = document.getElementById('startButton');
const wordListSelect = document.getElementById('wordList');
const testDurationInput = document.getElementById('testDuration');

let words = [];
let testDuration = 30; // Default test duration in seconds
let timer;

const wordLists = {
    default: "ab bc mr nu po pe pd pf gp a jf hf fh xy zo wn qr tp lm ed vu ki xs yt hn mc qe rf ob pa gu jd fi ec vb za lo tw pn qs rh ix km by cz dt ah mf nv sp wx uy og vb ij ka zd lf yr xt eu hw qn ac bp tm sk rl pu nj qa io zf dg mc we vu tn lr yi qx po am bn cj dx ev fk gh hi jm kl no pr st uv wx yz aa bb cc dd ee ff gg hh ii jj kk ll mm nn oo pp",
    fruits: "appletah bananatah cherrytah orangetah mangotah pineappletah strawberrytah watermelontah grapetah blueberrytah kiwitah peachtah peartah plumtah raspberrytah lemontah limetah grapefruittah pomegranatetah apricottah coconuttah figtah blackberrytah cranberrytah avocadotah",
    animals: "dog cat elephant lion tiger bear giraffe zebra monkey gorilla kangaroo koala panda penguin dolphin whale shark eagle owl parrot crocodile turtle snake rabbit squirrel deer fox horse cow pig sheep goat rhinoceros hippopotamus cheetah wolf bat octopus jellyfish butterfly bee ant spider",    
    Boy_Name: "Liam Noah Ethan Oliver Aiden Muhammad Elijah James Benjamin Lucas Alexander William Michael Mason Daniel Henry Sebastian Jackson David Matthew Joseph Carter Andrew Owen Gabriel Samuel Jack Wyatt Leo Julian Jaxon Grayson Lincoln Isaiah Theodore Caleb Ryan Mateo Zachary Isaac Nathan Ezra Vincent Adam Tyler Anthony Daniel Christopher Wyatt Owen Henry Andrew Julian Samuel David Joseph Benjamin Mason Aiden Alexander Michael William Elijah James Joseph Logan Matthew Carter Jackson Nicholas Henry Oliver Daniel Owen Joseph Isaac Alexander Jack Leo Benjamin Elijah William James Henry Noah Logan Ethan Liam Mason Samuel Joseph David Daniel Benjamin Alexander Michael James Henry Oliver Joseph Isaac Alexander Jack Leo Benjamin Elijah William James Henry Noah Logan Ethan Liam Mason Samuel Joseph David Daniel Benjamin Alexander Michael James",
    
};

wordListSelect.addEventListener('change', () => {
    const selectedOption = wordListSelect.options[wordListSelect.selectedIndex];
    const listName = selectedOption.value;
    words = wordLists[listName].split(' ');
});

testDurationInput.addEventListener('input', () => {
    testDuration = parseInt(testDurationInput.value);
});

startButton.addEventListener('click', startTest);

function generateRandomText() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    textElement.textContent = randomWord;
    inputElement.value = '';
    inputElement.disabled = false;
    inputElement.focus();
    resultElement.textContent = '';
}

function checkTyping() {
    const userInput = inputElement.value.trim();
    if (userInput === textElement.textContent) {
        resultElement.textContent = "Correct!";
        clearTimeout(timer);
        timer = setTimeout(startTest, 1000);
    }
}

function startTest() {
    if (words.length === 0) {
        alert('Please select a word list.');
        return;
    }

    const startTime = new Date();
    const endTime = new Date(startTime.getTime() + testDuration * 1000);
    timer = setTimeout(() => {
        const elapsedTime = (endTime - startTime) / 1000; // in seconds
        const wordsTyped = words.length;
        const typingSpeed = Math.round((wordsTyped / elapsedTime) * 60);
        resultElement.textContent = `Typing speed: ${typingSpeed} WPM`;
        inputElement.disabled = true;
    }, testDuration * 1000);

    generateRandomText();
}

inputElement.addEventListener('input', checkTyping);
window.addEventListener('DOMContentLoaded', () => {
    const selectedOption = wordListSelect.options[wordListSelect.selectedIndex];
    const listName = selectedOption.value;
    words = wordLists[listName].split(' ');
});
