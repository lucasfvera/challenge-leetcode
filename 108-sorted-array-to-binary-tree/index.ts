/**
 * Definition for a binary tree node.
 *
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 * 
 * BST:
 *  left nodes < than root
 *  right nodes > than root
 */


class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }

    addLeft(node: TreeNode){
        this.left = node
    }
    addRight(node: TreeNode){
        this.right = node
    }
    print(){

        this.left.print()
    }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
    // create a BT and order it


    // get the highest number and create a node
    // if there are more numbers, 
    return null;
}

// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]