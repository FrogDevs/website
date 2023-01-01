module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2021,
        sourceType: 'module'
    },
    extends: [
        'eslint:recommended',
        'eslint-config-semistandard',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        '@vue/eslint-config-typescript',
        'prettier/vue'
    ],
}