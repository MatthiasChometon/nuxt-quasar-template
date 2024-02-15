module.exports = {
	root: true,
	env: {
			browser: true,
			node: true,
	},
	parser: "vue-eslint-parser",
	parserOptions: {
			parser: "@typescript-eslint/parser",
	},
	extends: ["@nuxt/eslint-config", "plugin:prettier/recommended", '@nuxtjs/eslint-config-typescript'],
	plugins: [],
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
			files: ['*.vue'],
			rules: {
				'no-tabs': 'off',
				'vue/html-indent': 'off'
			}
		},
		{
			files: ['*.ts'],
			extends: 'standard-with-typescript',
			rules: {
				'multiline-ternary': 'off',
				'@typescript-eslint/explicit-module-boundary-types': ['error'],
				'space-before-function-paren': 'off',
				'@typescript-eslint/space-before-function-paren': 'off',
				'@typescript-eslint/member-delimiter-style': 'off',
				'@typescript-eslint/explicit-function-return-type': 'error',
				'@typescript-eslint/indent': 'off',
				'no-tabs': 'off',
				'@typescript-eslint/prefer-readonly': 'error',
				'@typescript-eslint/array-type': ['error', { default: 'array' }],
				'@typescript-eslint/unbound-method': 'off',
				'@typescript-eslint/no-misused-promises': 'off'
			}
		}
	]
};