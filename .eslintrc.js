module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true
	},
	extends: ["eslint:recommended", "prettier", "plugin:prettier/recommended"],
	plugins: ["prettier"],
	parserOptions: {
		sourceType: "module"
	},
	rules: {
		"prettier/prettier": "error"
	},
	globals: {
		__dirname: false
	}
};
