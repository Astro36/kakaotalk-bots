/**
 * @author Seungjae Park <astr36@naver.com>
 * @license MIT
 */
(function (global) {
    'use strict';

    function init(context) {
        var currentBot = BotManager.getCurrentBot();

        // response
        if ('catchMessage' in global && typeof response === 'function') {
            currentBot.addListener('chat', function (room, sender, message) {
                catchMessage(room, sender, message.getText());
            });
        }

        
    }

    if ('Bot' in global && 'getContext' in Bot) {
        var context = Bot.getContext();
        var packageName = context.getPackageName();
        if (packageName === 'com.suyong.kakaobot') {
            init(context);
        } else {
            throw new Error('This script is only available for Suyong bots.');
        }
    } else {
        throw new Error('Bot.getContext() is undefined.');
    }
})(this);
