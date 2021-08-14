const Inventory = require('./Inventory')

class InventoryManager 
{
    constructor() {
        this.inventoryList = [];
        this.incorrectCount = 0;
        this.correctCount = 0;

    }
    addInv(userId) {
        let idExist = false
        this.inventoryList.forEach(element => {
            if (element.userId === userId) {
                idExist = true
            }
            else {
                idExist = false
            }
        });
        if (!idExist) { 
            let inv = new Inventory(userId);
            this.inventoryList.push(inv);
        }
        
    }
    updateScore(userId, correct) {
        this.inventoryList.forEach(element => {
            if (element.userId === userId) {
                element.updateScore(correct);
            }
        })
    }
    getResult(userId) {
        let result = 'userId not found';
        
        this.inventoryList.forEach(element => {
            if (element.userId === userId) {
                result = element.getResultString();
            }
            
        })
        return result;
    }
    dump() {
        this.inventoryList.forEach(element => {
            element.dump();
        });
    }
}

module.exports = InventoryManager