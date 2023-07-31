module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        // ESLint 규칙을 지정합니다. extends에서 지정된 규칙을 덮어 쓸수도 있습니다.
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
    },
    settings: {
        react: {
            version: "detect", // 현재 사용하고 있는 react 버전을 eslint-plugin-react가 자동으로 감지합니다.
        },
    },
};
