class Game{
    constructor({lettersWrpper, cattegoryWrapper, wordWrapper, outputWrapper}){

        this.lettersWrpper = lettersWrpper;
        this.cattegoryWrapper = cattegoryWrapper;
        this.wordWrapper = wordWrapper;
        this.outputWrapper = outputWrapper;
    }

    guess(letter){
        console.log(letter);
    }
    start() {
        for(let i=0; i<26;i++){
        const label = (i+10).toString(36);
        const button = document.createElement('button');
        button.innerHTML = label;
        button.addEventListener('click', () => this.guess(label))
        this.lettersWrpper.appendChild(button);
        }
    }

}

