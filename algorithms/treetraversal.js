function BinaryTree(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
}

BinaryTree.prototype.preorder  = function() {this.walk(['this','left','right'])}
BinaryTree.prototype.inorder   = function() {this.walk(['left','this','right'])}
BinaryTree.prototype.postorder = function() {this.walk(['left','right','this'])}

BinaryTree.prototype.walk = function(order) {
    for (var i in order) 
        switch (order[i]) {
            case "this": console.log(this.value); break;
            case "left": if (this.left) this.left.walk(order); break;
            case "right": if (this.right) this.right.walk(order); break;
        }
}

BinaryTree.prototype.levelorder = function() {
    var queue = [this];
    while (queue.length != 0) {
        var node = queue.shift();
        console.log(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
}
 
// convenience function for creating a binary tree
function createBinaryTreeFromArray(ary) {
    var left = null, right = null;
    if (ary[1]) left = createBinaryTreeFromArray(ary[1]);
    if (ary[2]) right = createBinaryTreeFromArray(ary[2]);
    return new BinaryTree(ary[0], left, right);
}


function mycreateBinaryTreeFromArray(array,nodeindex){
   var left = null, right = null;
   if (array[nodeindex*2+1]) {
        //console.log("hi "+ 
        left = mycreateBinaryTreeFromArray(array,nodeindex*2+1);
    }
   if (array[nodeindex*2+2]) {
        right = mycreateBinaryTreeFromArray(array,nodeindex*2+2);
    }
   return new BinaryTree(array[nodeindex],left,right);
}
 
var tree = mycreateBinaryTreeFromArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],0);//([1, [2, [4, [7]], [5]], [3, [6, [8],[9]]]]);


console.log("*** preorder ***");   tree.preorder(); 
console.log("*** inorder ***");    tree.inorder(); 
console.log("*** postorder ***");  tree.postorder();
console.log("*** levelorder ***"); tree.levelorder();
