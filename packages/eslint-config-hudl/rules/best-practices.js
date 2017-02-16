module.exports = {
  'rules': {
    // enforces getter/setter pairs in objects
    'accessor-pairs': 'off',
    // treat var statements as if they were block scoped
    'block-scoped-var': 'error',
    // specify the maximum cyclomatic complexity allowed in a program
    'complexity': ['off', 11],
    // require return statements to either always or never specify values
    'consistent-return': 'error',
    // specify curly brace conventions for all control statements
    'curly': ['error', 'multi-line'],
    // require default case in switch statements
    'default-case': 'error',
    // encourages use of dot notation whenever possible
    'dot-notation': ['error', {
      'allowKeywords': true,
    }],
    // enforces consistent newlines before or after dots
    'dot-location': 'off',
    // require the use of === and !==
    'eqeqeq': 'error',
    // make sure for-in loops have an if statement
    'guard-for-in': 'error',
    // disallow the use of alert, confirm, and prompt
    'no-alert': 'warn',
    // disallow use of arguments.caller or arguments.callee
    'no-caller': 'error',
    // disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 'off',
    // disallow else after a return in an if
    'no-else-return': 'error',
    // disallow use of labels for anything other then loops and switches
    'no-empty-label': 'off',
    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 'error',
    // disallow use of eval()
    'no-eval': 'error',
    // disallow adding to native types
    'no-extend-native': 'error',
    // disallow unnecessary function binding
    'no-extra-bind': 'error',
    // disallow fallthrough of case statements
    'no-fallthrough': 'error',
    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 'error',
    // disallow the type conversions with shorter notations
    'no-implicit-coercion': 'off',
    // disallow use of eval()-like methods
    'no-implied-eval': 'error',
    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 'off',
    // disallow usage of __iterator__ property
    'no-iterator': 'off',
    // disallow use of labeled statements
    'no-labels': 'off',
    // disallow unnecessary nested blocks
    'no-lone-blocks': 'error',
    // disallow creation of functions within loops
    'no-loop-func': 'error',
    // disallow use of multiple spaces
    'no-multi-spaces': 'off',
    // disallow use of multiline strings
    'no-multi-str': 'error',
    // disallow reassignments of native objects
    'no-native-reassign': 'error',
    // disallow use of new operator when not part of the assignment or comparison
    'no-new': 'error',
    // disallow use of new operator for Function object
    'no-new-func': 'error',
    // disallows creating new instances of String,Number, and Boolean
    'no-new-wrappers': 'error',
    // disallow use of (old style) octal literals
    'no-octal': 'error',
    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    'no-octal-escape': 'error',
    // disallow reassignment of function parameters
    // disallow parameter object manipulation
    // rule: http://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': ['error'],
    // disallow use of process.env
    'no-process-env': 'off',
    // disallow usage of __proto__ property
    'no-proto': 'error',
    // disallow declaring the same variable more then once
    'no-redeclare': 'error',
    // disallow use of assignment in return statement
    'no-return-assign': 'error',
    // disallow use of `javascript:` urls.
    'no-script-url': 'error',
    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',
    // disallow use of comma operator
    'no-sequences': 'error',
    // restrict what can be thrown as an exception
    'no-throw-literal': 'error',
    // disallow usage of expressions in statement position
    'no-unused-expressions': 'off',
    // disallow unnecessary .call() and .apply()
    'no-useless-call': 'off',
    // disallow use of void operator
    'no-void': 'off',
    // disallow usage of configurable warning terms in comments: e.g. todo
    'no-warning-comments': ['off', {
      'terms': ['todo', 'fixme', 'xxx'],
      'location': 'start',
    }],
    // disallow use of the with statement
    'no-with': 'error',
    // require use of the second argument for parseInt()
    'radix': 'error',
    // requires to declare all vars on top of their containing scope
    'vars-on-top': 'error',
    // require immediate function invocation to be wrapped in parentheses
    // http://eslint.org/docs/rules/wrap-iife.html
    'wrap-iife': ['error', 'any'],
    // require or disallow Yoda conditions
    'yoda': 'error',
  },
};
