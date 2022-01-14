module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'jest/globals': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
        'window': true,
        'global': true,
        'document': true
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'jest'
    ],
    'rules': {
        'react/react-in-jsx-scope': 'off', 
        'react/prop-types': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
    }
};
