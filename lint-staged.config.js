module.exports = {
    'src/**/*.{js,jsx}': ['eslint --fix', 'pretty-quick --staged', 'git add', 'jest --bail --passWithNoTests —-findRelatedTests'],
};
