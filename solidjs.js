module.exports = {
  "env": {
    "browser": true,
    "jest": true,
    "node": true,
    "es6": true
  },
  "globals": {},
  "parser": null,
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "generators": false,
      "objectLiteralDuplicateProperties": false
    }
  },
  "plugins": [
    "import",
    "prettier",
    "react",
    "react"
  ],
  "rules": {
    "arrow-parens": [
      "error",
      "always"
    ],
    "no-console": [
      0
    ],
    "max-len": [
      0,
      100,
      2,
      {
        "ignoreUrls": true,
        "ignoreComments": false,
        "ignoreRegExpLiterals": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "no-continue": [
      0
    ],
    "no-restricted-syntax": [
      0,
      {
        "selector": "ForInStatement",
        "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
      },
      {
        "selector": "ForOfStatement",
        "message": "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations."
      },
      {
        "selector": "LabeledStatement",
        "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
      },
      {
        "selector": "WithStatement",
        "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
      }
    ],
    "no-prototype-builtins": [
      0
    ],
    "import/prefer-default-export": [
      0
    ],
    "global-require": [
      0
    ],
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "all",
        "arrowParens": "always"
      }
    ],
    "arrow-body-style": [
      "off",
      "as-needed",
      {
        "requireReturnForObjectLiteral": false
      }
    ],
    "prefer-arrow-callback": [
      "off",
      {
        "allowNamedFunctions": false,
        "allowUnboundThis": true
      }
    ],
    "curly": [
      0,
      "multi-line"
    ],
    "lines-around-comment": [
      0
    ],
    "no-confusing-arrow": [
      0,
      {
        "allowParens": true
      }
    ],
    "no-mixed-operators": [
      0,
      {
        "groups": [
          [
            "%",
            "**"
          ],
          [
            "%",
            "+"
          ],
          [
            "%",
            "-"
          ],
          [
            "%",
            "*"
          ],
          [
            "%",
            "/"
          ],
          [
            "/",
            "*"
          ],
          [
            "&",
            "|",
            "<<",
            ">>",
            ">>>"
          ],
          [
            "==",
            "!=",
            "===",
            "!=="
          ],
          [
            "&&",
            "||"
          ]
        ],
        "allowSamePrecedence": false
      }
    ],
    "no-tabs": [
      0
    ],
    "no-unexpected-multiline": [
      0
    ],
    "quotes": [
      0,
      "single",
      {
        "avoidEscape": true
      }
    ],
    "array-bracket-newline": [
      "off",
      "consistent"
    ],
    "array-bracket-spacing": [
      "off",
      "never"
    ],
    "array-element-newline": [
      "off",
      {
        "multiline": true,
        "minItems": 3
      }
    ],
    "arrow-spacing": [
      "off",
      {
        "before": true,
        "after": true
      }
    ],
    "block-spacing": [
      "off",
      "always"
    ],
    "brace-style": [
      "off",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "comma-dangle": [
      "off",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "always-multiline"
      }
    ],
    "comma-spacing": [
      "off",
      {
        "before": false,
        "after": true
      }
    ],
    "comma-style": [
      "off",
      "last",
      {
        "exceptions": {
          "ArrayExpression": false,
          "ArrayPattern": false,
          "ArrowFunctionExpression": false,
          "CallExpression": false,
          "FunctionDeclaration": false,
          "FunctionExpression": false,
          "ImportDeclaration": false,
          "ObjectExpression": false,
          "ObjectPattern": false,
          "VariableDeclaration": false,
          "NewExpression": false
        }
      }
    ],
    "computed-property-spacing": [
      "off",
      "never"
    ],
    "dot-location": [
      "off",
      "property"
    ],
    "eol-last": [
      "off",
      "always"
    ],
    "func-call-spacing": [
      "off",
      "never"
    ],
    "function-call-argument-newline": [
      "off",
      "consistent"
    ],
    "function-paren-newline": [
      "off",
      "consistent"
    ],
    "generator-star": [
      "off"
    ],
    "generator-star-spacing": [
      "off",
      {
        "before": false,
        "after": true
      }
    ],
    "implicit-arrow-linebreak": [
      "off",
      "beside"
    ],
    "indent": [
      "off",
      2,
      {
        "SwitchCase": 1,
        "VariableDeclarator": 1,
        "outerIIFEBody": 1,
        "FunctionDeclaration": {
          "parameters": 1,
          "body": 1
        },
        "FunctionExpression": {
          "parameters": 1,
          "body": 1
        },
        "CallExpression": {
          "arguments": 1
        },
        "ArrayExpression": 1,
        "ObjectExpression": 1,
        "ImportDeclaration": 1,
        "flatTernaryExpressions": false,
        "ignoredNodes": [
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXFragment",
          "JSXOpeningFragment",
          "JSXClosingFragment",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild"
        ],
        "ignoreComments": false,
        "offsetTernaryExpressions": false
      }
    ],
    "jsx-quotes": [
      "off",
      "prefer-double"
    ],
    "key-spacing": [
      "off",
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "keyword-spacing": [
      "off",
      {
        "before": true,
        "after": true,
        "overrides": {
          "return": {
            "after": true
          },
          "throw": {
            "after": true
          },
          "case": {
            "after": true
          }
        }
      }
    ],
    "linebreak-style": [
      "off",
      "unix"
    ],
    "multiline-ternary": [
      "off",
      "never"
    ],
    "newline-per-chained-call": [
      "off",
      {
        "ignoreChainWithDepth": 4
      }
    ],
    "new-parens": [
      "off"
    ],
    "no-arrow-condition": [
      "off"
    ],
    "no-comma-dangle": [
      "off"
    ],
    "no-extra-parens": [
      "off",
      "all",
      {
        "conditionalAssign": true,
        "nestedBinaryExpressions": false,
        "returnAssign": false,
        "ignoreJSX": "all",
        "enforceForArrowConditionals": false
      }
    ],
    "no-extra-semi": [
      "off"
    ],
    "no-floating-decimal": [
      "off"
    ],
    "no-mixed-spaces-and-tabs": [
      "off"
    ],
    "no-multi-spaces": [
      "off",
      {
        "ignoreEOLComments": false
      }
    ],
    "no-multiple-empty-lines": [
      "off",
      {
        "max": 1,
        "maxBOF": 0,
        "maxEOF": 0
      }
    ],
    "no-reserved-keys": [
      "off"
    ],
    "no-space-before-semi": [
      "off"
    ],
    "no-trailing-spaces": [
      "off",
      {
        "skipBlankLines": false,
        "ignoreComments": false
      }
    ],
    "no-whitespace-before-property": [
      "off"
    ],
    "no-wrap-func": [
      "off"
    ],
    "nonblock-statement-body-position": [
      "off",
      "beside",
      {
        "overrides": {}
      }
    ],
    "object-curly-newline": [
      "off",
      {
        "ObjectExpression": {
          "minProperties": 4,
          "multiline": true,
          "consistent": true
        },
        "ObjectPattern": {
          "minProperties": 4,
          "multiline": true,
          "consistent": true
        },
        "ImportDeclaration": {
          "minProperties": 4,
          "multiline": true,
          "consistent": true
        },
        "ExportDeclaration": {
          "minProperties": 4,
          "multiline": true,
          "consistent": true
        }
      }
    ],
    "object-curly-spacing": [
      "off",
      "always"
    ],
    "object-property-newline": [
      "off",
      {
        "allowAllPropertiesOnSameLine": true,
        "allowMultiplePropertiesPerLine": false
      }
    ],
    "one-var-declaration-per-line": [
      "off",
      "always"
    ],
    "operator-linebreak": [
      "off",
      "before",
      {
        "overrides": {
          "=": "none"
        }
      }
    ],
    "padded-blocks": [
      "off",
      {
        "blocks": "never",
        "classes": "never",
        "switches": "never"
      },
      {
        "allowSingleLineBlocks": true
      }
    ],
    "quote-props": [
      "off",
      "as-needed",
      {
        "keywords": false,
        "unnecessary": true,
        "numbers": false
      }
    ],
    "rest-spread-spacing": [
      "off",
      "never"
    ],
    "semi": [
      "off",
      "always"
    ],
    "semi-spacing": [
      "off",
      {
        "before": false,
        "after": true
      }
    ],
    "semi-style": [
      "off",
      "last"
    ],
    "space-after-function-name": [
      "off"
    ],
    "space-after-keywords": [
      "off"
    ],
    "space-before-blocks": [
      "off"
    ],
    "space-before-function-paren": [
      "off",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "space-before-function-parentheses": [
      "off"
    ],
    "space-before-keywords": [
      "off"
    ],
    "space-in-brackets": [
      "off"
    ],
    "space-in-parens": [
      "off",
      "never"
    ],
    "space-infix-ops": [
      "off"
    ],
    "space-return-throw-case": [
      "off"
    ],
    "space-unary-ops": [
      "off",
      {
        "words": true,
        "nonwords": false,
        "overrides": {}
      }
    ],
    "space-unary-word-ops": [
      "off"
    ],
    "switch-colon-spacing": [
      "off",
      {
        "after": true,
        "before": false
      }
    ],
    "template-curly-spacing": [
      "off"
    ],
    "template-tag-spacing": [
      "off",
      "never"
    ],
    "unicode-bom": [
      "off",
      "never"
    ],
    "wrap-iife": [
      "off",
      "outside",
      {
        "functionPrototypeMethods": false
      }
    ],
    "wrap-regex": [
      "off"
    ],
    "yield-star-spacing": [
      "off",
      "after"
    ],
    "indent-legacy": [
      "off"
    ],
    "no-spaced-func": [
      "off"
    ],
    "strict": [
      "error",
      "never"
    ],
    "import/no-unresolved": [
      "error",
      {
        "commonjs": true,
        "caseSensitive": true
      }
    ],
    "import/named": [
      "error"
    ],
    "import/default": [
      "off"
    ],
    "import/namespace": [
      "off"
    ],
    "import/export": [
      "error"
    ],
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": [
      "error"
    ],
    "import/no-deprecated": [
      "off"
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "test/**",
          "tests/**",
          "spec/**",
          "**/__tests__/**",
          "**/__mocks__/**",
          "test.{js,jsx}",
          "test-*.{js,jsx}",
          "**/*{.,_}{test,spec}.{js,jsx}",
          "**/jest.config.js",
          "**/jest.setup.js",
          "**/vue.config.js",
          "**/webpack.config.js",
          "**/webpack.config.*.js",
          "**/rollup.config.js",
          "**/rollup.config.*.js",
          "**/gulpfile.js",
          "**/gulpfile.*.js",
          "**/Gruntfile{,.js}",
          "**/protractor.conf.js",
          "**/protractor.conf.*.js",
          "**/karma.conf.js"
        ],
        "optionalDependencies": false
      }
    ],
    "import/no-mutable-exports": [
      "error"
    ],
    "import/no-commonjs": [
      "off"
    ],
    "import/no-amd": [
      "error"
    ],
    "import/no-nodejs-modules": [
      "off"
    ],
    "import/first": [
      "error"
    ],
    "import/imports-first": [
      "off"
    ],
    "import/no-duplicates": [
      "error"
    ],
    "import/no-namespace": [
      "off"
    ],
    "import/extensions": 0,
    "import/order": [
      "error",
      {
        "groups": [
          [
            "builtin",
            "external",
            "internal"
          ]
        ]
      }
    ],
    "import/newline-after-import": [
      "error"
    ],
    "import/no-restricted-paths": [
      "off"
    ],
    "import/max-dependencies": [
      "off",
      {
        "max": 10
      }
    ],
    "import/no-absolute-path": [
      "error"
    ],
    "import/no-dynamic-require": [
      "error"
    ],
    "import/no-internal-modules": [
      "off",
      {
        "allow": []
      }
    ],
    "import/unambiguous": [
      "off"
    ],
    "import/no-webpack-loader-syntax": [
      "error"
    ],
    "import/no-unassigned-import": [
      "off"
    ],
    "import/no-named-default": [
      "error"
    ],
    "import/no-anonymous-default-export": [
      "off",
      {
        "allowArray": false,
        "allowArrowFunction": false,
        "allowAnonymousClass": false,
        "allowAnonymousFunction": false,
        "allowLiteral": false,
        "allowObject": false
      }
    ],
    "import/exports-last": [
      "off"
    ],
    "import/group-exports": [
      "off"
    ],
    "import/no-default-export": [
      "off"
    ],
    "import/no-named-export": [
      "off"
    ],
    "import/no-self-import": [
      "error"
    ],
    "import/no-cycle": [
      "error",
      {
        "maxDepth": "∞",
        "ignoreExternal": false
      }
    ],
    "import/no-useless-path-segments": [
      "error",
      {
        "commonjs": true
      }
    ],
    "import/dynamic-import-chunkname": [
      "off",
      {
        "importFunctions": [],
        "webpackChunknameFormat": "[0-9a-zA-Z-_/.]+"
      }
    ],
    "import/no-relative-parent-imports": [
      "off"
    ],
    "import/no-unused-modules": [
      "off",
      {
        "ignoreExports": [],
        "missingExports": true,
        "unusedExports": true
      }
    ],
    "constructor-super": [
      "error"
    ],
    "no-class-assign": [
      "error"
    ],
    "no-const-assign": [
      "error"
    ],
    "no-dupe-class-members": [
      "error"
    ],
    "no-duplicate-imports": [
      "off"
    ],
    "no-new-symbol": [
      "error"
    ],
    "no-restricted-exports": [
      "off",
      {
        "restrictedNamedExports": [
          "default",
          "then"
        ]
      }
    ],
    "no-restricted-imports": [
      "off",
      {
        "paths": [],
        "patterns": []
      }
    ],
    "no-this-before-super": [
      "error"
    ],
    "no-useless-computed-key": [
      "error"
    ],
    "no-useless-constructor": [
      "error"
    ],
    "no-useless-rename": [
      "error",
      {
        "ignoreDestructuring": false,
        "ignoreImport": false,
        "ignoreExport": false
      }
    ],
    "no-var": [
      "error"
    ],
    "object-shorthand": [
      "error",
      "always",
      {
        "ignoreConstructors": false,
        "avoidQuotes": true
      }
    ],
    "prefer-const": [
      "error",
      {
        "destructuring": "any",
        "ignoreReadBeforeAssign": true
      }
    ],
    "prefer-destructuring": [
      "error",
      {
        "VariableDeclarator": {
          "array": false,
          "object": true
        },
        "AssignmentExpression": {
          "array": true,
          "object": false
        }
      },
      {
        "enforceForRenamedProperties": false
      }
    ],
    "prefer-numeric-literals": [
      "error"
    ],
    "prefer-reflect": [
      "off"
    ],
    "prefer-rest-params": [
      "error"
    ],
    "prefer-spread": [
      "error"
    ],
    "prefer-template": [
      "error"
    ],
    "require-yield": [
      "error"
    ],
    "sort-imports": [
      "off",
      {
        "ignoreCase": false,
        "ignoreDeclarationSort": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": [
          "none",
          "all",
          "multiple",
          "single"
        ]
      }
    ],
    "symbol-description": [
      "error"
    ],
    "init-declarations": [
      "off"
    ],
    "no-catch-shadow": [
      "off"
    ],
    "no-delete-var": [
      "error"
    ],
    "no-label-var": [
      "error"
    ],
    "no-restricted-globals": [
      "error",
      {
        "name": "isFinite",
        "message": "Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite"
      },
      {
        "name": "isNaN",
        "message": "Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan"
      },
      "addEventListener",
      "blur",
      "close",
      "closed",
      "confirm",
      "defaultStatus",
      "defaultstatus",
      "event",
      "external",
      "find",
      "focus",
      "frameElement",
      "frames",
      "history",
      "innerHeight",
      "innerWidth",
      "length",
      "location",
      "locationbar",
      "menubar",
      "moveBy",
      "moveTo",
      "name",
      "onblur",
      "onerror",
      "onfocus",
      "onload",
      "onresize",
      "onunload",
      "open",
      "opener",
      "opera",
      "outerHeight",
      "outerWidth",
      "pageXOffset",
      "pageYOffset",
      "parent",
      "print",
      "removeEventListener",
      "resizeBy",
      "resizeTo",
      "screen",
      "screenLeft",
      "screenTop",
      "screenX",
      "screenY",
      "scroll",
      "scrollbars",
      "scrollBy",
      "scrollTo",
      "scrollX",
      "scrollY",
      "self",
      "status",
      "statusbar",
      "stop",
      "toolbar",
      "top"
    ],
    "no-shadow": [
      "error"
    ],
    "no-shadow-restricted-names": [
      "error"
    ],
    "no-undef": [
      "error"
    ],
    "no-undef-init": [
      "error"
    ],
    "no-undefined": [
      "off"
    ],
    "no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": true
      }
    ],
    "no-use-before-define": [
      "error",
      {
        "functions": true,
        "classes": true,
        "variables": true
      }
    ],
    "camelcase": [
      "error",
      {
        "properties": "never",
        "ignoreDestructuring": false,
        "ignoreImports": false,
        "ignoreGlobals": false
      }
    ],
    "capitalized-comments": [
      "off",
      "never",
      {
        "line": {
          "ignorePattern": ".*",
          "ignoreInlineComments": true,
          "ignoreConsecutiveComments": true
        },
        "block": {
          "ignorePattern": ".*",
          "ignoreInlineComments": true,
          "ignoreConsecutiveComments": true
        }
      }
    ],
    "consistent-this": [
      "off"
    ],
    "func-name-matching": [
      "off",
      "always",
      {
        "includeCommonJSModuleExports": false,
        "considerPropertyDescriptor": true
      }
    ],
    "func-names": [
      "warn"
    ],
    "func-style": [
      "off",
      "expression"
    ],
    "id-blacklist": [
      "off"
    ],
    "id-denylist": [
      "off"
    ],
    "id-length": [
      "off"
    ],
    "id-match": [
      "off"
    ],
    "line-comment-position": [
      "off",
      {
        "position": "above",
        "ignorePattern": "",
        "applyDefaultPatterns": true
      }
    ],
    "lines-between-class-members": [
      "error",
      "always",
      {
        "exceptAfterSingleLine": false
      }
    ],
    "lines-around-directive": [
      "error",
      {
        "before": "always",
        "after": "always"
      }
    ],
    "max-depth": [
      "off",
      4
    ],
    "max-lines": [
      "off",
      {
        "max": 300,
        "skipBlankLines": true,
        "skipComments": true
      }
    ],
    "max-lines-per-function": [
      "off",
      {
        "max": 50,
        "skipBlankLines": true,
        "skipComments": true,
        "IIFEs": true
      }
    ],
    "max-nested-callbacks": [
      "off"
    ],
    "max-params": [
      "off",
      3
    ],
    "max-statements": [
      "off",
      10
    ],
    "max-statements-per-line": [
      "off",
      {
        "max": 1
      }
    ],
    "multiline-comment-style": [
      "off",
      "starred-block"
    ],
    "new-cap": [
      "error",
      {
        "newIsCap": true,
        "newIsCapExceptions": [],
        "capIsNew": false,
        "capIsNewExceptions": [
          "Immutable.Map",
          "Immutable.Set",
          "Immutable.List"
        ],
        "properties": true
      }
    ],
    "newline-after-var": [
      "off"
    ],
    "newline-before-return": [
      "off"
    ],
    "no-array-constructor": [
      "error"
    ],
    "no-bitwise": [
      "error"
    ],
    "no-inline-comments": [
      "off"
    ],
    "no-lonely-if": [
      "error"
    ],
    "no-multi-assign": [
      "error"
    ],
    "no-negated-condition": [
      "off"
    ],
    "no-nested-ternary": [
      "error"
    ],
    "no-new-object": [
      "error"
    ],
    "no-plusplus": [
      "error"
    ],
    "no-ternary": [
      "off"
    ],
    "no-underscore-dangle": [
      "error",
      {
        "allow": [],
        "allowAfterThis": false,
        "allowAfterSuper": false,
        "enforceInMethodNames": true,
        "allowAfterThisConstructor": false,
        "allowFunctionParams": true
      }
    ],
    "no-unneeded-ternary": [
      "error",
      {
        "defaultAssignment": false
      }
    ],
    "one-var": [
      "error",
      "never"
    ],
    "operator-assignment": [
      "error",
      "always"
    ],
    "padding-line-between-statements": [
      "off"
    ],
    "prefer-exponentiation-operator": [
      "off"
    ],
    "prefer-object-spread": [
      "error"
    ],
    "require-jsdoc": [
      "off"
    ],
    "sort-keys": [
      "off",
      "asc",
      {
        "caseSensitive": false,
        "natural": true
      }
    ],
    "sort-vars": [
      "off"
    ],
    "spaced-comment": [
      "error",
      "always",
      {
        "line": {
          "exceptions": [
            "-",
            "+"
          ],
          "markers": [
            "=",
            "!",
            "/"
          ]
        },
        "block": {
          "exceptions": [
            "-",
            "+"
          ],
          "markers": [
            "=",
            "!",
            ":",
            "::"
          ],
          "balanced": true
        }
      }
    ],
    "callback-return": [
      "off"
    ],
    "handle-callback-err": [
      "off"
    ],
    "no-buffer-constructor": [
      "error"
    ],
    "no-mixed-requires": [
      "off",
      false
    ],
    "no-new-require": [
      "error"
    ],
    "no-path-concat": [
      "error"
    ],
    "no-process-env": [
      "off"
    ],
    "no-process-exit": [
      "off"
    ],
    "no-restricted-modules": [
      "off"
    ],
    "no-sync": [
      "off"
    ],
    "for-direction": [
      "error"
    ],
    "getter-return": [
      "error",
      {
        "allowImplicit": true
      }
    ],
    "no-async-promise-executor": [
      "error"
    ],
    "no-await-in-loop": [
      "error"
    ],
    "no-compare-neg-zero": [
      "error"
    ],
    "no-cond-assign": [
      "error",
      "always"
    ],
    "no-constant-condition": [
      "warn"
    ],
    "no-control-regex": [
      "error"
    ],
    "no-debugger": [
      "error"
    ],
    "no-dupe-args": [
      "error"
    ],
    "no-dupe-else-if": [
      "off"
    ],
    "no-dupe-keys": [
      "error"
    ],
    "no-duplicate-case": [
      "error"
    ],
    "no-empty": [
      "error"
    ],
    "no-empty-character-class": [
      "error"
    ],
    "no-ex-assign": [
      "error"
    ],
    "no-extra-boolean-cast": [
      "error"
    ],
    "no-func-assign": [
      "error"
    ],
    "no-import-assign": [
      "off"
    ],
    "no-inner-declarations": [
      "error"
    ],
    "no-invalid-regexp": [
      "error"
    ],
    "no-irregular-whitespace": [
      "error"
    ],
    "no-loss-of-precision": [
      "off"
    ],
    "no-misleading-character-class": [
      "error"
    ],
    "no-obj-calls": [
      "error"
    ],
    "no-promise-executor-return": [
      "off"
    ],
    "no-regex-spaces": [
      "error"
    ],
    "no-setter-return": [
      "off"
    ],
    "no-sparse-arrays": [
      "error"
    ],
    "no-template-curly-in-string": [
      "error"
    ],
    "no-unreachable": [
      "error"
    ],
    "no-unreachable-loop": [
      "off",
      {
        "ignore": []
      }
    ],
    "no-unsafe-finally": [
      "error"
    ],
    "no-unsafe-negation": [
      "error"
    ],
    "no-useless-backreference": [
      "off"
    ],
    "no-negated-in-lhs": [
      "off"
    ],
    "require-atomic-updates": [
      "off"
    ],
    "use-isnan": [
      "error"
    ],
    "valid-jsdoc": [
      "off"
    ],
    "valid-typeof": [
      "error",
      {
        "requireStringLiterals": true
      }
    ],
    "accessor-pairs": [
      "off"
    ],
    "array-callback-return": [
      "error",
      {
        "allowImplicit": true,
        "checkForEach": false
      }
    ],
    "block-scoped-var": [
      "error"
    ],
    "complexity": [
      "off",
      11
    ],
    "class-methods-use-this": [
      "error",
      {
        "exceptMethods": []
      }
    ],
    "consistent-return": [
      "error"
    ],
    "default-case": [
      "error",
      {
        "commentPattern": "^no default$"
      }
    ],
    "default-case-last": [
      "off"
    ],
    "default-param-last": [
      "off"
    ],
    "dot-notation": [
      "error",
      {
        "allowKeywords": true,
        "allowPattern": ""
      }
    ],
    "eqeqeq": [
      "error",
      "always",
      {
        "null": "ignore"
      }
    ],
    "grouped-accessor-pairs": [
      "off"
    ],
    "guard-for-in": [
      "error"
    ],
    "max-classes-per-file": [
      "error",
      1
    ],
    "no-alert": [
      "warn"
    ],
    "no-caller": [
      "error"
    ],
    "no-case-declarations": [
      "error"
    ],
    "no-constructor-return": [
      "off"
    ],
    "no-div-regex": [
      "off"
    ],
    "no-else-return": [
      "error",
      {
        "allowElseIf": false
      }
    ],
    "no-empty-function": [
      "error",
      {
        "allow": [
          "arrowFunctions",
          "functions",
          "methods"
        ]
      }
    ],
    "no-empty-pattern": [
      "error"
    ],
    "no-eq-null": [
      "off"
    ],
    "no-eval": [
      "error"
    ],
    "no-extend-native": [
      "error"
    ],
    "no-extra-bind": [
      "error"
    ],
    "no-extra-label": [
      "error"
    ],
    "no-fallthrough": [
      "error"
    ],
    "no-global-assign": [
      "error",
      {
        "exceptions": []
      }
    ],
    "no-native-reassign": [
      "off"
    ],
    "no-implicit-coercion": [
      "off",
      {
        "boolean": false,
        "number": true,
        "string": true,
        "allow": []
      }
    ],
    "no-implicit-globals": [
      "off"
    ],
    "no-implied-eval": [
      "error"
    ],
    "no-invalid-this": [
      "off"
    ],
    "no-iterator": [
      "error"
    ],
    "no-labels": [
      "error",
      {
        "allowLoop": false,
        "allowSwitch": false
      }
    ],
    "no-lone-blocks": [
      "error"
    ],
    "no-loop-func": [
      "error"
    ],
    "no-magic-numbers": [
      "off",
      {
        "ignore": [],
        "ignoreArrayIndexes": true,
        "enforceConst": true,
        "detectObjects": false
      }
    ],
    "no-multi-str": [
      "error"
    ],
    "no-new": [
      "error"
    ],
    "no-new-func": [
      "error"
    ],
    "no-new-wrappers": [
      "error"
    ],
    "no-octal": [
      "error"
    ],
    "no-octal-escape": [
      "error"
    ],
    "no-param-reassign": [
      "error",
      {
        "props": true,
        "ignorePropertyModificationsFor": [
          "acc",
          "accumulator",
          "e",
          "ctx",
          "context",
          "req",
          "request",
          "res",
          "response",
          "$scope",
          "staticContext"
        ]
      }
    ],
    "no-proto": [
      "error"
    ],
    "no-redeclare": [
      "error"
    ],
    "no-restricted-properties": [
      "error",
      {
        "object": "arguments",
        "property": "callee",
        "message": "arguments.callee is deprecated"
      },
      {
        "object": "global",
        "property": "isFinite",
        "message": "Please use Number.isFinite instead"
      },
      {
        "object": "self",
        "property": "isFinite",
        "message": "Please use Number.isFinite instead"
      },
      {
        "object": "window",
        "property": "isFinite",
        "message": "Please use Number.isFinite instead"
      },
      {
        "object": "global",
        "property": "isNaN",
        "message": "Please use Number.isNaN instead"
      },
      {
        "object": "self",
        "property": "isNaN",
        "message": "Please use Number.isNaN instead"
      },
      {
        "object": "window",
        "property": "isNaN",
        "message": "Please use Number.isNaN instead"
      },
      {
        "property": "__defineGetter__",
        "message": "Please use Object.defineProperty instead."
      },
      {
        "property": "__defineSetter__",
        "message": "Please use Object.defineProperty instead."
      },
      {
        "object": "Math",
        "property": "pow",
        "message": "Use the exponentiation operator (**) instead."
      }
    ],
    "no-return-assign": [
      "error",
      "always"
    ],
    "no-return-await": [
      "error"
    ],
    "no-script-url": [
      "error"
    ],
    "no-self-assign": [
      "error",
      {
        "props": true
      }
    ],
    "no-self-compare": [
      "error"
    ],
    "no-sequences": [
      "error"
    ],
    "no-throw-literal": [
      "error"
    ],
    "no-unmodified-loop-condition": [
      "off"
    ],
    "no-unused-expressions": [
      "error",
      {
        "allowShortCircuit": false,
        "allowTernary": false,
        "allowTaggedTemplates": false,
        "enforceForJSX": false
      }
    ],
    "no-unused-labels": [
      "error"
    ],
    "no-useless-call": [
      "off"
    ],
    "no-useless-catch": [
      "error"
    ],
    "no-useless-concat": [
      "error"
    ],
    "no-useless-escape": [
      "error"
    ],
    "no-useless-return": [
      "error"
    ],
    "no-void": [
      "error"
    ],
    "no-warning-comments": [
      "off",
      {
        "terms": [
          "todo",
          "fixme",
          "xxx"
        ],
        "location": "start"
      }
    ],
    "no-with": [
      "error"
    ],
    "prefer-promise-reject-errors": [
      "error",
      {
        "allowEmptyReject": true
      }
    ],
    "prefer-named-capture-group": [
      "off"
    ],
    "prefer-regex-literals": [
      "off"
    ],
    "radix": [
      "error"
    ],
    "require-await": [
      "off"
    ],
    "require-unicode-regexp": [
      "off"
    ],
    "vars-on-top": [
      "error"
    ],
    "yoda": [
      "error"
    ],
    "react/react-in-jsx-scope": 0,
    "react/display-name": 0
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".mjs",
          ".js",
          ".json"
        ]
      }
    },
    "import/extensions": [
      ".js",
      ".mjs",
      ".jsx"
    ],
    "import/core-modules": [],
    "import/ignore": [
      "node_modules",
      "\\.(coffee|scss|css|less|hbs|svg|json)$"
    ],
    "react": {
      "version": "detect"
    }
  },
  "ignorePatterns": [],
  "extends": [
    "plugin:react/recommended",
    "plugin:react/recommended"
  ]
};