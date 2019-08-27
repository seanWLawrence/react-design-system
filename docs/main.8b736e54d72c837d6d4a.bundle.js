(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    105: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return joinStyles;
      });
      __webpack_require__(29),
        __webpack_require__(30),
        __webpack_require__(36),
        __webpack_require__(515),
        __webpack_require__(77),
        __webpack_require__(37),
        __webpack_require__(24),
        __webpack_require__(516),
        __webpack_require__(233),
        __webpack_require__(41),
        __webpack_require__(42),
        __webpack_require__(20),
        __webpack_require__(91),
        __webpack_require__(38),
        __webpack_require__(33),
        __webpack_require__(0);
      var joinStyles = function() {
        for (
          var _len = arguments.length, classNames = Array(_len), _key = 0;
          _key < _len;
          _key++
        )
          classNames[_key] = arguments[_key];
        return classNames.filter(Boolean).join(' ');
      };
    },
    14: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        ),
        _react_design_system_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          105
        );
      __webpack_exports__.a = function(_a) {
        var children = _a.children,
          _b = _a.variants,
          _c = (void 0 === _b ? { type: 'h6' } : _b).type,
          typeVariant = void 0 === _c ? 'h6' : _c,
          props = tslib__WEBPACK_IMPORTED_MODULE_0__.b(_a, [
            'children',
            'variants',
          ]),
          className = Object(
            _react_design_system_utils__WEBPACK_IMPORTED_MODULE_2__.a
          )('rds-Heading__' + typeVariant, props.className),
          H1 = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'h1',
            tslib__WEBPACK_IMPORTED_MODULE_0__.a({}, props, {
              className: className,
            }),
            children
          );
        switch (typeVariant) {
          case 'h1':
            return H1;
          case 'h2':
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'h2',
              tslib__WEBPACK_IMPORTED_MODULE_0__.a({}, props, {
                className: className,
              }),
              children
            );
          case 'h3':
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'h3',
              tslib__WEBPACK_IMPORTED_MODULE_0__.a({}, props, {
                className: className,
              }),
              children
            );
          case 'h4':
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'h4',
              tslib__WEBPACK_IMPORTED_MODULE_0__.a({}, props, {
                className: className,
              }),
              children
            );
          case 'h5':
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'h5',
              tslib__WEBPACK_IMPORTED_MODULE_0__.a({}, props, {
                className: className,
              }),
              children
            );
          case 'h6':
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'h6',
              tslib__WEBPACK_IMPORTED_MODULE_0__.a({}, props, {
                className: className,
              }),
              children
            );
          default:
            return H1;
        }
      };
    },
    2: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        ),
        _react_design_system_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          105
        );
      __webpack_exports__.a = function(_a) {
        var children = _a.children,
          _b = _a.variants,
          _c =
            void 0 === _b
              ? { style: 'solid', shape: 'squared', type: 'primary' }
              : _b,
          _d = _c.style,
          styleVariant = void 0 === _d ? 'solid' : _d,
          _e = _c.shape,
          shapeVariant = void 0 === _e ? 'squared' : _e,
          _f = _c.type,
          typeVariant = void 0 === _f ? 'primary' : _f,
          props = tslib__WEBPACK_IMPORTED_MODULE_0__.b(_a, [
            'children',
            'variants',
          ]);
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'button',
          tslib__WEBPACK_IMPORTED_MODULE_0__.a({}, props, {
            className: Object(
              _react_design_system_utils__WEBPACK_IMPORTED_MODULE_2__.a
            )(
              'rds-Button__button--' +
                styleVariant +
                '-' +
                typeVariant +
                '-' +
                shapeVariant,
              props.className
            ),
          }),
          children
        );
      };
    },
    237: function(module, exports, __webpack_require__) {
      __webpack_require__(238),
        __webpack_require__(342),
        (module.exports = __webpack_require__(343));
    },
    343: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__(31),
            __webpack_require__(24),
            __webpack_require__(20),
            __webpack_require__(32),
            __webpack_require__(33);
          var _storybook_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              11
            ),
            _storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              236
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
              34
            ),
            req = __webpack_require__(511);
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addDecorator)(
            _storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_6__.withA11y
          ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addDecorator)(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_7__.withKnobs
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)(
              function loadStories() {
                req.keys().forEach(function(filename) {
                  return req(filename);
                });
              },
              module
            );
        }.call(this, __webpack_require__(119)(module));
    },
    511: function(module, exports, __webpack_require__) {
      var map = {
        './button/src/index.stories.tsx': 512,
        './heading/src/index.stories.tsx': 517,
        './input/src/index.stories.tsx': 520,
      };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 511);
    },
    512: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              11
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              34
            ),
            ___WEBPACK_IMPORTED_MODULE_4__ =
              (__webpack_require__(513), __webpack_require__(2)),
            buttonStories = Object(
              _storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf
            )('Components/Button', module),
            Row = function(_a) {
              var children = _a.children,
                title = _a.title;
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { style: { margin: '30px 20px' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'h4',
                  {
                    style: {
                      fontFamily: 'sans-serif',
                      marginBottom: 10,
                      color: '#333',
                    },
                  },
                  title
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  {
                    style: {
                      display: 'flex',
                      justifyContent: 'space-between',
                      maxWidth: 300,
                      marginBottom: 0,
                    },
                  },
                  children
                )
              );
            },
            Margin = function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { style: { marginBottom: 40 } }
              );
            };
          buttonStories.add(
            'All',
            function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  Row,
                  { title: 'Primary' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    ___WEBPACK_IMPORTED_MODULE_4__.a,
                    {
                      variants: {
                        type: 'primary',
                        shape: 'squared',
                        style: 'solid',
                      },
                    },
                    'Save'
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    ___WEBPACK_IMPORTED_MODULE_4__.a,
                    {
                      variants: {
                        type: 'primary',
                        style: 'outlined',
                        shape: 'squared',
                      },
                    },
                    'Learn more'
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    ___WEBPACK_IMPORTED_MODULE_4__.a,
                    {
                      variants: {
                        type: 'primary',
                        style: 'text',
                        shape: 'squared',
                      },
                    },
                    'Learn more'
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  Row,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    ___WEBPACK_IMPORTED_MODULE_4__.a,
                    {
                      variants: {
                        type: 'primary',
                        shape: 'rounded',
                        style: 'solid',
                      },
                    },
                    'Save'
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    ___WEBPACK_IMPORTED_MODULE_4__.a,
                    {
                      variants: {
                        type: 'primary',
                        style: 'outlined',
                        shape: 'rounded',
                      },
                    },
                    'Learn more'
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    ___WEBPACK_IMPORTED_MODULE_4__.a,
                    {
                      variants: {
                        type: 'primary',
                        style: 'text',
                        shape: 'rounded',
                      },
                    },
                    'Learn more'
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  Margin,
                  null
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  Row,
                  { title: 'Secondary' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    ___WEBPACK_IMPORTED_MODULE_4__.a,
                    {
                      variants: {
                        type: 'secondary',
                        shape: 'squared',
                        style: 'solid',
                      },
                    },
                    'Cancel'
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    ___WEBPACK_IMPORTED_MODULE_4__.a,
                    {
                      variants: {
                        type: 'secondary',
                        style: 'outlined',
                        shape: 'squared',
                      },
                    },
                    'Cancel'
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    ___WEBPACK_IMPORTED_MODULE_4__.a,
                    {
                      variants: {
                        type: 'secondary',
                        style: 'text',
                        shape: 'squared',
                      },
                    },
                    'Learn more'
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  Row,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    ___WEBPACK_IMPORTED_MODULE_4__.a,
                    {
                      variants: {
                        type: 'secondary',
                        shape: 'rounded',
                        style: 'solid',
                      },
                    },
                    'Cancel'
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    ___WEBPACK_IMPORTED_MODULE_4__.a,
                    {
                      variants: {
                        type: 'secondary',
                        style: 'outlined',
                        shape: 'rounded',
                      },
                    },
                    'Cancel'
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    ___WEBPACK_IMPORTED_MODULE_4__.a,
                    {
                      variants: {
                        type: 'secondary',
                        style: 'text',
                        shape: 'rounded',
                      },
                    },
                    'Learn more'
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  Margin,
                  null
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  Row,
                  { title: 'Destructive' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    ___WEBPACK_IMPORTED_MODULE_4__.a,
                    {
                      variants: {
                        type: 'destructive',
                        shape: 'squared',
                        style: 'solid',
                      },
                    },
                    'Delete'
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    ___WEBPACK_IMPORTED_MODULE_4__.a,
                    {
                      variants: {
                        type: 'destructive',
                        style: 'outlined',
                        shape: 'squared',
                      },
                    },
                    'Reset'
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    ___WEBPACK_IMPORTED_MODULE_4__.a,
                    {
                      variants: {
                        type: 'destructive',
                        style: 'text',
                        shape: 'squared',
                      },
                    },
                    'Dismiss'
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  Row,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    ___WEBPACK_IMPORTED_MODULE_4__.a,
                    {
                      variants: {
                        type: 'destructive',
                        shape: 'rounded',
                        style: 'solid',
                      },
                    },
                    'Delete'
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    ___WEBPACK_IMPORTED_MODULE_4__.a,
                    {
                      variants: {
                        type: 'destructive',
                        style: 'outlined',
                        shape: 'rounded',
                      },
                    },
                    'Reset'
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    ___WEBPACK_IMPORTED_MODULE_4__.a,
                    {
                      variants: {
                        type: 'destructive',
                        style: 'text',
                        shape: 'rounded',
                      },
                    },
                    'Dismiss'
                  )
                )
              );
            },
            { info: { inline: !0 } }
          ),
            buttonStories.add(
              'With knobs',
              function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  {
                    variants: {
                      type: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select
                      )(
                        'Color',
                        {
                          Primary: 'primary',
                          Secondary: 'secondary',
                          Destructive: 'destructive',
                        },
                        'primary'
                      ),
                      style: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select
                      )(
                        'Style',
                        { Solid: 'solid', Outlined: 'outlined', Text: 'text' },
                        'solid'
                      ),
                      shape: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select
                      )(
                        'Shape',
                        { Squared: 'squared', Rounded: 'rounded' },
                        'squared'
                      ),
                    },
                  },
                  Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                  )('Text', 'Save')
                );
              },
              { info: { inline: !0 } }
            );
          var primaryButtonSolidStories = Object(
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf
          )('Components/Button/Primary/Solid', module);
          primaryButtonSolidStories.add(
            'Squared (default)',
            function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                ___WEBPACK_IMPORTED_MODULE_4__.a,
                { onClick: function() {}, variants: { type: 'primary' } },
                'Save'
              );
            },
            { info: { inline: !0 } }
          ),
            primaryButtonSolidStories.add(
              'Rounded',
              function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  {
                    onClick: function() {},
                    variants: { type: 'primary', shape: 'rounded' },
                  },
                  'Save'
                );
              },
              { info: { inline: !0 } }
            );
          var primaryButtonOutlinedStories = Object(
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf
          )('Components/Button/Primary/Outlined', module);
          primaryButtonOutlinedStories.add(
            'Squared (default)',
            function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                ___WEBPACK_IMPORTED_MODULE_4__.a,
                {
                  onClick: function() {},
                  variants: { type: 'primary', style: 'outlined' },
                },
                'Save'
              );
            },
            { info: { inline: !0 } }
          ),
            primaryButtonOutlinedStories.add(
              'Rounded',
              function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  {
                    onClick: function() {},
                    variants: {
                      type: 'primary',
                      style: 'outlined',
                      shape: 'rounded',
                    },
                  },
                  'Save'
                );
              },
              { info: { inline: !0 } }
            );
          var primaryButtonTextStories = Object(
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf
          )('Components/Button/Primary/Text', module);
          primaryButtonTextStories.add(
            'Squared (default)',
            function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                ___WEBPACK_IMPORTED_MODULE_4__.a,
                {
                  onClick: function() {},
                  variants: { type: 'primary', style: 'text' },
                },
                'Save'
              );
            },
            { info: { inline: !0 } }
          ),
            primaryButtonTextStories.add(
              'Rounded',
              function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  {
                    onClick: function() {},
                    variants: {
                      type: 'primary',
                      style: 'text',
                      shape: 'rounded',
                    },
                  },
                  'Save'
                );
              },
              { info: { inline: !0 } }
            );
          var secondaryButtonSolidStories = Object(
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf
          )('Components/Button/Secondary/Solid', module);
          secondaryButtonSolidStories.add(
            'Squared (default)',
            function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                ___WEBPACK_IMPORTED_MODULE_4__.a,
                { onClick: function() {}, variants: { type: 'secondary' } },
                'Cancel'
              );
            },
            { info: { inline: !0 } }
          ),
            secondaryButtonSolidStories.add(
              'Rounded',
              function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  {
                    onClick: function() {},
                    variants: { type: 'secondary', shape: 'rounded' },
                  },
                  'Cancel'
                );
              },
              { info: { inline: !0 } }
            );
          var secondaryButtonOutlinedStories = Object(
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf
          )('Components/Button/Secondary/Outlined', module);
          secondaryButtonOutlinedStories.add(
            'Squared (default)',
            function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                ___WEBPACK_IMPORTED_MODULE_4__.a,
                {
                  onClick: function() {},
                  variants: { type: 'secondary', style: 'outlined' },
                },
                'Cancel'
              );
            },
            { info: { inline: !0 } }
          ),
            secondaryButtonOutlinedStories.add(
              'Rounded',
              function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  {
                    onClick: function() {},
                    variants: {
                      type: 'secondary',
                      style: 'outlined',
                      shape: 'rounded',
                    },
                  },
                  'Cancel'
                );
              },
              { info: { inline: !0 } }
            );
          var secondaryButtonTextStories = Object(
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf
          )('Components/Button/Secondary/Text', module);
          secondaryButtonTextStories.add(
            'Squared (default)',
            function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                ___WEBPACK_IMPORTED_MODULE_4__.a,
                {
                  onClick: function() {},
                  variants: { type: 'secondary', style: 'text' },
                },
                'Cancel'
              );
            },
            { info: { inline: !0 } }
          ),
            secondaryButtonTextStories.add(
              'Rounded',
              function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  {
                    onClick: function() {},
                    variants: {
                      type: 'secondary',
                      style: 'text',
                      shape: 'rounded',
                    },
                  },
                  'Cancel'
                );
              },
              { info: { inline: !0 } }
            );
          var destructiveButtonSolidStories = Object(
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf
          )('Components/Button/Destructive/Solid', module);
          destructiveButtonSolidStories.add(
            'Squared (default)',
            function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                ___WEBPACK_IMPORTED_MODULE_4__.a,
                { onClick: function() {}, variants: { type: 'destructive' } },
                'Delete'
              );
            },
            { info: { inline: !0 } }
          ),
            destructiveButtonSolidStories.add(
              'Rounded',
              function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  {
                    onClick: function() {},
                    variants: { type: 'destructive', shape: 'rounded' },
                  },
                  'Delete'
                );
              },
              { info: { inline: !0 } }
            );
          var destructiveButtonOutlinedStories = Object(
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf
          )('Components/Button/Destructive/Outlined', module);
          destructiveButtonOutlinedStories.add(
            'Squared (default)',
            function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                ___WEBPACK_IMPORTED_MODULE_4__.a,
                {
                  onClick: function() {},
                  variants: { type: 'destructive', style: 'outlined' },
                },
                'Delete'
              );
            },
            { info: { inline: !0 } }
          ),
            destructiveButtonOutlinedStories.add(
              'Rounded',
              function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  {
                    onClick: function() {},
                    variants: {
                      type: 'destructive',
                      style: 'outlined',
                      shape: 'rounded',
                    },
                  },
                  'Delete'
                );
              },
              { info: { inline: !0 } }
            );
          var destructiveButtonTextStories = Object(
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf
          )('Components/Button/Destructive/Text', module);
          destructiveButtonTextStories.add(
            'Squared (default)',
            function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                ___WEBPACK_IMPORTED_MODULE_4__.a,
                {
                  onClick: function() {},
                  variants: { type: 'destructive', style: 'text' },
                },
                'Delete'
              );
            },
            { info: { inline: !0 } }
          ),
            destructiveButtonTextStories.add(
              'Rounded',
              function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  {
                    onClick: function() {},
                    variants: {
                      type: 'destructive',
                      style: 'text',
                      shape: 'rounded',
                    },
                  },
                  'Delete'
                );
              },
              { info: { inline: !0 } }
            );
        }.call(this, __webpack_require__(119)(module));
    },
    513: function(module, exports, __webpack_require__) {
      var content = __webpack_require__(514);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      __webpack_require__(235)(content, options);
      content.locals && (module.exports = content.locals);
    },
    514: function(module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(234)(!1)).push([
        module.i,
        '.rds-Button__button--solid-primary-squared{border:0;font-size:16px;font-family:sans-serif;padding:0.5em 0.75em;cursor:pointer;border-radius:0.25em;box-shadow:0 0 0 .25em solid transparent;color:#fff;background-color:#574b90}.rds-Button__button--solid-primary-squared:hover,.rds-Button__button--solid-primary-squared:focus{outline:unset}.rds-Button__button--solid-primary-squared:hover,.rds-Button__button--solid-primary-squared:focus{background-color:#5c4f98;box-shadow:0 0 0 0.225rem #aca4d0}.rds-Button__button--solid-secondary-squared{border:0;font-size:16px;font-family:sans-serif;padding:0.5em 0.75em;cursor:pointer;border-radius:0.25em;box-shadow:0 0 0 .25em solid transparent;color:#fff;background-color:#5a5a5a}.rds-Button__button--solid-secondary-squared:hover,.rds-Button__button--solid-secondary-squared:focus{outline:unset}.rds-Button__button--solid-secondary-squared:hover,.rds-Button__button--solid-secondary-squared:focus{background-color:#606060;box-shadow:0 0 0 0.225rem #a7a7a7}.rds-Button__button--solid-destructive-squared{border:0;font-size:16px;font-family:sans-serif;padding:0.5em 0.75em;cursor:pointer;border-radius:0.25em;box-shadow:0 0 0 .25em solid transparent;color:#fff;background-color:#c23616}.rds-Button__button--solid-destructive-squared:hover,.rds-Button__button--solid-destructive-squared:focus{outline:unset}.rds-Button__button--solid-destructive-squared:hover,.rds-Button__button--solid-destructive-squared:focus{background-color:#cd3917;box-shadow:0 0 0 0.225rem #f19580}.rds-Button__button--solid-primary-rounded{border:0;font-size:16px;font-family:sans-serif;padding:0.5em 0.75em;cursor:pointer;border-radius:0.25em;box-shadow:0 0 0 .25em solid transparent;color:#fff;background-color:#574b90;border-radius:1em}.rds-Button__button--solid-primary-rounded:hover,.rds-Button__button--solid-primary-rounded:focus{outline:unset}.rds-Button__button--solid-primary-rounded:hover,.rds-Button__button--solid-primary-rounded:focus{background-color:#5c4f98;box-shadow:0 0 0 0.225rem #aca4d0}.rds-Button__button--solid-secondary-rounded{border:0;font-size:16px;font-family:sans-serif;padding:0.5em 0.75em;cursor:pointer;border-radius:0.25em;box-shadow:0 0 0 .25em solid transparent;color:#fff;background-color:#5a5a5a;border-radius:1em}.rds-Button__button--solid-secondary-rounded:hover,.rds-Button__button--solid-secondary-rounded:focus{outline:unset}.rds-Button__button--solid-secondary-rounded:hover,.rds-Button__button--solid-secondary-rounded:focus{background-color:#606060;box-shadow:0 0 0 0.225rem #a7a7a7}.rds-Button__button--solid-destructive-rounded{border:0;font-size:16px;font-family:sans-serif;padding:0.5em 0.75em;cursor:pointer;border-radius:0.25em;box-shadow:0 0 0 .25em solid transparent;color:#fff;background-color:#c23616;border-radius:1em}.rds-Button__button--solid-destructive-rounded:hover,.rds-Button__button--solid-destructive-rounded:focus{outline:unset}.rds-Button__button--solid-destructive-rounded:hover,.rds-Button__button--solid-destructive-rounded:focus{background-color:#cd3917;box-shadow:0 0 0 0.225rem #f19580}.rds-Button__button--outlined-primary-squared{border:0;font-size:16px;font-family:sans-serif;padding:0.5em 0.75em;cursor:pointer;border-radius:0.25em;box-shadow:0 0 0 .25em solid transparent;color:#fff;background-color:#574b90;background-color:transparent;border:1px solid #574b90;color:#574b90}.rds-Button__button--outlined-primary-squared:hover,.rds-Button__button--outlined-primary-squared:focus{outline:unset}.rds-Button__button--outlined-primary-squared:hover,.rds-Button__button--outlined-primary-squared:focus{background-color:#5c4f98;box-shadow:0 0 0 0.225rem #aca4d0}.rds-Button__button--outlined-primary-squared:hover,.rds-Button__button--outlined-primary-squared:focus{background-color:transparent;color:#5c4f98}.rds-Button__button--outlined-secondary-squared{border:0;font-size:16px;font-family:sans-serif;padding:0.5em 0.75em;cursor:pointer;border-radius:0.25em;box-shadow:0 0 0 .25em solid transparent;color:#fff;background-color:#5a5a5a;background-color:transparent;border:1px solid #5a5a5a;color:#5a5a5a}.rds-Button__button--outlined-secondary-squared:hover,.rds-Button__button--outlined-secondary-squared:focus{outline:unset}.rds-Button__button--outlined-secondary-squared:hover,.rds-Button__button--outlined-secondary-squared:focus{background-color:#606060;box-shadow:0 0 0 0.225rem #a7a7a7}.rds-Button__button--outlined-secondary-squared:hover,.rds-Button__button--outlined-secondary-squared:focus{background-color:transparent;color:#606060}.rds-Button__button--outlined-destructive-squared{border:0;font-size:16px;font-family:sans-serif;padding:0.5em 0.75em;cursor:pointer;border-radius:0.25em;box-shadow:0 0 0 .25em solid transparent;color:#fff;background-color:#c23616;background-color:transparent;border:1px solid #c23616;color:#c23616}.rds-Button__button--outlined-destructive-squared:hover,.rds-Button__button--outlined-destructive-squared:focus{outline:unset}.rds-Button__button--outlined-destructive-squared:hover,.rds-Button__button--outlined-destructive-squared:focus{background-color:#cd3917;box-shadow:0 0 0 0.225rem #f19580}.rds-Button__button--outlined-destructive-squared:hover,.rds-Button__button--outlined-destructive-squared:focus{background-color:transparent;color:#cd3917}.rds-Button__button--outlined-primary-rounded{border:0;font-size:16px;font-family:sans-serif;padding:0.5em 0.75em;cursor:pointer;border-radius:0.25em;box-shadow:0 0 0 .25em solid transparent;color:#fff;background-color:#574b90;background-color:transparent;border:1px solid #574b90;color:#574b90;border-radius:1em}.rds-Button__button--outlined-primary-rounded:hover,.rds-Button__button--outlined-primary-rounded:focus{outline:unset}.rds-Button__button--outlined-primary-rounded:hover,.rds-Button__button--outlined-primary-rounded:focus{background-color:#5c4f98;box-shadow:0 0 0 0.225rem #aca4d0}.rds-Button__button--outlined-primary-rounded:hover,.rds-Button__button--outlined-primary-rounded:focus{background-color:transparent;color:#5c4f98}.rds-Button__button--outlined-secondary-rounded{border:0;font-size:16px;font-family:sans-serif;padding:0.5em 0.75em;cursor:pointer;border-radius:0.25em;box-shadow:0 0 0 .25em solid transparent;color:#fff;background-color:#5a5a5a;background-color:transparent;border:1px solid #5a5a5a;color:#5a5a5a;border-radius:1em}.rds-Button__button--outlined-secondary-rounded:hover,.rds-Button__button--outlined-secondary-rounded:focus{outline:unset}.rds-Button__button--outlined-secondary-rounded:hover,.rds-Button__button--outlined-secondary-rounded:focus{background-color:#606060;box-shadow:0 0 0 0.225rem #a7a7a7}.rds-Button__button--outlined-secondary-rounded:hover,.rds-Button__button--outlined-secondary-rounded:focus{background-color:transparent;color:#606060}.rds-Button__button--outlined-destructive-rounded{border:0;font-size:16px;font-family:sans-serif;padding:0.5em 0.75em;cursor:pointer;border-radius:0.25em;box-shadow:0 0 0 .25em solid transparent;color:#fff;background-color:#c23616;background-color:transparent;border:1px solid #c23616;color:#c23616;border-radius:1em}.rds-Button__button--outlined-destructive-rounded:hover,.rds-Button__button--outlined-destructive-rounded:focus{outline:unset}.rds-Button__button--outlined-destructive-rounded:hover,.rds-Button__button--outlined-destructive-rounded:focus{background-color:#cd3917;box-shadow:0 0 0 0.225rem #f19580}.rds-Button__button--outlined-destructive-rounded:hover,.rds-Button__button--outlined-destructive-rounded:focus{background-color:transparent;color:#cd3917}.rds-Button__button--text-primary-squared{border:0;font-size:16px;font-family:sans-serif;padding:0.5em 0.75em;cursor:pointer;border-radius:0.25em;box-shadow:0 0 0 .25em solid transparent;color:#fff;background-color:#574b90;background-color:transparent;border:1px solid #574b90;color:#574b90;border:0}.rds-Button__button--text-primary-squared:hover,.rds-Button__button--text-primary-squared:focus{outline:unset}.rds-Button__button--text-primary-squared:hover,.rds-Button__button--text-primary-squared:focus{background-color:#5c4f98;box-shadow:0 0 0 0.225rem #aca4d0}.rds-Button__button--text-primary-squared:hover,.rds-Button__button--text-primary-squared:focus{background-color:transparent;color:#5c4f98}.rds-Button__button--text-primary-squared:focus,.rds-Button__button--text-primary-squared:hover{background-color:#e9e7f3;box-shadow:none}.rds-Button__button--text-secondary-squared{border:0;font-size:16px;font-family:sans-serif;padding:0.5em 0.75em;cursor:pointer;border-radius:0.25em;box-shadow:0 0 0 .25em solid transparent;color:#fff;background-color:#5a5a5a;background-color:transparent;border:1px solid #5a5a5a;color:#5a5a5a;border:0}.rds-Button__button--text-secondary-squared:hover,.rds-Button__button--text-secondary-squared:focus{outline:unset}.rds-Button__button--text-secondary-squared:hover,.rds-Button__button--text-secondary-squared:focus{background-color:#606060;box-shadow:0 0 0 0.225rem #a7a7a7}.rds-Button__button--text-secondary-squared:hover,.rds-Button__button--text-secondary-squared:focus{background-color:transparent;color:#606060}.rds-Button__button--text-secondary-squared:focus,.rds-Button__button--text-secondary-squared:hover{background-color:#dadada;box-shadow:none}.rds-Button__button--text-destructive-squared{border:0;font-size:16px;font-family:sans-serif;padding:0.5em 0.75em;cursor:pointer;border-radius:0.25em;box-shadow:0 0 0 .25em solid transparent;color:#fff;background-color:#c23616;background-color:transparent;border:1px solid #c23616;color:#c23616;border:0}.rds-Button__button--text-destructive-squared:hover,.rds-Button__button--text-destructive-squared:focus{outline:unset}.rds-Button__button--text-destructive-squared:hover,.rds-Button__button--text-destructive-squared:focus{background-color:#cd3917;box-shadow:0 0 0 0.225rem #f19580}.rds-Button__button--text-destructive-squared:hover,.rds-Button__button--text-destructive-squared:focus{background-color:transparent;color:#cd3917}.rds-Button__button--text-destructive-squared:focus,.rds-Button__button--text-destructive-squared:hover{background-color:#fbe2dc;box-shadow:none}.rds-Button__button--text-primary-rounded{border:0;font-size:16px;font-family:sans-serif;padding:0.5em 0.75em;cursor:pointer;border-radius:0.25em;box-shadow:0 0 0 .25em solid transparent;color:#fff;background-color:#574b90;background-color:transparent;border:1px solid #574b90;color:#574b90;border:0;border-radius:1em}.rds-Button__button--text-primary-rounded:hover,.rds-Button__button--text-primary-rounded:focus{outline:unset}.rds-Button__button--text-primary-rounded:hover,.rds-Button__button--text-primary-rounded:focus{background-color:#5c4f98;box-shadow:0 0 0 0.225rem #aca4d0}.rds-Button__button--text-primary-rounded:hover,.rds-Button__button--text-primary-rounded:focus{background-color:transparent;color:#5c4f98}.rds-Button__button--text-primary-rounded:focus,.rds-Button__button--text-primary-rounded:hover{background-color:#e9e7f3;box-shadow:none}.rds-Button__button--text-secondary-rounded{border:0;font-size:16px;font-family:sans-serif;padding:0.5em 0.75em;cursor:pointer;border-radius:0.25em;box-shadow:0 0 0 .25em solid transparent;color:#fff;background-color:#5a5a5a;background-color:transparent;border:1px solid #5a5a5a;color:#5a5a5a;border:0;border-radius:1em}.rds-Button__button--text-secondary-rounded:hover,.rds-Button__button--text-secondary-rounded:focus{outline:unset}.rds-Button__button--text-secondary-rounded:hover,.rds-Button__button--text-secondary-rounded:focus{background-color:#606060;box-shadow:0 0 0 0.225rem #a7a7a7}.rds-Button__button--text-secondary-rounded:hover,.rds-Button__button--text-secondary-rounded:focus{background-color:transparent;color:#606060}.rds-Button__button--text-secondary-rounded:focus,.rds-Button__button--text-secondary-rounded:hover{background-color:#dadada;box-shadow:none}.rds-Button__button--text-destructive-rounded{border:0;font-size:16px;font-family:sans-serif;padding:0.5em 0.75em;cursor:pointer;border-radius:0.25em;box-shadow:0 0 0 .25em solid transparent;color:#fff;background-color:#c23616;background-color:transparent;border:1px solid #c23616;color:#c23616;border:0;border-radius:1em}.rds-Button__button--text-destructive-rounded:hover,.rds-Button__button--text-destructive-rounded:focus{outline:unset}.rds-Button__button--text-destructive-rounded:hover,.rds-Button__button--text-destructive-rounded:focus{background-color:#cd3917;box-shadow:0 0 0 0.225rem #f19580}.rds-Button__button--text-destructive-rounded:hover,.rds-Button__button--text-destructive-rounded:focus{background-color:transparent;color:#cd3917}.rds-Button__button--text-destructive-rounded:focus,.rds-Button__button--text-destructive-rounded:hover{background-color:#fbe2dc;box-shadow:none}\n',
        '',
      ]);
    },
    517: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              11
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              34
            ),
            ___WEBPACK_IMPORTED_MODULE_4__ =
              (__webpack_require__(518), __webpack_require__(14)),
            headingStories = Object(
              _storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf
            )('Components/Heading', module);
          headingStories.add(
            'All',
            function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  { variants: { type: 'h1' } },
                  'Heading 1'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  { variants: { type: 'h2' } },
                  'Heading 2'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  { variants: { type: 'h3' } },
                  'Heading 3'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  { variants: { type: 'h4' } },
                  'Heading 4'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  { variants: { type: 'h5' } },
                  'Heading 5'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  { variants: { type: 'h6' } },
                  'Heading 6'
                )
              );
            },
            { info: { inline: !0 } }
          ),
            headingStories.add(
              'With knobs',
              function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  {
                    variants: {
                      type: Object(
                        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select
                      )(
                        'Type',
                        {
                          H1: 'h1',
                          H2: 'h2',
                          H3: 'h3',
                          H4: 'h4',
                          H5: 'h5',
                          H6: 'h6',
                        },
                        'h1'
                      ),
                    },
                  },
                  Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                  )('Text', 'Heading')
                );
              },
              { info: { inline: !0 } }
            ),
            headingStories.add(
              'H2',
              function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  { variants: { type: 'h2' } },
                  'Heading'
                );
              },
              { info: { inline: !0 } }
            ),
            headingStories.add(
              'H2',
              function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  { variants: { type: 'h2' } },
                  'Heading'
                );
              },
              { info: { inline: !0 } }
            ),
            headingStories.add(
              'H3',
              function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  { variants: { type: 'h3' } },
                  'Heading'
                );
              },
              { info: { inline: !0 } }
            ),
            headingStories.add(
              'H4',
              function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  { variants: { type: 'h4' } },
                  'Heading'
                );
              },
              { info: { inline: !0 } }
            ),
            headingStories.add(
              'H5',
              function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  { variants: { type: 'h5' } },
                  'Heading'
                );
              },
              { info: { inline: !0 } }
            ),
            headingStories.add(
              'H6',
              function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  { variants: { type: 'h6' } },
                  'Heading'
                );
              },
              { info: { inline: !0 } }
            );
        }.call(this, __webpack_require__(119)(module));
    },
    518: function(module, exports, __webpack_require__) {
      var content = __webpack_require__(519);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      __webpack_require__(235)(content, options);
      content.locals && (module.exports = content.locals);
    },
    519: function(module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(234)(!1)).push([
        module.i,
        '.rds-Heading__h1{font-size:56px;font-family:sans-serif;color:#1e1e1e;line-height:1.25;margin-top:0;margin-bottom:2rem}.rds-Heading__h2{font-size:46px;font-family:sans-serif;color:#232323;line-height:1.25;margin-top:0;margin-bottom:2rem}.rds-Heading__h3{font-size:38px;font-family:sans-serif;color:#282828;line-height:1.25;margin-top:0;margin-bottom:2rem}.rds-Heading__h4{font-size:32px;font-family:sans-serif;color:#2d2d2d;line-height:1.25;margin-top:0;margin-bottom:2rem}.rds-Heading__h5{font-size:28px;font-family:sans-serif;color:#323232;line-height:1.25;margin-top:0;margin-bottom:2rem}.rds-Heading__h6{font-size:24px;font-family:sans-serif;color:#383838;line-height:1.25;margin-top:0;margin-bottom:2rem}\n',
        '',
      ]);
    },
    520: function(module, exports, __webpack_require__) {},
  },
  [[237, 1, 2]],
]);
//# sourceMappingURL=main.8b736e54d72c837d6d4a.bundle.js.map
