import { Quote } from './Quote.js';

class Game{

    currentStep = 0;
    lastStep = 7;

    quotes = [{
        text: 'big bang thoery',
        category: 'serial'
    },
    {
        text: 'janko muzykant',
        category: 'utwór literacki'
    },
    {
        text: 'gladiator',
        category: 'film'
    },
    {
        text: 'herkules',
        category: 'bajka'
    }];

    constructor({lettersWrpper, cattegoryWrapper, wordWrapper, outputWrapper}){

        this.lettersWrpper = lettersWrpper;
        this.cattegoryWrapper = cattegoryWrapper;
        this.wordWrapper = wordWrapper;
        this.outputWrapper = outputWrapper;

        const {text, category} = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        this.cattegoryWrapper.innerHTML = category;
        this.quote = new Quote(text);

    }

    guess(letter){
        event.target.disabled = true;
        if(this.quote.guess(letter)){
            this.drawQuote();
        } else {
            this.currentStep++;
            document.getElementsByClassName('step')[this.currentStep].style.opacity = 1;
            if(this.currentStep == this.lastStep) {
                this.loosing();
            }
        }
        
    }

    drowLetters() {
        for(let i=0; i<26;i++){
            const label = (i+10).toString(36);
            const button = document.createElement('button');
            button.innerHTML = label;
            button.addEventListener('click', (event) => this.guess(label, event))
            this.lettersWrpper.appendChild(button);
            }
    }

    drawQuote() {
        const content = this.quote.getContent();
        this.wordWrapper.innerHTML = content;
        if (!content.includes('_')){
            this.winning();
        }
    }

    start() {
        document.getElementsByClassName('step')[this.currentStep].style.opacity = 1;
        this.drowLetters();
        this.drawQuote();
    }
    
    winning(){
        this.wordWrapper.innerHTML = 'Gratulacje YOU WIN!';
        this.lettersWrpper.innerHTML = '';
    }

    loosing(){
        this.wordWrapper.innerHTML = 'Źle GAME OVER!';
        this.lettersWrpper.innerHTML = '';
    }
}

        const game = new Game({
            lettersWrpper: document.getElementById('letters'),
            cattegoryWrapper: document.getElementById('category'),
            wordWrapper: document.getElementById('word'),
            outputWrapper: document.getElementById('output')
        });

        game.start();
