const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'admin';
        var latitude = 293752;
        var longtitude = 20854054;
        var url = `https://www.google.com/maps?q=${latitude},${longtitude}`;
        var locationMessage = generateLocationMessage(from, latitude, longtitude);

        expect(locationMessage.from).toBe(from);
        expect(locationMessage.url).toBe(url);
        expect(typeof locationMessage.createdAt).toBe('number');
    });
});