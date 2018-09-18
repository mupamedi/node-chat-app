const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should genereate correct message object', () => {
        var from = 'mike';
        var text = 'hi. whats going on';
        var message = generateMessage(from, text);

        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
        expect(typeof message.createdAt).toBe('number');
    });
});