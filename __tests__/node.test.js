const Node = require('../Node');

describe('test Node', () => {
    it('test create Node', () => {
        const node = new Node(1);
        expect(node).toBeDefined();
        expect(node).toBeInstanceOf(Node);
        expect(node.value).toEqual(1);
        expect(node.next).toBeNull();
        expect(node.previous).toBeNull();
    })
})