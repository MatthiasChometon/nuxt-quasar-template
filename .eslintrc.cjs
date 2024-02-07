module.exports = {
	env: {
		es2021: true,
		node: true
	},
	extends: [
		'prettier',
		'eslint:all',
		'plugin:@typescript-eslint/all',
		'plugin:vue/vue3-recommended',
		'@vue/eslint-config-typescript/recommended',
		'@vue/eslint-config-prettier'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: '',
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['prettier', '@typescript-eslint'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				trailingComma: 'none',
				semi: false,
				endOfLine: 'auto',
				tabWidth: 2,
				useTabs: true,
				printWidth: 120
			}
		]
	},
	overrides: [
		{
			env: {
				node: true
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script'
			}
		},
		{
			files: ['*.ts'],
			extends: 'standard-with-typescript',
			rules: {
				'space-before-function-paren': 'off',
				'@typescript-eslint/space-before-function-paren': 'off',
				'@typescript-eslint/member-delimiter-style': 'off',
				'@typescript-eslint/indent': 'off',
				'no-tabs': 'off',
				'@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
				'@typescript-eslint/prefer-readonly-parameter-types': 'off',
				'@typescript-eslint/no-magic-numbers': 'off',
				'@typescript-eslint/explicit-member-accessibility': 'off',
				'@typescript-eslint/parameter-properties': ['error', { 'prefer': 'parameter-property' }]
			}
		}
	]
}
