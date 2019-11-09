module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/essential", "plugin:prettier/recommended"],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        indent: 2
    },
    parserOptions: {
        parser: "babel-eslint"
    },
    globals: {
        current_user: "readonly"
    }
};
