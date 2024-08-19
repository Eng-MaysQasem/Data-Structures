// Definition for a binary tree node
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Function to insert a new value into the BST
var insertIntoBST = function(root, val) {
    // If the tree is empty, create a new node and return it as the root
    if (root === null) {
        return new TreeNode(val);
    }
    
    // If the value is less than the current node's value, go to the left subtree
    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        // If the value is greater than or equal to the current node's value, go to the right subtree
        root.right = insertIntoBST(root.right, val);
    }
    
    // Return the updated root after insertion
    return root;
};
//delete

// Function to delete a node from BST
var deleteNode = function(root, key) {
    if (!root) return root; // Base case: If the tree is empty

    // Traverse the tree to find the node to delete
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        // Node found
        // Case 1: Node has no children or one child
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        // Case 2: Node has two children
        let minNode = getMin(root.right); // Find the in-order successor
        root.val = minNode.val; // Copy the in-order successor's value to this node
        root.right = deleteNode(root.right, minNode.val); // Delete the in-order successor
    }

    return root;
};

// Helper function to find the minimum value node in a tree
function getMin(node) {
    while (node.left) {
        node = node.left;
    }
    return node;
}
