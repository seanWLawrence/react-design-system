(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    1: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return State;
      }),
        __webpack_require__.d(__webpack_exports__, 'b', function() {
          return joinStyles;
        }),
        __webpack_require__.d(__webpack_exports__, 'c', function() {
          return onEvent;
        }),
        __webpack_require__.d(__webpack_exports__, 'd', function() {
          return setInputState;
        });
      __webpack_require__(72),
        __webpack_require__(513),
        __webpack_require__(37);
      var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      var joinStyles = function() {
          for (
            var _len = arguments.length, classNames = Array(_len), _key = 0;
            _key < _len;
            _key++
          )
            classNames[_key] = arguments[_key];
          return classNames.filter(Boolean).join(' ');
        },
        State = function(_ref) {
          var _ref$initialState = _ref.initialState,
            initialState =
              void 0 === _ref$initialState ? null : _ref$initialState,
            children = _ref.children,
            _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(
              initialState
            );
          return children({ state: _useState[0], setState: _useState[1] });
        },
        setInputState = function(_ref) {
          var state = _ref.state,
            setState = _ref.setState;
          return function(value) {
            setState(_extends({}, state, {}, value));
          };
        },
        onEvent = function(fn) {
          return function(event) {
            event.preventDefault(), fn();
          };
        };
    },
    230: function(module, exports, __webpack_require__) {
      __webpack_require__(231),
        __webpack_require__(335),
        (module.exports = __webpack_require__(336));
    },
    336: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__(16),
            __webpack_require__(27),
            __webpack_require__(25),
            __webpack_require__(17),
            __webpack_require__(32);
          var _storybook_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              6
            ),
            req = __webpack_require__(499);
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)(
            function loadStories() {
              req.keys().forEach(function(filename) {
                return req(filename);
              });
            },
            module
          );
        }.call(this, __webpack_require__(172)(module));
    },
    499: function(module, exports, __webpack_require__) {
      var map = { './input/src/index.stories.tsx': 500 };
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
        (webpackContext.id = 499);
    },
    5: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        _react_design_system_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          1
        );
      __webpack_exports__.a = function(_a) {
        var _b,
          label = _a.label,
          name = _a.name,
          onChangeProp = _a.onChange,
          _c = _a.onBlur,
          onBlurProp = void 0 === _c ? function() {} : _c,
          _d = _a.onError,
          onErrorProp = void 0 === _d ? 'Required' : _d,
          value = _a.value,
          _e = _a.required,
          required = void 0 !== _e && _e,
          _f = _a.type,
          type = void 0 === _f ? 'text' : _f,
          _g = _a.pattern,
          pattern = void 0 === _g ? void 0 : _g,
          _h = _a.classNames,
          _j = void 0 === _h ? { label: '', input: '' } : _h,
          _k = _j.label,
          labelClassName = void 0 === _k ? '' : _k,
          _l = _j.input,
          inputClassName = void 0 === _l ? '' : _l,
          _m = _a.testIds,
          _o = void 0 === _m ? { label: 'label', input: 'input' } : _m,
          _p = _o.label,
          labelTestId = void 0 === _p ? 'label' : _p,
          _q = _o.input,
          inputTestId = void 0 === _q ? 'input' : _q,
          _r = Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
          hasError = _r[0],
          setHasError = _r[1],
          onInvalid = Object(
            _react_design_system_utils__WEBPACK_IMPORTED_MODULE_1__.c
          )(function() {
            return setHasError(!0);
          }),
          onBlur = Object(
            _react_design_system_utils__WEBPACK_IMPORTED_MODULE_1__.c
          )(function() {
            var _a;
            required && setHasError(!value),
              onBlurProp((((_a = {})[name] = safeValue), _a));
          }),
          safeValue = (null !== value && value) || '',
          onError =
            'function' == typeof onErrorProp
              ? onErrorProp((((_b = {})[name] = safeValue), _b))
              : onErrorProp;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'label',
            {
              htmlFor: name,
              className: Object(
                _react_design_system_utils__WEBPACK_IMPORTED_MODULE_1__.b
              )('Input__label', labelClassName),
              'data-testid': labelTestId,
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'span',
              null,
              required ? '*' + label : label,
              ' ',
              hasError &&
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'span',
                  { className: 'Input__error' },
                  onError
                )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'input',
              {
                'data-testid': inputTestId,
                id: name,
                name: name,
                onChange: function(_a) {
                  var _b,
                    value = _a.target.value,
                    target = _a.target;
                  hasError && target.checkValidity() && setHasError(!1),
                    onChangeProp((((_b = {})[name] = value), _b));
                },
                value: safeValue,
                required: required,
                onInvalid: onInvalid,
                onBlur: onBlur,
                type: type,
                pattern: pattern,
                className: Object(
                  _react_design_system_utils__WEBPACK_IMPORTED_MODULE_1__.b
                )('Input__input', inputClassName),
              }
            )
          )
        );
      };
    },
    500: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              6
            ),
            _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              4
            ),
            _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              1
            ),
            ___WEBPACK_IMPORTED_MODULE_5__ =
              (__webpack_require__(514), __webpack_require__(5)),
            name = (__webpack_require__(517), 'name'),
            label = 'Name',
            storiesWithText = Object(
              _storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf
            )('Components/Input/Text', module);
          storiesWithText.add(
            'Default',
            function() {
              var _a;
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.a,
                { initialState: ((_a = {}), (_a.name = ''), _a) },
                function(_a) {
                  var state = _a.state,
                    setState = _a.setState;
                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    ___WEBPACK_IMPORTED_MODULE_5__.a,
                    {
                      value: state.name,
                      onChange: function(event) {
                        Object(
                          _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.d
                        )({ state: state, setState: setState })(event),
                          Object(
                            _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                          )('onChange')(event);
                      },
                      name: name,
                      label: label,
                    }
                  );
                }
              );
            },
            { info: { inline: !0 } }
          ),
            storiesWithText.add(
              'Required',
              function() {
                var _a;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.a,
                  { initialState: ((_a = {}), (_a.name = ''), _a) },
                  function(_a) {
                    var state = _a.state,
                      setState = _a.setState;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      ___WEBPACK_IMPORTED_MODULE_5__.a,
                      {
                        value: state.name,
                        onChange: function(event) {
                          Object(
                            _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.d
                          )({ state: state, setState: setState })(event),
                            Object(
                              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                            )('onChange')(event);
                        },
                        name: name,
                        label: label,
                        required: !0,
                      }
                    );
                  }
                );
              },
              { info: { inline: !0 } }
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Components/Input/Color',
              module
            ).add(
              'Default',
              function() {
                var _a;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.a,
                  { initialState: ((_a = {}), (_a.name = ''), _a) },
                  function(_a) {
                    var state = _a.state,
                      setState = _a.setState;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      ___WEBPACK_IMPORTED_MODULE_5__.a,
                      {
                        value: state.name,
                        onChange: function(event) {
                          Object(
                            _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.d
                          )({ state: state, setState: setState })(event),
                            Object(
                              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                            )('onChange')(event);
                        },
                        name: name,
                        label: label,
                        type: 'color',
                      }
                    );
                  }
                );
              },
              { info: { inline: !0 } }
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Components/Input/Checkbox',
              module
            ).add(
              'Default',
              function() {
                var _a;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.a,
                  { initialState: ((_a = {}), (_a.name = ''), _a) },
                  function(_a) {
                    var state = _a.state,
                      setState = _a.setState;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      ___WEBPACK_IMPORTED_MODULE_5__.a,
                      {
                        value: state.name,
                        onChange: function(event) {
                          Object(
                            _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.d
                          )({ state: state, setState: setState })(event),
                            Object(
                              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                            )('onChange')(event);
                        },
                        name: name,
                        label: label,
                        type: 'checkbox',
                      }
                    );
                  }
                );
              },
              { info: { inline: !0 } }
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Components/Input/Date',
              module
            ).add(
              'Default',
              function() {
                var _a;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.a,
                  { initialState: ((_a = {}), (_a.name = ''), _a) },
                  function(_a) {
                    var state = _a.state,
                      setState = _a.setState;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      ___WEBPACK_IMPORTED_MODULE_5__.a,
                      {
                        value: state.name,
                        onChange: function(event) {
                          Object(
                            _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.d
                          )({ state: state, setState: setState })(event),
                            Object(
                              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                            )('onChange')(event);
                        },
                        name: name,
                        label: label,
                        type: 'date',
                      }
                    );
                  }
                );
              },
              { info: { inline: !0 } }
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Components/Input/DateTimeLocal',
              module
            ).add(
              'Default',
              function() {
                var _a;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.a,
                  { initialState: ((_a = {}), (_a.name = ''), _a) },
                  function(_a) {
                    var state = _a.state,
                      setState = _a.setState;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      ___WEBPACK_IMPORTED_MODULE_5__.a,
                      {
                        value: state.name,
                        onChange: function(event) {
                          Object(
                            _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.d
                          )({ state: state, setState: setState })(event),
                            Object(
                              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                            )('onChange')(event);
                        },
                        name: name,
                        label: label,
                        type: 'datetime-local',
                      }
                    );
                  }
                );
              },
              { info: { inline: !0 } }
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Components/Input/Email',
              module
            ).add(
              'Default',
              function() {
                var _a;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.a,
                  { initialState: ((_a = {}), (_a.name = ''), _a) },
                  function(_a) {
                    var state = _a.state,
                      setState = _a.setState;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      ___WEBPACK_IMPORTED_MODULE_5__.a,
                      {
                        value: state.name,
                        onChange: function(event) {
                          Object(
                            _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.d
                          )({ state: state, setState: setState })(event),
                            Object(
                              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                            )('onChange')(event);
                        },
                        name: name,
                        label: label,
                        type: 'email',
                      }
                    );
                  }
                );
              },
              { info: { inline: !0 } }
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Components/Input/File',
              module
            ).add(
              'Default',
              function() {
                var _a;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.a,
                  { initialState: ((_a = {}), (_a.name = ''), _a) },
                  function(_a) {
                    var state = _a.state,
                      setState = _a.setState;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      ___WEBPACK_IMPORTED_MODULE_5__.a,
                      {
                        value: state.name,
                        onChange: function(event) {
                          Object(
                            _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.d
                          )({ state: state, setState: setState })(event),
                            Object(
                              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                            )('onChange')(event);
                        },
                        name: name,
                        label: label,
                        type: 'file',
                      }
                    );
                  }
                );
              },
              { info: { inline: !0 } }
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Components/Input/Hidden',
              module
            ).add(
              'Default',
              function() {
                var _a;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.a,
                  { initialState: ((_a = {}), (_a.name = ''), _a) },
                  function(_a) {
                    var state = _a.state,
                      setState = _a.setState;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      ___WEBPACK_IMPORTED_MODULE_5__.a,
                      {
                        value: state.name,
                        onChange: function(event) {
                          Object(
                            _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.d
                          )({ state: state, setState: setState })(event),
                            Object(
                              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                            )('onChange')(event);
                        },
                        name: name,
                        label: label,
                        type: 'hidden',
                      }
                    );
                  }
                );
              },
              { info: { inline: !0 } }
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Components/Input/Image',
              module
            ).add(
              'Default',
              function() {
                var _a;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.a,
                  { initialState: ((_a = {}), (_a.name = ''), _a) },
                  function(_a) {
                    var state = _a.state,
                      setState = _a.setState;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      ___WEBPACK_IMPORTED_MODULE_5__.a,
                      {
                        value: state.name,
                        onChange: function(event) {
                          Object(
                            _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.d
                          )({ state: state, setState: setState })(event),
                            Object(
                              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                            )('onChange')(event);
                        },
                        name: name,
                        label: label,
                        type: 'image',
                      }
                    );
                  }
                );
              },
              { info: { inline: !0 } }
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Components/Input/Month',
              module
            ).add(
              'Default',
              function() {
                var _a;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.a,
                  { initialState: ((_a = {}), (_a.name = ''), _a) },
                  function(_a) {
                    var state = _a.state,
                      setState = _a.setState;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      ___WEBPACK_IMPORTED_MODULE_5__.a,
                      {
                        value: state.name,
                        onChange: function(event) {
                          Object(
                            _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.d
                          )({ state: state, setState: setState })(event),
                            Object(
                              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                            )('onChange')(event);
                        },
                        name: name,
                        label: label,
                        type: 'month',
                      }
                    );
                  }
                );
              },
              { info: { inline: !0 } }
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Components/Input/Number',
              module
            ).add(
              'Default',
              function() {
                var _a;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.a,
                  { initialState: ((_a = {}), (_a.name = ''), _a) },
                  function(_a) {
                    var state = _a.state,
                      setState = _a.setState;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      ___WEBPACK_IMPORTED_MODULE_5__.a,
                      {
                        value: state.name,
                        onChange: function(event) {
                          Object(
                            _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.d
                          )({ state: state, setState: setState })(event),
                            Object(
                              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                            )('onChange')(event);
                        },
                        name: name,
                        label: label,
                        type: 'number',
                      }
                    );
                  }
                );
              },
              { info: { inline: !0 } }
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Components/Input/Password',
              module
            ).add(
              'Default',
              function() {
                var _a;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.a,
                  { initialState: ((_a = {}), (_a.name = ''), _a) },
                  function(_a) {
                    var state = _a.state,
                      setState = _a.setState;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      ___WEBPACK_IMPORTED_MODULE_5__.a,
                      {
                        value: state.name,
                        onChange: function(event) {
                          Object(
                            _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.d
                          )({ state: state, setState: setState })(event),
                            Object(
                              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                            )('onChange')(event);
                        },
                        name: name,
                        label: label,
                        type: 'password',
                      }
                    );
                  }
                );
              },
              { info: { inline: !0 } }
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Components/Input/Radio',
              module
            ).add(
              'Default',
              function() {
                var _a;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.a,
                  { initialState: ((_a = {}), (_a.name = ''), _a) },
                  function(_a) {
                    var state = _a.state,
                      setState = _a.setState;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      ___WEBPACK_IMPORTED_MODULE_5__.a,
                      {
                        value: state.name,
                        onChange: function(event) {
                          Object(
                            _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.d
                          )({ state: state, setState: setState })(event),
                            Object(
                              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                            )('onChange')(event);
                        },
                        name: name,
                        label: label,
                        type: 'radio',
                      }
                    );
                  }
                );
              },
              { info: { inline: !0 } }
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Components/Input/Range',
              module
            ).add(
              'Default',
              function() {
                var _a;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.a,
                  { initialState: ((_a = {}), (_a.name = ''), _a) },
                  function(_a) {
                    var state = _a.state,
                      setState = _a.setState;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      ___WEBPACK_IMPORTED_MODULE_5__.a,
                      {
                        value: state.name,
                        onChange: function(event) {
                          Object(
                            _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.d
                          )({ state: state, setState: setState })(event),
                            Object(
                              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                            )('onChange')(event);
                        },
                        name: name,
                        label: label,
                        type: 'range',
                      }
                    );
                  }
                );
              },
              { info: { inline: !0 } }
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Components/Input/Reset',
              module
            ).add(
              'Default',
              function() {
                var _a;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.a,
                  { initialState: ((_a = {}), (_a.name = ''), _a) },
                  function(_a) {
                    var state = _a.state,
                      setState = _a.setState;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      ___WEBPACK_IMPORTED_MODULE_5__.a,
                      {
                        value: state.name,
                        onChange: function(event) {
                          Object(
                            _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.d
                          )({ state: state, setState: setState })(event),
                            Object(
                              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                            )('onChange')(event);
                        },
                        name: name,
                        label: label,
                        type: 'reset',
                      }
                    );
                  }
                );
              },
              { info: { inline: !0 } }
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Components/Input/Search',
              module
            ).add(
              'Default',
              function() {
                var _a;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.a,
                  { initialState: ((_a = {}), (_a.name = ''), _a) },
                  function(_a) {
                    var state = _a.state,
                      setState = _a.setState;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      ___WEBPACK_IMPORTED_MODULE_5__.a,
                      {
                        value: state.name,
                        onChange: function(event) {
                          Object(
                            _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.d
                          )({ state: state, setState: setState })(event),
                            Object(
                              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                            )('onChange')(event);
                        },
                        name: name,
                        label: label,
                        type: 'search',
                      }
                    );
                  }
                );
              },
              { info: { inline: !0 } }
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Components/Input/Submit',
              module
            ).add(
              'Default',
              function() {
                var _a;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.a,
                  { initialState: ((_a = {}), (_a.name = ''), _a) },
                  function(_a) {
                    var state = _a.state,
                      setState = _a.setState;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      ___WEBPACK_IMPORTED_MODULE_5__.a,
                      {
                        value: state.name,
                        onChange: function(event) {
                          Object(
                            _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.d
                          )({ state: state, setState: setState })(event),
                            Object(
                              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                            )('onChange')(event);
                        },
                        name: name,
                        label: label,
                        type: 'submit',
                      }
                    );
                  }
                );
              },
              { info: { inline: !0 } }
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Components/Input/Tel',
              module
            ).add(
              'Default',
              function() {
                var _a;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.a,
                  { initialState: ((_a = {}), (_a.name = ''), _a) },
                  function(_a) {
                    var state = _a.state,
                      setState = _a.setState;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      ___WEBPACK_IMPORTED_MODULE_5__.a,
                      {
                        value: state.name,
                        onChange: function(event) {
                          Object(
                            _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.d
                          )({ state: state, setState: setState })(event),
                            Object(
                              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                            )('onChange')(event);
                        },
                        name: name,
                        label: label,
                        type: 'tel',
                      }
                    );
                  }
                );
              },
              { info: { inline: !0 } }
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Components/Input/Time',
              module
            ).add(
              'Default',
              function() {
                var _a;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.a,
                  { initialState: ((_a = {}), (_a.name = ''), _a) },
                  function(_a) {
                    var state = _a.state,
                      setState = _a.setState;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      ___WEBPACK_IMPORTED_MODULE_5__.a,
                      {
                        value: state.name,
                        onChange: function(event) {
                          Object(
                            _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.d
                          )({ state: state, setState: setState })(event),
                            Object(
                              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                            )('onChange')(event);
                        },
                        name: name,
                        label: label,
                        type: 'time',
                      }
                    );
                  }
                );
              },
              { info: { inline: !0 } }
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Components/Input/Url',
              module
            ).add(
              'Default',
              function() {
                var _a;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.a,
                  { initialState: ((_a = {}), (_a.name = ''), _a) },
                  function(_a) {
                    var state = _a.state,
                      setState = _a.setState;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      ___WEBPACK_IMPORTED_MODULE_5__.a,
                      {
                        value: state.name,
                        onChange: function(event) {
                          Object(
                            _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.d
                          )({ state: state, setState: setState })(event),
                            Object(
                              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                            )('onChange')(event);
                        },
                        name: name,
                        label: label,
                        type: 'url',
                      }
                    );
                  }
                );
              },
              { info: { inline: !0 } }
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              'Components/Input/Week',
              module
            ).add(
              'Default',
              function() {
                var _a;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.a,
                  { initialState: ((_a = {}), (_a.name = ''), _a) },
                  function(_a) {
                    var state = _a.state,
                      setState = _a.setState;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      ___WEBPACK_IMPORTED_MODULE_5__.a,
                      {
                        value: state.name,
                        onChange: function(event) {
                          Object(
                            _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.d
                          )({ state: state, setState: setState })(event),
                            Object(
                              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                            )('onChange')(event);
                        },
                        name: name,
                        label: label,
                        type: 'week',
                      }
                    );
                  }
                );
              },
              { info: { inline: !0 } }
            ),
            storiesWithText.add(
              'Custom onBlur',
              function() {
                var _a;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.a,
                  { initialState: ((_a = {}), (_a.name = ''), _a) },
                  function(_a) {
                    var state = _a.state,
                      setState = _a.setState;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      ___WEBPACK_IMPORTED_MODULE_5__.a,
                      {
                        value: state.name,
                        onChange: function(event) {
                          Object(
                            _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.d
                          )({ state: state, setState: setState })(event),
                            Object(
                              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                            )('onChange')(event);
                        },
                        name: name,
                        label: label,
                        onBlur: function() {
                          return alert('Blurred!');
                        },
                      }
                    );
                  }
                );
              },
              { info: { inline: !0 } }
            );
          var storiesWithForm = Object(
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf
          )('Components/Input/Text/withForm', module);
          storiesWithForm.add(
            'Required',
            function() {
              var _a;
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.a,
                { initialState: ((_a = {}), (_a.name = ''), _a) },
                function(_a) {
                  var state = _a.state,
                    setState = _a.setState;
                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'form',
                    {
                      onSubmit: Object(
                        _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.c
                      )(function() {
                        return alert('Submitted!');
                      }),
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      ___WEBPACK_IMPORTED_MODULE_5__.a,
                      {
                        value: state.name,
                        onChange: function(event) {
                          Object(
                            _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.d
                          )({ state: state, setState: setState })(event),
                            Object(
                              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                            )('onChange')(event);
                        },
                        name: name,
                        label: label,
                        required: !0,
                      }
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'button',
                      null,
                      'Submit'
                    )
                  );
                }
              );
            },
            { info: { inline: !0 } }
          ),
            storiesWithForm.add(
              'Custom error message',
              function() {
                var _a;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.a,
                  { initialState: ((_a = {}), (_a.name = ''), _a) },
                  function(_a) {
                    var state = _a.state,
                      setState = _a.setState;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'form',
                      {
                        onSubmit: Object(
                          _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.c
                        )(function() {
                          return alert('Submitted!');
                        }),
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        ___WEBPACK_IMPORTED_MODULE_5__.a,
                        {
                          value: state.name,
                          onChange: function(event) {
                            Object(
                              _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.d
                            )({ state: state, setState: setState })(event),
                              Object(
                                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                              )('onChange')(event);
                          },
                          name: name,
                          label: label,
                          onError: "Can't be blank!",
                          required: !0,
                        }
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'button',
                        null,
                        'Submit'
                      )
                    );
                  }
                );
              },
              { info: { inline: !0 } }
            ),
            storiesWithForm.add(
              'Custom validation and error message',
              function() {
                var _a;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.a,
                  { initialState: ((_a = {}), (_a.name = ''), _a) },
                  function(_a) {
                    var state = _a.state,
                      setState = _a.setState;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'form',
                      {
                        onSubmit: Object(
                          _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.c
                        )(function() {
                          return alert('Submitted!');
                        }),
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        ___WEBPACK_IMPORTED_MODULE_5__.a,
                        {
                          value: state.name,
                          onChange: function(event) {
                            Object(
                              _react_design_system_utils__WEBPACK_IMPORTED_MODULE_3__.d
                            )({ state: state, setState: setState })(event),
                              Object(
                                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                              )('onChange')(event);
                          },
                          name: name,
                          label: "Only valid with the word 'specific'",
                          onError: function(value) {
                            return (
                              'Expected "specific" and received "' +
                              value.name +
                              '"'
                            );
                          },
                          required: !0,
                          pattern: 'specific$',
                        }
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'button',
                        null,
                        'Submit'
                      )
                    );
                  }
                );
              },
              { info: { inline: !0 } }
            );
        }.call(this, __webpack_require__(172)(module));
    },
    514: function(module, exports, __webpack_require__) {
      var content = __webpack_require__(515);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(228)(content, options);
      content.locals && (module.exports = content.locals);
    },
    515: function(module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(227)(!1)).push([
        module.i,
        'body {\n  --font-family-sans: sans-serif;\n  --font-family-serif: serif;\n\n  --font-size-body: 18px;\n\n  --color-white: rgb(255, 255, 255);\n\n  --color-gray-lightest: rgb(250, 250, 250);\n  --color-gray-lighter: rgb(220, 220, 220);\n  --color-gray-light: rgb(190, 190, 190);\n  --color-gray-medium: rgb(160, 160, 160);\n  --color-gray-dark: rgb(130, 130, 130);\n  --color-gray-darker: rgb(100, 100, 100);\n  --color-gray-darkest: rgb(70, 70, 70);\n\n  --color-black: rgb(30, 30, 30);\n\n  --color-first: #574b90;\n  --color-first-inverse: rgb(255, 255, 255);\n\n  --color-second: cornflowerblue;\n  --color-second-inverse: rgb(255, 255, 255);\n\n  --color-third: #ea8685;\n  --color-third-inverse: rgb(255, 255, 255);\n\n  --color-fourth: #f7d794;\n  --color-fourth-inverse: rgb(70, 70, 70);\n\n  --color-error: rgba(250, 0, 0, 0.7);\n  --color-warning: rgba(250, 240, 100, 0.9);\n  --color-success: rgba(0, 180, 0, 0.7);\n}\n',
        '',
      ]);
    },
    517: function(module, exports, __webpack_require__) {
      var content = __webpack_require__(518);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(228)(content, options);
      content.locals && (module.exports = content.locals);
    },
    518: function(module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(227)(!1)).push([
        module.i,
        '.Input__input {\n  padding: 1em;\n  font-family: var(--font-family-sans);\n  font-size: 1rem;\n  margin-top: 0.25em;\n  max-width: 500px;\n  border-radius: 0.25em;\n  border: 0.5px solid var(--color-gray-light);\n  background-color: var(--color-white);\n}\n\n.Input__label {\n  font-family: var(--font-family-sans);\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 2em;\n  display: flex;\n  flex-direction: column;\n}\n\n.Input__error {\n  color: var(--color-error);\n  font-size: 0.75rem;\n  font-weight: 400;\n}\n',
        '',
      ]);
    },
  },
  [[230, 1, 2]],
]);
//# sourceMappingURL=main.6a7f48fa1fea56ce7431.bundle.js.map
