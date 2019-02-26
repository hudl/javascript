# ESLint Config Diff (vs Airbnb v17.1.0)

Comparison of changes between ESLint configs. This is the computed result of the source config, including the effects of any extended configs. Changes are presented using the <del>deleted</del> and <ins>inserted</ins> formatting.
 Rules have been normalized to the array format for consistent diff formatting. Non-rule settings are also currently displayed within an array (for rendering simplicity).

Base (starting point): [../../index.js](../../index.js)

Comparison (additions, removals, edits): [https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v17.1.0/packages/eslint-config-airbnb/index.js](https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v17.1.0/packages/eslint-config-airbnb/index.js)

## Known differences
These are intentional differences between configs. This list is generated from explicit data defined within [diffs-to-run.js](../../tasks/docs/diffs/diffs-to-run.js).

### Settings (non-rules)
_None_


### Rules


#### Added rules
_None_

#### Removed rules
_None_

#### Edited rules
_None_


## Unknown/unmerged differences
These are differences that haven't been previously acknowledged. They may be changes we aren't aware of or simply
upstream changes that haven't been merged yet. Any differences listed here that we _are_ aware of
should be added to the list in [the diff task](../../tasks/docs/diffs/diffs-to-run.js) to remove them from here.

### Settings (non-rules)

-     env.browser
  - [<del>true</del>]
-     env.amd
  - [<del>false</del>]
-     env.mocha
  - [<del>false</del>]
-     env.jasmine
  - [<del>false</del>]
-     env.es6
  - [false]
  - [true]
-     parserOptions.ecmaFeatures.arrowFunctions
  - [<del>true</del>]
-     parserOptions.ecmaFeatures.blockBindings
  - [<del>true</del>]
-     parserOptions.ecmaFeatures.classes
  - [<del>true</del>]
-     parserOptions.ecmaFeatures.defaultParams
  - [<del>true</del>]
-     parserOptions.ecmaFeatures.destructuring
  - [<del>true</del>]
-     parserOptions.ecmaFeatures.forOf
  - [<del>true</del>]
-     parserOptions.ecmaFeatures.modules
  - [<del>true</del>]
-     parserOptions.ecmaFeatures.objectLiteralComputedProperties
  - [<del>true</del>]
-     parserOptions.ecmaFeatures.objectLiteralShorthandMethods
  - [<del>true</del>]
-     parserOptions.ecmaFeatures.objectLiteralShorthandProperties
  - [<del>true</del>]
-     parserOptions.ecmaFeatures.restParams
  - [<del>true</del>]
-     parserOptions.ecmaFeatures.spread
  - [<del>true</del>]
-     parserOptions.ecmaFeatures.superInFunctions
  - [<del>true</del>]
-     parserOptions.ecmaFeatures.templateStrings
  - [<del>true</del>]
-     parserOptions.ecmaVersion
  - [6]
  - [2018]
-     parser
  - [&quot;babel-eslint&quot;]
-     plugins.0
  - [&quot;react&quot;]
  - [&quot;import&quot;]
-     plugins.1
  - [&quot;react-hooks&quot;]
  - [&quot;react&quot;]
-     plugins
  - [[&quot;react&quot;,&quot;react-hooks&quot;]]
  - [[&quot;import&quot;,&quot;react&quot;,&quot;jsx-a11y&quot;]]
-     settings.import/extensions
  - [<ins>[&quot;.js&quot;,&quot;.mjs&quot;,&quot;.jsx&quot;]</ins>]
-     settings.import/core-modules
  - [<ins>[]</ins>]
-     settings.import/ignore
  - [<ins>[&quot;node_modules&quot;,&quot;\\.(coffee|scss|css|less|hbs|svg|json)$&quot;]</ins>]

### Rules


#### Added rules
- 
    [array-bracket-newline](http://eslint.org/docs/rules/array-bracket-newline.html)
  - [<ins>&quot;off&quot;</ins>, <ins>&quot;consistent&quot;</ins>]
- 
    [array-callback-return](http://eslint.org/docs/rules/array-callback-return.html)
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;allowImplicit&quot;:true}</ins>]
- 
    [array-element-newline](http://eslint.org/docs/rules/array-element-newline.html)
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;multiline&quot;:true,&quot;minItems&quot;:3}</ins>]
- 
    [block-spacing](http://eslint.org/docs/rules/block-spacing.html)
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;always&quot;</ins>]
- 
    [capitalized-comments](http://eslint.org/docs/rules/capitalized-comments.html)
  - [<ins>&quot;off&quot;</ins>, <ins>&quot;never&quot;</ins>, <ins>{&quot;line&quot;:{&quot;ignorePattern&quot;:&quot;.*&quot;,&quot;ignoreInlineComments&quot;:true,&quot;ignoreConsecutiveComments&quot;:true},&quot;block&quot;:{&quot;ignorePattern&quot;:&quot;.*&quot;,&quot;ignoreInlineComments&quot;:true,&quot;ignoreConsecutiveComments&quot;:true}}</ins>]
- 
    [for-direction](http://eslint.org/docs/rules/for-direction.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [func-call-spacing](http://eslint.org/docs/rules/func-call-spacing.html)
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;never&quot;</ins>]
- 
    [func-name-matching](http://eslint.org/docs/rules/func-name-matching.html)
  - [<ins>&quot;off&quot;</ins>, <ins>&quot;always&quot;</ins>, <ins>{&quot;includeCommonJSModuleExports&quot;:false}</ins>]
- 
    [function-paren-newline](http://eslint.org/docs/rules/function-paren-newline.html)
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;consistent&quot;</ins>]
- 
    [getter-return](http://eslint.org/docs/rules/getter-return.html)
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;allowImplicit&quot;:true}</ins>]
- 
    [global-require](http://eslint.org/docs/rules/global-require.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [id-blacklist](http://eslint.org/docs/rules/id-blacklist.html)
  - [<ins>&quot;off&quot;</ins>]
- 
    [implicit-arrow-linebreak](http://eslint.org/docs/rules/implicit-arrow-linebreak.html)
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;beside&quot;</ins>]
-     import/default
  - [<ins>&quot;off&quot;</ins>]
-     import/dynamic-import-chunkname
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;importFunctions&quot;:[],&quot;webpackChunknameFormat&quot;:&quot;[0-9a-zA-Z-_/.]+&quot;}</ins>]
-     import/export
  - [<ins>&quot;error&quot;</ins>]
-     import/exports-last
  - [<ins>&quot;off&quot;</ins>]
-     import/extensions
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;ignorePackages&quot;</ins>, <ins>{&quot;js&quot;:&quot;never&quot;,&quot;mjs&quot;:&quot;never&quot;,&quot;jsx&quot;:&quot;never&quot;}</ins>]
-     import/first
  - [<ins>&quot;error&quot;</ins>]
-     import/group-exports
  - [<ins>&quot;off&quot;</ins>]
-     import/imports-first
  - [<ins>&quot;off&quot;</ins>]
-     import/max-dependencies
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;max&quot;:10}</ins>]
-     import/named
  - [<ins>&quot;error&quot;</ins>]
-     import/namespace
  - [<ins>&quot;off&quot;</ins>]
-     import/newline-after-import
  - [<ins>&quot;error&quot;</ins>]
-     import/no-absolute-path
  - [<ins>&quot;error&quot;</ins>]
-     import/no-amd
  - [<ins>&quot;error&quot;</ins>]
-     import/no-anonymous-default-export
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;allowArray&quot;:false,&quot;allowArrowFunction&quot;:false,&quot;allowAnonymousClass&quot;:false,&quot;allowAnonymousFunction&quot;:false,&quot;allowLiteral&quot;:false,&quot;allowObject&quot;:false}</ins>]
-     import/no-commonjs
  - [<ins>&quot;off&quot;</ins>]
-     import/no-cycle
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;maxDepth&quot;:null}</ins>]
-     import/no-default-export
  - [<ins>&quot;off&quot;</ins>]
-     import/no-deprecated
  - [<ins>&quot;off&quot;</ins>]
-     import/no-duplicates
  - [<ins>&quot;error&quot;</ins>]
-     import/no-dynamic-require
  - [<ins>&quot;error&quot;</ins>]
-     import/no-extraneous-dependencies
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;devDependencies&quot;:[&quot;test/**&quot;,&quot;tests/**&quot;,&quot;spec/**&quot;,&quot;**/__tests__/**&quot;,&quot;**/__mocks__/**&quot;,&quot;test.{js,jsx}&quot;,&quot;test-*.{js,jsx}&quot;,&quot;**/*{.,_}{test,spec}.{js,jsx}&quot;,&quot;**/jest.config.js&quot;,&quot;**/vue.config.js&quot;,&quot;**/webpack.config.js&quot;,&quot;**/webpack.config.*.js&quot;,&quot;**/rollup.config.js&quot;,&quot;**/rollup.config.*.js&quot;,&quot;**/gulpfile.js&quot;,&quot;**/gulpfile.*.js&quot;,&quot;**/Gruntfile{,.js}&quot;,&quot;**/protractor.conf.js&quot;,&quot;**/protractor.conf.*.js&quot;],&quot;optionalDependencies&quot;:false}</ins>]
-     import/no-internal-modules
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;allow&quot;:[]}</ins>]
-     import/no-mutable-exports
  - [<ins>&quot;error&quot;</ins>]
-     import/no-named-as-default
  - [<ins>&quot;error&quot;</ins>]
-     import/no-named-as-default-member
  - [<ins>&quot;error&quot;</ins>]
-     import/no-named-default
  - [<ins>&quot;error&quot;</ins>]
-     import/no-namespace
  - [<ins>&quot;off&quot;</ins>]
-     import/no-nodejs-modules
  - [<ins>&quot;off&quot;</ins>]
-     import/no-relative-parent-imports
  - [<ins>&quot;off&quot;</ins>]
-     import/no-restricted-paths
  - [<ins>&quot;off&quot;</ins>]
-     import/no-self-import
  - [<ins>&quot;error&quot;</ins>]
-     import/no-unassigned-import
  - [<ins>&quot;off&quot;</ins>]
-     import/no-unresolved
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;commonjs&quot;:true,&quot;caseSensitive&quot;:true}</ins>]
-     import/no-useless-path-segments
  - [<ins>&quot;error&quot;</ins>]
-     import/no-webpack-loader-syntax
  - [<ins>&quot;error&quot;</ins>]
-     import/order
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;groups&quot;:[[&quot;builtin&quot;,&quot;external&quot;,&quot;internal&quot;]]}</ins>]
-     import/prefer-default-export
  - [<ins>&quot;error&quot;</ins>]
-     import/unambiguous
  - [<ins>&quot;off&quot;</ins>]
-     jsx-a11y/accessible-emoji
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/alt-text
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;elements&quot;:[&quot;img&quot;,&quot;object&quot;,&quot;area&quot;,&quot;input[type&#x3D;\&quot;image\&quot;]&quot;],&quot;img&quot;:[],&quot;object&quot;:[],&quot;area&quot;:[],&quot;input[type&#x3D;\&quot;image\&quot;]&quot;:[]}</ins>]
-     jsx-a11y/anchor-has-content
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;components&quot;:[]}</ins>]
-     jsx-a11y/anchor-is-valid
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;components&quot;:[&quot;Link&quot;],&quot;specialLink&quot;:[&quot;to&quot;],&quot;aspects&quot;:[&quot;noHref&quot;,&quot;invalidHref&quot;,&quot;preferButton&quot;]}</ins>]
-     jsx-a11y/aria-activedescendant-has-tabindex
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/aria-props
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/aria-proptypes
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/aria-role
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;ignoreNonDom&quot;:false}</ins>]
-     jsx-a11y/aria-unsupported-elements
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/click-events-have-key-events
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/heading-has-content
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;components&quot;:[&quot;&quot;]}</ins>]
-     jsx-a11y/html-has-lang
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/iframe-has-title
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/img-redundant-alt
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/interactive-supports-focus
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/label-has-associated-control
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;labelComponents&quot;:[],&quot;labelAttributes&quot;:[],&quot;controlComponents&quot;:[],&quot;assert&quot;:&quot;both&quot;,&quot;depth&quot;:25}</ins>]
-     jsx-a11y/label-has-for
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;components&quot;:[],&quot;required&quot;:{&quot;every&quot;:[&quot;nesting&quot;,&quot;id&quot;]},&quot;allowChildren&quot;:false}</ins>]
-     jsx-a11y/lang
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/media-has-caption
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;audio&quot;:[],&quot;video&quot;:[],&quot;track&quot;:[]}</ins>]
-     jsx-a11y/mouse-events-have-key-events
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/no-access-key
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/no-autofocus
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;ignoreNonDOM&quot;:true}</ins>]
-     jsx-a11y/no-distracting-elements
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;elements&quot;:[&quot;marquee&quot;,&quot;blink&quot;]}</ins>]
-     jsx-a11y/no-interactive-element-to-noninteractive-role
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;tr&quot;:[&quot;none&quot;,&quot;presentation&quot;]}</ins>]
-     jsx-a11y/no-noninteractive-element-interactions
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;handlers&quot;:[&quot;onClick&quot;,&quot;onMouseDown&quot;,&quot;onMouseUp&quot;,&quot;onKeyPress&quot;,&quot;onKeyDown&quot;,&quot;onKeyUp&quot;]}</ins>]
-     jsx-a11y/no-noninteractive-element-to-interactive-role
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;ul&quot;:[&quot;listbox&quot;,&quot;menu&quot;,&quot;menubar&quot;,&quot;radiogroup&quot;,&quot;tablist&quot;,&quot;tree&quot;,&quot;treegrid&quot;],&quot;ol&quot;:[&quot;listbox&quot;,&quot;menu&quot;,&quot;menubar&quot;,&quot;radiogroup&quot;,&quot;tablist&quot;,&quot;tree&quot;,&quot;treegrid&quot;],&quot;li&quot;:[&quot;menuitem&quot;,&quot;option&quot;,&quot;row&quot;,&quot;tab&quot;,&quot;treeitem&quot;],&quot;table&quot;:[&quot;grid&quot;],&quot;td&quot;:[&quot;gridcell&quot;]}</ins>]
-     jsx-a11y/no-noninteractive-tabindex
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;tags&quot;:[],&quot;roles&quot;:[&quot;tabpanel&quot;]}</ins>]
-     jsx-a11y/no-onchange
  - [<ins>&quot;off&quot;</ins>]
-     jsx-a11y/no-redundant-roles
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/no-static-element-interactions
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;handlers&quot;:[&quot;onClick&quot;,&quot;onMouseDown&quot;,&quot;onMouseUp&quot;,&quot;onKeyPress&quot;,&quot;onKeyDown&quot;,&quot;onKeyUp&quot;]}</ins>]
-     jsx-a11y/role-has-required-aria-props
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/role-supports-aria-props
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/scope
  - [<ins>&quot;error&quot;</ins>]
-     jsx-a11y/tabindex-no-positive
  - [<ins>&quot;error&quot;</ins>]
- 
    [line-comment-position](http://eslint.org/docs/rules/line-comment-position.html)
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;position&quot;:&quot;above&quot;,&quot;ignorePattern&quot;:&quot;&quot;,&quot;applyDefaultPatterns&quot;:true}</ins>]
- 
    [lines-around-directive](http://eslint.org/docs/rules/lines-around-directive.html)
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;before&quot;:&quot;always&quot;,&quot;after&quot;:&quot;always&quot;}</ins>]
- 
    [lines-between-class-members](http://eslint.org/docs/rules/lines-between-class-members.html)
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;always&quot;</ins>, <ins>{&quot;exceptAfterSingleLine&quot;:false}</ins>]
- 
    [max-classes-per-file](http://eslint.org/docs/rules/max-classes-per-file.html)
  - [<ins>&quot;off&quot;</ins>, <ins>1</ins>]
- 
    [max-lines](http://eslint.org/docs/rules/max-lines.html)
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;max&quot;:300,&quot;skipBlankLines&quot;:true,&quot;skipComments&quot;:true}</ins>]
- 
    [max-lines-per-function](http://eslint.org/docs/rules/max-lines-per-function.html)
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;max&quot;:50,&quot;skipBlankLines&quot;:true,&quot;skipComments&quot;:true,&quot;IIFEs&quot;:true}</ins>]
- 
    [max-statements-per-line](http://eslint.org/docs/rules/max-statements-per-line.html)
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;max&quot;:1}</ins>]
- 
    [multiline-comment-style](http://eslint.org/docs/rules/multiline-comment-style.html)
  - [<ins>&quot;off&quot;</ins>, <ins>&quot;starred-block&quot;</ins>]
- 
    [multiline-ternary](http://eslint.org/docs/rules/multiline-ternary.html)
  - [<ins>&quot;off&quot;</ins>, <ins>&quot;never&quot;</ins>]
- 
    [newline-before-return](http://eslint.org/docs/rules/newline-before-return.html)
  - [<ins>&quot;off&quot;</ins>]
- 
    [newline-per-chained-call](http://eslint.org/docs/rules/newline-per-chained-call.html)
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;ignoreChainWithDepth&quot;:4}</ins>]
- 
    [no-async-promise-executor](http://eslint.org/docs/rules/no-async-promise-executor.html)
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-await-in-loop](http://eslint.org/docs/rules/no-await-in-loop.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-buffer-constructor](http://eslint.org/docs/rules/no-buffer-constructor.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-case-declarations](http://eslint.org/docs/rules/no-case-declarations.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-compare-neg-zero](http://eslint.org/docs/rules/no-compare-neg-zero.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-confusing-arrow](http://eslint.org/docs/rules/no-confusing-arrow.html)
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;allowParens&quot;:true}</ins>]
- 
    [no-dupe-class-members](http://eslint.org/docs/rules/no-dupe-class-members.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-duplicate-imports](http://eslint.org/docs/rules/no-duplicate-imports.html)
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-empty-function](http://eslint.org/docs/rules/no-empty-function.html)
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;allow&quot;:[&quot;arrowFunctions&quot;,&quot;functions&quot;,&quot;methods&quot;]}</ins>]
- 
    [no-empty-pattern](http://eslint.org/docs/rules/no-empty-pattern.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-extra-label](http://eslint.org/docs/rules/no-extra-label.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-global-assign](http://eslint.org/docs/rules/no-global-assign.html)
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;exceptions&quot;:[]}</ins>]
- 
    [no-implicit-globals](http://eslint.org/docs/rules/no-implicit-globals.html)
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-magic-numbers](http://eslint.org/docs/rules/no-magic-numbers.html)
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;ignore&quot;:[],&quot;ignoreArrayIndexes&quot;:true,&quot;enforceConst&quot;:true,&quot;detectObjects&quot;:false}</ins>]
- 
    [no-misleading-character-class](http://eslint.org/docs/rules/no-misleading-character-class.html)
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-mixed-operators](http://eslint.org/docs/rules/no-mixed-operators.html)
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;groups&quot;:[[&quot;%&quot;,&quot;**&quot;],[&quot;%&quot;,&quot;+&quot;],[&quot;%&quot;,&quot;-&quot;],[&quot;%&quot;,&quot;*&quot;],[&quot;%&quot;,&quot;/&quot;],[&quot;**&quot;,&quot;+&quot;],[&quot;**&quot;,&quot;-&quot;],[&quot;**&quot;,&quot;*&quot;],[&quot;**&quot;,&quot;/&quot;],[&quot;&amp;&quot;,&quot;|&quot;,&quot;^&quot;,&quot;~&quot;,&quot;&lt;&lt;&quot;,&quot;&gt;&gt;&quot;,&quot;&gt;&gt;&gt;&quot;],[&quot;&#x3D;&#x3D;&quot;,&quot;!&#x3D;&quot;,&quot;&#x3D;&#x3D;&#x3D;&quot;,&quot;!&#x3D;&#x3D;&quot;,&quot;&gt;&quot;,&quot;&gt;&#x3D;&quot;,&quot;&lt;&quot;,&quot;&lt;&#x3D;&quot;],[&quot;&amp;&amp;&quot;,&quot;||&quot;],[&quot;in&quot;,&quot;instanceof&quot;]],&quot;allowSamePrecedence&quot;:false}</ins>]
- 
    [no-multi-assign](http://eslint.org/docs/rules/no-multi-assign.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-negated-condition](http://eslint.org/docs/rules/no-negated-condition.html)
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-new-symbol](http://eslint.org/docs/rules/no-new-symbol.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-prototype-builtins](http://eslint.org/docs/rules/no-prototype-builtins.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-restricted-globals](http://eslint.org/docs/rules/no-restricted-globals.html)
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;isFinite&quot;</ins>, <ins>&quot;isNaN&quot;</ins>, <ins>&quot;addEventListener&quot;</ins>, <ins>&quot;blur&quot;</ins>, <ins>&quot;close&quot;</ins>, <ins>&quot;closed&quot;</ins>, <ins>&quot;confirm&quot;</ins>, <ins>&quot;defaultStatus&quot;</ins>, <ins>&quot;event&quot;</ins>, <ins>&quot;external&quot;</ins>, <ins>&quot;defaultstatus&quot;</ins>, <ins>&quot;find&quot;</ins>, <ins>&quot;focus&quot;</ins>, <ins>&quot;frameElement&quot;</ins>, <ins>&quot;frames&quot;</ins>, <ins>&quot;history&quot;</ins>, <ins>&quot;innerHeight&quot;</ins>, <ins>&quot;innerWidth&quot;</ins>, <ins>&quot;length&quot;</ins>, <ins>&quot;location&quot;</ins>, <ins>&quot;locationbar&quot;</ins>, <ins>&quot;menubar&quot;</ins>, <ins>&quot;moveBy&quot;</ins>, <ins>&quot;moveTo&quot;</ins>, <ins>&quot;name&quot;</ins>, <ins>&quot;onblur&quot;</ins>, <ins>&quot;onerror&quot;</ins>, <ins>&quot;onfocus&quot;</ins>, <ins>&quot;onload&quot;</ins>, <ins>&quot;onresize&quot;</ins>, <ins>&quot;onunload&quot;</ins>, <ins>&quot;open&quot;</ins>, <ins>&quot;opener&quot;</ins>, <ins>&quot;opera&quot;</ins>, <ins>&quot;outerHeight&quot;</ins>, <ins>&quot;outerWidth&quot;</ins>, <ins>&quot;pageXOffset&quot;</ins>, <ins>&quot;pageYOffset&quot;</ins>, <ins>&quot;parent&quot;</ins>, <ins>&quot;print&quot;</ins>, <ins>&quot;removeEventListener&quot;</ins>, <ins>&quot;resizeBy&quot;</ins>, <ins>&quot;resizeTo&quot;</ins>, <ins>&quot;screen&quot;</ins>, <ins>&quot;screenLeft&quot;</ins>, <ins>&quot;screenTop&quot;</ins>, <ins>&quot;screenX&quot;</ins>, <ins>&quot;screenY&quot;</ins>, <ins>&quot;scroll&quot;</ins>, <ins>&quot;scrollbars&quot;</ins>, <ins>&quot;scrollBy&quot;</ins>, <ins>&quot;scrollTo&quot;</ins>, <ins>&quot;scrollX&quot;</ins>, <ins>&quot;scrollY&quot;</ins>, <ins>&quot;self&quot;</ins>, <ins>&quot;status&quot;</ins>, <ins>&quot;statusbar&quot;</ins>, <ins>&quot;stop&quot;</ins>, <ins>&quot;toolbar&quot;</ins>, <ins>&quot;top&quot;</ins>]
- 
    [no-restricted-imports](http://eslint.org/docs/rules/no-restricted-imports.html)
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;paths&quot;:[],&quot;patterns&quot;:[]}</ins>]
- 
    [no-restricted-properties](http://eslint.org/docs/rules/no-restricted-properties.html)
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;object&quot;:&quot;arguments&quot;,&quot;property&quot;:&quot;callee&quot;,&quot;message&quot;:&quot;arguments.callee is deprecated&quot;}</ins>, <ins>{&quot;object&quot;:&quot;global&quot;,&quot;property&quot;:&quot;isFinite&quot;,&quot;message&quot;:&quot;Please use Number.isFinite instead&quot;}</ins>, <ins>{&quot;object&quot;:&quot;self&quot;,&quot;property&quot;:&quot;isFinite&quot;,&quot;message&quot;:&quot;Please use Number.isFinite instead&quot;}</ins>, <ins>{&quot;object&quot;:&quot;window&quot;,&quot;property&quot;:&quot;isFinite&quot;,&quot;message&quot;:&quot;Please use Number.isFinite instead&quot;}</ins>, <ins>{&quot;object&quot;:&quot;global&quot;,&quot;property&quot;:&quot;isNaN&quot;,&quot;message&quot;:&quot;Please use Number.isNaN instead&quot;}</ins>, <ins>{&quot;object&quot;:&quot;self&quot;,&quot;property&quot;:&quot;isNaN&quot;,&quot;message&quot;:&quot;Please use Number.isNaN instead&quot;}</ins>, <ins>{&quot;object&quot;:&quot;window&quot;,&quot;property&quot;:&quot;isNaN&quot;,&quot;message&quot;:&quot;Please use Number.isNaN instead&quot;}</ins>, <ins>{&quot;property&quot;:&quot;__defineGetter__&quot;,&quot;message&quot;:&quot;Please use Object.defineProperty instead.&quot;}</ins>, <ins>{&quot;property&quot;:&quot;__defineSetter__&quot;,&quot;message&quot;:&quot;Please use Object.defineProperty instead.&quot;}</ins>, <ins>{&quot;object&quot;:&quot;Math&quot;,&quot;property&quot;:&quot;pow&quot;,&quot;message&quot;:&quot;Use the exponentiation operator (**) instead.&quot;}</ins>]
- 
    [no-restricted-syntax](http://eslint.org/docs/rules/no-restricted-syntax.html)
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;selector&quot;:&quot;ForInStatement&quot;,&quot;message&quot;:&quot;for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.&quot;}</ins>, <ins>{&quot;selector&quot;:&quot;ForOfStatement&quot;,&quot;message&quot;:&quot;iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.&quot;}</ins>, <ins>{&quot;selector&quot;:&quot;LabeledStatement&quot;,&quot;message&quot;:&quot;Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.&quot;}</ins>, <ins>{&quot;selector&quot;:&quot;WithStatement&quot;,&quot;message&quot;:&quot;&#x60;with&#x60; is disallowed in strict mode because it makes code impossible to predict and optimize.&quot;}</ins>]
- 
    [no-return-await](http://eslint.org/docs/rules/no-return-await.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-self-assign](http://eslint.org/docs/rules/no-self-assign.html)
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;props&quot;:false}</ins>]
- 
    [no-tabs](http://eslint.org/docs/rules/no-tabs.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-template-curly-in-string](http://eslint.org/docs/rules/no-template-curly-in-string.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-unmodified-loop-condition](http://eslint.org/docs/rules/no-unmodified-loop-condition.html)
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-unsafe-finally](http://eslint.org/docs/rules/no-unsafe-finally.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-unsafe-negation](http://eslint.org/docs/rules/no-unsafe-negation.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-unused-labels](http://eslint.org/docs/rules/no-unused-labels.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-useless-computed-key](http://eslint.org/docs/rules/no-useless-computed-key.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-useless-concat](http://eslint.org/docs/rules/no-useless-concat.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-useless-constructor](http://eslint.org/docs/rules/no-useless-constructor.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-useless-escape](http://eslint.org/docs/rules/no-useless-escape.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-useless-rename](http://eslint.org/docs/rules/no-useless-rename.html)
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;ignoreDestructuring&quot;:false,&quot;ignoreImport&quot;:false,&quot;ignoreExport&quot;:false}</ins>]
- 
    [no-useless-return](http://eslint.org/docs/rules/no-useless-return.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-whitespace-before-property](http://eslint.org/docs/rules/no-whitespace-before-property.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [nonblock-statement-body-position](http://eslint.org/docs/rules/nonblock-statement-body-position.html)
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;beside&quot;</ins>, <ins>{&quot;overrides&quot;:{}}</ins>]
- 
    [object-curly-newline](http://eslint.org/docs/rules/object-curly-newline.html)
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;ObjectExpression&quot;:{&quot;minProperties&quot;:4,&quot;multiline&quot;:true,&quot;consistent&quot;:true},&quot;ObjectPattern&quot;:{&quot;minProperties&quot;:4,&quot;multiline&quot;:true,&quot;consistent&quot;:true},&quot;ImportDeclaration&quot;:{&quot;minProperties&quot;:4,&quot;multiline&quot;:true,&quot;consistent&quot;:true},&quot;ExportDeclaration&quot;:{&quot;minProperties&quot;:4,&quot;multiline&quot;:true,&quot;consistent&quot;:true}}</ins>]
- 
    [object-property-newline](http://eslint.org/docs/rules/object-property-newline.html)
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;allowAllPropertiesOnSameLine&quot;:true}</ins>]
- 
    [one-var-declaration-per-line](http://eslint.org/docs/rules/one-var-declaration-per-line.html)
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;always&quot;</ins>]
- 
    [padding-line-between-statements](http://eslint.org/docs/rules/padding-line-between-statements.html)
  - [<ins>&quot;off&quot;</ins>]
- 
    [prefer-destructuring](http://eslint.org/docs/rules/prefer-destructuring.html)
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;VariableDeclarator&quot;:{&quot;array&quot;:false,&quot;object&quot;:true},&quot;AssignmentExpression&quot;:{&quot;array&quot;:true,&quot;object&quot;:true}}</ins>, <ins>{&quot;enforceForRenamedProperties&quot;:false}</ins>]
- 
    [prefer-numeric-literals](http://eslint.org/docs/rules/prefer-numeric-literals.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [prefer-object-spread](http://eslint.org/docs/rules/prefer-object-spread.html)
  - [<ins>&quot;off&quot;</ins>]
- 
    [prefer-promise-reject-errors](http://eslint.org/docs/rules/prefer-promise-reject-errors.html)
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;allowEmptyReject&quot;:true}</ins>]
- 
    [prefer-rest-params](http://eslint.org/docs/rules/prefer-rest-params.html)
  - [<ins>&quot;error&quot;</ins>]
-     react/button-has-type
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;button&quot;:true,&quot;submit&quot;:true,&quot;reset&quot;:false}</ins>]
-     react/jsx-one-expression-per-line
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;allow&quot;:&quot;single-child&quot;}</ins>]
-     react/no-unescaped-entities
  - [<ins>&quot;error&quot;</ins>]
-     react/style-prop-object
  - [<ins>&quot;error&quot;</ins>]
- 
    [require-atomic-updates](http://eslint.org/docs/rules/require-atomic-updates.html)
  - [<ins>&quot;off&quot;</ins>]
- 
    [require-await](http://eslint.org/docs/rules/require-await.html)
  - [<ins>&quot;off&quot;</ins>]
- 
    [require-jsdoc](http://eslint.org/docs/rules/require-jsdoc.html)
  - [<ins>&quot;off&quot;</ins>]
- 
    [require-unicode-regexp](http://eslint.org/docs/rules/require-unicode-regexp.html)
  - [<ins>&quot;off&quot;</ins>]
- 
    [rest-spread-spacing](http://eslint.org/docs/rules/rest-spread-spacing.html)
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;never&quot;</ins>]
- 
    [semi-style](http://eslint.org/docs/rules/semi-style.html)
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;last&quot;</ins>]
- 
    [sort-imports](http://eslint.org/docs/rules/sort-imports.html)
  - [<ins>&quot;off&quot;</ins>, <ins>{&quot;ignoreCase&quot;:false,&quot;ignoreMemberSort&quot;:false,&quot;memberSyntaxSortOrder&quot;:[&quot;none&quot;,&quot;all&quot;,&quot;multiple&quot;,&quot;single&quot;]}</ins>]
- 
    [sort-keys](http://eslint.org/docs/rules/sort-keys.html)
  - [<ins>&quot;off&quot;</ins>, <ins>&quot;asc&quot;</ins>, <ins>{&quot;caseSensitive&quot;:false,&quot;natural&quot;:true}</ins>]
- 
    [switch-colon-spacing](http://eslint.org/docs/rules/switch-colon-spacing.html)
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;after&quot;:true,&quot;before&quot;:false}</ins>]
- 
    [symbol-description](http://eslint.org/docs/rules/symbol-description.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [template-curly-spacing](http://eslint.org/docs/rules/template-curly-spacing.html)
  - [<ins>&quot;error&quot;</ins>]
- 
    [template-tag-spacing](http://eslint.org/docs/rules/template-tag-spacing.html)
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;never&quot;</ins>]
- 
    [unicode-bom](http://eslint.org/docs/rules/unicode-bom.html)
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;never&quot;</ins>]
- 
    [yield-star-spacing](http://eslint.org/docs/rules/yield-star-spacing.html)
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;after&quot;</ins>]

#### Removed rules
- 
    [no-empty-label](http://eslint.org/docs/rules/no-empty-label.html)
  - [<del>&quot;off&quot;</del>]
-     react-hooks/rules-of-hooks
  - [<del>&quot;error&quot;</del>]

#### Edited rules
- 
    [array-bracket-spacing](http://eslint.org/docs/rules/array-bracket-spacing.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;never&quot;</ins>]
- 
    [arrow-body-style](http://eslint.org/docs/rules/arrow-body-style.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;as-needed&quot;</ins>, <ins>{&quot;requireReturnForObjectLiteral&quot;:false}</ins>]
- 
    [arrow-parens](http://eslint.org/docs/rules/arrow-parens.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;as-needed&quot;</ins>, <ins>{&quot;requireForBlockBody&quot;:true}</ins>]
- 
    [arrow-spacing](http://eslint.org/docs/rules/arrow-spacing.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;before&quot;:true,&quot;after&quot;:true}</ins>]
- 
    [class-methods-use-this](http://eslint.org/docs/rules/class-methods-use-this.html)
  - [<del>&quot;off&quot;</del>, {&quot;exceptMethods&quot;:[&quot;render&quot;,&quot;getInitialState&quot;,&quot;getDefaultProps&quot;,&quot;getChildContext&quot;,&quot;componentWillMount&quot;,&quot;UNSAFE_componentWillMount&quot;,&quot;componentDidMount&quot;,&quot;componentWillReceiveProps&quot;,&quot;UNSAFE_componentWillReceiveProps&quot;,&quot;shouldComponentUpdate&quot;,&quot;componentWillUpdate&quot;,&quot;UNSAFE_componentWillUpdate&quot;,&quot;componentDidUpdate&quot;,&quot;componentWillUnmount&quot;,&quot;componentDidCatch&quot;,&quot;getSnapshotBeforeUpdate&quot;]}]
  - [<ins>&quot;error&quot;</ins>, {&quot;exceptMethods&quot;:[&quot;render&quot;,&quot;getInitialState&quot;,&quot;getDefaultProps&quot;,&quot;getChildContext&quot;,&quot;componentWillMount&quot;,&quot;UNSAFE_componentWillMount&quot;,&quot;componentDidMount&quot;,&quot;componentWillReceiveProps&quot;,&quot;UNSAFE_componentWillReceiveProps&quot;,&quot;shouldComponentUpdate&quot;,&quot;componentWillUpdate&quot;,&quot;UNSAFE_componentWillUpdate&quot;,&quot;componentDidUpdate&quot;,&quot;componentWillUnmount&quot;,&quot;componentDidCatch&quot;,&quot;getSnapshotBeforeUpdate&quot;]}]
- 
    [comma-dangle](http://eslint.org/docs/rules/comma-dangle.html)
  - [&quot;error&quot;, <del>&quot;always-multiline&quot;</del>]
  - [&quot;error&quot;, <ins>{&quot;arrays&quot;:&quot;always-multiline&quot;,&quot;objects&quot;:&quot;always-multiline&quot;,&quot;imports&quot;:&quot;always-multiline&quot;,&quot;exports&quot;:&quot;always-multiline&quot;,&quot;functions&quot;:&quot;always-multiline&quot;}</ins>]
- 
    [comma-style](http://eslint.org/docs/rules/comma-style.html)
  - [&quot;error&quot;, &quot;last&quot;]
  - [&quot;error&quot;, &quot;last&quot;, <ins>{&quot;exceptions&quot;:{&quot;ArrayExpression&quot;:false,&quot;ArrayPattern&quot;:false,&quot;ArrowFunctionExpression&quot;:false,&quot;CallExpression&quot;:false,&quot;FunctionDeclaration&quot;:false,&quot;FunctionExpression&quot;:false,&quot;ImportDeclaration&quot;:false,&quot;ObjectExpression&quot;:false,&quot;ObjectPattern&quot;:false,&quot;VariableDeclaration&quot;:false,&quot;NewExpression&quot;:false}}</ins>]
- 
    [computed-property-spacing](http://eslint.org/docs/rules/computed-property-spacing.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;never&quot;</ins>]
- 
    [constructor-super](http://eslint.org/docs/rules/constructor-super.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [default-case](http://eslint.org/docs/rules/default-case.html)
  - [&quot;error&quot;]
  - [&quot;error&quot;, <ins>{&quot;commentPattern&quot;:&quot;^no default$&quot;}</ins>]
- 
    [dot-location](http://eslint.org/docs/rules/dot-location.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;property&quot;</ins>]
- 
    [eol-last](http://eslint.org/docs/rules/eol-last.html)
  - [&quot;error&quot;]
  - [&quot;error&quot;, <ins>&quot;always&quot;</ins>]
- 
    [eqeqeq](http://eslint.org/docs/rules/eqeqeq.html)
  - [&quot;error&quot;]
  - [&quot;error&quot;, <ins>&quot;always&quot;</ins>, <ins>{&quot;null&quot;:&quot;ignore&quot;}</ins>]
- 
    [func-style](http://eslint.org/docs/rules/func-style.html)
  - [&quot;off&quot;]
  - [&quot;off&quot;, <ins>&quot;expression&quot;</ins>]
- 
    [generator-star-spacing](http://eslint.org/docs/rules/generator-star-spacing.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;before&quot;:false,&quot;after&quot;:true}</ins>]
- 
    [indent](http://eslint.org/docs/rules/indent.html)
  - [&quot;error&quot;, 2, <del>{&quot;SwitchCase&quot;:1,&quot;VariableDeclarator&quot;:1}</del>]
  - [&quot;error&quot;, 2, <ins>{&quot;SwitchCase&quot;:1,&quot;VariableDeclarator&quot;:1,&quot;outerIIFEBody&quot;:1,&quot;FunctionDeclaration&quot;:{&quot;parameters&quot;:1,&quot;body&quot;:1},&quot;FunctionExpression&quot;:{&quot;parameters&quot;:1,&quot;body&quot;:1},&quot;CallExpression&quot;:{&quot;arguments&quot;:1},&quot;ArrayExpression&quot;:1,&quot;ObjectExpression&quot;:1,&quot;ImportDeclaration&quot;:1,&quot;flatTernaryExpressions&quot;:false,&quot;ignoredNodes&quot;:[&quot;JSXElement&quot;,&quot;JSXElement &gt; *&quot;,&quot;JSXAttribute&quot;,&quot;JSXIdentifier&quot;,&quot;JSXNamespacedName&quot;,&quot;JSXMemberExpression&quot;,&quot;JSXSpreadAttribute&quot;,&quot;JSXExpressionContainer&quot;,&quot;JSXOpeningElement&quot;,&quot;JSXClosingElement&quot;,&quot;JSXText&quot;,&quot;JSXEmptyExpression&quot;,&quot;JSXSpreadChild&quot;],&quot;ignoreComments&quot;:false}</ins>]
- 
    [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing.html)
  - [&quot;error&quot;]
  - [&quot;error&quot;, <ins>{&quot;before&quot;:true,&quot;after&quot;:true,&quot;overrides&quot;:{&quot;return&quot;:{&quot;after&quot;:true},&quot;throw&quot;:{&quot;after&quot;:true},&quot;case&quot;:{&quot;after&quot;:true}}}</ins>]
- 
    [linebreak-style](http://eslint.org/docs/rules/linebreak-style.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;unix&quot;</ins>]
- 
    [max-len](http://eslint.org/docs/rules/max-len.html)
  - [&quot;error&quot;, <del>120</del>, <del>4</del>]
  - [&quot;error&quot;, <ins>100</ins>, <ins>2</ins>, <ins>{&quot;ignoreUrls&quot;:true,&quot;ignoreComments&quot;:false,&quot;ignoreRegExpLiterals&quot;:true,&quot;ignoreStrings&quot;:true,&quot;ignoreTemplateLiterals&quot;:true}</ins>]
- 
    [new-cap](http://eslint.org/docs/rules/new-cap.html)
  - [&quot;error&quot;, <del>{&quot;newIsCap&quot;:true,&quot;capIsNew&quot;:false}</del>]
  - [&quot;error&quot;, <ins>{&quot;newIsCap&quot;:true,&quot;newIsCapExceptions&quot;:[],&quot;capIsNew&quot;:false,&quot;capIsNewExceptions&quot;:[&quot;Immutable.Map&quot;,&quot;Immutable.Set&quot;,&quot;Immutable.List&quot;]}</ins>]
- 
    [new-parens](http://eslint.org/docs/rules/new-parens.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-array-constructor](http://eslint.org/docs/rules/no-array-constructor.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-bitwise](http://eslint.org/docs/rules/no-bitwise.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-class-assign](http://eslint.org/docs/rules/no-class-assign.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-const-assign](http://eslint.org/docs/rules/no-const-assign.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-continue](http://eslint.org/docs/rules/no-continue.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-control-regex](http://eslint.org/docs/rules/no-control-regex.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-debugger](http://eslint.org/docs/rules/no-debugger.html)
  - [<del>&quot;warn&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-delete-var](http://eslint.org/docs/rules/no-delete-var.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-dupe-args](http://eslint.org/docs/rules/no-dupe-args.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-else-return](http://eslint.org/docs/rules/no-else-return.html)
  - [&quot;error&quot;]
  - [&quot;error&quot;, <ins>{&quot;allowElseIf&quot;:false}</ins>]
- 
    [no-empty-character-class](http://eslint.org/docs/rules/no-empty-character-class.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-eq-null](http://eslint.org/docs/rules/no-eq-null.html)
  - [<del>&quot;error&quot;</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-extra-boolean-cast](http://eslint.org/docs/rules/no-extra-boolean-cast.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-extra-parens](http://eslint.org/docs/rules/no-extra-parens.html)
  - [<del>&quot;error&quot;</del>, <del>&quot;functions&quot;</del>]
  - [<ins>&quot;off&quot;</ins>, <ins>&quot;all&quot;</ins>, <ins>{&quot;conditionalAssign&quot;:true,&quot;nestedBinaryExpressions&quot;:false,&quot;returnAssign&quot;:false,&quot;ignoreJSX&quot;:&quot;all&quot;,&quot;enforceForArrowConditionals&quot;:false}</ins>]
- 
    [no-implicit-coercion](http://eslint.org/docs/rules/no-implicit-coercion.html)
  - [&quot;off&quot;]
  - [&quot;off&quot;, <ins>{&quot;boolean&quot;:false,&quot;number&quot;:true,&quot;string&quot;:true,&quot;allow&quot;:[]}</ins>]
- 
    [no-iterator](http://eslint.org/docs/rules/no-iterator.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-label-var](http://eslint.org/docs/rules/no-label-var.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-labels](http://eslint.org/docs/rules/no-labels.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;allowLoop&quot;:false,&quot;allowSwitch&quot;:false}</ins>]
- 
    [no-lonely-if](http://eslint.org/docs/rules/no-lonely-if.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-mixed-spaces-and-tabs](http://eslint.org/docs/rules/no-mixed-spaces-and-tabs.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-multi-spaces](http://eslint.org/docs/rules/no-multi-spaces.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;ignoreEOLComments&quot;:false}</ins>]
- 
    [no-multiple-empty-lines](http://eslint.org/docs/rules/no-multiple-empty-lines.html)
  - [&quot;error&quot;, <del>{&quot;max&quot;:2}</del>]
  - [&quot;error&quot;, <ins>{&quot;max&quot;:2,&quot;maxEOF&quot;:0}</ins>]
- 
    [no-native-reassign](http://eslint.org/docs/rules/no-native-reassign.html)
  - [<del>&quot;error&quot;</del>]
  - [<ins>&quot;off&quot;</ins>]
- 
    [no-new-require](http://eslint.org/docs/rules/no-new-require.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-param-reassign](http://eslint.org/docs/rules/no-param-reassign.html)
  - [&quot;error&quot;]
  - [&quot;error&quot;, <ins>{&quot;props&quot;:true,&quot;ignorePropertyModificationsFor&quot;:[&quot;acc&quot;,&quot;accumulator&quot;,&quot;e&quot;,&quot;ctx&quot;,&quot;req&quot;,&quot;request&quot;,&quot;res&quot;,&quot;response&quot;,&quot;$scope&quot;]}</ins>]
- 
    [no-path-concat](http://eslint.org/docs/rules/no-path-concat.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-plusplus](http://eslint.org/docs/rules/no-plusplus.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-regex-spaces](http://eslint.org/docs/rules/no-regex-spaces.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-return-assign](http://eslint.org/docs/rules/no-return-assign.html)
  - [&quot;error&quot;]
  - [&quot;error&quot;, <ins>&quot;always&quot;</ins>]
- 
    [no-this-before-super](http://eslint.org/docs/rules/no-this-before-super.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces.html)
  - [&quot;error&quot;]
  - [&quot;error&quot;, <ins>{&quot;skipBlankLines&quot;:false,&quot;ignoreComments&quot;:false}</ins>]
- 
    [no-undef](http://eslint.org/docs/rules/no-undef.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-undef-init](http://eslint.org/docs/rules/no-undef-init.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-underscore-dangle](http://eslint.org/docs/rules/no-underscore-dangle.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;allow&quot;:[],&quot;allowAfterThis&quot;:false,&quot;allowAfterSuper&quot;:false,&quot;enforceInMethodNames&quot;:false}</ins>]
- 
    [no-unexpected-multiline](http://eslint.org/docs/rules/no-unexpected-multiline.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [no-unneeded-ternary](http://eslint.org/docs/rules/no-unneeded-ternary.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;defaultAssignment&quot;:false}</ins>]
- 
    [no-unused-expressions](http://eslint.org/docs/rules/no-unused-expressions.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;allowShortCircuit&quot;:false,&quot;allowTernary&quot;:false,&quot;allowTaggedTemplates&quot;:false}</ins>]
- 
    [no-unused-vars](http://eslint.org/docs/rules/no-unused-vars.html)
  - [&quot;error&quot;, <del>{&quot;vars&quot;:&quot;local&quot;,&quot;args&quot;:&quot;after-used&quot;}</del>]
  - [&quot;error&quot;, <ins>{&quot;vars&quot;:&quot;all&quot;,&quot;args&quot;:&quot;after-used&quot;,&quot;ignoreRestSiblings&quot;:true}</ins>]
- 
    [no-use-before-define](http://eslint.org/docs/rules/no-use-before-define.html)
  - [&quot;error&quot;]
  - [&quot;error&quot;, <ins>{&quot;functions&quot;:true,&quot;classes&quot;:true,&quot;variables&quot;:true}</ins>]
- 
    [no-void](http://eslint.org/docs/rules/no-void.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [object-curly-spacing](http://eslint.org/docs/rules/object-curly-spacing.html)
  - [<del>&quot;off&quot;</del>, &quot;always&quot;]
  - [<ins>&quot;error&quot;</ins>, &quot;always&quot;]
- 
    [object-shorthand](http://eslint.org/docs/rules/object-shorthand.html)
  - [<del>&quot;off&quot;</del>, &quot;always&quot;]
  - [<ins>&quot;error&quot;</ins>, &quot;always&quot;, <ins>{&quot;ignoreConstructors&quot;:false,&quot;avoidQuotes&quot;:true}</ins>]
- 
    [operator-assignment](http://eslint.org/docs/rules/operator-assignment.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;always&quot;</ins>]
- 
    [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>&quot;before&quot;</ins>, <ins>{&quot;overrides&quot;:{&quot;&#x3D;&quot;:&quot;none&quot;}}</ins>]
- 
    [padded-blocks](http://eslint.org/docs/rules/padded-blocks.html)
  - [&quot;error&quot;, <del>&quot;never&quot;</del>]
  - [&quot;error&quot;, <ins>{&quot;blocks&quot;:&quot;never&quot;,&quot;classes&quot;:&quot;never&quot;,&quot;switches&quot;:&quot;never&quot;}</ins>]
- 
    [prefer-arrow-callback](http://eslint.org/docs/rules/prefer-arrow-callback.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;allowNamedFunctions&quot;:false,&quot;allowUnboundThis&quot;:true}</ins>]
- 
    [prefer-const](http://eslint.org/docs/rules/prefer-const.html)
  - [&quot;error&quot;]
  - [&quot;error&quot;, <ins>{&quot;destructuring&quot;:&quot;any&quot;,&quot;ignoreReadBeforeAssign&quot;:true}</ins>]
- 
    [prefer-spread](http://eslint.org/docs/rules/prefer-spread.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [prefer-template](http://eslint.org/docs/rules/prefer-template.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [quote-props](http://eslint.org/docs/rules/quote-props.html)
  - [&quot;error&quot;, <del>&quot;consistent&quot;</del>]
  - [&quot;error&quot;, <ins>&quot;as-needed&quot;</ins>, <ins>{&quot;keywords&quot;:false,&quot;unnecessary&quot;:true,&quot;numbers&quot;:false}</ins>]
- 
    [quotes](http://eslint.org/docs/rules/quotes.html)
  - [&quot;error&quot;, &quot;single&quot;, <del>&quot;avoid-escape&quot;</del>]
  - [&quot;error&quot;, &quot;single&quot;, <ins>{&quot;avoidEscape&quot;:true}</ins>]
-     react/destructuring-assignment
  - [<del>&quot;off&quot;</del>, &quot;always&quot;]
  - [<ins>&quot;error&quot;</ins>, &quot;always&quot;]
-     react/forbid-foreign-prop-types
  - [<del>&quot;off&quot;</del>, {&quot;allowInPropTypes&quot;:true}]
  - [<ins>&quot;warn&quot;</ins>, {&quot;allowInPropTypes&quot;:true}]
-     react/forbid-prop-types
  - [<del>&quot;off&quot;</del>, {&quot;forbid&quot;:[&quot;any&quot;,&quot;array&quot;,&quot;object&quot;],&quot;checkContextTypes&quot;:true,&quot;checkChildContextTypes&quot;:true}]
  - [<ins>&quot;error&quot;</ins>, {&quot;forbid&quot;:[&quot;any&quot;,&quot;array&quot;,&quot;object&quot;],&quot;checkContextTypes&quot;:true,&quot;checkChildContextTypes&quot;:true}]
-     react/jsx-closing-bracket-location
  - [<del>&quot;off&quot;</del>, &quot;line-aligned&quot;]
  - [<ins>&quot;error&quot;</ins>, &quot;line-aligned&quot;]
-     react/jsx-curly-brace-presence
  - [<del>&quot;off&quot;</del>, {&quot;props&quot;:&quot;never&quot;,&quot;children&quot;:&quot;never&quot;}]
  - [<ins>&quot;error&quot;</ins>, {&quot;props&quot;:&quot;never&quot;,&quot;children&quot;:&quot;never&quot;}]
-     react/jsx-curly-spacing
  - [<del>&quot;off&quot;</del>, &quot;never&quot;, {&quot;allowMultiline&quot;:true}]
  - [<ins>&quot;error&quot;</ins>, &quot;never&quot;, {&quot;allowMultiline&quot;:true}]
-     react/jsx-filename-extension
  - [<del>&quot;off&quot;</del>, {&quot;extensions&quot;:[&quot;.jsx&quot;]}]
  - [<ins>&quot;error&quot;</ins>, {&quot;extensions&quot;:[&quot;.jsx&quot;]}]
-     react/jsx-first-prop-new-line
  - [<del>&quot;off&quot;</del>, &quot;multiline-multiprop&quot;]
  - [<ins>&quot;error&quot;</ins>, &quot;multiline-multiprop&quot;]
-     react/jsx-indent-props
  - [<del>&quot;off&quot;</del>, 2]
  - [<ins>&quot;error&quot;</ins>, 2]
-     react/jsx-max-props-per-line
  - [<del>&quot;off&quot;</del>, {&quot;maximum&quot;:1,&quot;when&quot;:&quot;multiline&quot;}]
  - [<ins>&quot;error&quot;</ins>, {&quot;maximum&quot;:1,&quot;when&quot;:&quot;multiline&quot;}]
-     react/jsx-no-bind
  - [<del>&quot;warn&quot;</del>, <del>{&quot;ignoreRefs&quot;:true,&quot;allowArrowFunctions&quot;:false,&quot;allowFunctions&quot;:false,&quot;allowBind&quot;:false,&quot;ignoreDOMComponents&quot;:true}</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;ignoreRefs&quot;:true,&quot;allowArrowFunctions&quot;:true,&quot;allowFunctions&quot;:false,&quot;allowBind&quot;:false,&quot;ignoreDOMComponents&quot;:true}</ins>]
-     react/jsx-no-target-blank
  - [<del>&quot;off&quot;</del>, {&quot;enforceDynamicLinks&quot;:&quot;always&quot;}]
  - [<ins>&quot;error&quot;</ins>, {&quot;enforceDynamicLinks&quot;:&quot;always&quot;}]
-     react/jsx-pascal-case
  - [<del>&quot;off&quot;</del>, {&quot;allowAllCaps&quot;:true,&quot;ignore&quot;:[]}]
  - [<ins>&quot;error&quot;</ins>, {&quot;allowAllCaps&quot;:true,&quot;ignore&quot;:[]}]
-     react/jsx-tag-spacing
  - [&quot;error&quot;, <del>{&quot;closingSlash&quot;:&quot;never&quot;,&quot;beforeSelfClosing&quot;:&quot;allow&quot;,&quot;afterOpening&quot;:&quot;never&quot;,&quot;beforeClosing&quot;:&quot;never&quot;}</del>]
  - [&quot;error&quot;, <ins>{&quot;closingSlash&quot;:&quot;never&quot;,&quot;beforeSelfClosing&quot;:&quot;always&quot;,&quot;afterOpening&quot;:&quot;never&quot;,&quot;beforeClosing&quot;:&quot;never&quot;}</ins>]
-     react/jsx-wrap-multilines
  - [&quot;error&quot;, <del>{&quot;declaration&quot;:&quot;parens-new-line&quot;,&quot;assignment&quot;:&quot;parens-new-line&quot;,&quot;return&quot;:&quot;parens-new-line&quot;,&quot;arrow&quot;:&quot;parens-new-line&quot;,&quot;condition&quot;:&quot;parens-new-line&quot;,&quot;logical&quot;:&quot;parens-new-line&quot;,&quot;prop&quot;:&quot;ignore&quot;}</del>]
  - [&quot;error&quot;, <ins>{&quot;declaration&quot;:&quot;parens-new-line&quot;,&quot;assignment&quot;:&quot;parens-new-line&quot;,&quot;return&quot;:&quot;parens-new-line&quot;,&quot;arrow&quot;:&quot;parens-new-line&quot;,&quot;condition&quot;:&quot;parens-new-line&quot;,&quot;logical&quot;:&quot;parens-new-line&quot;,&quot;prop&quot;:&quot;parens-new-line&quot;}</ins>]
-     react/no-array-index-key
  - [<del>&quot;warn&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
-     react/no-danger
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;warn&quot;</ins>]
-     react/no-deprecated
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
-     react/no-did-mount-set-state
  - [<del>&quot;error&quot;</del>]
  - [<ins>&quot;off&quot;</ins>]
-     react/no-direct-mutation-state
  - [<del>&quot;error&quot;</del>]
  - [<ins>&quot;off&quot;</ins>]
-     react/no-find-dom-node
  - [<del>&quot;warn&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
-     react/no-string-refs
  - [<del>&quot;warn&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
-     react/no-unused-prop-types
  - [<del>&quot;off&quot;</del>, {&quot;customValidators&quot;:[],&quot;skipShapeProps&quot;:true}]
  - [<ins>&quot;error&quot;</ins>, {&quot;customValidators&quot;:[],&quot;skipShapeProps&quot;:true}]
-     react/prefer-stateless-function
  - [<del>&quot;off&quot;</del>, {&quot;ignorePureComponents&quot;:true}]
  - [<ins>&quot;error&quot;</ins>, {&quot;ignorePureComponents&quot;:true}]
-     react/require-default-props
  - [<del>&quot;off&quot;</del>, {&quot;forbidDefaultForRequired&quot;:true}]
  - [<ins>&quot;error&quot;</ins>, {&quot;forbidDefaultForRequired&quot;:true}]
-     react/sort-comp
  - [&quot;error&quot;, <del>{&quot;order&quot;:[&quot;static-methods&quot;,&quot;instance-variables&quot;,&quot;lifecycle&quot;,&quot;everything-else&quot;,&quot;rendering&quot;],&quot;groups&quot;:{&quot;lifecycle&quot;:[&quot;displayName&quot;,&quot;propTypes&quot;,&quot;contextTypes&quot;,&quot;childContextTypes&quot;,&quot;mixins&quot;,&quot;statics&quot;,&quot;defaultProps&quot;,&quot;constructor&quot;,&quot;getDefaultProps&quot;,&quot;getInitialState&quot;,&quot;state&quot;,&quot;getChildContext&quot;,&quot;componentWillMount&quot;,&quot;componentDidMount&quot;,&quot;componentWillReceiveProps&quot;,&quot;shouldComponentUpdate&quot;,&quot;componentWillUpdate&quot;,&quot;componentDidUpdate&quot;,&quot;componentWillUnmount&quot;],&quot;rendering&quot;:[&quot;/^render.+$/&quot;,&quot;render&quot;]}}</del>]
  - [&quot;error&quot;, <ins>{&quot;order&quot;:[&quot;static-methods&quot;,&quot;instance-variables&quot;,&quot;lifecycle&quot;,&quot;/^on.+$/&quot;,&quot;getters&quot;,&quot;setters&quot;,&quot;/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/&quot;,&quot;instance-methods&quot;,&quot;everything-else&quot;,&quot;rendering&quot;],&quot;groups&quot;:{&quot;lifecycle&quot;:[&quot;displayName&quot;,&quot;propTypes&quot;,&quot;contextTypes&quot;,&quot;childContextTypes&quot;,&quot;mixins&quot;,&quot;statics&quot;,&quot;defaultProps&quot;,&quot;constructor&quot;,&quot;getDefaultProps&quot;,&quot;getInitialState&quot;,&quot;state&quot;,&quot;getChildContext&quot;,&quot;componentWillMount&quot;,&quot;componentDidMount&quot;,&quot;componentWillReceiveProps&quot;,&quot;shouldComponentUpdate&quot;,&quot;componentWillUpdate&quot;,&quot;componentDidUpdate&quot;,&quot;componentWillUnmount&quot;],&quot;rendering&quot;:[&quot;/^render.+$/&quot;,&quot;render&quot;]}}</ins>]
- 
    [require-yield](http://eslint.org/docs/rules/require-yield.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>]
- 
    [space-before-function-paren](http://eslint.org/docs/rules/space-before-function-paren.html)
  - [&quot;error&quot;, <del>&quot;never&quot;</del>]
  - [&quot;error&quot;, <ins>{&quot;anonymous&quot;:&quot;always&quot;,&quot;named&quot;:&quot;never&quot;,&quot;asyncArrow&quot;:&quot;always&quot;}</ins>]
- 
    [space-in-parens](http://eslint.org/docs/rules/space-in-parens.html)
  - [<del>&quot;off&quot;</del>, &quot;never&quot;]
  - [<ins>&quot;error&quot;</ins>, &quot;never&quot;]
- 
    [space-unary-ops](http://eslint.org/docs/rules/space-unary-ops.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;words&quot;:true,&quot;nonwords&quot;:false,&quot;overrides&quot;:{}}</ins>]
- 
    [spaced-comment](http://eslint.org/docs/rules/spaced-comment.html)
  - [&quot;error&quot;]
  - [&quot;error&quot;, <ins>&quot;always&quot;</ins>, <ins>{&quot;line&quot;:{&quot;exceptions&quot;:[&quot;-&quot;,&quot;+&quot;],&quot;markers&quot;:[&quot;&#x3D;&quot;,&quot;!&quot;]},&quot;block&quot;:{&quot;exceptions&quot;:[&quot;-&quot;,&quot;+&quot;],&quot;markers&quot;:[&quot;&#x3D;&quot;,&quot;!&quot;],&quot;balanced&quot;:true}}</ins>]
- 
    [valid-typeof](http://eslint.org/docs/rules/valid-typeof.html)
  - [<del>&quot;off&quot;</del>]
  - [<ins>&quot;error&quot;</ins>, <ins>{&quot;requireStringLiterals&quot;:true}</ins>]
- 
    [wrap-iife](http://eslint.org/docs/rules/wrap-iife.html)
  - [&quot;error&quot;, <del>&quot;any&quot;</del>]
  - [&quot;error&quot;, <ins>&quot;outside&quot;</ins>, <ins>{&quot;functionPrototypeMethods&quot;:false}</ins>]
