module.exports = {
  'env': {
    'es6': false,
  },
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'arrowFunctions': true,
      'blockBindings': true,
      'classes': true,
      'defaultParams': true,
      'destructuring': true,
      'forOf': true,
      'generators': false,
      'modules': true,
      'objectLiteralComputedProperties': true,
      'objectLiteralDuplicateProperties': false,
      'objectLiteralShorthandMethods': true,
      'objectLiteralShorthandProperties': true,
      'restParams': true,
      'spread': true,
      'superInFunctions': true,
      'templateStrings': true,
      'jsx': true,
    },
  },
  'rules': {
    // enforces no braces where they can be omitted
    // http://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': 'off',
    // require parens in arrow function arguments
    'arrow-parens': 'off',
    // require space before/after arrow function's arrow
    // https://github.com/eslint/eslint/blob/master/docs/rules/arrow-spacing.md
    'arrow-spacing': 'off',
    // verify super() callings in constructors
    'constructor-super': 'off',
    // enforce the spacing around the * in generator functions
    'generator-star-spacing': 'off',
    // disallow modifying variables of class declarations
    'no-class-assign': 'off',
    // disallow modifying variables that are declared using const
    'no-const-assign': 'off',
    // disallow to use this/super before super() calling in constructors.
    'no-this-before-super': 'off',
    // require let or const instead of var
    'no-var': 'error',
    // require method and property shorthand syntax for object literals
    // https://github.com/eslint/eslint/blob/master/docs/rules/object-shorthand.md
    'object-shorthand': ['off', 'always'],
    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': 'off',
    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': 'error',
    // suggest using the spread operator instead of .apply()
    'prefer-spread': 'off',
    // suggest using Reflect methods where applicable
    'prefer-reflect': 'off',
    // suggest using template literals instead of string concatenation
    // http://eslint.org/docs/rules/prefer-template
    'prefer-template': 'off',
    // disallow generator functions that do not have yield
    'require-yield': 'off',
  },
};
