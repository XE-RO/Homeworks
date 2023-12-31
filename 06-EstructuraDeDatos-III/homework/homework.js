'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value=value
   this.right=null
   this.left=null
   //preorder==> recursion en el orden que corresponda 
   //this.value
   //this.izq?? depthFirstForEach(izq)
   //this.der?? depthFirsForEach(der)
}

BinarySearchTree.prototype.insert=function(value){
   let nuevo=new BinarySearchTree(value)
   // <=== SI ES MENOR VA A LA IZQUIERDA   
   if(value < this.value){
      if(this.left===null){
         this.left=nuevo
      }else {
         this.left.insert(value)
      }    
   }
   // SI ES MAYOR VA A LA DERECHA ==>
   if(value >= this.value){
      if(this.right===null){
         this.right=nuevo
      }else{
         this.right.insert(value)
      }
   }
}

BinarySearchTree.prototype.contains=function(value){
   
   if(value===this.value)return true

   if(value<this.value){
      if(this.left===null) return false
      else return this.left.contains(value)
      
   }else{
      if(this.right===null)return false
      else return this.right.contains(value)
   }
   
}

BinarySearchTree.prototype.size=function(){
   if(this.value===null) return null
   if(this.left===null && this.right===null) return 1
   if(this.left && this.right===null)return 1 + this.left.size()
   if(this.left===null && this.right)return 1+ this.right.size()
   if(this.left && this.right)return 1 + this.left.size()+this.right.size()
   
   
}
BinarySearchTree.prototype.depthFirstForEach=function(cb,order){
   switch(order){

   case "post-order":// IZQUIERDA DERECHA NODO
   this.left && this.left.depthFirstForEach(cb,order)
   this.right && this.right.depthFirstForEach(cb,order)
   cb(this.value)
   break;

   case "pre-order": //NODO iZQUIERDA DERECHA
   cb(this.value)
   this.left && this.left.depthFirstForEach(cb,order)
   this.right && this.right.depthFirstForEach(cb,order)
   break;

   default:
      this.left && this.left.depthFirstForEach(cb,order)
      cb(this.value)
      this.right && this.right.depthFirstForEach(cb,order)
      break;
}
}
BinarySearchTree.prototype.breadthFirstForEach=function(cb,almacen=[]){
   
   cb(this.value)
   if(this.left){
      almacen.push(this.left)
   }

   if(this.right){
      almacen.push(this.right)
   }

   if(almacen.length>0){
      almacen.shift().breadthFirstForEach(cb,almacen)
   }

}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
