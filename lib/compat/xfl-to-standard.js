/**
 * @author Seungjae Park <astr36@naver.com>
 * @license MIT
 */
(function (global) {
    'use strict';

    function init(context) {
        var currentBot = BotManager.getCurrentBot();

        // response
        if ('response' in global && typeof response === 'function') {
            currentBot.addListener('chat', function (room, sender, message) {
                function replyWrapper(room, text) {
                    if (currentBot.canReply(room)) {
                        currentBot.reply(room, text);
                    }
                }
                response(message.getText(), room, sender, { reply: replyWrapper }, message.getImage());
            });
        }

        // Api.getScriptNames
        Api.getScriptNames = function () {
            return BotManager.getAll().map(function (bot) {
                return bot.getName();
            });
        };

        // Api.off
        Api.off = function (name) {
            BotManager.getAll().forEach(function (bot) {
                if (!name || name === bot.getName()) {
                    bot.stop();
                }
            });
        };

        // Api.on
        Api.on = function (name) {
            BotManager.getAll().forEach(function (bot) {
                if (!name || name === bot.getName()) {
                    bot.start();
                }
            });
        };

        // Api.papagoTranslate
        Api.papagoTranslate = function (from, to, text) {
            throw new Error('not implemented');
        };

        // Api.reload
        Api.reload = function (name) {
            BotManager.getAll().forEach(function (bot) {
                if (!name || name === bot.getName()) {
                    bot.restart();
                }
            });
        };

        // Api.replyRoom
        Api.replyRoom = function (room, text, hideText) {
            try {
                currentBot.reply(room, text);
            } catch (e) {
                if (!hideText) {
                    Utils.showToast(e.message);
                }
            }
        };

        // Api.UIThread
        Api.UIThread = function (runnable) {
            context.runOnUiThread(runnable);
        };

        // Utils.getWebText
        Utils.getWebText = function (url) {
            return Utils.requestSync(url);
        };
    }

    if ('Api' in global && 'getContext' in Api) {
        var context = Api.getContext();
        var packageName = context.getPackageName();
        if (packageName === 'com.xfl.kakaotalkbot') {
            init(context);
        } else {
            throw new Error('This script is only available for VioletFx bots.');
        }
    } else {
        throw new Error('Api.getContext() is undefined.');
    }
})(this);
