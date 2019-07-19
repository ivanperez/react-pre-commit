module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    extends: ['airbnb', 'prettier', 'prettier/react'],
    plugins: ['react', 'prettier'],

    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'prefer-promise-reject-errors': ['off'],
        'react/jsx-filename-extension': ['off'],
        'react/prop-types': ['warn'],
        'no-return-assign': ['off'],
    },
};
