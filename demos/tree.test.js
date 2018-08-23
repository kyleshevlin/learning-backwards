const { areIdenticalNodes, Node, Tree } = require('./tree')

describe('Tree', () => {
  it('new Tree', () => {
    const tree = new Tree('foo')

    expect(tree.root.value).toEqual('foo')
    expect(tree.root.children.length).toEqual(0)
  })
})

describe('Node', () => {
  it('new node', () => {
    const node = new Node('foo')

    expect(node.value).toEqual('foo')
    expect(node.children.length).toEqual(0)
  })

  it('addChild', () => {
    const node = new Node('foo')
    const child = node.addChild('bar')

    expect(node.children.length).toEqual(1)
    expect(node.children[0].value).toEqual('bar')
  })

  it('removeChild', () => {
    const node = new Node('foo')
    const child = node.addChild('bar')
    node.removeChild(0)

    expect(node.children.length).toEqual(0)
  })
})

describe('areIdenticalNodes', () => {
  it('same value, no children', () => {
    const t1 = new Tree('foo')
    const t2 = new Tree('foo')

    expect(areIdenticalNodes(t1.root, t2.root)).toEqual(true)
  })

  it('same value, same children', () => {
    const t1 = new Tree('foo')
    const t2 = new Tree('foo')

    t1.root.addChild('bar')
    t2.root.addChild('bar')

    expect(areIdenticalNodes(t1.root, t2.root)).toEqual(true)
  })

  it('same value, same children length, diff children', () => {
    const t1 = new Tree('foo')
    const t2 = new Tree('foo')

    t1.root.addChild('bar')
    t2.root.addChild('baz')

    expect(areIdenticalNodes(t1.root, t2.root)).toEqual(false)
  })

  it('same value, diff children length', () => {
    const t1 = new Tree('foo')
    const t2 = new Tree('foo')

    t1.root.addChild('bar')
    t1.root.addChild('baz')
    t2.root.addChild('bar')

    expect(areIdenticalNodes(t1.root, t2.root)).toEqual(false)
  })

  it('grandchild level', () => {
    const t1 = new Tree('foo')
    const t2 = new Tree('foo')

    const c1 = t1.root.addChild('bar')
    const c2 = t2.root.addChild('bar')

    c1.addChild('baz')
    c2.addChild('baz')

    expect(areIdenticalNodes(t1.root, t2.root)).toEqual(true)
  })
})
