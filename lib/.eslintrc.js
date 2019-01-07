module.exports = {
    extends: "eslint:recommended",
    globals: {
        Api: true,
        Bot: true,
        BotManager: true,
        catchMessage: true,
        EventManager: true,
        response: true,
        Utils: true,
    },
    rules: {
        "no-unused-vars": "off",
    },
};
