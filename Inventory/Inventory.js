class Inventory
{
    constructor(userId) {
        this.correctAnswer=0
        this.wrongAnswer=0;
        this.userId = userId;

    }
    increaseCorrectAnswer() {
        this.correctAnswer+=1;
    }
    getResult(){
        return {
            correctAnswer : this.correctAnswer,
            wrongAnswer : this.wrongAnswer
        }
    }
    updateScore(correct) {
        if (correct) {
            this.correctAnswer++;

        }
        else {
            this.wrongAnswer++;
        }
        
    }
    getResultString() {
        return ('Your score' + `\n\t Score: ${this.correctAnswer} right, \n\t ${this.wrongAnswer} wrong.`);
    }
    dump() {
        console.log(this.getResultString());
    }
}

module.exports = Inventory;