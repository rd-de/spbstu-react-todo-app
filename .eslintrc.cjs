module.export = {
    extends: ["eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"],
    parserOptions: { ecmaVersion: "latest",
                     sourceType: "module"},
    settings: { react: { version: "detect"}},
    rules: { "react/react-in-jsx-scope": "off" }
};