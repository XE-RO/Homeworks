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
   let binario=[]

   while(num>=1){
         let bin=num%2             //guarda el residuo de "num" (PAR=0 || IMPAR=1)
         binario.unshift(bin)
         num=Math.floor(num/2) // se va actualizando el numero en "num", por cada iteracion
         console.log(bin)

}
 return binario.join("")

 }

console.log(DecimalABinario(36))

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
