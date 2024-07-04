import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
    {
        files: ['/*.js', '/*.jsx'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                // Додайте необхідні глобальні змінні тут
                // Наприклад:
                Atomics: 'readonly',
                SharedArrayBuffer: 'readonly',
            },
        },
        rules: {
            'no-console': 'off',
            'no-unused-vars': 'warn',
        },
        root: true,
    },
    {
        files: ['/*.js', '/*.jsx'],
        languageOptions: {
            ecmaVersion: 2021,
        },
        processorOptions: {
            ecmaVersion: 2021,
        },
        extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    },
];
