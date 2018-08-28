class Node {
  constructor(value) {
    this.value = value
    this.children = []
  }

  addChild(value) {
    const node = new Node(value)
    this.children.push(node)
    return node
  }

  removeChild(index) {
    this.children.splice(index, 1)
  }
}

class Tree {
  constructor(value) {
    this.root = new Node(value)
  }
}

const areIdenticalNodes = (node1, node2) => {
  if (
    node1.value !== node2.value ||
    node1.children.length !== node2.children.length
  ) {
    return false
  }

  return node1.children.every((child, index) =>
    areIdenticalNodes(child, node2.children[index])
  )
}

module.exports = {
  areIdenticalNodes,
  Node,
  Tree
}
