'use strict';

function BinarioADecimal(num) {

   let array=num.toString().split("").reverse()
   let suma=0
      for(let i=0 ; i<array.length ; i++){
       suma+=Math.pow(2,i)*array[i]
       
   }
   return suma
   

}
console.log(BinarioADecimal(100100))


function DecimalABinario(num) {
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
