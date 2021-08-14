const InventoryManager = require('./InventoryManager')

let inventoryManager = new InventoryManager;

inventoryManager.addInv('weeeee');
inventoryManager.addInv('12934398175981374971239');
inventoryManager.addInv('924189375918324891234');

inventoryManager.updateScore('weeeee',false);
inventoryManager.updateScore('weeeee',true);

console.log(inventoryManager.getResult('weeeee'))

inventoryManager.dump();