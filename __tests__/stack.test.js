const Stack = require('../Stack');

describe('test stack', () => {
    it('test creat stact', () => {
        const ss = new Stack();

        expect(ss).toBeDefined();
        expect(ss).toBeInstanceOf(Stack);

    });

    it('test push', () => {
        const ss = new Stack();
        ss.pushNode(1);
        ss.pushNode(2);
        ss.pushNode(3);
        ss.pushNode(4);

        const topValue = ss.peek();

        expect(ss.top.value).toEqual(4);
        expect(topValue).toEqual(4);
    });

    it('test push and pop', () => {
        const ss = new Stack();
        ss.pushNode(1);
        ss.pushNode(2);
        ss.pushNode(3);
        ss.pushNode(4);
        ss.pushNode(5);
        expect(ss.top.value).toEqual(5);
        ss.popNode();
        expect(ss.top.value).toEqual(4);
    });

    it('test pop when stack is empty', () => {
        const ss = new Stack();

        expect(ss.isEmpty()).toEqual(true);
        expect(ss.popNode()).toEqual("shack is empty");
    })


})