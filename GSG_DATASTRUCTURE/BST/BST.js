class Node{
    constructor(data,left=null,right=null){
     this.data=data;
     this.left=left;
     this.rigth=right;
    }
}
class BST{
    constructor(){
        this.root=null;
    }
    //add to binary search tree
    add(val){
        const NewNode =new Node(val);
        //if there is no root set root equal new node
        if(!this.root){
            this.root=NewNode;
        }
        else{
            let currentNode=this.root;
            while(true){
                if(NewNode.val<currentNode.val){
                    //insert to left
                    if(!currentNode.left){
                      currentNode.left=NewNode;
                      return this;
                    }
                    currentNode=currentNode.left;
                }
                else{
                    //insert to right
                    if(!currentNode.right){
                        currentNode.rigth=NewNode;
                        return this;
                    }
                    currentNode=currentNode.rigth;
                }
            }
        }
        

    }
}
let tree=new BST();
tree.add(50);
tree.add(30);
tree.add(5);
tree.add(70);
console.log(tree);