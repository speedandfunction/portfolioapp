module.exports = {
	env: {
		browser: true,
	},
	root: true,
	extends: ['airbnb'],
	plugins: ['import', 'react'],
	parser: 'babel-eslint',
	rules: {
		'relay/graphql-naming': 0,
		'no-param-reassign': ['error', {props: false}],
		'jsx-a11y/href-no-hash': 'off',
		'max-len': ['error', 100, {ignoreComments: true}],
		// Allow .js files to use JSX syntax
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
		'react/jsx-filename-extension': ['error', {extensions: ['.js', '.jsx']}],

		// Functional and class components are equivalent from React’s point of view
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
		// 'react/prefer-stateless-function': 'off',

		'newline-after-var': 'error',
		'newline-before-return': 'error',
		'no-multiple-empty-lines': [2, {max: 1}],
		'object-curly-spacing': ["error", "never"],

		'no-console': 0,
	},
	settings: {
		// Allow absolute paths in imports, e.g. import Button from 'components/Button'
		// https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
		'import/resolver': {
			node: {
				moduleDirectory: ['node_modules', 'src']
			}
		}
	}
};
