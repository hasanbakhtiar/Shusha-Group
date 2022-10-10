var income = 0;
class FabricOne {
    constructor(incomecall){
        this.infoincomecall = incomecall;    
    }
    calculateIncome(){
        return this.infoincomecall + 5;
    }

}

var myFabricOne = new FabricOne(income);
console.log(myFabricOne.calculateIncome());
    class Shoes extends FabricOne{
        constructor(incomecall){
            super(incomecall);
            this.infoincomecall = incomecall;    
        }
      newCalcShoes(){
            if (myFabricOne.calculateIncome() >= 5) {
                return myFabricOne.calculateIncome() + 10;
            }
      }
    } 
var myShoes = new Shoes(income);
console.log(myShoes.newCalcShoes());






