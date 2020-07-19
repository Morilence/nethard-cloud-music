module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
    plugins: ['prettier'],
    parserOptions: {
        parser: "babel-eslint"
    },
    rules: {
        "prettier/prettier": "error",
        "indent": ["error", 4],
        "brace-style": ["error", "1tbs", { allowSingleLine: true }],
        "comma-spacing": ["error", { before: false, after: true }],
        "array-bracket-spacing": ["error", "never"],
        "no-undef": "warn",
        "no-unused-vars": "warn",
        "no-constant-condition": "off",
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    }
};
