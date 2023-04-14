const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    this.treeRoot = addNode(this.treeRoot, data);

    function addNode(node, data){
      if(!node){
        return new Node(data);
      }

      if(node.data === data){
        return node;
      }

      if(data < node.data){
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    let findNode = this.find(data);
    if(findNode){
      return true;
    } 
    return false;  
  }

  find(data) {
    return findNode(this.treeRoot, data);

    function findNode(node, data){
      if(!node){
        return null
      }

      if(node.data === data){
        return node;
      }

      if(node.data < data){
        return findNode(node.right, data);
      }
      else {
        return findNode(node.left, data);
      }
    }
  }

  remove(data) {
    this.treeRoot = removeNode(this.treeRoot, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while(minRight.left){
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);

        return node;
      }
    } 
  }

  min() {
    let curNode = this.treeRoot;
    if (!curNode) {
      return null;
    }
    while (curNode.left) {
      curNode = curNode.left;
    }
    return curNode.data;
  }
  

  max() {
    let curNode = this.treeRoot;
    if (!curNode) {
      return null;
    }
    while (curNode.right) {
      curNode = curNode.right;
    }
    return curNode.data;
  }
}

module.exports = {
  BinarySearchTree
};