module.exports = {
  'rules': {
    // enforce spacing inside array brackets
    'array-bracket-spacing': 'off',
    // enforce one true brace style
    'brace-style': ['error', '1tbs', {
      'allowSingleLine': true,
    }],
    // require camel case names
    'camelcase': ['error', {
      'properties': 'never',
    }],
    // enforce spacing before and after comma
    'comma-spacing': ['error', {
      'before': false,
      'after': true,
    }],
    // enforce one true comma style
    'comma-style': ['error', 'last'],
    // disallow padding inside computed properties
    'computed-property-spacing': 'off',
    // enforces consistent naming when capturing the current execution context
    'consistent-this': 'off',
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 'error',
    // require function expressions to have a name
    'func-names': 'warn',
    // enforces use of function declarations or expressions
    'func-style': 'off',
    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    'id-length': 'off',
    // this option sets a specific tab width for your code
    // https://github.com/eslint/eslint/blob/master/docs/rules/indent.md
    'indent': ['error', 2],
    // specify whether double or single quotes should be used in JSX attributes
    // http://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['error'],
    // enforces spacing between keys and values in object literal properties
    'key-spacing': ['error', {
      'beforeColon': false,
      'afterColon': true,
    }],
    // enforces empty lines around comments
    'lines-around-comment': 'off',
    // disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': 'off',
    // specify the maximum length of a line in your program
    // https://github.com/eslint/eslint/blob/master/docs/rules/max-len.md
    'max-len': ['error', 120, 4],
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': 'off',
    // require a capital letter for constructors
    'new-cap': ['error', {
      'newIsCap': true,
      'capIsNew': false,
    }],
    // disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 'off',
    // allow/disallow an empty newline after var statement
    'newline-after-var': 'off',
    // disallow use of the Array constructor
    'no-array-constructor': 'off',
    // disallow use of the continue statement
    'no-continue': 'off',
    // disallow comments inline after code
    'no-inline-comments': 'off',
    // disallow if as the only statement in an else block
    'no-lonely-if': 'off',
    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'off',
    // disallow multiple empty lines and only one newline at the end
    'no-multiple-empty-lines': ['error', {
      'max': 2,
    }],
    // disallow nested ternary expressions
    'no-nested-ternary': 'error',
    // disallow use of the Object constructor
    'no-new-object': 'error',
    // disallow space between function identifier and application
    'no-spaced-func': 'error',
    // disallow the use of ternary operators
    'no-ternary': 'off',
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'error',
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 'off',
    // disallow the use of Boolean literals in conditional expressions
    'no-unneeded-ternary': 'off',
    // require padding inside curly braces
    'object-curly-spacing': ['off', 'always'],
    // allow just one var statement per function
    'one-var': ['error', 'never'],
    // require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': 'off',
    // enforce operators to be placed before or after line breaks
    'operator-linebreak': 'off',
    // enforce padding within blocks
    'padded-blocks': ['error', 'never'],
    // require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props.html
    'quote-props': ['error', 'consistent'],
    // specify whether double or single quotes should be used
    'quotes': ['error', 'single', 'avoid-escape'],
    // require identifiers to match the provided regular expression
    'id-match': 'off',
    // enforce spacing before and after semicolons
    'semi-spacing': ['error', {
      'before': false,
      'after': true,
    }],
    // require or disallow use of semicolons instead of ASI
    'semi': ['error', 'always'],
    // sort variables within the same declaration block
    'sort-vars': 'off',
    // enforce consistent spacing before and after keywords
    'keyword-spacing': 'error',
    // require or disallow space before blocks
    'space-before-blocks': 'error',
    // require or disallow space before function opening parenthesis
    // https://github.com/eslint/eslint/blob/master/docs/rules/space-before-function-paren.md
    'space-before-function-paren': ['error', 'never'],
    // require or disallow spaces inside parentheses
    'space-in-parens': ['off', 'never'],
    // require spaces around operators
    'space-infix-ops': 'error',
    // Require or disallow spaces before/after unary operators
    'space-unary-ops': 'off',
    // require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': ['error'],
    // require regex literals to be wrapped in parentheses
    'wrap-regex': 'off',
  },
};
