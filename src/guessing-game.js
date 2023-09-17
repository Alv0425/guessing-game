class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.number = 0;
    }

    setRange(min, max){
        this.min = min;
        this.max = max;
    }

    guess(){
        return this.number = Math.round((this.max - this.min)/2) + this.min;
    }

    lower(){
        this.min = this.min;
        this.max = this.number;
    }
    
    greater(){
        this.min = this.number;
        this.max = this.max;
    }
}

module.exports = GuessingGame;
