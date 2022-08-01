class GuessingGame {
    constructor(left, right) {
        this.left = 0;
        this.right = 0;
        this.mid = 0
    }

    setRange(min, max) {
        this.left = min;
        this.right = max;
    }

    guess() {
        this.mid = Math.ceil((this.left + this.right) / 2);        
        return this.mid;
    }

    lower() {
        this.right = this.mid;
    }

    greater() {
        this.left = this.mid;
    }
}

module.exports = GuessingGame;
