module.exports = {
    root: true,
    extends: ['@crudifyjs/typescript'],
    parserOptions: {
        project: './tsconfig.lint.json',
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    rules: {
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: [
                'vite.config.js',
            ],
        }],
    },
};
