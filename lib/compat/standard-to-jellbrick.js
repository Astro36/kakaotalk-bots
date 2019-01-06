/**
 * @author Seungjae Park <astr36@naver.com>
 * @license MIT
 */
(function (gloabl) {
    function BotCompat(name) {
        this.name = name;
    }

    BotCompat.prototype.addListener = function (eventName, listener) {
        EventManager.getRegister().registerResponse(function (room, message) {
            if (eventName === 'chat') {
                listener(room, null, new MessageCompat({ text: message }));
            } else if (eventName === 'command' && message.startsWith('/')) {
                var chunks = message.split(' ');
                listener(room, null, chunks.shift(), chunks);
            }
        });
    };

    BotCompat.prototype.canReply = function (room, message) {
        Api.replyRoom(room, message);
    };

    BotCompat.prototype.getName = function () {
        return this.name;
    };

    BotCompat.prototype.removeListener = function (eventName) {
        throw new Error('not implemented');
    };

    BotCompat.prototype.reply = function (room, message) {
        Api.replyRoom(room, message);
    };

    BotCompat.prototype.restart = function () {
        throw new Error('not implemented');
    };

    BotCompat.prototype.start = function () {
        throw new Error('not implemented');
    };

    BotCompat.prototype.stop = function () {
        throw new Error('not implemented');
    };

    function MessageCompat(message) {
        this.text = message.text || null;
        this.image = message.image || null;
    }

    MessageCompat.prototype.getImage = function () {
        return this.image;
    };

    MessageCompat.prototype.getText = function () {
        return this.text;
    };

    var currentBot = new BotCompat('bot');

    var BotManagerCompat = {
        getAll: function () {
            throw [currentBot];
        },
        getCurrentBot: function () {
            return currentBot;
        },
    };

    var UtilsCompat = {
        getContext: function () {
            return Api.getContext();
        },
        showToast: function (message) {
            Utils.Toast(message);
        },
        request: function (url, callback) {
            Utils.parseToHtml(url, 'body', callback);
        },
        requestSync: function (url) {
            return Utils.getWebText(url);
        },
    };

    function extend(parent, child) {
        var props = Object.keys(child);
        for (var i = 0, len = props.length; i < len; i += 1) {
            var prop = props[i];
            parent[prop] = child[prop];
        }
    }

    extend(gloabl.BotManager, BotManagerCompat);
    extend(gloabl.Utils, UtilsCompat);
})(this);
