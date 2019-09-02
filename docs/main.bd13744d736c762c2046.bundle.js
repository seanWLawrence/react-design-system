(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    216: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        ),
        _react_design_system_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          47
        ),
        Abbreviation = function(_a) {
          var children = _a.children,
            title = _a.title,
            props = tslib__WEBPACK_IMPORTED_MODULE_0__.c(_a, [
              'children',
              'title',
            ]);
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'abbr',
            tslib__WEBPACK_IMPORTED_MODULE_0__.a({}, props, {
              className: Object(
                _react_design_system_utils__WEBPACK_IMPORTED_MODULE_2__.a
              )('rds-Abbreviation__abbreviation-wrapper', props.className),
              title: title,
              tabIndex: 0,
            }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'span',
              { className: 'rds-Abbreviation__abbreviation-title--hidden' },
              title,
              ','
            ),
            children
          );
        };
      __webpack_exports__.a = Abbreviation;
      try {
        (Abbreviation.displayName = 'Abbreviation'),
          (Abbreviation.__docgenInfo = {
            description: '',
            displayName: 'Abbreviation',
            props: {
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'string' },
              },
              key: {
                defaultValue: null,
                description: '',
                name: 'key',
                required: !1,
                type: { name: 'Key' },
              },
              defaultChecked: {
                defaultValue: null,
                description: '',
                name: 'defaultChecked',
                required: !1,
                type: { name: 'boolean' },
              },
              defaultValue: {
                defaultValue: null,
                description: '',
                name: 'defaultValue',
                required: !1,
                type: { name: 'string | string[]' },
              },
              suppressContentEditableWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressContentEditableWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              suppressHydrationWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressHydrationWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              accessKey: {
                defaultValue: null,
                description: '',
                name: 'accessKey',
                required: !1,
                type: { name: 'string' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              contentEditable: {
                defaultValue: null,
                description: '',
                name: 'contentEditable',
                required: !1,
                type: { name: 'boolean' },
              },
              contextMenu: {
                defaultValue: null,
                description: '',
                name: 'contextMenu',
                required: !1,
                type: { name: 'string' },
              },
              dir: {
                defaultValue: null,
                description: '',
                name: 'dir',
                required: !1,
                type: { name: 'string' },
              },
              draggable: {
                defaultValue: null,
                description: '',
                name: 'draggable',
                required: !1,
                type: { name: 'boolean' },
              },
              hidden: {
                defaultValue: null,
                description: '',
                name: 'hidden',
                required: !1,
                type: { name: 'boolean' },
              },
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !1,
                type: { name: 'string' },
              },
              lang: {
                defaultValue: null,
                description: '',
                name: 'lang',
                required: !1,
                type: { name: 'string' },
              },
              placeholder: {
                defaultValue: null,
                description: '',
                name: 'placeholder',
                required: !1,
                type: { name: 'string' },
              },
              slot: {
                defaultValue: null,
                description: '',
                name: 'slot',
                required: !1,
                type: { name: 'string' },
              },
              spellCheck: {
                defaultValue: null,
                description: '',
                name: 'spellCheck',
                required: !1,
                type: { name: 'boolean' },
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              tabIndex: {
                defaultValue: null,
                description: '',
                name: 'tabIndex',
                required: !1,
                type: { name: 'number' },
              },
              inputMode: {
                defaultValue: null,
                description: '',
                name: 'inputMode',
                required: !1,
                type: { name: 'string' },
              },
              is: {
                defaultValue: null,
                description: '',
                name: 'is',
                required: !1,
                type: { name: 'string' },
              },
              radioGroup: {
                defaultValue: null,
                description: '',
                name: 'radioGroup',
                required: !1,
                type: { name: 'string' },
              },
              role: {
                defaultValue: null,
                description: '',
                name: 'role',
                required: !1,
                type: { name: 'string' },
              },
              about: {
                defaultValue: null,
                description: '',
                name: 'about',
                required: !1,
                type: { name: 'string' },
              },
              datatype: {
                defaultValue: null,
                description: '',
                name: 'datatype',
                required: !1,
                type: { name: 'string' },
              },
              inlist: {
                defaultValue: null,
                description: '',
                name: 'inlist',
                required: !1,
                type: { name: 'any' },
              },
              prefix: {
                defaultValue: null,
                description: '',
                name: 'prefix',
                required: !1,
                type: { name: 'string' },
              },
              property: {
                defaultValue: null,
                description: '',
                name: 'property',
                required: !1,
                type: { name: 'string' },
              },
              resource: {
                defaultValue: null,
                description: '',
                name: 'resource',
                required: !1,
                type: { name: 'string' },
              },
              typeof: {
                defaultValue: null,
                description: '',
                name: 'typeof',
                required: !1,
                type: { name: 'string' },
              },
              vocab: {
                defaultValue: null,
                description: '',
                name: 'vocab',
                required: !1,
                type: { name: 'string' },
              },
              autoCapitalize: {
                defaultValue: null,
                description: '',
                name: 'autoCapitalize',
                required: !1,
                type: { name: 'string' },
              },
              autoCorrect: {
                defaultValue: null,
                description: '',
                name: 'autoCorrect',
                required: !1,
                type: { name: 'string' },
              },
              autoSave: {
                defaultValue: null,
                description: '',
                name: 'autoSave',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              itemProp: {
                defaultValue: null,
                description: '',
                name: 'itemProp',
                required: !1,
                type: { name: 'string' },
              },
              itemScope: {
                defaultValue: null,
                description: '',
                name: 'itemScope',
                required: !1,
                type: { name: 'boolean' },
              },
              itemType: {
                defaultValue: null,
                description: '',
                name: 'itemType',
                required: !1,
                type: { name: 'string' },
              },
              itemID: {
                defaultValue: null,
                description: '',
                name: 'itemID',
                required: !1,
                type: { name: 'string' },
              },
              itemRef: {
                defaultValue: null,
                description: '',
                name: 'itemRef',
                required: !1,
                type: { name: 'string' },
              },
              results: {
                defaultValue: null,
                description: '',
                name: 'results',
                required: !1,
                type: { name: 'number' },
              },
              security: {
                defaultValue: null,
                description: '',
                name: 'security',
                required: !1,
                type: { name: 'string' },
              },
              unselectable: {
                defaultValue: null,
                description: '',
                name: 'unselectable',
                required: !1,
                type: { name: '"on" | "off"' },
              },
              'aria-activedescendant': {
                defaultValue: null,
                description:
                  'Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.',
                name: 'aria-activedescendant',
                required: !1,
                type: { name: 'string' },
              },
              'aria-atomic': {
                defaultValue: null,
                description:
                  'Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.',
                name: 'aria-atomic',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-autocomplete': {
                defaultValue: null,
                description:
                  "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
                name: 'aria-autocomplete',
                required: !1,
                type: { name: '"none" | "inline" | "list" | "both"' },
              },
              'aria-busy': {
                defaultValue: null,
                description:
                  'Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.',
                name: 'aria-busy',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-checked': {
                defaultValue: null,
                description:
                  'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.',
                name: 'aria-checked',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-colcount': {
                defaultValue: null,
                description:
                  'Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.',
                name: 'aria-colcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colindex': {
                defaultValue: null,
                description:
                  "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.",
                name: 'aria-colindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colspan': {
                defaultValue: null,
                description:
                  'Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.',
                name: 'aria-colspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-controls': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.',
                name: 'aria-controls',
                required: !1,
                type: { name: 'string' },
              },
              'aria-current': {
                defaultValue: null,
                description:
                  'Indicates the element that represents the current item within a container or set of related elements.',
                name: 'aria-current',
                required: !1,
                type: {
                  name:
                    'boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time"',
                },
              },
              'aria-describedby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that describes the object.\n@see aria-labelledby',
                name: 'aria-describedby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-details': {
                defaultValue: null,
                description:
                  'Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.',
                name: 'aria-details',
                required: !1,
                type: { name: 'string' },
              },
              'aria-disabled': {
                defaultValue: null,
                description:
                  'Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.',
                name: 'aria-disabled',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-dropeffect': {
                defaultValue: null,
                description:
                  'Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1',
                name: 'aria-dropeffect',
                required: !1,
                type: {
                  name:
                    '"none" | "copy" | "execute" | "link" | "move" | "popup"',
                },
              },
              'aria-errormessage': {
                defaultValue: null,
                description:
                  'Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.',
                name: 'aria-errormessage',
                required: !1,
                type: { name: 'string' },
              },
              'aria-expanded': {
                defaultValue: null,
                description:
                  'Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.',
                name: 'aria-expanded',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-flowto': {
                defaultValue: null,
                description:
                  "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
                name: 'aria-flowto',
                required: !1,
                type: { name: 'string' },
              },
              'aria-grabbed': {
                defaultValue: null,
                description:
                  'Indicates an element\'s "grabbed" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1',
                name: 'aria-grabbed',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-haspopup': {
                defaultValue: null,
                description:
                  'Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.',
                name: 'aria-haspopup',
                required: !1,
                type: {
                  name:
                    'boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog"',
                },
              },
              'aria-hidden': {
                defaultValue: null,
                description:
                  'Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.',
                name: 'aria-hidden',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-invalid': {
                defaultValue: null,
                description:
                  'Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.',
                name: 'aria-invalid',
                required: !1,
                type: {
                  name: 'boolean | "false" | "true" | "grammar" | "spelling"',
                },
              },
              'aria-keyshortcuts': {
                defaultValue: null,
                description:
                  'Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.',
                name: 'aria-keyshortcuts',
                required: !1,
                type: { name: 'string' },
              },
              'aria-label': {
                defaultValue: null,
                description:
                  'Defines a string value that labels the current element.\n@see aria-labelledby.',
                name: 'aria-label',
                required: !1,
                type: { name: 'string' },
              },
              'aria-labelledby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that labels the current element.\n@see aria-describedby.',
                name: 'aria-labelledby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-level': {
                defaultValue: null,
                description:
                  'Defines the hierarchical level of an element within a structure.',
                name: 'aria-level',
                required: !1,
                type: { name: 'number' },
              },
              'aria-live': {
                defaultValue: null,
                description:
                  'Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.',
                name: 'aria-live',
                required: !1,
                type: { name: '"off" | "assertive" | "polite"' },
              },
              'aria-modal': {
                defaultValue: null,
                description:
                  'Indicates whether an element is modal when displayed.',
                name: 'aria-modal',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiline': {
                defaultValue: null,
                description:
                  'Indicates whether a text box accepts multiple lines of input or only a single line.',
                name: 'aria-multiline',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiselectable': {
                defaultValue: null,
                description:
                  'Indicates that the user may select more than one item from the current selectable descendants.',
                name: 'aria-multiselectable',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-orientation': {
                defaultValue: null,
                description:
                  "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
                name: 'aria-orientation',
                required: !1,
                type: { name: '"horizontal" | "vertical"' },
              },
              'aria-owns': {
                defaultValue: null,
                description:
                  'Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.',
                name: 'aria-owns',
                required: !1,
                type: { name: 'string' },
              },
              'aria-placeholder': {
                defaultValue: null,
                description:
                  'Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.',
                name: 'aria-placeholder',
                required: !1,
                type: { name: 'string' },
              },
              'aria-posinset': {
                defaultValue: null,
                description:
                  "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.",
                name: 'aria-posinset',
                required: !1,
                type: { name: 'number' },
              },
              'aria-pressed': {
                defaultValue: null,
                description:
                  'Indicates the current "pressed" state of toggle buttons.\n@see aria-checked\n@see aria-selected.',
                name: 'aria-pressed',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-readonly': {
                defaultValue: null,
                description:
                  'Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.',
                name: 'aria-readonly',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-relevant': {
                defaultValue: null,
                description:
                  'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.',
                name: 'aria-relevant',
                required: !1,
                type: {
                  name:
                    '"additions" | "additions text" | "all" | "removals" | "text"',
                },
              },
              'aria-required': {
                defaultValue: null,
                description:
                  'Indicates that user input is required on the element before a form may be submitted.',
                name: 'aria-required',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-roledescription': {
                defaultValue: null,
                description:
                  'Defines a human-readable, author-localized description for the role of an element.',
                name: 'aria-roledescription',
                required: !1,
                type: { name: 'string' },
              },
              'aria-rowcount': {
                defaultValue: null,
                description:
                  'Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.',
                name: 'aria-rowcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowindex': {
                defaultValue: null,
                description:
                  "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.",
                name: 'aria-rowindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowspan': {
                defaultValue: null,
                description:
                  'Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.',
                name: 'aria-rowspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-selected': {
                defaultValue: null,
                description:
                  'Indicates the current "selected" state of various widgets.\n@see aria-checked\n@see aria-pressed.',
                name: 'aria-selected',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-setsize': {
                defaultValue: null,
                description:
                  'Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.',
                name: 'aria-setsize',
                required: !1,
                type: { name: 'number' },
              },
              'aria-sort': {
                defaultValue: null,
                description:
                  'Indicates if items in a table or grid are sorted in ascending or descending order.',
                name: 'aria-sort',
                required: !1,
                type: { name: '"none" | "ascending" | "descending" | "other"' },
              },
              'aria-valuemax': {
                defaultValue: null,
                description:
                  'Defines the maximum allowed value for a range widget.',
                name: 'aria-valuemax',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuemin': {
                defaultValue: null,
                description:
                  'Defines the minimum allowed value for a range widget.',
                name: 'aria-valuemin',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuenow': {
                defaultValue: null,
                description:
                  'Defines the current value for a range widget.\n@see aria-valuetext.',
                name: 'aria-valuenow',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuetext': {
                defaultValue: null,
                description:
                  'Defines the human readable text alternative of aria-valuenow for a range widget.',
                name: 'aria-valuetext',
                required: !1,
                type: { name: 'string' },
              },
              dangerouslySetInnerHTML: {
                defaultValue: null,
                description: '',
                name: 'dangerouslySetInnerHTML',
                required: !1,
                type: { name: '{ __html: string; }' },
              },
              onCopy: {
                defaultValue: null,
                description: '',
                name: 'onCopy',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCopyCapture: {
                defaultValue: null,
                description: '',
                name: 'onCopyCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCut: {
                defaultValue: null,
                description: '',
                name: 'onCut',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCutCapture: {
                defaultValue: null,
                description: '',
                name: 'onCutCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onPaste: {
                defaultValue: null,
                description: '',
                name: 'onPaste',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onPasteCapture: {
                defaultValue: null,
                description: '',
                name: 'onPasteCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCompositionEnd: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEnd',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEndCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionStart: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStart',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStartCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionUpdate: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdate',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdateCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onFocus: {
                defaultValue: null,
                description: '',
                name: 'onFocus',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onFocusCapture: {
                defaultValue: null,
                description: '',
                name: 'onFocusCapture',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onBlur: {
                defaultValue: null,
                description: '',
                name: 'onBlur',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onBlurCapture: {
                defaultValue: null,
                description: '',
                name: 'onBlurCapture',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onChangeCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onBeforeInput: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onBeforeInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInput: {
                defaultValue: null,
                description: '',
                name: 'onInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onReset: {
                defaultValue: null,
                description: '',
                name: 'onReset',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onResetCapture: {
                defaultValue: null,
                description: '',
                name: 'onResetCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onSubmit: {
                defaultValue: null,
                description: '',
                name: 'onSubmit',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onSubmitCapture: {
                defaultValue: null,
                description: '',
                name: 'onSubmitCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInvalid: {
                defaultValue: null,
                description: '',
                name: 'onInvalid',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInvalidCapture: {
                defaultValue: null,
                description: '',
                name: 'onInvalidCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onLoad: {
                defaultValue: null,
                description: '',
                name: 'onLoad',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onError: {
                defaultValue: null,
                description: '',
                name: 'onError',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onErrorCapture: {
                defaultValue: null,
                description: '',
                name: 'onErrorCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onKeyDown: {
                defaultValue: null,
                description: '',
                name: 'onKeyDown',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyDownCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyPress: {
                defaultValue: null,
                description: '',
                name: 'onKeyPress',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyPressCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyPressCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyUp: {
                defaultValue: null,
                description: '',
                name: 'onKeyUp',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyUpCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onAbort: {
                defaultValue: null,
                description: '',
                name: 'onAbort',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onAbortCapture: {
                defaultValue: null,
                description: '',
                name: 'onAbortCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlay: {
                defaultValue: null,
                description: '',
                name: 'onCanPlay',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlayThrough: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThrough',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlayThroughCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThroughCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onDurationChange: {
                defaultValue: null,
                description: '',
                name: 'onDurationChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onDurationChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onDurationChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEmptied: {
                defaultValue: null,
                description: '',
                name: 'onEmptied',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEmptiedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEmptiedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEncrypted: {
                defaultValue: null,
                description: '',
                name: 'onEncrypted',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEncryptedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEncryptedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEnded: {
                defaultValue: null,
                description: '',
                name: 'onEnded',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEndedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEndedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedData: {
                defaultValue: null,
                description: '',
                name: 'onLoadedData',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedDataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedDataCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedMetadata: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadata',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedMetadataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadataCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadStart: {
                defaultValue: null,
                description: '',
                name: 'onLoadStart',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadStartCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPause: {
                defaultValue: null,
                description: '',
                name: 'onPause',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPauseCapture: {
                defaultValue: null,
                description: '',
                name: 'onPauseCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlay: {
                defaultValue: null,
                description: '',
                name: 'onPlay',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlaying: {
                defaultValue: null,
                description: '',
                name: 'onPlaying',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlayingCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onProgress: {
                defaultValue: null,
                description: '',
                name: 'onProgress',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onProgressCapture: {
                defaultValue: null,
                description: '',
                name: 'onProgressCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onRateChange: {
                defaultValue: null,
                description: '',
                name: 'onRateChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onRateChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onRateChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeeked: {
                defaultValue: null,
                description: '',
                name: 'onSeeked',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeekedCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeeking: {
                defaultValue: null,
                description: '',
                name: 'onSeeking',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeekingCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onStalled: {
                defaultValue: null,
                description: '',
                name: 'onStalled',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onStalledCapture: {
                defaultValue: null,
                description: '',
                name: 'onStalledCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSuspend: {
                defaultValue: null,
                description: '',
                name: 'onSuspend',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSuspendCapture: {
                defaultValue: null,
                description: '',
                name: 'onSuspendCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onTimeUpdate: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdate',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onTimeUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdateCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onVolumeChange: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onVolumeChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onWaiting: {
                defaultValue: null,
                description: '',
                name: 'onWaiting',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onWaitingCapture: {
                defaultValue: null,
                description: '',
                name: 'onWaitingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onAuxClick: {
                defaultValue: null,
                description: '',
                name: 'onAuxClick',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onAuxClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onAuxClickCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onClickCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onContextMenu: {
                defaultValue: null,
                description: '',
                name: 'onContextMenu',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onContextMenuCapture: {
                defaultValue: null,
                description: '',
                name: 'onContextMenuCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onDoubleClick: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClick',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onDoubleClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClickCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onDrag: {
                defaultValue: null,
                description: '',
                name: 'onDrag',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEnd: {
                defaultValue: null,
                description: '',
                name: 'onDragEnd',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEndCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEnter: {
                defaultValue: null,
                description: '',
                name: 'onDragEnter',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEnterCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragExit: {
                defaultValue: null,
                description: '',
                name: 'onDragExit',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragExitCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragExitCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragLeave: {
                defaultValue: null,
                description: '',
                name: 'onDragLeave',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragLeaveCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragOver: {
                defaultValue: null,
                description: '',
                name: 'onDragOver',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragOverCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragStart: {
                defaultValue: null,
                description: '',
                name: 'onDragStart',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragStartCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDrop: {
                defaultValue: null,
                description: '',
                name: 'onDrop',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDropCapture: {
                defaultValue: null,
                description: '',
                name: 'onDropCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onMouseDown: {
                defaultValue: null,
                description: '',
                name: 'onMouseDown',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseDownCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseEnter: {
                defaultValue: null,
                description: '',
                name: 'onMouseEnter',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseLeave: {
                defaultValue: null,
                description: '',
                name: 'onMouseLeave',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseMove: {
                defaultValue: null,
                description: '',
                name: 'onMouseMove',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseMoveCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOut: {
                defaultValue: null,
                description: '',
                name: 'onMouseOut',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOutCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOver: {
                defaultValue: null,
                description: '',
                name: 'onMouseOver',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOverCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseUp: {
                defaultValue: null,
                description: '',
                name: 'onMouseUp',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseUpCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onSelect: {
                defaultValue: null,
                description: '',
                name: 'onSelect',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSelectCapture: {
                defaultValue: null,
                description: '',
                name: 'onSelectCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onTouchCancel: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancel',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancelCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchEnd: {
                defaultValue: null,
                description: '',
                name: 'onTouchEnd',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchEndCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchMove: {
                defaultValue: null,
                description: '',
                name: 'onTouchMove',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchMoveCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchStart: {
                defaultValue: null,
                description: '',
                name: 'onTouchStart',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchStartCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onPointerDown: {
                defaultValue: null,
                description: '',
                name: 'onPointerDown',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerDownCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerMove: {
                defaultValue: null,
                description: '',
                name: 'onPointerMove',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerMoveCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerUp: {
                defaultValue: null,
                description: '',
                name: 'onPointerUp',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerUpCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerCancel: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancel',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancelCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerEnter: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnter',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnterCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerLeave: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeave',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeaveCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOver: {
                defaultValue: null,
                description: '',
                name: 'onPointerOver',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOverCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOut: {
                defaultValue: null,
                description: '',
                name: 'onPointerOut',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOutCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onGotPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onGotPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCaptureCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onLostPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onLostPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCaptureCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onScroll: {
                defaultValue: null,
                description: '',
                name: 'onScroll',
                required: !1,
                type: { name: '(event: UIEvent<HTMLElement>) => void' },
              },
              onScrollCapture: {
                defaultValue: null,
                description: '',
                name: 'onScrollCapture',
                required: !1,
                type: { name: '(event: UIEvent<HTMLElement>) => void' },
              },
              onWheel: {
                defaultValue: null,
                description: '',
                name: 'onWheel',
                required: !1,
                type: { name: '(event: WheelEvent<HTMLElement>) => void' },
              },
              onWheelCapture: {
                defaultValue: null,
                description: '',
                name: 'onWheelCapture',
                required: !1,
                type: { name: '(event: WheelEvent<HTMLElement>) => void' },
              },
              onAnimationStart: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStart',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStartCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationEnd: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEnd',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEndCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationIteration: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIteration',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationIterationCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIterationCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onTransitionEnd: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEnd',
                required: !1,
                type: { name: '(event: TransitionEvent<HTMLElement>) => void' },
              },
              onTransitionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEndCapture',
                required: !1,
                type: { name: '(event: TransitionEvent<HTMLElement>) => void' },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name:
                    '((instance: HTMLElement) => void) | RefObject<HTMLElement>',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/typography/src/abbreviation/index.tsx#Abbreviation'
            ] = {
              docgenInfo: Abbreviation.__docgenInfo,
              name: 'Abbreviation',
              path:
                'packages/typography/src/abbreviation/index.tsx#Abbreviation',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (abbreviation.displayName = 'abbreviation'),
          (abbreviation.__docgenInfo = {
            description: '',
            displayName: 'abbreviation',
            props: {
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'string' },
              },
              key: {
                defaultValue: null,
                description: '',
                name: 'key',
                required: !1,
                type: { name: 'Key' },
              },
              defaultChecked: {
                defaultValue: null,
                description: '',
                name: 'defaultChecked',
                required: !1,
                type: { name: 'boolean' },
              },
              defaultValue: {
                defaultValue: null,
                description: '',
                name: 'defaultValue',
                required: !1,
                type: { name: 'string | string[]' },
              },
              suppressContentEditableWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressContentEditableWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              suppressHydrationWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressHydrationWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              accessKey: {
                defaultValue: null,
                description: '',
                name: 'accessKey',
                required: !1,
                type: { name: 'string' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              contentEditable: {
                defaultValue: null,
                description: '',
                name: 'contentEditable',
                required: !1,
                type: { name: 'boolean' },
              },
              contextMenu: {
                defaultValue: null,
                description: '',
                name: 'contextMenu',
                required: !1,
                type: { name: 'string' },
              },
              dir: {
                defaultValue: null,
                description: '',
                name: 'dir',
                required: !1,
                type: { name: 'string' },
              },
              draggable: {
                defaultValue: null,
                description: '',
                name: 'draggable',
                required: !1,
                type: { name: 'boolean' },
              },
              hidden: {
                defaultValue: null,
                description: '',
                name: 'hidden',
                required: !1,
                type: { name: 'boolean' },
              },
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !1,
                type: { name: 'string' },
              },
              lang: {
                defaultValue: null,
                description: '',
                name: 'lang',
                required: !1,
                type: { name: 'string' },
              },
              placeholder: {
                defaultValue: null,
                description: '',
                name: 'placeholder',
                required: !1,
                type: { name: 'string' },
              },
              slot: {
                defaultValue: null,
                description: '',
                name: 'slot',
                required: !1,
                type: { name: 'string' },
              },
              spellCheck: {
                defaultValue: null,
                description: '',
                name: 'spellCheck',
                required: !1,
                type: { name: 'boolean' },
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              tabIndex: {
                defaultValue: null,
                description: '',
                name: 'tabIndex',
                required: !1,
                type: { name: 'number' },
              },
              inputMode: {
                defaultValue: null,
                description: '',
                name: 'inputMode',
                required: !1,
                type: { name: 'string' },
              },
              is: {
                defaultValue: null,
                description: '',
                name: 'is',
                required: !1,
                type: { name: 'string' },
              },
              radioGroup: {
                defaultValue: null,
                description: '',
                name: 'radioGroup',
                required: !1,
                type: { name: 'string' },
              },
              role: {
                defaultValue: null,
                description: '',
                name: 'role',
                required: !1,
                type: { name: 'string' },
              },
              about: {
                defaultValue: null,
                description: '',
                name: 'about',
                required: !1,
                type: { name: 'string' },
              },
              datatype: {
                defaultValue: null,
                description: '',
                name: 'datatype',
                required: !1,
                type: { name: 'string' },
              },
              inlist: {
                defaultValue: null,
                description: '',
                name: 'inlist',
                required: !1,
                type: { name: 'any' },
              },
              prefix: {
                defaultValue: null,
                description: '',
                name: 'prefix',
                required: !1,
                type: { name: 'string' },
              },
              property: {
                defaultValue: null,
                description: '',
                name: 'property',
                required: !1,
                type: { name: 'string' },
              },
              resource: {
                defaultValue: null,
                description: '',
                name: 'resource',
                required: !1,
                type: { name: 'string' },
              },
              typeof: {
                defaultValue: null,
                description: '',
                name: 'typeof',
                required: !1,
                type: { name: 'string' },
              },
              vocab: {
                defaultValue: null,
                description: '',
                name: 'vocab',
                required: !1,
                type: { name: 'string' },
              },
              autoCapitalize: {
                defaultValue: null,
                description: '',
                name: 'autoCapitalize',
                required: !1,
                type: { name: 'string' },
              },
              autoCorrect: {
                defaultValue: null,
                description: '',
                name: 'autoCorrect',
                required: !1,
                type: { name: 'string' },
              },
              autoSave: {
                defaultValue: null,
                description: '',
                name: 'autoSave',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              itemProp: {
                defaultValue: null,
                description: '',
                name: 'itemProp',
                required: !1,
                type: { name: 'string' },
              },
              itemScope: {
                defaultValue: null,
                description: '',
                name: 'itemScope',
                required: !1,
                type: { name: 'boolean' },
              },
              itemType: {
                defaultValue: null,
                description: '',
                name: 'itemType',
                required: !1,
                type: { name: 'string' },
              },
              itemID: {
                defaultValue: null,
                description: '',
                name: 'itemID',
                required: !1,
                type: { name: 'string' },
              },
              itemRef: {
                defaultValue: null,
                description: '',
                name: 'itemRef',
                required: !1,
                type: { name: 'string' },
              },
              results: {
                defaultValue: null,
                description: '',
                name: 'results',
                required: !1,
                type: { name: 'number' },
              },
              security: {
                defaultValue: null,
                description: '',
                name: 'security',
                required: !1,
                type: { name: 'string' },
              },
              unselectable: {
                defaultValue: null,
                description: '',
                name: 'unselectable',
                required: !1,
                type: { name: '"on" | "off"' },
              },
              'aria-activedescendant': {
                defaultValue: null,
                description:
                  'Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.',
                name: 'aria-activedescendant',
                required: !1,
                type: { name: 'string' },
              },
              'aria-atomic': {
                defaultValue: null,
                description:
                  'Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.',
                name: 'aria-atomic',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-autocomplete': {
                defaultValue: null,
                description:
                  "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
                name: 'aria-autocomplete',
                required: !1,
                type: { name: '"none" | "inline" | "list" | "both"' },
              },
              'aria-busy': {
                defaultValue: null,
                description:
                  'Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.',
                name: 'aria-busy',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-checked': {
                defaultValue: null,
                description:
                  'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.',
                name: 'aria-checked',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-colcount': {
                defaultValue: null,
                description:
                  'Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.',
                name: 'aria-colcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colindex': {
                defaultValue: null,
                description:
                  "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.",
                name: 'aria-colindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colspan': {
                defaultValue: null,
                description:
                  'Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.',
                name: 'aria-colspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-controls': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.',
                name: 'aria-controls',
                required: !1,
                type: { name: 'string' },
              },
              'aria-current': {
                defaultValue: null,
                description:
                  'Indicates the element that represents the current item within a container or set of related elements.',
                name: 'aria-current',
                required: !1,
                type: {
                  name:
                    'boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time"',
                },
              },
              'aria-describedby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that describes the object.\n@see aria-labelledby',
                name: 'aria-describedby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-details': {
                defaultValue: null,
                description:
                  'Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.',
                name: 'aria-details',
                required: !1,
                type: { name: 'string' },
              },
              'aria-disabled': {
                defaultValue: null,
                description:
                  'Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.',
                name: 'aria-disabled',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-dropeffect': {
                defaultValue: null,
                description:
                  'Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1',
                name: 'aria-dropeffect',
                required: !1,
                type: {
                  name:
                    '"none" | "copy" | "execute" | "link" | "move" | "popup"',
                },
              },
              'aria-errormessage': {
                defaultValue: null,
                description:
                  'Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.',
                name: 'aria-errormessage',
                required: !1,
                type: { name: 'string' },
              },
              'aria-expanded': {
                defaultValue: null,
                description:
                  'Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.',
                name: 'aria-expanded',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-flowto': {
                defaultValue: null,
                description:
                  "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
                name: 'aria-flowto',
                required: !1,
                type: { name: 'string' },
              },
              'aria-grabbed': {
                defaultValue: null,
                description:
                  'Indicates an element\'s "grabbed" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1',
                name: 'aria-grabbed',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-haspopup': {
                defaultValue: null,
                description:
                  'Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.',
                name: 'aria-haspopup',
                required: !1,
                type: {
                  name:
                    'boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog"',
                },
              },
              'aria-hidden': {
                defaultValue: null,
                description:
                  'Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.',
                name: 'aria-hidden',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-invalid': {
                defaultValue: null,
                description:
                  'Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.',
                name: 'aria-invalid',
                required: !1,
                type: {
                  name: 'boolean | "false" | "true" | "grammar" | "spelling"',
                },
              },
              'aria-keyshortcuts': {
                defaultValue: null,
                description:
                  'Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.',
                name: 'aria-keyshortcuts',
                required: !1,
                type: { name: 'string' },
              },
              'aria-label': {
                defaultValue: null,
                description:
                  'Defines a string value that labels the current element.\n@see aria-labelledby.',
                name: 'aria-label',
                required: !1,
                type: { name: 'string' },
              },
              'aria-labelledby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that labels the current element.\n@see aria-describedby.',
                name: 'aria-labelledby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-level': {
                defaultValue: null,
                description:
                  'Defines the hierarchical level of an element within a structure.',
                name: 'aria-level',
                required: !1,
                type: { name: 'number' },
              },
              'aria-live': {
                defaultValue: null,
                description:
                  'Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.',
                name: 'aria-live',
                required: !1,
                type: { name: '"off" | "assertive" | "polite"' },
              },
              'aria-modal': {
                defaultValue: null,
                description:
                  'Indicates whether an element is modal when displayed.',
                name: 'aria-modal',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiline': {
                defaultValue: null,
                description:
                  'Indicates whether a text box accepts multiple lines of input or only a single line.',
                name: 'aria-multiline',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiselectable': {
                defaultValue: null,
                description:
                  'Indicates that the user may select more than one item from the current selectable descendants.',
                name: 'aria-multiselectable',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-orientation': {
                defaultValue: null,
                description:
                  "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
                name: 'aria-orientation',
                required: !1,
                type: { name: '"horizontal" | "vertical"' },
              },
              'aria-owns': {
                defaultValue: null,
                description:
                  'Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.',
                name: 'aria-owns',
                required: !1,
                type: { name: 'string' },
              },
              'aria-placeholder': {
                defaultValue: null,
                description:
                  'Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.',
                name: 'aria-placeholder',
                required: !1,
                type: { name: 'string' },
              },
              'aria-posinset': {
                defaultValue: null,
                description:
                  "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.",
                name: 'aria-posinset',
                required: !1,
                type: { name: 'number' },
              },
              'aria-pressed': {
                defaultValue: null,
                description:
                  'Indicates the current "pressed" state of toggle buttons.\n@see aria-checked\n@see aria-selected.',
                name: 'aria-pressed',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-readonly': {
                defaultValue: null,
                description:
                  'Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.',
                name: 'aria-readonly',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-relevant': {
                defaultValue: null,
                description:
                  'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.',
                name: 'aria-relevant',
                required: !1,
                type: {
                  name:
                    '"additions" | "additions text" | "all" | "removals" | "text"',
                },
              },
              'aria-required': {
                defaultValue: null,
                description:
                  'Indicates that user input is required on the element before a form may be submitted.',
                name: 'aria-required',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-roledescription': {
                defaultValue: null,
                description:
                  'Defines a human-readable, author-localized description for the role of an element.',
                name: 'aria-roledescription',
                required: !1,
                type: { name: 'string' },
              },
              'aria-rowcount': {
                defaultValue: null,
                description:
                  'Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.',
                name: 'aria-rowcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowindex': {
                defaultValue: null,
                description:
                  "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.",
                name: 'aria-rowindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowspan': {
                defaultValue: null,
                description:
                  'Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.',
                name: 'aria-rowspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-selected': {
                defaultValue: null,
                description:
                  'Indicates the current "selected" state of various widgets.\n@see aria-checked\n@see aria-pressed.',
                name: 'aria-selected',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-setsize': {
                defaultValue: null,
                description:
                  'Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.',
                name: 'aria-setsize',
                required: !1,
                type: { name: 'number' },
              },
              'aria-sort': {
                defaultValue: null,
                description:
                  'Indicates if items in a table or grid are sorted in ascending or descending order.',
                name: 'aria-sort',
                required: !1,
                type: { name: '"none" | "ascending" | "descending" | "other"' },
              },
              'aria-valuemax': {
                defaultValue: null,
                description:
                  'Defines the maximum allowed value for a range widget.',
                name: 'aria-valuemax',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuemin': {
                defaultValue: null,
                description:
                  'Defines the minimum allowed value for a range widget.',
                name: 'aria-valuemin',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuenow': {
                defaultValue: null,
                description:
                  'Defines the current value for a range widget.\n@see aria-valuetext.',
                name: 'aria-valuenow',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuetext': {
                defaultValue: null,
                description:
                  'Defines the human readable text alternative of aria-valuenow for a range widget.',
                name: 'aria-valuetext',
                required: !1,
                type: { name: 'string' },
              },
              dangerouslySetInnerHTML: {
                defaultValue: null,
                description: '',
                name: 'dangerouslySetInnerHTML',
                required: !1,
                type: { name: '{ __html: string; }' },
              },
              onCopy: {
                defaultValue: null,
                description: '',
                name: 'onCopy',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCopyCapture: {
                defaultValue: null,
                description: '',
                name: 'onCopyCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCut: {
                defaultValue: null,
                description: '',
                name: 'onCut',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCutCapture: {
                defaultValue: null,
                description: '',
                name: 'onCutCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onPaste: {
                defaultValue: null,
                description: '',
                name: 'onPaste',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onPasteCapture: {
                defaultValue: null,
                description: '',
                name: 'onPasteCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCompositionEnd: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEnd',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEndCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionStart: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStart',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStartCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionUpdate: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdate',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdateCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onFocus: {
                defaultValue: null,
                description: '',
                name: 'onFocus',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onFocusCapture: {
                defaultValue: null,
                description: '',
                name: 'onFocusCapture',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onBlur: {
                defaultValue: null,
                description: '',
                name: 'onBlur',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onBlurCapture: {
                defaultValue: null,
                description: '',
                name: 'onBlurCapture',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onChangeCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onBeforeInput: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onBeforeInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInput: {
                defaultValue: null,
                description: '',
                name: 'onInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onReset: {
                defaultValue: null,
                description: '',
                name: 'onReset',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onResetCapture: {
                defaultValue: null,
                description: '',
                name: 'onResetCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onSubmit: {
                defaultValue: null,
                description: '',
                name: 'onSubmit',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onSubmitCapture: {
                defaultValue: null,
                description: '',
                name: 'onSubmitCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInvalid: {
                defaultValue: null,
                description: '',
                name: 'onInvalid',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInvalidCapture: {
                defaultValue: null,
                description: '',
                name: 'onInvalidCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onLoad: {
                defaultValue: null,
                description: '',
                name: 'onLoad',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onError: {
                defaultValue: null,
                description: '',
                name: 'onError',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onErrorCapture: {
                defaultValue: null,
                description: '',
                name: 'onErrorCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onKeyDown: {
                defaultValue: null,
                description: '',
                name: 'onKeyDown',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyDownCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyPress: {
                defaultValue: null,
                description: '',
                name: 'onKeyPress',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyPressCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyPressCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyUp: {
                defaultValue: null,
                description: '',
                name: 'onKeyUp',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyUpCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onAbort: {
                defaultValue: null,
                description: '',
                name: 'onAbort',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onAbortCapture: {
                defaultValue: null,
                description: '',
                name: 'onAbortCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlay: {
                defaultValue: null,
                description: '',
                name: 'onCanPlay',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlayThrough: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThrough',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlayThroughCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThroughCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onDurationChange: {
                defaultValue: null,
                description: '',
                name: 'onDurationChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onDurationChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onDurationChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEmptied: {
                defaultValue: null,
                description: '',
                name: 'onEmptied',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEmptiedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEmptiedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEncrypted: {
                defaultValue: null,
                description: '',
                name: 'onEncrypted',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEncryptedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEncryptedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEnded: {
                defaultValue: null,
                description: '',
                name: 'onEnded',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEndedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEndedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedData: {
                defaultValue: null,
                description: '',
                name: 'onLoadedData',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedDataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedDataCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedMetadata: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadata',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedMetadataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadataCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadStart: {
                defaultValue: null,
                description: '',
                name: 'onLoadStart',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadStartCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPause: {
                defaultValue: null,
                description: '',
                name: 'onPause',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPauseCapture: {
                defaultValue: null,
                description: '',
                name: 'onPauseCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlay: {
                defaultValue: null,
                description: '',
                name: 'onPlay',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlaying: {
                defaultValue: null,
                description: '',
                name: 'onPlaying',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlayingCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onProgress: {
                defaultValue: null,
                description: '',
                name: 'onProgress',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onProgressCapture: {
                defaultValue: null,
                description: '',
                name: 'onProgressCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onRateChange: {
                defaultValue: null,
                description: '',
                name: 'onRateChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onRateChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onRateChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeeked: {
                defaultValue: null,
                description: '',
                name: 'onSeeked',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeekedCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeeking: {
                defaultValue: null,
                description: '',
                name: 'onSeeking',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeekingCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onStalled: {
                defaultValue: null,
                description: '',
                name: 'onStalled',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onStalledCapture: {
                defaultValue: null,
                description: '',
                name: 'onStalledCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSuspend: {
                defaultValue: null,
                description: '',
                name: 'onSuspend',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSuspendCapture: {
                defaultValue: null,
                description: '',
                name: 'onSuspendCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onTimeUpdate: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdate',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onTimeUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdateCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onVolumeChange: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onVolumeChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onWaiting: {
                defaultValue: null,
                description: '',
                name: 'onWaiting',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onWaitingCapture: {
                defaultValue: null,
                description: '',
                name: 'onWaitingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onAuxClick: {
                defaultValue: null,
                description: '',
                name: 'onAuxClick',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onAuxClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onAuxClickCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onClickCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onContextMenu: {
                defaultValue: null,
                description: '',
                name: 'onContextMenu',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onContextMenuCapture: {
                defaultValue: null,
                description: '',
                name: 'onContextMenuCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onDoubleClick: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClick',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onDoubleClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClickCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onDrag: {
                defaultValue: null,
                description: '',
                name: 'onDrag',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEnd: {
                defaultValue: null,
                description: '',
                name: 'onDragEnd',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEndCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEnter: {
                defaultValue: null,
                description: '',
                name: 'onDragEnter',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEnterCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragExit: {
                defaultValue: null,
                description: '',
                name: 'onDragExit',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragExitCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragExitCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragLeave: {
                defaultValue: null,
                description: '',
                name: 'onDragLeave',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragLeaveCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragOver: {
                defaultValue: null,
                description: '',
                name: 'onDragOver',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragOverCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragStart: {
                defaultValue: null,
                description: '',
                name: 'onDragStart',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragStartCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDrop: {
                defaultValue: null,
                description: '',
                name: 'onDrop',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDropCapture: {
                defaultValue: null,
                description: '',
                name: 'onDropCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onMouseDown: {
                defaultValue: null,
                description: '',
                name: 'onMouseDown',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseDownCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseEnter: {
                defaultValue: null,
                description: '',
                name: 'onMouseEnter',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseLeave: {
                defaultValue: null,
                description: '',
                name: 'onMouseLeave',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseMove: {
                defaultValue: null,
                description: '',
                name: 'onMouseMove',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseMoveCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOut: {
                defaultValue: null,
                description: '',
                name: 'onMouseOut',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOutCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOver: {
                defaultValue: null,
                description: '',
                name: 'onMouseOver',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOverCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseUp: {
                defaultValue: null,
                description: '',
                name: 'onMouseUp',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseUpCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onSelect: {
                defaultValue: null,
                description: '',
                name: 'onSelect',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSelectCapture: {
                defaultValue: null,
                description: '',
                name: 'onSelectCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onTouchCancel: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancel',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancelCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchEnd: {
                defaultValue: null,
                description: '',
                name: 'onTouchEnd',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchEndCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchMove: {
                defaultValue: null,
                description: '',
                name: 'onTouchMove',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchMoveCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchStart: {
                defaultValue: null,
                description: '',
                name: 'onTouchStart',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchStartCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onPointerDown: {
                defaultValue: null,
                description: '',
                name: 'onPointerDown',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerDownCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerMove: {
                defaultValue: null,
                description: '',
                name: 'onPointerMove',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerMoveCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerUp: {
                defaultValue: null,
                description: '',
                name: 'onPointerUp',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerUpCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerCancel: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancel',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancelCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerEnter: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnter',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnterCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerLeave: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeave',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeaveCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOver: {
                defaultValue: null,
                description: '',
                name: 'onPointerOver',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOverCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOut: {
                defaultValue: null,
                description: '',
                name: 'onPointerOut',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOutCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onGotPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onGotPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCaptureCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onLostPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onLostPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCaptureCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onScroll: {
                defaultValue: null,
                description: '',
                name: 'onScroll',
                required: !1,
                type: { name: '(event: UIEvent<HTMLElement>) => void' },
              },
              onScrollCapture: {
                defaultValue: null,
                description: '',
                name: 'onScrollCapture',
                required: !1,
                type: { name: '(event: UIEvent<HTMLElement>) => void' },
              },
              onWheel: {
                defaultValue: null,
                description: '',
                name: 'onWheel',
                required: !1,
                type: { name: '(event: WheelEvent<HTMLElement>) => void' },
              },
              onWheelCapture: {
                defaultValue: null,
                description: '',
                name: 'onWheelCapture',
                required: !1,
                type: { name: '(event: WheelEvent<HTMLElement>) => void' },
              },
              onAnimationStart: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStart',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStartCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationEnd: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEnd',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEndCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationIteration: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIteration',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationIterationCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIterationCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onTransitionEnd: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEnd',
                required: !1,
                type: { name: '(event: TransitionEvent<HTMLElement>) => void' },
              },
              onTransitionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEndCapture',
                required: !1,
                type: { name: '(event: TransitionEvent<HTMLElement>) => void' },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name:
                    '((instance: HTMLElement) => void) | RefObject<HTMLElement>',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/typography/src/abbreviation/index.tsx#abbreviation'
            ] = {
              docgenInfo: abbreviation.__docgenInfo,
              name: 'abbreviation',
              path:
                'packages/typography/src/abbreviation/index.tsx#abbreviation',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    334: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        ),
        _react_design_system_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          47
        ),
        Blockquote = function(_a) {
          var children = _a.children,
            props =
              (_a.title,
              tslib__WEBPACK_IMPORTED_MODULE_0__.c(_a, ['children', 'title']));
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'blockquote',
            tslib__WEBPACK_IMPORTED_MODULE_0__.a({}, props, {
              className: Object(
                _react_design_system_utils__WEBPACK_IMPORTED_MODULE_2__.a
              )('rds-Blockquote__blockquote', props.className),
            }),
            children
          );
        };
      __webpack_exports__.a = Blockquote;
      try {
        (Blockquote.displayName = 'Blockquote'),
          (Blockquote.__docgenInfo = {
            description: '',
            displayName: 'Blockquote',
            props: {
              key: {
                defaultValue: null,
                description: '',
                name: 'key',
                required: !1,
                type: { name: 'Key' },
              },
              defaultChecked: {
                defaultValue: null,
                description: '',
                name: 'defaultChecked',
                required: !1,
                type: { name: 'boolean' },
              },
              defaultValue: {
                defaultValue: null,
                description: '',
                name: 'defaultValue',
                required: !1,
                type: { name: 'string | string[]' },
              },
              suppressContentEditableWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressContentEditableWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              suppressHydrationWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressHydrationWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              accessKey: {
                defaultValue: null,
                description: '',
                name: 'accessKey',
                required: !1,
                type: { name: 'string' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              contentEditable: {
                defaultValue: null,
                description: '',
                name: 'contentEditable',
                required: !1,
                type: { name: 'boolean' },
              },
              contextMenu: {
                defaultValue: null,
                description: '',
                name: 'contextMenu',
                required: !1,
                type: { name: 'string' },
              },
              dir: {
                defaultValue: null,
                description: '',
                name: 'dir',
                required: !1,
                type: { name: 'string' },
              },
              draggable: {
                defaultValue: null,
                description: '',
                name: 'draggable',
                required: !1,
                type: { name: 'boolean' },
              },
              hidden: {
                defaultValue: null,
                description: '',
                name: 'hidden',
                required: !1,
                type: { name: 'boolean' },
              },
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !1,
                type: { name: 'string' },
              },
              lang: {
                defaultValue: null,
                description: '',
                name: 'lang',
                required: !1,
                type: { name: 'string' },
              },
              placeholder: {
                defaultValue: null,
                description: '',
                name: 'placeholder',
                required: !1,
                type: { name: 'string' },
              },
              slot: {
                defaultValue: null,
                description: '',
                name: 'slot',
                required: !1,
                type: { name: 'string' },
              },
              spellCheck: {
                defaultValue: null,
                description: '',
                name: 'spellCheck',
                required: !1,
                type: { name: 'boolean' },
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              tabIndex: {
                defaultValue: null,
                description: '',
                name: 'tabIndex',
                required: !1,
                type: { name: 'number' },
              },
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'string' },
              },
              inputMode: {
                defaultValue: null,
                description: '',
                name: 'inputMode',
                required: !1,
                type: { name: 'string' },
              },
              is: {
                defaultValue: null,
                description: '',
                name: 'is',
                required: !1,
                type: { name: 'string' },
              },
              radioGroup: {
                defaultValue: null,
                description: '',
                name: 'radioGroup',
                required: !1,
                type: { name: 'string' },
              },
              role: {
                defaultValue: null,
                description: '',
                name: 'role',
                required: !1,
                type: { name: 'string' },
              },
              about: {
                defaultValue: null,
                description: '',
                name: 'about',
                required: !1,
                type: { name: 'string' },
              },
              datatype: {
                defaultValue: null,
                description: '',
                name: 'datatype',
                required: !1,
                type: { name: 'string' },
              },
              inlist: {
                defaultValue: null,
                description: '',
                name: 'inlist',
                required: !1,
                type: { name: 'any' },
              },
              prefix: {
                defaultValue: null,
                description: '',
                name: 'prefix',
                required: !1,
                type: { name: 'string' },
              },
              property: {
                defaultValue: null,
                description: '',
                name: 'property',
                required: !1,
                type: { name: 'string' },
              },
              resource: {
                defaultValue: null,
                description: '',
                name: 'resource',
                required: !1,
                type: { name: 'string' },
              },
              typeof: {
                defaultValue: null,
                description: '',
                name: 'typeof',
                required: !1,
                type: { name: 'string' },
              },
              vocab: {
                defaultValue: null,
                description: '',
                name: 'vocab',
                required: !1,
                type: { name: 'string' },
              },
              autoCapitalize: {
                defaultValue: null,
                description: '',
                name: 'autoCapitalize',
                required: !1,
                type: { name: 'string' },
              },
              autoCorrect: {
                defaultValue: null,
                description: '',
                name: 'autoCorrect',
                required: !1,
                type: { name: 'string' },
              },
              autoSave: {
                defaultValue: null,
                description: '',
                name: 'autoSave',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              itemProp: {
                defaultValue: null,
                description: '',
                name: 'itemProp',
                required: !1,
                type: { name: 'string' },
              },
              itemScope: {
                defaultValue: null,
                description: '',
                name: 'itemScope',
                required: !1,
                type: { name: 'boolean' },
              },
              itemType: {
                defaultValue: null,
                description: '',
                name: 'itemType',
                required: !1,
                type: { name: 'string' },
              },
              itemID: {
                defaultValue: null,
                description: '',
                name: 'itemID',
                required: !1,
                type: { name: 'string' },
              },
              itemRef: {
                defaultValue: null,
                description: '',
                name: 'itemRef',
                required: !1,
                type: { name: 'string' },
              },
              results: {
                defaultValue: null,
                description: '',
                name: 'results',
                required: !1,
                type: { name: 'number' },
              },
              security: {
                defaultValue: null,
                description: '',
                name: 'security',
                required: !1,
                type: { name: 'string' },
              },
              unselectable: {
                defaultValue: null,
                description: '',
                name: 'unselectable',
                required: !1,
                type: { name: '"on" | "off"' },
              },
              'aria-activedescendant': {
                defaultValue: null,
                description:
                  'Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.',
                name: 'aria-activedescendant',
                required: !1,
                type: { name: 'string' },
              },
              'aria-atomic': {
                defaultValue: null,
                description:
                  'Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.',
                name: 'aria-atomic',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-autocomplete': {
                defaultValue: null,
                description:
                  "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
                name: 'aria-autocomplete',
                required: !1,
                type: { name: '"none" | "inline" | "list" | "both"' },
              },
              'aria-busy': {
                defaultValue: null,
                description:
                  'Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.',
                name: 'aria-busy',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-checked': {
                defaultValue: null,
                description:
                  'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.',
                name: 'aria-checked',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-colcount': {
                defaultValue: null,
                description:
                  'Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.',
                name: 'aria-colcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colindex': {
                defaultValue: null,
                description:
                  "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.",
                name: 'aria-colindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colspan': {
                defaultValue: null,
                description:
                  'Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.',
                name: 'aria-colspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-controls': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.',
                name: 'aria-controls',
                required: !1,
                type: { name: 'string' },
              },
              'aria-current': {
                defaultValue: null,
                description:
                  'Indicates the element that represents the current item within a container or set of related elements.',
                name: 'aria-current',
                required: !1,
                type: {
                  name:
                    'boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time"',
                },
              },
              'aria-describedby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that describes the object.\n@see aria-labelledby',
                name: 'aria-describedby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-details': {
                defaultValue: null,
                description:
                  'Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.',
                name: 'aria-details',
                required: !1,
                type: { name: 'string' },
              },
              'aria-disabled': {
                defaultValue: null,
                description:
                  'Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.',
                name: 'aria-disabled',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-dropeffect': {
                defaultValue: null,
                description:
                  'Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1',
                name: 'aria-dropeffect',
                required: !1,
                type: {
                  name:
                    '"none" | "copy" | "execute" | "link" | "move" | "popup"',
                },
              },
              'aria-errormessage': {
                defaultValue: null,
                description:
                  'Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.',
                name: 'aria-errormessage',
                required: !1,
                type: { name: 'string' },
              },
              'aria-expanded': {
                defaultValue: null,
                description:
                  'Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.',
                name: 'aria-expanded',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-flowto': {
                defaultValue: null,
                description:
                  "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
                name: 'aria-flowto',
                required: !1,
                type: { name: 'string' },
              },
              'aria-grabbed': {
                defaultValue: null,
                description:
                  'Indicates an element\'s "grabbed" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1',
                name: 'aria-grabbed',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-haspopup': {
                defaultValue: null,
                description:
                  'Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.',
                name: 'aria-haspopup',
                required: !1,
                type: {
                  name:
                    'boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog"',
                },
              },
              'aria-hidden': {
                defaultValue: null,
                description:
                  'Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.',
                name: 'aria-hidden',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-invalid': {
                defaultValue: null,
                description:
                  'Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.',
                name: 'aria-invalid',
                required: !1,
                type: {
                  name: 'boolean | "false" | "true" | "grammar" | "spelling"',
                },
              },
              'aria-keyshortcuts': {
                defaultValue: null,
                description:
                  'Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.',
                name: 'aria-keyshortcuts',
                required: !1,
                type: { name: 'string' },
              },
              'aria-label': {
                defaultValue: null,
                description:
                  'Defines a string value that labels the current element.\n@see aria-labelledby.',
                name: 'aria-label',
                required: !1,
                type: { name: 'string' },
              },
              'aria-labelledby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that labels the current element.\n@see aria-describedby.',
                name: 'aria-labelledby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-level': {
                defaultValue: null,
                description:
                  'Defines the hierarchical level of an element within a structure.',
                name: 'aria-level',
                required: !1,
                type: { name: 'number' },
              },
              'aria-live': {
                defaultValue: null,
                description:
                  'Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.',
                name: 'aria-live',
                required: !1,
                type: { name: '"off" | "assertive" | "polite"' },
              },
              'aria-modal': {
                defaultValue: null,
                description:
                  'Indicates whether an element is modal when displayed.',
                name: 'aria-modal',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiline': {
                defaultValue: null,
                description:
                  'Indicates whether a text box accepts multiple lines of input or only a single line.',
                name: 'aria-multiline',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiselectable': {
                defaultValue: null,
                description:
                  'Indicates that the user may select more than one item from the current selectable descendants.',
                name: 'aria-multiselectable',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-orientation': {
                defaultValue: null,
                description:
                  "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
                name: 'aria-orientation',
                required: !1,
                type: { name: '"horizontal" | "vertical"' },
              },
              'aria-owns': {
                defaultValue: null,
                description:
                  'Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.',
                name: 'aria-owns',
                required: !1,
                type: { name: 'string' },
              },
              'aria-placeholder': {
                defaultValue: null,
                description:
                  'Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.',
                name: 'aria-placeholder',
                required: !1,
                type: { name: 'string' },
              },
              'aria-posinset': {
                defaultValue: null,
                description:
                  "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.",
                name: 'aria-posinset',
                required: !1,
                type: { name: 'number' },
              },
              'aria-pressed': {
                defaultValue: null,
                description:
                  'Indicates the current "pressed" state of toggle buttons.\n@see aria-checked\n@see aria-selected.',
                name: 'aria-pressed',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-readonly': {
                defaultValue: null,
                description:
                  'Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.',
                name: 'aria-readonly',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-relevant': {
                defaultValue: null,
                description:
                  'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.',
                name: 'aria-relevant',
                required: !1,
                type: {
                  name:
                    '"additions" | "additions text" | "all" | "removals" | "text"',
                },
              },
              'aria-required': {
                defaultValue: null,
                description:
                  'Indicates that user input is required on the element before a form may be submitted.',
                name: 'aria-required',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-roledescription': {
                defaultValue: null,
                description:
                  'Defines a human-readable, author-localized description for the role of an element.',
                name: 'aria-roledescription',
                required: !1,
                type: { name: 'string' },
              },
              'aria-rowcount': {
                defaultValue: null,
                description:
                  'Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.',
                name: 'aria-rowcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowindex': {
                defaultValue: null,
                description:
                  "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.",
                name: 'aria-rowindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowspan': {
                defaultValue: null,
                description:
                  'Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.',
                name: 'aria-rowspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-selected': {
                defaultValue: null,
                description:
                  'Indicates the current "selected" state of various widgets.\n@see aria-checked\n@see aria-pressed.',
                name: 'aria-selected',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-setsize': {
                defaultValue: null,
                description:
                  'Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.',
                name: 'aria-setsize',
                required: !1,
                type: { name: 'number' },
              },
              'aria-sort': {
                defaultValue: null,
                description:
                  'Indicates if items in a table or grid are sorted in ascending or descending order.',
                name: 'aria-sort',
                required: !1,
                type: { name: '"none" | "ascending" | "descending" | "other"' },
              },
              'aria-valuemax': {
                defaultValue: null,
                description:
                  'Defines the maximum allowed value for a range widget.',
                name: 'aria-valuemax',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuemin': {
                defaultValue: null,
                description:
                  'Defines the minimum allowed value for a range widget.',
                name: 'aria-valuemin',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuenow': {
                defaultValue: null,
                description:
                  'Defines the current value for a range widget.\n@see aria-valuetext.',
                name: 'aria-valuenow',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuetext': {
                defaultValue: null,
                description:
                  'Defines the human readable text alternative of aria-valuenow for a range widget.',
                name: 'aria-valuetext',
                required: !1,
                type: { name: 'string' },
              },
              dangerouslySetInnerHTML: {
                defaultValue: null,
                description: '',
                name: 'dangerouslySetInnerHTML',
                required: !1,
                type: { name: '{ __html: string; }' },
              },
              onCopy: {
                defaultValue: null,
                description: '',
                name: 'onCopy',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCopyCapture: {
                defaultValue: null,
                description: '',
                name: 'onCopyCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCut: {
                defaultValue: null,
                description: '',
                name: 'onCut',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCutCapture: {
                defaultValue: null,
                description: '',
                name: 'onCutCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onPaste: {
                defaultValue: null,
                description: '',
                name: 'onPaste',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onPasteCapture: {
                defaultValue: null,
                description: '',
                name: 'onPasteCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCompositionEnd: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEnd',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEndCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionStart: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStart',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStartCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionUpdate: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdate',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdateCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onFocus: {
                defaultValue: null,
                description: '',
                name: 'onFocus',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onFocusCapture: {
                defaultValue: null,
                description: '',
                name: 'onFocusCapture',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onBlur: {
                defaultValue: null,
                description: '',
                name: 'onBlur',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onBlurCapture: {
                defaultValue: null,
                description: '',
                name: 'onBlurCapture',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onChangeCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onBeforeInput: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onBeforeInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInput: {
                defaultValue: null,
                description: '',
                name: 'onInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onReset: {
                defaultValue: null,
                description: '',
                name: 'onReset',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onResetCapture: {
                defaultValue: null,
                description: '',
                name: 'onResetCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onSubmit: {
                defaultValue: null,
                description: '',
                name: 'onSubmit',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onSubmitCapture: {
                defaultValue: null,
                description: '',
                name: 'onSubmitCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInvalid: {
                defaultValue: null,
                description: '',
                name: 'onInvalid',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInvalidCapture: {
                defaultValue: null,
                description: '',
                name: 'onInvalidCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onLoad: {
                defaultValue: null,
                description: '',
                name: 'onLoad',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onError: {
                defaultValue: null,
                description: '',
                name: 'onError',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onErrorCapture: {
                defaultValue: null,
                description: '',
                name: 'onErrorCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onKeyDown: {
                defaultValue: null,
                description: '',
                name: 'onKeyDown',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyDownCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyPress: {
                defaultValue: null,
                description: '',
                name: 'onKeyPress',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyPressCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyPressCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyUp: {
                defaultValue: null,
                description: '',
                name: 'onKeyUp',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyUpCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onAbort: {
                defaultValue: null,
                description: '',
                name: 'onAbort',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onAbortCapture: {
                defaultValue: null,
                description: '',
                name: 'onAbortCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlay: {
                defaultValue: null,
                description: '',
                name: 'onCanPlay',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlayThrough: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThrough',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlayThroughCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThroughCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onDurationChange: {
                defaultValue: null,
                description: '',
                name: 'onDurationChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onDurationChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onDurationChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEmptied: {
                defaultValue: null,
                description: '',
                name: 'onEmptied',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEmptiedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEmptiedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEncrypted: {
                defaultValue: null,
                description: '',
                name: 'onEncrypted',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEncryptedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEncryptedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEnded: {
                defaultValue: null,
                description: '',
                name: 'onEnded',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEndedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEndedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedData: {
                defaultValue: null,
                description: '',
                name: 'onLoadedData',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedDataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedDataCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedMetadata: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadata',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedMetadataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadataCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadStart: {
                defaultValue: null,
                description: '',
                name: 'onLoadStart',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadStartCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPause: {
                defaultValue: null,
                description: '',
                name: 'onPause',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPauseCapture: {
                defaultValue: null,
                description: '',
                name: 'onPauseCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlay: {
                defaultValue: null,
                description: '',
                name: 'onPlay',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlaying: {
                defaultValue: null,
                description: '',
                name: 'onPlaying',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlayingCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onProgress: {
                defaultValue: null,
                description: '',
                name: 'onProgress',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onProgressCapture: {
                defaultValue: null,
                description: '',
                name: 'onProgressCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onRateChange: {
                defaultValue: null,
                description: '',
                name: 'onRateChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onRateChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onRateChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeeked: {
                defaultValue: null,
                description: '',
                name: 'onSeeked',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeekedCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeeking: {
                defaultValue: null,
                description: '',
                name: 'onSeeking',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeekingCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onStalled: {
                defaultValue: null,
                description: '',
                name: 'onStalled',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onStalledCapture: {
                defaultValue: null,
                description: '',
                name: 'onStalledCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSuspend: {
                defaultValue: null,
                description: '',
                name: 'onSuspend',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSuspendCapture: {
                defaultValue: null,
                description: '',
                name: 'onSuspendCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onTimeUpdate: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdate',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onTimeUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdateCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onVolumeChange: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onVolumeChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onWaiting: {
                defaultValue: null,
                description: '',
                name: 'onWaiting',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onWaitingCapture: {
                defaultValue: null,
                description: '',
                name: 'onWaitingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onAuxClick: {
                defaultValue: null,
                description: '',
                name: 'onAuxClick',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onAuxClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onAuxClickCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onClickCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onContextMenu: {
                defaultValue: null,
                description: '',
                name: 'onContextMenu',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onContextMenuCapture: {
                defaultValue: null,
                description: '',
                name: 'onContextMenuCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onDoubleClick: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClick',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onDoubleClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClickCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onDrag: {
                defaultValue: null,
                description: '',
                name: 'onDrag',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEnd: {
                defaultValue: null,
                description: '',
                name: 'onDragEnd',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEndCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEnter: {
                defaultValue: null,
                description: '',
                name: 'onDragEnter',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEnterCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragExit: {
                defaultValue: null,
                description: '',
                name: 'onDragExit',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragExitCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragExitCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragLeave: {
                defaultValue: null,
                description: '',
                name: 'onDragLeave',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragLeaveCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragOver: {
                defaultValue: null,
                description: '',
                name: 'onDragOver',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragOverCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragStart: {
                defaultValue: null,
                description: '',
                name: 'onDragStart',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragStartCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDrop: {
                defaultValue: null,
                description: '',
                name: 'onDrop',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDropCapture: {
                defaultValue: null,
                description: '',
                name: 'onDropCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onMouseDown: {
                defaultValue: null,
                description: '',
                name: 'onMouseDown',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseDownCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseEnter: {
                defaultValue: null,
                description: '',
                name: 'onMouseEnter',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseLeave: {
                defaultValue: null,
                description: '',
                name: 'onMouseLeave',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseMove: {
                defaultValue: null,
                description: '',
                name: 'onMouseMove',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseMoveCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOut: {
                defaultValue: null,
                description: '',
                name: 'onMouseOut',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOutCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOver: {
                defaultValue: null,
                description: '',
                name: 'onMouseOver',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOverCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseUp: {
                defaultValue: null,
                description: '',
                name: 'onMouseUp',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseUpCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onSelect: {
                defaultValue: null,
                description: '',
                name: 'onSelect',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSelectCapture: {
                defaultValue: null,
                description: '',
                name: 'onSelectCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onTouchCancel: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancel',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancelCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchEnd: {
                defaultValue: null,
                description: '',
                name: 'onTouchEnd',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchEndCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchMove: {
                defaultValue: null,
                description: '',
                name: 'onTouchMove',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchMoveCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchStart: {
                defaultValue: null,
                description: '',
                name: 'onTouchStart',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchStartCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onPointerDown: {
                defaultValue: null,
                description: '',
                name: 'onPointerDown',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerDownCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerMove: {
                defaultValue: null,
                description: '',
                name: 'onPointerMove',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerMoveCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerUp: {
                defaultValue: null,
                description: '',
                name: 'onPointerUp',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerUpCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerCancel: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancel',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancelCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerEnter: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnter',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnterCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerLeave: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeave',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeaveCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOver: {
                defaultValue: null,
                description: '',
                name: 'onPointerOver',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOverCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOut: {
                defaultValue: null,
                description: '',
                name: 'onPointerOut',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOutCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onGotPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onGotPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCaptureCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onLostPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onLostPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCaptureCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onScroll: {
                defaultValue: null,
                description: '',
                name: 'onScroll',
                required: !1,
                type: { name: '(event: UIEvent<HTMLElement>) => void' },
              },
              onScrollCapture: {
                defaultValue: null,
                description: '',
                name: 'onScrollCapture',
                required: !1,
                type: { name: '(event: UIEvent<HTMLElement>) => void' },
              },
              onWheel: {
                defaultValue: null,
                description: '',
                name: 'onWheel',
                required: !1,
                type: { name: '(event: WheelEvent<HTMLElement>) => void' },
              },
              onWheelCapture: {
                defaultValue: null,
                description: '',
                name: 'onWheelCapture',
                required: !1,
                type: { name: '(event: WheelEvent<HTMLElement>) => void' },
              },
              onAnimationStart: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStart',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStartCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationEnd: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEnd',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEndCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationIteration: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIteration',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationIterationCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIterationCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onTransitionEnd: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEnd',
                required: !1,
                type: { name: '(event: TransitionEvent<HTMLElement>) => void' },
              },
              onTransitionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEndCapture',
                required: !1,
                type: { name: '(event: TransitionEvent<HTMLElement>) => void' },
              },
              cite: {
                defaultValue: null,
                description: '',
                name: 'cite',
                required: !1,
                type: { name: 'string' },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name:
                    '((instance: HTMLElement) => void) | RefObject<HTMLElement>',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/typography/src/blockquote/index.tsx#Blockquote'
            ] = {
              docgenInfo: Blockquote.__docgenInfo,
              name: 'Blockquote',
              path: 'packages/typography/src/blockquote/index.tsx#Blockquote',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (blockquote.displayName = 'blockquote'),
          (blockquote.__docgenInfo = {
            description: '',
            displayName: 'blockquote',
            props: {
              key: {
                defaultValue: null,
                description: '',
                name: 'key',
                required: !1,
                type: { name: 'Key' },
              },
              defaultChecked: {
                defaultValue: null,
                description: '',
                name: 'defaultChecked',
                required: !1,
                type: { name: 'boolean' },
              },
              defaultValue: {
                defaultValue: null,
                description: '',
                name: 'defaultValue',
                required: !1,
                type: { name: 'string | string[]' },
              },
              suppressContentEditableWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressContentEditableWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              suppressHydrationWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressHydrationWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              accessKey: {
                defaultValue: null,
                description: '',
                name: 'accessKey',
                required: !1,
                type: { name: 'string' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              contentEditable: {
                defaultValue: null,
                description: '',
                name: 'contentEditable',
                required: !1,
                type: { name: 'boolean' },
              },
              contextMenu: {
                defaultValue: null,
                description: '',
                name: 'contextMenu',
                required: !1,
                type: { name: 'string' },
              },
              dir: {
                defaultValue: null,
                description: '',
                name: 'dir',
                required: !1,
                type: { name: 'string' },
              },
              draggable: {
                defaultValue: null,
                description: '',
                name: 'draggable',
                required: !1,
                type: { name: 'boolean' },
              },
              hidden: {
                defaultValue: null,
                description: '',
                name: 'hidden',
                required: !1,
                type: { name: 'boolean' },
              },
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !1,
                type: { name: 'string' },
              },
              lang: {
                defaultValue: null,
                description: '',
                name: 'lang',
                required: !1,
                type: { name: 'string' },
              },
              placeholder: {
                defaultValue: null,
                description: '',
                name: 'placeholder',
                required: !1,
                type: { name: 'string' },
              },
              slot: {
                defaultValue: null,
                description: '',
                name: 'slot',
                required: !1,
                type: { name: 'string' },
              },
              spellCheck: {
                defaultValue: null,
                description: '',
                name: 'spellCheck',
                required: !1,
                type: { name: 'boolean' },
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              tabIndex: {
                defaultValue: null,
                description: '',
                name: 'tabIndex',
                required: !1,
                type: { name: 'number' },
              },
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'string' },
              },
              inputMode: {
                defaultValue: null,
                description: '',
                name: 'inputMode',
                required: !1,
                type: { name: 'string' },
              },
              is: {
                defaultValue: null,
                description: '',
                name: 'is',
                required: !1,
                type: { name: 'string' },
              },
              radioGroup: {
                defaultValue: null,
                description: '',
                name: 'radioGroup',
                required: !1,
                type: { name: 'string' },
              },
              role: {
                defaultValue: null,
                description: '',
                name: 'role',
                required: !1,
                type: { name: 'string' },
              },
              about: {
                defaultValue: null,
                description: '',
                name: 'about',
                required: !1,
                type: { name: 'string' },
              },
              datatype: {
                defaultValue: null,
                description: '',
                name: 'datatype',
                required: !1,
                type: { name: 'string' },
              },
              inlist: {
                defaultValue: null,
                description: '',
                name: 'inlist',
                required: !1,
                type: { name: 'any' },
              },
              prefix: {
                defaultValue: null,
                description: '',
                name: 'prefix',
                required: !1,
                type: { name: 'string' },
              },
              property: {
                defaultValue: null,
                description: '',
                name: 'property',
                required: !1,
                type: { name: 'string' },
              },
              resource: {
                defaultValue: null,
                description: '',
                name: 'resource',
                required: !1,
                type: { name: 'string' },
              },
              typeof: {
                defaultValue: null,
                description: '',
                name: 'typeof',
                required: !1,
                type: { name: 'string' },
              },
              vocab: {
                defaultValue: null,
                description: '',
                name: 'vocab',
                required: !1,
                type: { name: 'string' },
              },
              autoCapitalize: {
                defaultValue: null,
                description: '',
                name: 'autoCapitalize',
                required: !1,
                type: { name: 'string' },
              },
              autoCorrect: {
                defaultValue: null,
                description: '',
                name: 'autoCorrect',
                required: !1,
                type: { name: 'string' },
              },
              autoSave: {
                defaultValue: null,
                description: '',
                name: 'autoSave',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              itemProp: {
                defaultValue: null,
                description: '',
                name: 'itemProp',
                required: !1,
                type: { name: 'string' },
              },
              itemScope: {
                defaultValue: null,
                description: '',
                name: 'itemScope',
                required: !1,
                type: { name: 'boolean' },
              },
              itemType: {
                defaultValue: null,
                description: '',
                name: 'itemType',
                required: !1,
                type: { name: 'string' },
              },
              itemID: {
                defaultValue: null,
                description: '',
                name: 'itemID',
                required: !1,
                type: { name: 'string' },
              },
              itemRef: {
                defaultValue: null,
                description: '',
                name: 'itemRef',
                required: !1,
                type: { name: 'string' },
              },
              results: {
                defaultValue: null,
                description: '',
                name: 'results',
                required: !1,
                type: { name: 'number' },
              },
              security: {
                defaultValue: null,
                description: '',
                name: 'security',
                required: !1,
                type: { name: 'string' },
              },
              unselectable: {
                defaultValue: null,
                description: '',
                name: 'unselectable',
                required: !1,
                type: { name: '"on" | "off"' },
              },
              'aria-activedescendant': {
                defaultValue: null,
                description:
                  'Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.',
                name: 'aria-activedescendant',
                required: !1,
                type: { name: 'string' },
              },
              'aria-atomic': {
                defaultValue: null,
                description:
                  'Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.',
                name: 'aria-atomic',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-autocomplete': {
                defaultValue: null,
                description:
                  "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
                name: 'aria-autocomplete',
                required: !1,
                type: { name: '"none" | "inline" | "list" | "both"' },
              },
              'aria-busy': {
                defaultValue: null,
                description:
                  'Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.',
                name: 'aria-busy',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-checked': {
                defaultValue: null,
                description:
                  'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.',
                name: 'aria-checked',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-colcount': {
                defaultValue: null,
                description:
                  'Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.',
                name: 'aria-colcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colindex': {
                defaultValue: null,
                description:
                  "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.",
                name: 'aria-colindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colspan': {
                defaultValue: null,
                description:
                  'Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.',
                name: 'aria-colspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-controls': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.',
                name: 'aria-controls',
                required: !1,
                type: { name: 'string' },
              },
              'aria-current': {
                defaultValue: null,
                description:
                  'Indicates the element that represents the current item within a container or set of related elements.',
                name: 'aria-current',
                required: !1,
                type: {
                  name:
                    'boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time"',
                },
              },
              'aria-describedby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that describes the object.\n@see aria-labelledby',
                name: 'aria-describedby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-details': {
                defaultValue: null,
                description:
                  'Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.',
                name: 'aria-details',
                required: !1,
                type: { name: 'string' },
              },
              'aria-disabled': {
                defaultValue: null,
                description:
                  'Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.',
                name: 'aria-disabled',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-dropeffect': {
                defaultValue: null,
                description:
                  'Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1',
                name: 'aria-dropeffect',
                required: !1,
                type: {
                  name:
                    '"none" | "copy" | "execute" | "link" | "move" | "popup"',
                },
              },
              'aria-errormessage': {
                defaultValue: null,
                description:
                  'Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.',
                name: 'aria-errormessage',
                required: !1,
                type: { name: 'string' },
              },
              'aria-expanded': {
                defaultValue: null,
                description:
                  'Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.',
                name: 'aria-expanded',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-flowto': {
                defaultValue: null,
                description:
                  "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
                name: 'aria-flowto',
                required: !1,
                type: { name: 'string' },
              },
              'aria-grabbed': {
                defaultValue: null,
                description:
                  'Indicates an element\'s "grabbed" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1',
                name: 'aria-grabbed',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-haspopup': {
                defaultValue: null,
                description:
                  'Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.',
                name: 'aria-haspopup',
                required: !1,
                type: {
                  name:
                    'boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog"',
                },
              },
              'aria-hidden': {
                defaultValue: null,
                description:
                  'Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.',
                name: 'aria-hidden',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-invalid': {
                defaultValue: null,
                description:
                  'Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.',
                name: 'aria-invalid',
                required: !1,
                type: {
                  name: 'boolean | "false" | "true" | "grammar" | "spelling"',
                },
              },
              'aria-keyshortcuts': {
                defaultValue: null,
                description:
                  'Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.',
                name: 'aria-keyshortcuts',
                required: !1,
                type: { name: 'string' },
              },
              'aria-label': {
                defaultValue: null,
                description:
                  'Defines a string value that labels the current element.\n@see aria-labelledby.',
                name: 'aria-label',
                required: !1,
                type: { name: 'string' },
              },
              'aria-labelledby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that labels the current element.\n@see aria-describedby.',
                name: 'aria-labelledby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-level': {
                defaultValue: null,
                description:
                  'Defines the hierarchical level of an element within a structure.',
                name: 'aria-level',
                required: !1,
                type: { name: 'number' },
              },
              'aria-live': {
                defaultValue: null,
                description:
                  'Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.',
                name: 'aria-live',
                required: !1,
                type: { name: '"off" | "assertive" | "polite"' },
              },
              'aria-modal': {
                defaultValue: null,
                description:
                  'Indicates whether an element is modal when displayed.',
                name: 'aria-modal',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiline': {
                defaultValue: null,
                description:
                  'Indicates whether a text box accepts multiple lines of input or only a single line.',
                name: 'aria-multiline',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiselectable': {
                defaultValue: null,
                description:
                  'Indicates that the user may select more than one item from the current selectable descendants.',
                name: 'aria-multiselectable',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-orientation': {
                defaultValue: null,
                description:
                  "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
                name: 'aria-orientation',
                required: !1,
                type: { name: '"horizontal" | "vertical"' },
              },
              'aria-owns': {
                defaultValue: null,
                description:
                  'Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.',
                name: 'aria-owns',
                required: !1,
                type: { name: 'string' },
              },
              'aria-placeholder': {
                defaultValue: null,
                description:
                  'Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.',
                name: 'aria-placeholder',
                required: !1,
                type: { name: 'string' },
              },
              'aria-posinset': {
                defaultValue: null,
                description:
                  "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.",
                name: 'aria-posinset',
                required: !1,
                type: { name: 'number' },
              },
              'aria-pressed': {
                defaultValue: null,
                description:
                  'Indicates the current "pressed" state of toggle buttons.\n@see aria-checked\n@see aria-selected.',
                name: 'aria-pressed',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-readonly': {
                defaultValue: null,
                description:
                  'Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.',
                name: 'aria-readonly',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-relevant': {
                defaultValue: null,
                description:
                  'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.',
                name: 'aria-relevant',
                required: !1,
                type: {
                  name:
                    '"additions" | "additions text" | "all" | "removals" | "text"',
                },
              },
              'aria-required': {
                defaultValue: null,
                description:
                  'Indicates that user input is required on the element before a form may be submitted.',
                name: 'aria-required',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-roledescription': {
                defaultValue: null,
                description:
                  'Defines a human-readable, author-localized description for the role of an element.',
                name: 'aria-roledescription',
                required: !1,
                type: { name: 'string' },
              },
              'aria-rowcount': {
                defaultValue: null,
                description:
                  'Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.',
                name: 'aria-rowcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowindex': {
                defaultValue: null,
                description:
                  "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.",
                name: 'aria-rowindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowspan': {
                defaultValue: null,
                description:
                  'Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.',
                name: 'aria-rowspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-selected': {
                defaultValue: null,
                description:
                  'Indicates the current "selected" state of various widgets.\n@see aria-checked\n@see aria-pressed.',
                name: 'aria-selected',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-setsize': {
                defaultValue: null,
                description:
                  'Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.',
                name: 'aria-setsize',
                required: !1,
                type: { name: 'number' },
              },
              'aria-sort': {
                defaultValue: null,
                description:
                  'Indicates if items in a table or grid are sorted in ascending or descending order.',
                name: 'aria-sort',
                required: !1,
                type: { name: '"none" | "ascending" | "descending" | "other"' },
              },
              'aria-valuemax': {
                defaultValue: null,
                description:
                  'Defines the maximum allowed value for a range widget.',
                name: 'aria-valuemax',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuemin': {
                defaultValue: null,
                description:
                  'Defines the minimum allowed value for a range widget.',
                name: 'aria-valuemin',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuenow': {
                defaultValue: null,
                description:
                  'Defines the current value for a range widget.\n@see aria-valuetext.',
                name: 'aria-valuenow',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuetext': {
                defaultValue: null,
                description:
                  'Defines the human readable text alternative of aria-valuenow for a range widget.',
                name: 'aria-valuetext',
                required: !1,
                type: { name: 'string' },
              },
              dangerouslySetInnerHTML: {
                defaultValue: null,
                description: '',
                name: 'dangerouslySetInnerHTML',
                required: !1,
                type: { name: '{ __html: string; }' },
              },
              onCopy: {
                defaultValue: null,
                description: '',
                name: 'onCopy',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCopyCapture: {
                defaultValue: null,
                description: '',
                name: 'onCopyCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCut: {
                defaultValue: null,
                description: '',
                name: 'onCut',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCutCapture: {
                defaultValue: null,
                description: '',
                name: 'onCutCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onPaste: {
                defaultValue: null,
                description: '',
                name: 'onPaste',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onPasteCapture: {
                defaultValue: null,
                description: '',
                name: 'onPasteCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCompositionEnd: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEnd',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEndCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionStart: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStart',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStartCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionUpdate: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdate',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdateCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onFocus: {
                defaultValue: null,
                description: '',
                name: 'onFocus',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onFocusCapture: {
                defaultValue: null,
                description: '',
                name: 'onFocusCapture',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onBlur: {
                defaultValue: null,
                description: '',
                name: 'onBlur',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onBlurCapture: {
                defaultValue: null,
                description: '',
                name: 'onBlurCapture',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onChangeCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onBeforeInput: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onBeforeInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInput: {
                defaultValue: null,
                description: '',
                name: 'onInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onReset: {
                defaultValue: null,
                description: '',
                name: 'onReset',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onResetCapture: {
                defaultValue: null,
                description: '',
                name: 'onResetCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onSubmit: {
                defaultValue: null,
                description: '',
                name: 'onSubmit',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onSubmitCapture: {
                defaultValue: null,
                description: '',
                name: 'onSubmitCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInvalid: {
                defaultValue: null,
                description: '',
                name: 'onInvalid',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInvalidCapture: {
                defaultValue: null,
                description: '',
                name: 'onInvalidCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onLoad: {
                defaultValue: null,
                description: '',
                name: 'onLoad',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onError: {
                defaultValue: null,
                description: '',
                name: 'onError',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onErrorCapture: {
                defaultValue: null,
                description: '',
                name: 'onErrorCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onKeyDown: {
                defaultValue: null,
                description: '',
                name: 'onKeyDown',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyDownCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyPress: {
                defaultValue: null,
                description: '',
                name: 'onKeyPress',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyPressCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyPressCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyUp: {
                defaultValue: null,
                description: '',
                name: 'onKeyUp',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyUpCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onAbort: {
                defaultValue: null,
                description: '',
                name: 'onAbort',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onAbortCapture: {
                defaultValue: null,
                description: '',
                name: 'onAbortCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlay: {
                defaultValue: null,
                description: '',
                name: 'onCanPlay',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlayThrough: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThrough',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlayThroughCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThroughCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onDurationChange: {
                defaultValue: null,
                description: '',
                name: 'onDurationChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onDurationChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onDurationChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEmptied: {
                defaultValue: null,
                description: '',
                name: 'onEmptied',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEmptiedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEmptiedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEncrypted: {
                defaultValue: null,
                description: '',
                name: 'onEncrypted',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEncryptedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEncryptedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEnded: {
                defaultValue: null,
                description: '',
                name: 'onEnded',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEndedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEndedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedData: {
                defaultValue: null,
                description: '',
                name: 'onLoadedData',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedDataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedDataCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedMetadata: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadata',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedMetadataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadataCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadStart: {
                defaultValue: null,
                description: '',
                name: 'onLoadStart',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadStartCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPause: {
                defaultValue: null,
                description: '',
                name: 'onPause',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPauseCapture: {
                defaultValue: null,
                description: '',
                name: 'onPauseCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlay: {
                defaultValue: null,
                description: '',
                name: 'onPlay',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlaying: {
                defaultValue: null,
                description: '',
                name: 'onPlaying',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlayingCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onProgress: {
                defaultValue: null,
                description: '',
                name: 'onProgress',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onProgressCapture: {
                defaultValue: null,
                description: '',
                name: 'onProgressCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onRateChange: {
                defaultValue: null,
                description: '',
                name: 'onRateChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onRateChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onRateChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeeked: {
                defaultValue: null,
                description: '',
                name: 'onSeeked',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeekedCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeeking: {
                defaultValue: null,
                description: '',
                name: 'onSeeking',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeekingCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onStalled: {
                defaultValue: null,
                description: '',
                name: 'onStalled',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onStalledCapture: {
                defaultValue: null,
                description: '',
                name: 'onStalledCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSuspend: {
                defaultValue: null,
                description: '',
                name: 'onSuspend',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSuspendCapture: {
                defaultValue: null,
                description: '',
                name: 'onSuspendCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onTimeUpdate: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdate',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onTimeUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdateCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onVolumeChange: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onVolumeChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onWaiting: {
                defaultValue: null,
                description: '',
                name: 'onWaiting',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onWaitingCapture: {
                defaultValue: null,
                description: '',
                name: 'onWaitingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onAuxClick: {
                defaultValue: null,
                description: '',
                name: 'onAuxClick',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onAuxClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onAuxClickCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onClickCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onContextMenu: {
                defaultValue: null,
                description: '',
                name: 'onContextMenu',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onContextMenuCapture: {
                defaultValue: null,
                description: '',
                name: 'onContextMenuCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onDoubleClick: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClick',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onDoubleClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClickCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onDrag: {
                defaultValue: null,
                description: '',
                name: 'onDrag',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEnd: {
                defaultValue: null,
                description: '',
                name: 'onDragEnd',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEndCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEnter: {
                defaultValue: null,
                description: '',
                name: 'onDragEnter',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEnterCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragExit: {
                defaultValue: null,
                description: '',
                name: 'onDragExit',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragExitCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragExitCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragLeave: {
                defaultValue: null,
                description: '',
                name: 'onDragLeave',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragLeaveCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragOver: {
                defaultValue: null,
                description: '',
                name: 'onDragOver',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragOverCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragStart: {
                defaultValue: null,
                description: '',
                name: 'onDragStart',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragStartCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDrop: {
                defaultValue: null,
                description: '',
                name: 'onDrop',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDropCapture: {
                defaultValue: null,
                description: '',
                name: 'onDropCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onMouseDown: {
                defaultValue: null,
                description: '',
                name: 'onMouseDown',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseDownCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseEnter: {
                defaultValue: null,
                description: '',
                name: 'onMouseEnter',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseLeave: {
                defaultValue: null,
                description: '',
                name: 'onMouseLeave',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseMove: {
                defaultValue: null,
                description: '',
                name: 'onMouseMove',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseMoveCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOut: {
                defaultValue: null,
                description: '',
                name: 'onMouseOut',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOutCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOver: {
                defaultValue: null,
                description: '',
                name: 'onMouseOver',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOverCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseUp: {
                defaultValue: null,
                description: '',
                name: 'onMouseUp',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseUpCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onSelect: {
                defaultValue: null,
                description: '',
                name: 'onSelect',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSelectCapture: {
                defaultValue: null,
                description: '',
                name: 'onSelectCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onTouchCancel: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancel',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancelCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchEnd: {
                defaultValue: null,
                description: '',
                name: 'onTouchEnd',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchEndCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchMove: {
                defaultValue: null,
                description: '',
                name: 'onTouchMove',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchMoveCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchStart: {
                defaultValue: null,
                description: '',
                name: 'onTouchStart',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchStartCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onPointerDown: {
                defaultValue: null,
                description: '',
                name: 'onPointerDown',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerDownCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerMove: {
                defaultValue: null,
                description: '',
                name: 'onPointerMove',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerMoveCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerUp: {
                defaultValue: null,
                description: '',
                name: 'onPointerUp',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerUpCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerCancel: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancel',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancelCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerEnter: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnter',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnterCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerLeave: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeave',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeaveCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOver: {
                defaultValue: null,
                description: '',
                name: 'onPointerOver',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOverCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOut: {
                defaultValue: null,
                description: '',
                name: 'onPointerOut',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOutCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onGotPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onGotPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCaptureCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onLostPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onLostPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCaptureCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onScroll: {
                defaultValue: null,
                description: '',
                name: 'onScroll',
                required: !1,
                type: { name: '(event: UIEvent<HTMLElement>) => void' },
              },
              onScrollCapture: {
                defaultValue: null,
                description: '',
                name: 'onScrollCapture',
                required: !1,
                type: { name: '(event: UIEvent<HTMLElement>) => void' },
              },
              onWheel: {
                defaultValue: null,
                description: '',
                name: 'onWheel',
                required: !1,
                type: { name: '(event: WheelEvent<HTMLElement>) => void' },
              },
              onWheelCapture: {
                defaultValue: null,
                description: '',
                name: 'onWheelCapture',
                required: !1,
                type: { name: '(event: WheelEvent<HTMLElement>) => void' },
              },
              onAnimationStart: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStart',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStartCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationEnd: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEnd',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEndCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationIteration: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIteration',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationIterationCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIterationCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onTransitionEnd: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEnd',
                required: !1,
                type: { name: '(event: TransitionEvent<HTMLElement>) => void' },
              },
              onTransitionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEndCapture',
                required: !1,
                type: { name: '(event: TransitionEvent<HTMLElement>) => void' },
              },
              cite: {
                defaultValue: null,
                description: '',
                name: 'cite',
                required: !1,
                type: { name: 'string' },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name:
                    '((instance: HTMLElement) => void) | RefObject<HTMLElement>',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/typography/src/blockquote/index.tsx#blockquote'
            ] = {
              docgenInfo: blockquote.__docgenInfo,
              name: 'blockquote',
              path: 'packages/typography/src/blockquote/index.tsx#blockquote',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    335: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        ),
        Code =
          (__webpack_require__(760),
          (function(_super) {
            function Code() {
              return (null !== _super && _super.apply(this, arguments)) || this;
            }
            return (
              tslib__WEBPACK_IMPORTED_MODULE_0__.b(Code, _super),
              (Code.prototype.componentDidMount = function() {
                console.log('MOUNTED', this.props);
              }),
              (Code.prototype.componentDidUpdate = function() {
                console.log('UPDATED', this.props);
              }),
              (Code.prototype.render = function() {
                this.props;
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  'pre',
                  { className: 'language-css' },
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    'code',
                    { className: 'language-css' },
                    'p { color: red }'
                  )
                );
              }),
              Code
            );
          })(react__WEBPACK_IMPORTED_MODULE_1__.Component));
      __webpack_exports__.a = Code;
      try {
        (Code.displayName = 'Code'),
          (Code.__docgenInfo = {
            description: '',
            displayName: 'Code',
            props: {
              variants: {
                defaultValue: null,
                description: '',
                name: 'variants',
                required: !0,
                type: {
                  name: '{ type?: "inline" | "block"; language: string; }',
                },
              },
              preProps: {
                defaultValue: null,
                description: '',
                name: 'preProps',
                required: !1,
                type: {
                  name:
                    'Pick<DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>, "key" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | ... 248 more ... | "onTransitionEndCapture"> & { ...; }',
                },
              },
              codeProps: {
                defaultValue: null,
                description: '',
                name: 'codeProps',
                required: !1,
                type: {
                  name:
                    'Pick<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, "key" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | ... 248 more ... | "onTransitionEndCapture"> & { ...; }',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/typography/src/code/index.tsx#Code'
            ] = {
              docgenInfo: Code.__docgenInfo,
              name: 'Code',
              path: 'packages/typography/src/code/index.tsx#Code',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    336: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        ),
        _react_design_system_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          47
        ),
        Emphasis = function(_a) {
          var children = _a.children,
            props =
              (_a.title,
              tslib__WEBPACK_IMPORTED_MODULE_0__.c(_a, ['children', 'title']));
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'em',
            tslib__WEBPACK_IMPORTED_MODULE_0__.a({}, props, {
              className: Object(
                _react_design_system_utils__WEBPACK_IMPORTED_MODULE_2__.a
              )('rds-Emphasis__em', props.className),
            }),
            children
          );
        };
      __webpack_exports__.a = Emphasis;
      try {
        (Emphasis.displayName = 'Emphasis'),
          (Emphasis.__docgenInfo = {
            description: '',
            displayName: 'Emphasis',
            props: {
              key: {
                defaultValue: null,
                description: '',
                name: 'key',
                required: !1,
                type: { name: 'Key' },
              },
              defaultChecked: {
                defaultValue: null,
                description: '',
                name: 'defaultChecked',
                required: !1,
                type: { name: 'boolean' },
              },
              defaultValue: {
                defaultValue: null,
                description: '',
                name: 'defaultValue',
                required: !1,
                type: { name: 'string | string[]' },
              },
              suppressContentEditableWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressContentEditableWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              suppressHydrationWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressHydrationWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              accessKey: {
                defaultValue: null,
                description: '',
                name: 'accessKey',
                required: !1,
                type: { name: 'string' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              contentEditable: {
                defaultValue: null,
                description: '',
                name: 'contentEditable',
                required: !1,
                type: { name: 'boolean' },
              },
              contextMenu: {
                defaultValue: null,
                description: '',
                name: 'contextMenu',
                required: !1,
                type: { name: 'string' },
              },
              dir: {
                defaultValue: null,
                description: '',
                name: 'dir',
                required: !1,
                type: { name: 'string' },
              },
              draggable: {
                defaultValue: null,
                description: '',
                name: 'draggable',
                required: !1,
                type: { name: 'boolean' },
              },
              hidden: {
                defaultValue: null,
                description: '',
                name: 'hidden',
                required: !1,
                type: { name: 'boolean' },
              },
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !1,
                type: { name: 'string' },
              },
              lang: {
                defaultValue: null,
                description: '',
                name: 'lang',
                required: !1,
                type: { name: 'string' },
              },
              placeholder: {
                defaultValue: null,
                description: '',
                name: 'placeholder',
                required: !1,
                type: { name: 'string' },
              },
              slot: {
                defaultValue: null,
                description: '',
                name: 'slot',
                required: !1,
                type: { name: 'string' },
              },
              spellCheck: {
                defaultValue: null,
                description: '',
                name: 'spellCheck',
                required: !1,
                type: { name: 'boolean' },
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              tabIndex: {
                defaultValue: null,
                description: '',
                name: 'tabIndex',
                required: !1,
                type: { name: 'number' },
              },
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'string' },
              },
              inputMode: {
                defaultValue: null,
                description: '',
                name: 'inputMode',
                required: !1,
                type: { name: 'string' },
              },
              is: {
                defaultValue: null,
                description: '',
                name: 'is',
                required: !1,
                type: { name: 'string' },
              },
              radioGroup: {
                defaultValue: null,
                description: '',
                name: 'radioGroup',
                required: !1,
                type: { name: 'string' },
              },
              role: {
                defaultValue: null,
                description: '',
                name: 'role',
                required: !1,
                type: { name: 'string' },
              },
              about: {
                defaultValue: null,
                description: '',
                name: 'about',
                required: !1,
                type: { name: 'string' },
              },
              datatype: {
                defaultValue: null,
                description: '',
                name: 'datatype',
                required: !1,
                type: { name: 'string' },
              },
              inlist: {
                defaultValue: null,
                description: '',
                name: 'inlist',
                required: !1,
                type: { name: 'any' },
              },
              prefix: {
                defaultValue: null,
                description: '',
                name: 'prefix',
                required: !1,
                type: { name: 'string' },
              },
              property: {
                defaultValue: null,
                description: '',
                name: 'property',
                required: !1,
                type: { name: 'string' },
              },
              resource: {
                defaultValue: null,
                description: '',
                name: 'resource',
                required: !1,
                type: { name: 'string' },
              },
              typeof: {
                defaultValue: null,
                description: '',
                name: 'typeof',
                required: !1,
                type: { name: 'string' },
              },
              vocab: {
                defaultValue: null,
                description: '',
                name: 'vocab',
                required: !1,
                type: { name: 'string' },
              },
              autoCapitalize: {
                defaultValue: null,
                description: '',
                name: 'autoCapitalize',
                required: !1,
                type: { name: 'string' },
              },
              autoCorrect: {
                defaultValue: null,
                description: '',
                name: 'autoCorrect',
                required: !1,
                type: { name: 'string' },
              },
              autoSave: {
                defaultValue: null,
                description: '',
                name: 'autoSave',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              itemProp: {
                defaultValue: null,
                description: '',
                name: 'itemProp',
                required: !1,
                type: { name: 'string' },
              },
              itemScope: {
                defaultValue: null,
                description: '',
                name: 'itemScope',
                required: !1,
                type: { name: 'boolean' },
              },
              itemType: {
                defaultValue: null,
                description: '',
                name: 'itemType',
                required: !1,
                type: { name: 'string' },
              },
              itemID: {
                defaultValue: null,
                description: '',
                name: 'itemID',
                required: !1,
                type: { name: 'string' },
              },
              itemRef: {
                defaultValue: null,
                description: '',
                name: 'itemRef',
                required: !1,
                type: { name: 'string' },
              },
              results: {
                defaultValue: null,
                description: '',
                name: 'results',
                required: !1,
                type: { name: 'number' },
              },
              security: {
                defaultValue: null,
                description: '',
                name: 'security',
                required: !1,
                type: { name: 'string' },
              },
              unselectable: {
                defaultValue: null,
                description: '',
                name: 'unselectable',
                required: !1,
                type: { name: '"on" | "off"' },
              },
              'aria-activedescendant': {
                defaultValue: null,
                description:
                  'Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.',
                name: 'aria-activedescendant',
                required: !1,
                type: { name: 'string' },
              },
              'aria-atomic': {
                defaultValue: null,
                description:
                  'Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.',
                name: 'aria-atomic',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-autocomplete': {
                defaultValue: null,
                description:
                  "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
                name: 'aria-autocomplete',
                required: !1,
                type: { name: '"none" | "inline" | "list" | "both"' },
              },
              'aria-busy': {
                defaultValue: null,
                description:
                  'Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.',
                name: 'aria-busy',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-checked': {
                defaultValue: null,
                description:
                  'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.',
                name: 'aria-checked',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-colcount': {
                defaultValue: null,
                description:
                  'Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.',
                name: 'aria-colcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colindex': {
                defaultValue: null,
                description:
                  "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.",
                name: 'aria-colindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colspan': {
                defaultValue: null,
                description:
                  'Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.',
                name: 'aria-colspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-controls': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.',
                name: 'aria-controls',
                required: !1,
                type: { name: 'string' },
              },
              'aria-current': {
                defaultValue: null,
                description:
                  'Indicates the element that represents the current item within a container or set of related elements.',
                name: 'aria-current',
                required: !1,
                type: {
                  name:
                    'boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time"',
                },
              },
              'aria-describedby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that describes the object.\n@see aria-labelledby',
                name: 'aria-describedby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-details': {
                defaultValue: null,
                description:
                  'Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.',
                name: 'aria-details',
                required: !1,
                type: { name: 'string' },
              },
              'aria-disabled': {
                defaultValue: null,
                description:
                  'Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.',
                name: 'aria-disabled',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-dropeffect': {
                defaultValue: null,
                description:
                  'Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1',
                name: 'aria-dropeffect',
                required: !1,
                type: {
                  name:
                    '"none" | "copy" | "execute" | "link" | "move" | "popup"',
                },
              },
              'aria-errormessage': {
                defaultValue: null,
                description:
                  'Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.',
                name: 'aria-errormessage',
                required: !1,
                type: { name: 'string' },
              },
              'aria-expanded': {
                defaultValue: null,
                description:
                  'Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.',
                name: 'aria-expanded',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-flowto': {
                defaultValue: null,
                description:
                  "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
                name: 'aria-flowto',
                required: !1,
                type: { name: 'string' },
              },
              'aria-grabbed': {
                defaultValue: null,
                description:
                  'Indicates an element\'s "grabbed" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1',
                name: 'aria-grabbed',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-haspopup': {
                defaultValue: null,
                description:
                  'Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.',
                name: 'aria-haspopup',
                required: !1,
                type: {
                  name:
                    'boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog"',
                },
              },
              'aria-hidden': {
                defaultValue: null,
                description:
                  'Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.',
                name: 'aria-hidden',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-invalid': {
                defaultValue: null,
                description:
                  'Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.',
                name: 'aria-invalid',
                required: !1,
                type: {
                  name: 'boolean | "false" | "true" | "grammar" | "spelling"',
                },
              },
              'aria-keyshortcuts': {
                defaultValue: null,
                description:
                  'Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.',
                name: 'aria-keyshortcuts',
                required: !1,
                type: { name: 'string' },
              },
              'aria-label': {
                defaultValue: null,
                description:
                  'Defines a string value that labels the current element.\n@see aria-labelledby.',
                name: 'aria-label',
                required: !1,
                type: { name: 'string' },
              },
              'aria-labelledby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that labels the current element.\n@see aria-describedby.',
                name: 'aria-labelledby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-level': {
                defaultValue: null,
                description:
                  'Defines the hierarchical level of an element within a structure.',
                name: 'aria-level',
                required: !1,
                type: { name: 'number' },
              },
              'aria-live': {
                defaultValue: null,
                description:
                  'Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.',
                name: 'aria-live',
                required: !1,
                type: { name: '"off" | "assertive" | "polite"' },
              },
              'aria-modal': {
                defaultValue: null,
                description:
                  'Indicates whether an element is modal when displayed.',
                name: 'aria-modal',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiline': {
                defaultValue: null,
                description:
                  'Indicates whether a text box accepts multiple lines of input or only a single line.',
                name: 'aria-multiline',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiselectable': {
                defaultValue: null,
                description:
                  'Indicates that the user may select more than one item from the current selectable descendants.',
                name: 'aria-multiselectable',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-orientation': {
                defaultValue: null,
                description:
                  "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
                name: 'aria-orientation',
                required: !1,
                type: { name: '"horizontal" | "vertical"' },
              },
              'aria-owns': {
                defaultValue: null,
                description:
                  'Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.',
                name: 'aria-owns',
                required: !1,
                type: { name: 'string' },
              },
              'aria-placeholder': {
                defaultValue: null,
                description:
                  'Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.',
                name: 'aria-placeholder',
                required: !1,
                type: { name: 'string' },
              },
              'aria-posinset': {
                defaultValue: null,
                description:
                  "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.",
                name: 'aria-posinset',
                required: !1,
                type: { name: 'number' },
              },
              'aria-pressed': {
                defaultValue: null,
                description:
                  'Indicates the current "pressed" state of toggle buttons.\n@see aria-checked\n@see aria-selected.',
                name: 'aria-pressed',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-readonly': {
                defaultValue: null,
                description:
                  'Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.',
                name: 'aria-readonly',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-relevant': {
                defaultValue: null,
                description:
                  'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.',
                name: 'aria-relevant',
                required: !1,
                type: {
                  name:
                    '"additions" | "additions text" | "all" | "removals" | "text"',
                },
              },
              'aria-required': {
                defaultValue: null,
                description:
                  'Indicates that user input is required on the element before a form may be submitted.',
                name: 'aria-required',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-roledescription': {
                defaultValue: null,
                description:
                  'Defines a human-readable, author-localized description for the role of an element.',
                name: 'aria-roledescription',
                required: !1,
                type: { name: 'string' },
              },
              'aria-rowcount': {
                defaultValue: null,
                description:
                  'Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.',
                name: 'aria-rowcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowindex': {
                defaultValue: null,
                description:
                  "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.",
                name: 'aria-rowindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowspan': {
                defaultValue: null,
                description:
                  'Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.',
                name: 'aria-rowspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-selected': {
                defaultValue: null,
                description:
                  'Indicates the current "selected" state of various widgets.\n@see aria-checked\n@see aria-pressed.',
                name: 'aria-selected',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-setsize': {
                defaultValue: null,
                description:
                  'Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.',
                name: 'aria-setsize',
                required: !1,
                type: { name: 'number' },
              },
              'aria-sort': {
                defaultValue: null,
                description:
                  'Indicates if items in a table or grid are sorted in ascending or descending order.',
                name: 'aria-sort',
                required: !1,
                type: { name: '"none" | "ascending" | "descending" | "other"' },
              },
              'aria-valuemax': {
                defaultValue: null,
                description:
                  'Defines the maximum allowed value for a range widget.',
                name: 'aria-valuemax',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuemin': {
                defaultValue: null,
                description:
                  'Defines the minimum allowed value for a range widget.',
                name: 'aria-valuemin',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuenow': {
                defaultValue: null,
                description:
                  'Defines the current value for a range widget.\n@see aria-valuetext.',
                name: 'aria-valuenow',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuetext': {
                defaultValue: null,
                description:
                  'Defines the human readable text alternative of aria-valuenow for a range widget.',
                name: 'aria-valuetext',
                required: !1,
                type: { name: 'string' },
              },
              dangerouslySetInnerHTML: {
                defaultValue: null,
                description: '',
                name: 'dangerouslySetInnerHTML',
                required: !1,
                type: { name: '{ __html: string; }' },
              },
              onCopy: {
                defaultValue: null,
                description: '',
                name: 'onCopy',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCopyCapture: {
                defaultValue: null,
                description: '',
                name: 'onCopyCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCut: {
                defaultValue: null,
                description: '',
                name: 'onCut',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCutCapture: {
                defaultValue: null,
                description: '',
                name: 'onCutCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onPaste: {
                defaultValue: null,
                description: '',
                name: 'onPaste',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onPasteCapture: {
                defaultValue: null,
                description: '',
                name: 'onPasteCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCompositionEnd: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEnd',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEndCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionStart: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStart',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStartCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionUpdate: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdate',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdateCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onFocus: {
                defaultValue: null,
                description: '',
                name: 'onFocus',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onFocusCapture: {
                defaultValue: null,
                description: '',
                name: 'onFocusCapture',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onBlur: {
                defaultValue: null,
                description: '',
                name: 'onBlur',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onBlurCapture: {
                defaultValue: null,
                description: '',
                name: 'onBlurCapture',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onChangeCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onBeforeInput: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onBeforeInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInput: {
                defaultValue: null,
                description: '',
                name: 'onInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onReset: {
                defaultValue: null,
                description: '',
                name: 'onReset',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onResetCapture: {
                defaultValue: null,
                description: '',
                name: 'onResetCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onSubmit: {
                defaultValue: null,
                description: '',
                name: 'onSubmit',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onSubmitCapture: {
                defaultValue: null,
                description: '',
                name: 'onSubmitCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInvalid: {
                defaultValue: null,
                description: '',
                name: 'onInvalid',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInvalidCapture: {
                defaultValue: null,
                description: '',
                name: 'onInvalidCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onLoad: {
                defaultValue: null,
                description: '',
                name: 'onLoad',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onError: {
                defaultValue: null,
                description: '',
                name: 'onError',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onErrorCapture: {
                defaultValue: null,
                description: '',
                name: 'onErrorCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onKeyDown: {
                defaultValue: null,
                description: '',
                name: 'onKeyDown',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyDownCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyPress: {
                defaultValue: null,
                description: '',
                name: 'onKeyPress',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyPressCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyPressCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyUp: {
                defaultValue: null,
                description: '',
                name: 'onKeyUp',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyUpCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onAbort: {
                defaultValue: null,
                description: '',
                name: 'onAbort',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onAbortCapture: {
                defaultValue: null,
                description: '',
                name: 'onAbortCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlay: {
                defaultValue: null,
                description: '',
                name: 'onCanPlay',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlayThrough: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThrough',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlayThroughCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThroughCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onDurationChange: {
                defaultValue: null,
                description: '',
                name: 'onDurationChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onDurationChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onDurationChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEmptied: {
                defaultValue: null,
                description: '',
                name: 'onEmptied',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEmptiedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEmptiedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEncrypted: {
                defaultValue: null,
                description: '',
                name: 'onEncrypted',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEncryptedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEncryptedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEnded: {
                defaultValue: null,
                description: '',
                name: 'onEnded',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEndedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEndedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedData: {
                defaultValue: null,
                description: '',
                name: 'onLoadedData',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedDataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedDataCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedMetadata: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadata',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedMetadataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadataCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadStart: {
                defaultValue: null,
                description: '',
                name: 'onLoadStart',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadStartCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPause: {
                defaultValue: null,
                description: '',
                name: 'onPause',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPauseCapture: {
                defaultValue: null,
                description: '',
                name: 'onPauseCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlay: {
                defaultValue: null,
                description: '',
                name: 'onPlay',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlaying: {
                defaultValue: null,
                description: '',
                name: 'onPlaying',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlayingCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onProgress: {
                defaultValue: null,
                description: '',
                name: 'onProgress',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onProgressCapture: {
                defaultValue: null,
                description: '',
                name: 'onProgressCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onRateChange: {
                defaultValue: null,
                description: '',
                name: 'onRateChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onRateChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onRateChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeeked: {
                defaultValue: null,
                description: '',
                name: 'onSeeked',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeekedCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeeking: {
                defaultValue: null,
                description: '',
                name: 'onSeeking',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeekingCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onStalled: {
                defaultValue: null,
                description: '',
                name: 'onStalled',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onStalledCapture: {
                defaultValue: null,
                description: '',
                name: 'onStalledCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSuspend: {
                defaultValue: null,
                description: '',
                name: 'onSuspend',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSuspendCapture: {
                defaultValue: null,
                description: '',
                name: 'onSuspendCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onTimeUpdate: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdate',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onTimeUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdateCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onVolumeChange: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onVolumeChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onWaiting: {
                defaultValue: null,
                description: '',
                name: 'onWaiting',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onWaitingCapture: {
                defaultValue: null,
                description: '',
                name: 'onWaitingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onAuxClick: {
                defaultValue: null,
                description: '',
                name: 'onAuxClick',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onAuxClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onAuxClickCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onClickCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onContextMenu: {
                defaultValue: null,
                description: '',
                name: 'onContextMenu',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onContextMenuCapture: {
                defaultValue: null,
                description: '',
                name: 'onContextMenuCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onDoubleClick: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClick',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onDoubleClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClickCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onDrag: {
                defaultValue: null,
                description: '',
                name: 'onDrag',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEnd: {
                defaultValue: null,
                description: '',
                name: 'onDragEnd',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEndCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEnter: {
                defaultValue: null,
                description: '',
                name: 'onDragEnter',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEnterCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragExit: {
                defaultValue: null,
                description: '',
                name: 'onDragExit',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragExitCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragExitCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragLeave: {
                defaultValue: null,
                description: '',
                name: 'onDragLeave',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragLeaveCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragOver: {
                defaultValue: null,
                description: '',
                name: 'onDragOver',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragOverCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragStart: {
                defaultValue: null,
                description: '',
                name: 'onDragStart',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragStartCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDrop: {
                defaultValue: null,
                description: '',
                name: 'onDrop',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDropCapture: {
                defaultValue: null,
                description: '',
                name: 'onDropCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onMouseDown: {
                defaultValue: null,
                description: '',
                name: 'onMouseDown',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseDownCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseEnter: {
                defaultValue: null,
                description: '',
                name: 'onMouseEnter',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseLeave: {
                defaultValue: null,
                description: '',
                name: 'onMouseLeave',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseMove: {
                defaultValue: null,
                description: '',
                name: 'onMouseMove',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseMoveCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOut: {
                defaultValue: null,
                description: '',
                name: 'onMouseOut',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOutCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOver: {
                defaultValue: null,
                description: '',
                name: 'onMouseOver',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOverCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseUp: {
                defaultValue: null,
                description: '',
                name: 'onMouseUp',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseUpCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onSelect: {
                defaultValue: null,
                description: '',
                name: 'onSelect',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSelectCapture: {
                defaultValue: null,
                description: '',
                name: 'onSelectCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onTouchCancel: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancel',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancelCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchEnd: {
                defaultValue: null,
                description: '',
                name: 'onTouchEnd',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchEndCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchMove: {
                defaultValue: null,
                description: '',
                name: 'onTouchMove',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchMoveCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchStart: {
                defaultValue: null,
                description: '',
                name: 'onTouchStart',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchStartCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onPointerDown: {
                defaultValue: null,
                description: '',
                name: 'onPointerDown',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerDownCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerMove: {
                defaultValue: null,
                description: '',
                name: 'onPointerMove',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerMoveCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerUp: {
                defaultValue: null,
                description: '',
                name: 'onPointerUp',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerUpCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerCancel: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancel',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancelCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerEnter: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnter',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnterCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerLeave: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeave',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeaveCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOver: {
                defaultValue: null,
                description: '',
                name: 'onPointerOver',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOverCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOut: {
                defaultValue: null,
                description: '',
                name: 'onPointerOut',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOutCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onGotPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onGotPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCaptureCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onLostPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onLostPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCaptureCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onScroll: {
                defaultValue: null,
                description: '',
                name: 'onScroll',
                required: !1,
                type: { name: '(event: UIEvent<HTMLElement>) => void' },
              },
              onScrollCapture: {
                defaultValue: null,
                description: '',
                name: 'onScrollCapture',
                required: !1,
                type: { name: '(event: UIEvent<HTMLElement>) => void' },
              },
              onWheel: {
                defaultValue: null,
                description: '',
                name: 'onWheel',
                required: !1,
                type: { name: '(event: WheelEvent<HTMLElement>) => void' },
              },
              onWheelCapture: {
                defaultValue: null,
                description: '',
                name: 'onWheelCapture',
                required: !1,
                type: { name: '(event: WheelEvent<HTMLElement>) => void' },
              },
              onAnimationStart: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStart',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStartCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationEnd: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEnd',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEndCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationIteration: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIteration',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationIterationCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIterationCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onTransitionEnd: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEnd',
                required: !1,
                type: { name: '(event: TransitionEvent<HTMLElement>) => void' },
              },
              onTransitionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEndCapture',
                required: !1,
                type: { name: '(event: TransitionEvent<HTMLElement>) => void' },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name:
                    '((instance: HTMLElement) => void) | RefObject<HTMLElement>',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/typography/src/emphasis/index.tsx#Emphasis'
            ] = {
              docgenInfo: Emphasis.__docgenInfo,
              name: 'Emphasis',
              path: 'packages/typography/src/emphasis/index.tsx#Emphasis',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (emphasis.displayName = 'emphasis'),
          (emphasis.__docgenInfo = {
            description: '',
            displayName: 'emphasis',
            props: {
              key: {
                defaultValue: null,
                description: '',
                name: 'key',
                required: !1,
                type: { name: 'Key' },
              },
              defaultChecked: {
                defaultValue: null,
                description: '',
                name: 'defaultChecked',
                required: !1,
                type: { name: 'boolean' },
              },
              defaultValue: {
                defaultValue: null,
                description: '',
                name: 'defaultValue',
                required: !1,
                type: { name: 'string | string[]' },
              },
              suppressContentEditableWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressContentEditableWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              suppressHydrationWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressHydrationWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              accessKey: {
                defaultValue: null,
                description: '',
                name: 'accessKey',
                required: !1,
                type: { name: 'string' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              contentEditable: {
                defaultValue: null,
                description: '',
                name: 'contentEditable',
                required: !1,
                type: { name: 'boolean' },
              },
              contextMenu: {
                defaultValue: null,
                description: '',
                name: 'contextMenu',
                required: !1,
                type: { name: 'string' },
              },
              dir: {
                defaultValue: null,
                description: '',
                name: 'dir',
                required: !1,
                type: { name: 'string' },
              },
              draggable: {
                defaultValue: null,
                description: '',
                name: 'draggable',
                required: !1,
                type: { name: 'boolean' },
              },
              hidden: {
                defaultValue: null,
                description: '',
                name: 'hidden',
                required: !1,
                type: { name: 'boolean' },
              },
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !1,
                type: { name: 'string' },
              },
              lang: {
                defaultValue: null,
                description: '',
                name: 'lang',
                required: !1,
                type: { name: 'string' },
              },
              placeholder: {
                defaultValue: null,
                description: '',
                name: 'placeholder',
                required: !1,
                type: { name: 'string' },
              },
              slot: {
                defaultValue: null,
                description: '',
                name: 'slot',
                required: !1,
                type: { name: 'string' },
              },
              spellCheck: {
                defaultValue: null,
                description: '',
                name: 'spellCheck',
                required: !1,
                type: { name: 'boolean' },
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              tabIndex: {
                defaultValue: null,
                description: '',
                name: 'tabIndex',
                required: !1,
                type: { name: 'number' },
              },
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'string' },
              },
              inputMode: {
                defaultValue: null,
                description: '',
                name: 'inputMode',
                required: !1,
                type: { name: 'string' },
              },
              is: {
                defaultValue: null,
                description: '',
                name: 'is',
                required: !1,
                type: { name: 'string' },
              },
              radioGroup: {
                defaultValue: null,
                description: '',
                name: 'radioGroup',
                required: !1,
                type: { name: 'string' },
              },
              role: {
                defaultValue: null,
                description: '',
                name: 'role',
                required: !1,
                type: { name: 'string' },
              },
              about: {
                defaultValue: null,
                description: '',
                name: 'about',
                required: !1,
                type: { name: 'string' },
              },
              datatype: {
                defaultValue: null,
                description: '',
                name: 'datatype',
                required: !1,
                type: { name: 'string' },
              },
              inlist: {
                defaultValue: null,
                description: '',
                name: 'inlist',
                required: !1,
                type: { name: 'any' },
              },
              prefix: {
                defaultValue: null,
                description: '',
                name: 'prefix',
                required: !1,
                type: { name: 'string' },
              },
              property: {
                defaultValue: null,
                description: '',
                name: 'property',
                required: !1,
                type: { name: 'string' },
              },
              resource: {
                defaultValue: null,
                description: '',
                name: 'resource',
                required: !1,
                type: { name: 'string' },
              },
              typeof: {
                defaultValue: null,
                description: '',
                name: 'typeof',
                required: !1,
                type: { name: 'string' },
              },
              vocab: {
                defaultValue: null,
                description: '',
                name: 'vocab',
                required: !1,
                type: { name: 'string' },
              },
              autoCapitalize: {
                defaultValue: null,
                description: '',
                name: 'autoCapitalize',
                required: !1,
                type: { name: 'string' },
              },
              autoCorrect: {
                defaultValue: null,
                description: '',
                name: 'autoCorrect',
                required: !1,
                type: { name: 'string' },
              },
              autoSave: {
                defaultValue: null,
                description: '',
                name: 'autoSave',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              itemProp: {
                defaultValue: null,
                description: '',
                name: 'itemProp',
                required: !1,
                type: { name: 'string' },
              },
              itemScope: {
                defaultValue: null,
                description: '',
                name: 'itemScope',
                required: !1,
                type: { name: 'boolean' },
              },
              itemType: {
                defaultValue: null,
                description: '',
                name: 'itemType',
                required: !1,
                type: { name: 'string' },
              },
              itemID: {
                defaultValue: null,
                description: '',
                name: 'itemID',
                required: !1,
                type: { name: 'string' },
              },
              itemRef: {
                defaultValue: null,
                description: '',
                name: 'itemRef',
                required: !1,
                type: { name: 'string' },
              },
              results: {
                defaultValue: null,
                description: '',
                name: 'results',
                required: !1,
                type: { name: 'number' },
              },
              security: {
                defaultValue: null,
                description: '',
                name: 'security',
                required: !1,
                type: { name: 'string' },
              },
              unselectable: {
                defaultValue: null,
                description: '',
                name: 'unselectable',
                required: !1,
                type: { name: '"on" | "off"' },
              },
              'aria-activedescendant': {
                defaultValue: null,
                description:
                  'Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.',
                name: 'aria-activedescendant',
                required: !1,
                type: { name: 'string' },
              },
              'aria-atomic': {
                defaultValue: null,
                description:
                  'Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.',
                name: 'aria-atomic',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-autocomplete': {
                defaultValue: null,
                description:
                  "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
                name: 'aria-autocomplete',
                required: !1,
                type: { name: '"none" | "inline" | "list" | "both"' },
              },
              'aria-busy': {
                defaultValue: null,
                description:
                  'Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.',
                name: 'aria-busy',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-checked': {
                defaultValue: null,
                description:
                  'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.',
                name: 'aria-checked',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-colcount': {
                defaultValue: null,
                description:
                  'Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.',
                name: 'aria-colcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colindex': {
                defaultValue: null,
                description:
                  "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.",
                name: 'aria-colindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colspan': {
                defaultValue: null,
                description:
                  'Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.',
                name: 'aria-colspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-controls': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.',
                name: 'aria-controls',
                required: !1,
                type: { name: 'string' },
              },
              'aria-current': {
                defaultValue: null,
                description:
                  'Indicates the element that represents the current item within a container or set of related elements.',
                name: 'aria-current',
                required: !1,
                type: {
                  name:
                    'boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time"',
                },
              },
              'aria-describedby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that describes the object.\n@see aria-labelledby',
                name: 'aria-describedby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-details': {
                defaultValue: null,
                description:
                  'Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.',
                name: 'aria-details',
                required: !1,
                type: { name: 'string' },
              },
              'aria-disabled': {
                defaultValue: null,
                description:
                  'Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.',
                name: 'aria-disabled',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-dropeffect': {
                defaultValue: null,
                description:
                  'Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1',
                name: 'aria-dropeffect',
                required: !1,
                type: {
                  name:
                    '"none" | "copy" | "execute" | "link" | "move" | "popup"',
                },
              },
              'aria-errormessage': {
                defaultValue: null,
                description:
                  'Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.',
                name: 'aria-errormessage',
                required: !1,
                type: { name: 'string' },
              },
              'aria-expanded': {
                defaultValue: null,
                description:
                  'Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.',
                name: 'aria-expanded',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-flowto': {
                defaultValue: null,
                description:
                  "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
                name: 'aria-flowto',
                required: !1,
                type: { name: 'string' },
              },
              'aria-grabbed': {
                defaultValue: null,
                description:
                  'Indicates an element\'s "grabbed" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1',
                name: 'aria-grabbed',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-haspopup': {
                defaultValue: null,
                description:
                  'Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.',
                name: 'aria-haspopup',
                required: !1,
                type: {
                  name:
                    'boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog"',
                },
              },
              'aria-hidden': {
                defaultValue: null,
                description:
                  'Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.',
                name: 'aria-hidden',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-invalid': {
                defaultValue: null,
                description:
                  'Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.',
                name: 'aria-invalid',
                required: !1,
                type: {
                  name: 'boolean | "false" | "true" | "grammar" | "spelling"',
                },
              },
              'aria-keyshortcuts': {
                defaultValue: null,
                description:
                  'Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.',
                name: 'aria-keyshortcuts',
                required: !1,
                type: { name: 'string' },
              },
              'aria-label': {
                defaultValue: null,
                description:
                  'Defines a string value that labels the current element.\n@see aria-labelledby.',
                name: 'aria-label',
                required: !1,
                type: { name: 'string' },
              },
              'aria-labelledby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that labels the current element.\n@see aria-describedby.',
                name: 'aria-labelledby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-level': {
                defaultValue: null,
                description:
                  'Defines the hierarchical level of an element within a structure.',
                name: 'aria-level',
                required: !1,
                type: { name: 'number' },
              },
              'aria-live': {
                defaultValue: null,
                description:
                  'Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.',
                name: 'aria-live',
                required: !1,
                type: { name: '"off" | "assertive" | "polite"' },
              },
              'aria-modal': {
                defaultValue: null,
                description:
                  'Indicates whether an element is modal when displayed.',
                name: 'aria-modal',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiline': {
                defaultValue: null,
                description:
                  'Indicates whether a text box accepts multiple lines of input or only a single line.',
                name: 'aria-multiline',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiselectable': {
                defaultValue: null,
                description:
                  'Indicates that the user may select more than one item from the current selectable descendants.',
                name: 'aria-multiselectable',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-orientation': {
                defaultValue: null,
                description:
                  "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
                name: 'aria-orientation',
                required: !1,
                type: { name: '"horizontal" | "vertical"' },
              },
              'aria-owns': {
                defaultValue: null,
                description:
                  'Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.',
                name: 'aria-owns',
                required: !1,
                type: { name: 'string' },
              },
              'aria-placeholder': {
                defaultValue: null,
                description:
                  'Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.',
                name: 'aria-placeholder',
                required: !1,
                type: { name: 'string' },
              },
              'aria-posinset': {
                defaultValue: null,
                description:
                  "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.",
                name: 'aria-posinset',
                required: !1,
                type: { name: 'number' },
              },
              'aria-pressed': {
                defaultValue: null,
                description:
                  'Indicates the current "pressed" state of toggle buttons.\n@see aria-checked\n@see aria-selected.',
                name: 'aria-pressed',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-readonly': {
                defaultValue: null,
                description:
                  'Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.',
                name: 'aria-readonly',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-relevant': {
                defaultValue: null,
                description:
                  'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.',
                name: 'aria-relevant',
                required: !1,
                type: {
                  name:
                    '"additions" | "additions text" | "all" | "removals" | "text"',
                },
              },
              'aria-required': {
                defaultValue: null,
                description:
                  'Indicates that user input is required on the element before a form may be submitted.',
                name: 'aria-required',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-roledescription': {
                defaultValue: null,
                description:
                  'Defines a human-readable, author-localized description for the role of an element.',
                name: 'aria-roledescription',
                required: !1,
                type: { name: 'string' },
              },
              'aria-rowcount': {
                defaultValue: null,
                description:
                  'Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.',
                name: 'aria-rowcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowindex': {
                defaultValue: null,
                description:
                  "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.",
                name: 'aria-rowindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowspan': {
                defaultValue: null,
                description:
                  'Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.',
                name: 'aria-rowspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-selected': {
                defaultValue: null,
                description:
                  'Indicates the current "selected" state of various widgets.\n@see aria-checked\n@see aria-pressed.',
                name: 'aria-selected',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-setsize': {
                defaultValue: null,
                description:
                  'Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.',
                name: 'aria-setsize',
                required: !1,
                type: { name: 'number' },
              },
              'aria-sort': {
                defaultValue: null,
                description:
                  'Indicates if items in a table or grid are sorted in ascending or descending order.',
                name: 'aria-sort',
                required: !1,
                type: { name: '"none" | "ascending" | "descending" | "other"' },
              },
              'aria-valuemax': {
                defaultValue: null,
                description:
                  'Defines the maximum allowed value for a range widget.',
                name: 'aria-valuemax',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuemin': {
                defaultValue: null,
                description:
                  'Defines the minimum allowed value for a range widget.',
                name: 'aria-valuemin',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuenow': {
                defaultValue: null,
                description:
                  'Defines the current value for a range widget.\n@see aria-valuetext.',
                name: 'aria-valuenow',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuetext': {
                defaultValue: null,
                description:
                  'Defines the human readable text alternative of aria-valuenow for a range widget.',
                name: 'aria-valuetext',
                required: !1,
                type: { name: 'string' },
              },
              dangerouslySetInnerHTML: {
                defaultValue: null,
                description: '',
                name: 'dangerouslySetInnerHTML',
                required: !1,
                type: { name: '{ __html: string; }' },
              },
              onCopy: {
                defaultValue: null,
                description: '',
                name: 'onCopy',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCopyCapture: {
                defaultValue: null,
                description: '',
                name: 'onCopyCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCut: {
                defaultValue: null,
                description: '',
                name: 'onCut',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCutCapture: {
                defaultValue: null,
                description: '',
                name: 'onCutCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onPaste: {
                defaultValue: null,
                description: '',
                name: 'onPaste',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onPasteCapture: {
                defaultValue: null,
                description: '',
                name: 'onPasteCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCompositionEnd: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEnd',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEndCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionStart: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStart',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStartCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionUpdate: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdate',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdateCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onFocus: {
                defaultValue: null,
                description: '',
                name: 'onFocus',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onFocusCapture: {
                defaultValue: null,
                description: '',
                name: 'onFocusCapture',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onBlur: {
                defaultValue: null,
                description: '',
                name: 'onBlur',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onBlurCapture: {
                defaultValue: null,
                description: '',
                name: 'onBlurCapture',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onChangeCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onBeforeInput: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onBeforeInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInput: {
                defaultValue: null,
                description: '',
                name: 'onInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onReset: {
                defaultValue: null,
                description: '',
                name: 'onReset',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onResetCapture: {
                defaultValue: null,
                description: '',
                name: 'onResetCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onSubmit: {
                defaultValue: null,
                description: '',
                name: 'onSubmit',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onSubmitCapture: {
                defaultValue: null,
                description: '',
                name: 'onSubmitCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInvalid: {
                defaultValue: null,
                description: '',
                name: 'onInvalid',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInvalidCapture: {
                defaultValue: null,
                description: '',
                name: 'onInvalidCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onLoad: {
                defaultValue: null,
                description: '',
                name: 'onLoad',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onError: {
                defaultValue: null,
                description: '',
                name: 'onError',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onErrorCapture: {
                defaultValue: null,
                description: '',
                name: 'onErrorCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onKeyDown: {
                defaultValue: null,
                description: '',
                name: 'onKeyDown',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyDownCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyPress: {
                defaultValue: null,
                description: '',
                name: 'onKeyPress',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyPressCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyPressCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyUp: {
                defaultValue: null,
                description: '',
                name: 'onKeyUp',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyUpCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onAbort: {
                defaultValue: null,
                description: '',
                name: 'onAbort',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onAbortCapture: {
                defaultValue: null,
                description: '',
                name: 'onAbortCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlay: {
                defaultValue: null,
                description: '',
                name: 'onCanPlay',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlayThrough: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThrough',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlayThroughCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThroughCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onDurationChange: {
                defaultValue: null,
                description: '',
                name: 'onDurationChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onDurationChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onDurationChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEmptied: {
                defaultValue: null,
                description: '',
                name: 'onEmptied',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEmptiedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEmptiedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEncrypted: {
                defaultValue: null,
                description: '',
                name: 'onEncrypted',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEncryptedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEncryptedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEnded: {
                defaultValue: null,
                description: '',
                name: 'onEnded',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEndedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEndedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedData: {
                defaultValue: null,
                description: '',
                name: 'onLoadedData',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedDataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedDataCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedMetadata: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadata',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedMetadataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadataCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadStart: {
                defaultValue: null,
                description: '',
                name: 'onLoadStart',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadStartCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPause: {
                defaultValue: null,
                description: '',
                name: 'onPause',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPauseCapture: {
                defaultValue: null,
                description: '',
                name: 'onPauseCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlay: {
                defaultValue: null,
                description: '',
                name: 'onPlay',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlaying: {
                defaultValue: null,
                description: '',
                name: 'onPlaying',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlayingCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onProgress: {
                defaultValue: null,
                description: '',
                name: 'onProgress',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onProgressCapture: {
                defaultValue: null,
                description: '',
                name: 'onProgressCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onRateChange: {
                defaultValue: null,
                description: '',
                name: 'onRateChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onRateChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onRateChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeeked: {
                defaultValue: null,
                description: '',
                name: 'onSeeked',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeekedCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeeking: {
                defaultValue: null,
                description: '',
                name: 'onSeeking',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeekingCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onStalled: {
                defaultValue: null,
                description: '',
                name: 'onStalled',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onStalledCapture: {
                defaultValue: null,
                description: '',
                name: 'onStalledCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSuspend: {
                defaultValue: null,
                description: '',
                name: 'onSuspend',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSuspendCapture: {
                defaultValue: null,
                description: '',
                name: 'onSuspendCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onTimeUpdate: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdate',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onTimeUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdateCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onVolumeChange: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onVolumeChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onWaiting: {
                defaultValue: null,
                description: '',
                name: 'onWaiting',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onWaitingCapture: {
                defaultValue: null,
                description: '',
                name: 'onWaitingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onAuxClick: {
                defaultValue: null,
                description: '',
                name: 'onAuxClick',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onAuxClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onAuxClickCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onClickCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onContextMenu: {
                defaultValue: null,
                description: '',
                name: 'onContextMenu',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onContextMenuCapture: {
                defaultValue: null,
                description: '',
                name: 'onContextMenuCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onDoubleClick: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClick',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onDoubleClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClickCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onDrag: {
                defaultValue: null,
                description: '',
                name: 'onDrag',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEnd: {
                defaultValue: null,
                description: '',
                name: 'onDragEnd',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEndCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEnter: {
                defaultValue: null,
                description: '',
                name: 'onDragEnter',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEnterCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragExit: {
                defaultValue: null,
                description: '',
                name: 'onDragExit',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragExitCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragExitCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragLeave: {
                defaultValue: null,
                description: '',
                name: 'onDragLeave',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragLeaveCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragOver: {
                defaultValue: null,
                description: '',
                name: 'onDragOver',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragOverCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragStart: {
                defaultValue: null,
                description: '',
                name: 'onDragStart',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragStartCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDrop: {
                defaultValue: null,
                description: '',
                name: 'onDrop',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDropCapture: {
                defaultValue: null,
                description: '',
                name: 'onDropCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onMouseDown: {
                defaultValue: null,
                description: '',
                name: 'onMouseDown',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseDownCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseEnter: {
                defaultValue: null,
                description: '',
                name: 'onMouseEnter',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseLeave: {
                defaultValue: null,
                description: '',
                name: 'onMouseLeave',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseMove: {
                defaultValue: null,
                description: '',
                name: 'onMouseMove',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseMoveCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOut: {
                defaultValue: null,
                description: '',
                name: 'onMouseOut',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOutCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOver: {
                defaultValue: null,
                description: '',
                name: 'onMouseOver',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOverCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseUp: {
                defaultValue: null,
                description: '',
                name: 'onMouseUp',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseUpCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onSelect: {
                defaultValue: null,
                description: '',
                name: 'onSelect',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSelectCapture: {
                defaultValue: null,
                description: '',
                name: 'onSelectCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onTouchCancel: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancel',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancelCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchEnd: {
                defaultValue: null,
                description: '',
                name: 'onTouchEnd',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchEndCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchMove: {
                defaultValue: null,
                description: '',
                name: 'onTouchMove',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchMoveCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchStart: {
                defaultValue: null,
                description: '',
                name: 'onTouchStart',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchStartCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onPointerDown: {
                defaultValue: null,
                description: '',
                name: 'onPointerDown',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerDownCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerMove: {
                defaultValue: null,
                description: '',
                name: 'onPointerMove',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerMoveCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerUp: {
                defaultValue: null,
                description: '',
                name: 'onPointerUp',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerUpCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerCancel: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancel',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancelCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerEnter: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnter',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnterCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerLeave: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeave',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeaveCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOver: {
                defaultValue: null,
                description: '',
                name: 'onPointerOver',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOverCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOut: {
                defaultValue: null,
                description: '',
                name: 'onPointerOut',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOutCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onGotPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onGotPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCaptureCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onLostPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onLostPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCaptureCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onScroll: {
                defaultValue: null,
                description: '',
                name: 'onScroll',
                required: !1,
                type: { name: '(event: UIEvent<HTMLElement>) => void' },
              },
              onScrollCapture: {
                defaultValue: null,
                description: '',
                name: 'onScrollCapture',
                required: !1,
                type: { name: '(event: UIEvent<HTMLElement>) => void' },
              },
              onWheel: {
                defaultValue: null,
                description: '',
                name: 'onWheel',
                required: !1,
                type: { name: '(event: WheelEvent<HTMLElement>) => void' },
              },
              onWheelCapture: {
                defaultValue: null,
                description: '',
                name: 'onWheelCapture',
                required: !1,
                type: { name: '(event: WheelEvent<HTMLElement>) => void' },
              },
              onAnimationStart: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStart',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStartCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationEnd: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEnd',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEndCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationIteration: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIteration',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationIterationCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIterationCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onTransitionEnd: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEnd',
                required: !1,
                type: { name: '(event: TransitionEvent<HTMLElement>) => void' },
              },
              onTransitionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEndCapture',
                required: !1,
                type: { name: '(event: TransitionEvent<HTMLElement>) => void' },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name:
                    '((instance: HTMLElement) => void) | RefObject<HTMLElement>',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/typography/src/emphasis/index.tsx#emphasis'
            ] = {
              docgenInfo: emphasis.__docgenInfo,
              name: 'emphasis',
              path: 'packages/typography/src/emphasis/index.tsx#emphasis',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    337: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        ),
        _react_design_system_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          47
        ),
        Highlight = function(_a) {
          var children = _a.children,
            props =
              (_a.title,
              tslib__WEBPACK_IMPORTED_MODULE_0__.c(_a, ['children', 'title']));
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'mark',
            tslib__WEBPACK_IMPORTED_MODULE_0__.a({}, props, {
              className: Object(
                _react_design_system_utils__WEBPACK_IMPORTED_MODULE_2__.a
              )('rds-Highlight__mark', props.className),
            }),
            children
          );
        };
      __webpack_exports__.a = Highlight;
      try {
        (Highlight.displayName = 'Highlight'),
          (Highlight.__docgenInfo = {
            description: '',
            displayName: 'Highlight',
            props: {
              key: {
                defaultValue: null,
                description: '',
                name: 'key',
                required: !1,
                type: { name: 'Key' },
              },
              defaultChecked: {
                defaultValue: null,
                description: '',
                name: 'defaultChecked',
                required: !1,
                type: { name: 'boolean' },
              },
              defaultValue: {
                defaultValue: null,
                description: '',
                name: 'defaultValue',
                required: !1,
                type: { name: 'string | string[]' },
              },
              suppressContentEditableWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressContentEditableWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              suppressHydrationWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressHydrationWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              accessKey: {
                defaultValue: null,
                description: '',
                name: 'accessKey',
                required: !1,
                type: { name: 'string' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              contentEditable: {
                defaultValue: null,
                description: '',
                name: 'contentEditable',
                required: !1,
                type: { name: 'boolean' },
              },
              contextMenu: {
                defaultValue: null,
                description: '',
                name: 'contextMenu',
                required: !1,
                type: { name: 'string' },
              },
              dir: {
                defaultValue: null,
                description: '',
                name: 'dir',
                required: !1,
                type: { name: 'string' },
              },
              draggable: {
                defaultValue: null,
                description: '',
                name: 'draggable',
                required: !1,
                type: { name: 'boolean' },
              },
              hidden: {
                defaultValue: null,
                description: '',
                name: 'hidden',
                required: !1,
                type: { name: 'boolean' },
              },
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !1,
                type: { name: 'string' },
              },
              lang: {
                defaultValue: null,
                description: '',
                name: 'lang',
                required: !1,
                type: { name: 'string' },
              },
              placeholder: {
                defaultValue: null,
                description: '',
                name: 'placeholder',
                required: !1,
                type: { name: 'string' },
              },
              slot: {
                defaultValue: null,
                description: '',
                name: 'slot',
                required: !1,
                type: { name: 'string' },
              },
              spellCheck: {
                defaultValue: null,
                description: '',
                name: 'spellCheck',
                required: !1,
                type: { name: 'boolean' },
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              tabIndex: {
                defaultValue: null,
                description: '',
                name: 'tabIndex',
                required: !1,
                type: { name: 'number' },
              },
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'string' },
              },
              inputMode: {
                defaultValue: null,
                description: '',
                name: 'inputMode',
                required: !1,
                type: { name: 'string' },
              },
              is: {
                defaultValue: null,
                description: '',
                name: 'is',
                required: !1,
                type: { name: 'string' },
              },
              radioGroup: {
                defaultValue: null,
                description: '',
                name: 'radioGroup',
                required: !1,
                type: { name: 'string' },
              },
              role: {
                defaultValue: null,
                description: '',
                name: 'role',
                required: !1,
                type: { name: 'string' },
              },
              about: {
                defaultValue: null,
                description: '',
                name: 'about',
                required: !1,
                type: { name: 'string' },
              },
              datatype: {
                defaultValue: null,
                description: '',
                name: 'datatype',
                required: !1,
                type: { name: 'string' },
              },
              inlist: {
                defaultValue: null,
                description: '',
                name: 'inlist',
                required: !1,
                type: { name: 'any' },
              },
              prefix: {
                defaultValue: null,
                description: '',
                name: 'prefix',
                required: !1,
                type: { name: 'string' },
              },
              property: {
                defaultValue: null,
                description: '',
                name: 'property',
                required: !1,
                type: { name: 'string' },
              },
              resource: {
                defaultValue: null,
                description: '',
                name: 'resource',
                required: !1,
                type: { name: 'string' },
              },
              typeof: {
                defaultValue: null,
                description: '',
                name: 'typeof',
                required: !1,
                type: { name: 'string' },
              },
              vocab: {
                defaultValue: null,
                description: '',
                name: 'vocab',
                required: !1,
                type: { name: 'string' },
              },
              autoCapitalize: {
                defaultValue: null,
                description: '',
                name: 'autoCapitalize',
                required: !1,
                type: { name: 'string' },
              },
              autoCorrect: {
                defaultValue: null,
                description: '',
                name: 'autoCorrect',
                required: !1,
                type: { name: 'string' },
              },
              autoSave: {
                defaultValue: null,
                description: '',
                name: 'autoSave',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              itemProp: {
                defaultValue: null,
                description: '',
                name: 'itemProp',
                required: !1,
                type: { name: 'string' },
              },
              itemScope: {
                defaultValue: null,
                description: '',
                name: 'itemScope',
                required: !1,
                type: { name: 'boolean' },
              },
              itemType: {
                defaultValue: null,
                description: '',
                name: 'itemType',
                required: !1,
                type: { name: 'string' },
              },
              itemID: {
                defaultValue: null,
                description: '',
                name: 'itemID',
                required: !1,
                type: { name: 'string' },
              },
              itemRef: {
                defaultValue: null,
                description: '',
                name: 'itemRef',
                required: !1,
                type: { name: 'string' },
              },
              results: {
                defaultValue: null,
                description: '',
                name: 'results',
                required: !1,
                type: { name: 'number' },
              },
              security: {
                defaultValue: null,
                description: '',
                name: 'security',
                required: !1,
                type: { name: 'string' },
              },
              unselectable: {
                defaultValue: null,
                description: '',
                name: 'unselectable',
                required: !1,
                type: { name: '"on" | "off"' },
              },
              'aria-activedescendant': {
                defaultValue: null,
                description:
                  'Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.',
                name: 'aria-activedescendant',
                required: !1,
                type: { name: 'string' },
              },
              'aria-atomic': {
                defaultValue: null,
                description:
                  'Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.',
                name: 'aria-atomic',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-autocomplete': {
                defaultValue: null,
                description:
                  "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
                name: 'aria-autocomplete',
                required: !1,
                type: { name: '"none" | "inline" | "list" | "both"' },
              },
              'aria-busy': {
                defaultValue: null,
                description:
                  'Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.',
                name: 'aria-busy',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-checked': {
                defaultValue: null,
                description:
                  'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.',
                name: 'aria-checked',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-colcount': {
                defaultValue: null,
                description:
                  'Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.',
                name: 'aria-colcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colindex': {
                defaultValue: null,
                description:
                  "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.",
                name: 'aria-colindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colspan': {
                defaultValue: null,
                description:
                  'Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.',
                name: 'aria-colspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-controls': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.',
                name: 'aria-controls',
                required: !1,
                type: { name: 'string' },
              },
              'aria-current': {
                defaultValue: null,
                description:
                  'Indicates the element that represents the current item within a container or set of related elements.',
                name: 'aria-current',
                required: !1,
                type: {
                  name:
                    'boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time"',
                },
              },
              'aria-describedby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that describes the object.\n@see aria-labelledby',
                name: 'aria-describedby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-details': {
                defaultValue: null,
                description:
                  'Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.',
                name: 'aria-details',
                required: !1,
                type: { name: 'string' },
              },
              'aria-disabled': {
                defaultValue: null,
                description:
                  'Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.',
                name: 'aria-disabled',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-dropeffect': {
                defaultValue: null,
                description:
                  'Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1',
                name: 'aria-dropeffect',
                required: !1,
                type: {
                  name:
                    '"none" | "copy" | "execute" | "link" | "move" | "popup"',
                },
              },
              'aria-errormessage': {
                defaultValue: null,
                description:
                  'Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.',
                name: 'aria-errormessage',
                required: !1,
                type: { name: 'string' },
              },
              'aria-expanded': {
                defaultValue: null,
                description:
                  'Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.',
                name: 'aria-expanded',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-flowto': {
                defaultValue: null,
                description:
                  "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
                name: 'aria-flowto',
                required: !1,
                type: { name: 'string' },
              },
              'aria-grabbed': {
                defaultValue: null,
                description:
                  'Indicates an element\'s "grabbed" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1',
                name: 'aria-grabbed',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-haspopup': {
                defaultValue: null,
                description:
                  'Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.',
                name: 'aria-haspopup',
                required: !1,
                type: {
                  name:
                    'boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog"',
                },
              },
              'aria-hidden': {
                defaultValue: null,
                description:
                  'Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.',
                name: 'aria-hidden',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-invalid': {
                defaultValue: null,
                description:
                  'Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.',
                name: 'aria-invalid',
                required: !1,
                type: {
                  name: 'boolean | "false" | "true" | "grammar" | "spelling"',
                },
              },
              'aria-keyshortcuts': {
                defaultValue: null,
                description:
                  'Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.',
                name: 'aria-keyshortcuts',
                required: !1,
                type: { name: 'string' },
              },
              'aria-label': {
                defaultValue: null,
                description:
                  'Defines a string value that labels the current element.\n@see aria-labelledby.',
                name: 'aria-label',
                required: !1,
                type: { name: 'string' },
              },
              'aria-labelledby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that labels the current element.\n@see aria-describedby.',
                name: 'aria-labelledby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-level': {
                defaultValue: null,
                description:
                  'Defines the hierarchical level of an element within a structure.',
                name: 'aria-level',
                required: !1,
                type: { name: 'number' },
              },
              'aria-live': {
                defaultValue: null,
                description:
                  'Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.',
                name: 'aria-live',
                required: !1,
                type: { name: '"off" | "assertive" | "polite"' },
              },
              'aria-modal': {
                defaultValue: null,
                description:
                  'Indicates whether an element is modal when displayed.',
                name: 'aria-modal',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiline': {
                defaultValue: null,
                description:
                  'Indicates whether a text box accepts multiple lines of input or only a single line.',
                name: 'aria-multiline',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiselectable': {
                defaultValue: null,
                description:
                  'Indicates that the user may select more than one item from the current selectable descendants.',
                name: 'aria-multiselectable',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-orientation': {
                defaultValue: null,
                description:
                  "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
                name: 'aria-orientation',
                required: !1,
                type: { name: '"horizontal" | "vertical"' },
              },
              'aria-owns': {
                defaultValue: null,
                description:
                  'Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.',
                name: 'aria-owns',
                required: !1,
                type: { name: 'string' },
              },
              'aria-placeholder': {
                defaultValue: null,
                description:
                  'Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.',
                name: 'aria-placeholder',
                required: !1,
                type: { name: 'string' },
              },
              'aria-posinset': {
                defaultValue: null,
                description:
                  "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.",
                name: 'aria-posinset',
                required: !1,
                type: { name: 'number' },
              },
              'aria-pressed': {
                defaultValue: null,
                description:
                  'Indicates the current "pressed" state of toggle buttons.\n@see aria-checked\n@see aria-selected.',
                name: 'aria-pressed',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-readonly': {
                defaultValue: null,
                description:
                  'Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.',
                name: 'aria-readonly',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-relevant': {
                defaultValue: null,
                description:
                  'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.',
                name: 'aria-relevant',
                required: !1,
                type: {
                  name:
                    '"additions" | "additions text" | "all" | "removals" | "text"',
                },
              },
              'aria-required': {
                defaultValue: null,
                description:
                  'Indicates that user input is required on the element before a form may be submitted.',
                name: 'aria-required',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-roledescription': {
                defaultValue: null,
                description:
                  'Defines a human-readable, author-localized description for the role of an element.',
                name: 'aria-roledescription',
                required: !1,
                type: { name: 'string' },
              },
              'aria-rowcount': {
                defaultValue: null,
                description:
                  'Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.',
                name: 'aria-rowcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowindex': {
                defaultValue: null,
                description:
                  "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.",
                name: 'aria-rowindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowspan': {
                defaultValue: null,
                description:
                  'Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.',
                name: 'aria-rowspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-selected': {
                defaultValue: null,
                description:
                  'Indicates the current "selected" state of various widgets.\n@see aria-checked\n@see aria-pressed.',
                name: 'aria-selected',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-setsize': {
                defaultValue: null,
                description:
                  'Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.',
                name: 'aria-setsize',
                required: !1,
                type: { name: 'number' },
              },
              'aria-sort': {
                defaultValue: null,
                description:
                  'Indicates if items in a table or grid are sorted in ascending or descending order.',
                name: 'aria-sort',
                required: !1,
                type: { name: '"none" | "ascending" | "descending" | "other"' },
              },
              'aria-valuemax': {
                defaultValue: null,
                description:
                  'Defines the maximum allowed value for a range widget.',
                name: 'aria-valuemax',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuemin': {
                defaultValue: null,
                description:
                  'Defines the minimum allowed value for a range widget.',
                name: 'aria-valuemin',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuenow': {
                defaultValue: null,
                description:
                  'Defines the current value for a range widget.\n@see aria-valuetext.',
                name: 'aria-valuenow',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuetext': {
                defaultValue: null,
                description:
                  'Defines the human readable text alternative of aria-valuenow for a range widget.',
                name: 'aria-valuetext',
                required: !1,
                type: { name: 'string' },
              },
              dangerouslySetInnerHTML: {
                defaultValue: null,
                description: '',
                name: 'dangerouslySetInnerHTML',
                required: !1,
                type: { name: '{ __html: string; }' },
              },
              onCopy: {
                defaultValue: null,
                description: '',
                name: 'onCopy',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCopyCapture: {
                defaultValue: null,
                description: '',
                name: 'onCopyCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCut: {
                defaultValue: null,
                description: '',
                name: 'onCut',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCutCapture: {
                defaultValue: null,
                description: '',
                name: 'onCutCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onPaste: {
                defaultValue: null,
                description: '',
                name: 'onPaste',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onPasteCapture: {
                defaultValue: null,
                description: '',
                name: 'onPasteCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCompositionEnd: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEnd',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEndCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionStart: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStart',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStartCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionUpdate: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdate',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdateCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onFocus: {
                defaultValue: null,
                description: '',
                name: 'onFocus',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onFocusCapture: {
                defaultValue: null,
                description: '',
                name: 'onFocusCapture',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onBlur: {
                defaultValue: null,
                description: '',
                name: 'onBlur',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onBlurCapture: {
                defaultValue: null,
                description: '',
                name: 'onBlurCapture',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onChangeCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onBeforeInput: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onBeforeInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInput: {
                defaultValue: null,
                description: '',
                name: 'onInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onReset: {
                defaultValue: null,
                description: '',
                name: 'onReset',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onResetCapture: {
                defaultValue: null,
                description: '',
                name: 'onResetCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onSubmit: {
                defaultValue: null,
                description: '',
                name: 'onSubmit',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onSubmitCapture: {
                defaultValue: null,
                description: '',
                name: 'onSubmitCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInvalid: {
                defaultValue: null,
                description: '',
                name: 'onInvalid',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInvalidCapture: {
                defaultValue: null,
                description: '',
                name: 'onInvalidCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onLoad: {
                defaultValue: null,
                description: '',
                name: 'onLoad',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onError: {
                defaultValue: null,
                description: '',
                name: 'onError',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onErrorCapture: {
                defaultValue: null,
                description: '',
                name: 'onErrorCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onKeyDown: {
                defaultValue: null,
                description: '',
                name: 'onKeyDown',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyDownCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyPress: {
                defaultValue: null,
                description: '',
                name: 'onKeyPress',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyPressCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyPressCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyUp: {
                defaultValue: null,
                description: '',
                name: 'onKeyUp',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyUpCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onAbort: {
                defaultValue: null,
                description: '',
                name: 'onAbort',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onAbortCapture: {
                defaultValue: null,
                description: '',
                name: 'onAbortCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlay: {
                defaultValue: null,
                description: '',
                name: 'onCanPlay',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlayThrough: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThrough',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlayThroughCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThroughCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onDurationChange: {
                defaultValue: null,
                description: '',
                name: 'onDurationChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onDurationChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onDurationChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEmptied: {
                defaultValue: null,
                description: '',
                name: 'onEmptied',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEmptiedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEmptiedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEncrypted: {
                defaultValue: null,
                description: '',
                name: 'onEncrypted',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEncryptedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEncryptedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEnded: {
                defaultValue: null,
                description: '',
                name: 'onEnded',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEndedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEndedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedData: {
                defaultValue: null,
                description: '',
                name: 'onLoadedData',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedDataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedDataCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedMetadata: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadata',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedMetadataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadataCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadStart: {
                defaultValue: null,
                description: '',
                name: 'onLoadStart',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadStartCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPause: {
                defaultValue: null,
                description: '',
                name: 'onPause',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPauseCapture: {
                defaultValue: null,
                description: '',
                name: 'onPauseCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlay: {
                defaultValue: null,
                description: '',
                name: 'onPlay',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlaying: {
                defaultValue: null,
                description: '',
                name: 'onPlaying',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlayingCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onProgress: {
                defaultValue: null,
                description: '',
                name: 'onProgress',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onProgressCapture: {
                defaultValue: null,
                description: '',
                name: 'onProgressCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onRateChange: {
                defaultValue: null,
                description: '',
                name: 'onRateChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onRateChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onRateChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeeked: {
                defaultValue: null,
                description: '',
                name: 'onSeeked',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeekedCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeeking: {
                defaultValue: null,
                description: '',
                name: 'onSeeking',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeekingCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onStalled: {
                defaultValue: null,
                description: '',
                name: 'onStalled',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onStalledCapture: {
                defaultValue: null,
                description: '',
                name: 'onStalledCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSuspend: {
                defaultValue: null,
                description: '',
                name: 'onSuspend',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSuspendCapture: {
                defaultValue: null,
                description: '',
                name: 'onSuspendCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onTimeUpdate: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdate',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onTimeUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdateCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onVolumeChange: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onVolumeChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onWaiting: {
                defaultValue: null,
                description: '',
                name: 'onWaiting',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onWaitingCapture: {
                defaultValue: null,
                description: '',
                name: 'onWaitingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onAuxClick: {
                defaultValue: null,
                description: '',
                name: 'onAuxClick',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onAuxClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onAuxClickCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onClickCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onContextMenu: {
                defaultValue: null,
                description: '',
                name: 'onContextMenu',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onContextMenuCapture: {
                defaultValue: null,
                description: '',
                name: 'onContextMenuCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onDoubleClick: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClick',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onDoubleClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClickCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onDrag: {
                defaultValue: null,
                description: '',
                name: 'onDrag',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEnd: {
                defaultValue: null,
                description: '',
                name: 'onDragEnd',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEndCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEnter: {
                defaultValue: null,
                description: '',
                name: 'onDragEnter',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEnterCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragExit: {
                defaultValue: null,
                description: '',
                name: 'onDragExit',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragExitCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragExitCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragLeave: {
                defaultValue: null,
                description: '',
                name: 'onDragLeave',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragLeaveCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragOver: {
                defaultValue: null,
                description: '',
                name: 'onDragOver',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragOverCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragStart: {
                defaultValue: null,
                description: '',
                name: 'onDragStart',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragStartCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDrop: {
                defaultValue: null,
                description: '',
                name: 'onDrop',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDropCapture: {
                defaultValue: null,
                description: '',
                name: 'onDropCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onMouseDown: {
                defaultValue: null,
                description: '',
                name: 'onMouseDown',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseDownCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseEnter: {
                defaultValue: null,
                description: '',
                name: 'onMouseEnter',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseLeave: {
                defaultValue: null,
                description: '',
                name: 'onMouseLeave',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseMove: {
                defaultValue: null,
                description: '',
                name: 'onMouseMove',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseMoveCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOut: {
                defaultValue: null,
                description: '',
                name: 'onMouseOut',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOutCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOver: {
                defaultValue: null,
                description: '',
                name: 'onMouseOver',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOverCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseUp: {
                defaultValue: null,
                description: '',
                name: 'onMouseUp',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseUpCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onSelect: {
                defaultValue: null,
                description: '',
                name: 'onSelect',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSelectCapture: {
                defaultValue: null,
                description: '',
                name: 'onSelectCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onTouchCancel: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancel',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancelCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchEnd: {
                defaultValue: null,
                description: '',
                name: 'onTouchEnd',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchEndCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchMove: {
                defaultValue: null,
                description: '',
                name: 'onTouchMove',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchMoveCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchStart: {
                defaultValue: null,
                description: '',
                name: 'onTouchStart',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchStartCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onPointerDown: {
                defaultValue: null,
                description: '',
                name: 'onPointerDown',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerDownCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerMove: {
                defaultValue: null,
                description: '',
                name: 'onPointerMove',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerMoveCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerUp: {
                defaultValue: null,
                description: '',
                name: 'onPointerUp',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerUpCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerCancel: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancel',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancelCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerEnter: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnter',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnterCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerLeave: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeave',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeaveCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOver: {
                defaultValue: null,
                description: '',
                name: 'onPointerOver',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOverCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOut: {
                defaultValue: null,
                description: '',
                name: 'onPointerOut',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOutCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onGotPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onGotPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCaptureCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onLostPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onLostPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCaptureCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onScroll: {
                defaultValue: null,
                description: '',
                name: 'onScroll',
                required: !1,
                type: { name: '(event: UIEvent<HTMLElement>) => void' },
              },
              onScrollCapture: {
                defaultValue: null,
                description: '',
                name: 'onScrollCapture',
                required: !1,
                type: { name: '(event: UIEvent<HTMLElement>) => void' },
              },
              onWheel: {
                defaultValue: null,
                description: '',
                name: 'onWheel',
                required: !1,
                type: { name: '(event: WheelEvent<HTMLElement>) => void' },
              },
              onWheelCapture: {
                defaultValue: null,
                description: '',
                name: 'onWheelCapture',
                required: !1,
                type: { name: '(event: WheelEvent<HTMLElement>) => void' },
              },
              onAnimationStart: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStart',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStartCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationEnd: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEnd',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEndCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationIteration: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIteration',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationIterationCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIterationCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onTransitionEnd: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEnd',
                required: !1,
                type: { name: '(event: TransitionEvent<HTMLElement>) => void' },
              },
              onTransitionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEndCapture',
                required: !1,
                type: { name: '(event: TransitionEvent<HTMLElement>) => void' },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name:
                    '((instance: HTMLElement) => void) | RefObject<HTMLElement>',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/typography/src/highlight/index.tsx#Highlight'
            ] = {
              docgenInfo: Highlight.__docgenInfo,
              name: 'Highlight',
              path: 'packages/typography/src/highlight/index.tsx#Highlight',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (highlight.displayName = 'highlight'),
          (highlight.__docgenInfo = {
            description: '',
            displayName: 'highlight',
            props: {
              key: {
                defaultValue: null,
                description: '',
                name: 'key',
                required: !1,
                type: { name: 'Key' },
              },
              defaultChecked: {
                defaultValue: null,
                description: '',
                name: 'defaultChecked',
                required: !1,
                type: { name: 'boolean' },
              },
              defaultValue: {
                defaultValue: null,
                description: '',
                name: 'defaultValue',
                required: !1,
                type: { name: 'string | string[]' },
              },
              suppressContentEditableWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressContentEditableWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              suppressHydrationWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressHydrationWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              accessKey: {
                defaultValue: null,
                description: '',
                name: 'accessKey',
                required: !1,
                type: { name: 'string' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              contentEditable: {
                defaultValue: null,
                description: '',
                name: 'contentEditable',
                required: !1,
                type: { name: 'boolean' },
              },
              contextMenu: {
                defaultValue: null,
                description: '',
                name: 'contextMenu',
                required: !1,
                type: { name: 'string' },
              },
              dir: {
                defaultValue: null,
                description: '',
                name: 'dir',
                required: !1,
                type: { name: 'string' },
              },
              draggable: {
                defaultValue: null,
                description: '',
                name: 'draggable',
                required: !1,
                type: { name: 'boolean' },
              },
              hidden: {
                defaultValue: null,
                description: '',
                name: 'hidden',
                required: !1,
                type: { name: 'boolean' },
              },
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !1,
                type: { name: 'string' },
              },
              lang: {
                defaultValue: null,
                description: '',
                name: 'lang',
                required: !1,
                type: { name: 'string' },
              },
              placeholder: {
                defaultValue: null,
                description: '',
                name: 'placeholder',
                required: !1,
                type: { name: 'string' },
              },
              slot: {
                defaultValue: null,
                description: '',
                name: 'slot',
                required: !1,
                type: { name: 'string' },
              },
              spellCheck: {
                defaultValue: null,
                description: '',
                name: 'spellCheck',
                required: !1,
                type: { name: 'boolean' },
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              tabIndex: {
                defaultValue: null,
                description: '',
                name: 'tabIndex',
                required: !1,
                type: { name: 'number' },
              },
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'string' },
              },
              inputMode: {
                defaultValue: null,
                description: '',
                name: 'inputMode',
                required: !1,
                type: { name: 'string' },
              },
              is: {
                defaultValue: null,
                description: '',
                name: 'is',
                required: !1,
                type: { name: 'string' },
              },
              radioGroup: {
                defaultValue: null,
                description: '',
                name: 'radioGroup',
                required: !1,
                type: { name: 'string' },
              },
              role: {
                defaultValue: null,
                description: '',
                name: 'role',
                required: !1,
                type: { name: 'string' },
              },
              about: {
                defaultValue: null,
                description: '',
                name: 'about',
                required: !1,
                type: { name: 'string' },
              },
              datatype: {
                defaultValue: null,
                description: '',
                name: 'datatype',
                required: !1,
                type: { name: 'string' },
              },
              inlist: {
                defaultValue: null,
                description: '',
                name: 'inlist',
                required: !1,
                type: { name: 'any' },
              },
              prefix: {
                defaultValue: null,
                description: '',
                name: 'prefix',
                required: !1,
                type: { name: 'string' },
              },
              property: {
                defaultValue: null,
                description: '',
                name: 'property',
                required: !1,
                type: { name: 'string' },
              },
              resource: {
                defaultValue: null,
                description: '',
                name: 'resource',
                required: !1,
                type: { name: 'string' },
              },
              typeof: {
                defaultValue: null,
                description: '',
                name: 'typeof',
                required: !1,
                type: { name: 'string' },
              },
              vocab: {
                defaultValue: null,
                description: '',
                name: 'vocab',
                required: !1,
                type: { name: 'string' },
              },
              autoCapitalize: {
                defaultValue: null,
                description: '',
                name: 'autoCapitalize',
                required: !1,
                type: { name: 'string' },
              },
              autoCorrect: {
                defaultValue: null,
                description: '',
                name: 'autoCorrect',
                required: !1,
                type: { name: 'string' },
              },
              autoSave: {
                defaultValue: null,
                description: '',
                name: 'autoSave',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              itemProp: {
                defaultValue: null,
                description: '',
                name: 'itemProp',
                required: !1,
                type: { name: 'string' },
              },
              itemScope: {
                defaultValue: null,
                description: '',
                name: 'itemScope',
                required: !1,
                type: { name: 'boolean' },
              },
              itemType: {
                defaultValue: null,
                description: '',
                name: 'itemType',
                required: !1,
                type: { name: 'string' },
              },
              itemID: {
                defaultValue: null,
                description: '',
                name: 'itemID',
                required: !1,
                type: { name: 'string' },
              },
              itemRef: {
                defaultValue: null,
                description: '',
                name: 'itemRef',
                required: !1,
                type: { name: 'string' },
              },
              results: {
                defaultValue: null,
                description: '',
                name: 'results',
                required: !1,
                type: { name: 'number' },
              },
              security: {
                defaultValue: null,
                description: '',
                name: 'security',
                required: !1,
                type: { name: 'string' },
              },
              unselectable: {
                defaultValue: null,
                description: '',
                name: 'unselectable',
                required: !1,
                type: { name: '"on" | "off"' },
              },
              'aria-activedescendant': {
                defaultValue: null,
                description:
                  'Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.',
                name: 'aria-activedescendant',
                required: !1,
                type: { name: 'string' },
              },
              'aria-atomic': {
                defaultValue: null,
                description:
                  'Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.',
                name: 'aria-atomic',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-autocomplete': {
                defaultValue: null,
                description:
                  "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
                name: 'aria-autocomplete',
                required: !1,
                type: { name: '"none" | "inline" | "list" | "both"' },
              },
              'aria-busy': {
                defaultValue: null,
                description:
                  'Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.',
                name: 'aria-busy',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-checked': {
                defaultValue: null,
                description:
                  'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.',
                name: 'aria-checked',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-colcount': {
                defaultValue: null,
                description:
                  'Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.',
                name: 'aria-colcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colindex': {
                defaultValue: null,
                description:
                  "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.",
                name: 'aria-colindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colspan': {
                defaultValue: null,
                description:
                  'Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.',
                name: 'aria-colspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-controls': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.',
                name: 'aria-controls',
                required: !1,
                type: { name: 'string' },
              },
              'aria-current': {
                defaultValue: null,
                description:
                  'Indicates the element that represents the current item within a container or set of related elements.',
                name: 'aria-current',
                required: !1,
                type: {
                  name:
                    'boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time"',
                },
              },
              'aria-describedby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that describes the object.\n@see aria-labelledby',
                name: 'aria-describedby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-details': {
                defaultValue: null,
                description:
                  'Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.',
                name: 'aria-details',
                required: !1,
                type: { name: 'string' },
              },
              'aria-disabled': {
                defaultValue: null,
                description:
                  'Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.',
                name: 'aria-disabled',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-dropeffect': {
                defaultValue: null,
                description:
                  'Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1',
                name: 'aria-dropeffect',
                required: !1,
                type: {
                  name:
                    '"none" | "copy" | "execute" | "link" | "move" | "popup"',
                },
              },
              'aria-errormessage': {
                defaultValue: null,
                description:
                  'Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.',
                name: 'aria-errormessage',
                required: !1,
                type: { name: 'string' },
              },
              'aria-expanded': {
                defaultValue: null,
                description:
                  'Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.',
                name: 'aria-expanded',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-flowto': {
                defaultValue: null,
                description:
                  "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
                name: 'aria-flowto',
                required: !1,
                type: { name: 'string' },
              },
              'aria-grabbed': {
                defaultValue: null,
                description:
                  'Indicates an element\'s "grabbed" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1',
                name: 'aria-grabbed',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-haspopup': {
                defaultValue: null,
                description:
                  'Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.',
                name: 'aria-haspopup',
                required: !1,
                type: {
                  name:
                    'boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog"',
                },
              },
              'aria-hidden': {
                defaultValue: null,
                description:
                  'Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.',
                name: 'aria-hidden',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-invalid': {
                defaultValue: null,
                description:
                  'Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.',
                name: 'aria-invalid',
                required: !1,
                type: {
                  name: 'boolean | "false" | "true" | "grammar" | "spelling"',
                },
              },
              'aria-keyshortcuts': {
                defaultValue: null,
                description:
                  'Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.',
                name: 'aria-keyshortcuts',
                required: !1,
                type: { name: 'string' },
              },
              'aria-label': {
                defaultValue: null,
                description:
                  'Defines a string value that labels the current element.\n@see aria-labelledby.',
                name: 'aria-label',
                required: !1,
                type: { name: 'string' },
              },
              'aria-labelledby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that labels the current element.\n@see aria-describedby.',
                name: 'aria-labelledby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-level': {
                defaultValue: null,
                description:
                  'Defines the hierarchical level of an element within a structure.',
                name: 'aria-level',
                required: !1,
                type: { name: 'number' },
              },
              'aria-live': {
                defaultValue: null,
                description:
                  'Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.',
                name: 'aria-live',
                required: !1,
                type: { name: '"off" | "assertive" | "polite"' },
              },
              'aria-modal': {
                defaultValue: null,
                description:
                  'Indicates whether an element is modal when displayed.',
                name: 'aria-modal',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiline': {
                defaultValue: null,
                description:
                  'Indicates whether a text box accepts multiple lines of input or only a single line.',
                name: 'aria-multiline',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiselectable': {
                defaultValue: null,
                description:
                  'Indicates that the user may select more than one item from the current selectable descendants.',
                name: 'aria-multiselectable',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-orientation': {
                defaultValue: null,
                description:
                  "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
                name: 'aria-orientation',
                required: !1,
                type: { name: '"horizontal" | "vertical"' },
              },
              'aria-owns': {
                defaultValue: null,
                description:
                  'Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.',
                name: 'aria-owns',
                required: !1,
                type: { name: 'string' },
              },
              'aria-placeholder': {
                defaultValue: null,
                description:
                  'Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.',
                name: 'aria-placeholder',
                required: !1,
                type: { name: 'string' },
              },
              'aria-posinset': {
                defaultValue: null,
                description:
                  "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.",
                name: 'aria-posinset',
                required: !1,
                type: { name: 'number' },
              },
              'aria-pressed': {
                defaultValue: null,
                description:
                  'Indicates the current "pressed" state of toggle buttons.\n@see aria-checked\n@see aria-selected.',
                name: 'aria-pressed',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-readonly': {
                defaultValue: null,
                description:
                  'Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.',
                name: 'aria-readonly',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-relevant': {
                defaultValue: null,
                description:
                  'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.',
                name: 'aria-relevant',
                required: !1,
                type: {
                  name:
                    '"additions" | "additions text" | "all" | "removals" | "text"',
                },
              },
              'aria-required': {
                defaultValue: null,
                description:
                  'Indicates that user input is required on the element before a form may be submitted.',
                name: 'aria-required',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-roledescription': {
                defaultValue: null,
                description:
                  'Defines a human-readable, author-localized description for the role of an element.',
                name: 'aria-roledescription',
                required: !1,
                type: { name: 'string' },
              },
              'aria-rowcount': {
                defaultValue: null,
                description:
                  'Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.',
                name: 'aria-rowcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowindex': {
                defaultValue: null,
                description:
                  "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.",
                name: 'aria-rowindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowspan': {
                defaultValue: null,
                description:
                  'Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.',
                name: 'aria-rowspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-selected': {
                defaultValue: null,
                description:
                  'Indicates the current "selected" state of various widgets.\n@see aria-checked\n@see aria-pressed.',
                name: 'aria-selected',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-setsize': {
                defaultValue: null,
                description:
                  'Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.',
                name: 'aria-setsize',
                required: !1,
                type: { name: 'number' },
              },
              'aria-sort': {
                defaultValue: null,
                description:
                  'Indicates if items in a table or grid are sorted in ascending or descending order.',
                name: 'aria-sort',
                required: !1,
                type: { name: '"none" | "ascending" | "descending" | "other"' },
              },
              'aria-valuemax': {
                defaultValue: null,
                description:
                  'Defines the maximum allowed value for a range widget.',
                name: 'aria-valuemax',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuemin': {
                defaultValue: null,
                description:
                  'Defines the minimum allowed value for a range widget.',
                name: 'aria-valuemin',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuenow': {
                defaultValue: null,
                description:
                  'Defines the current value for a range widget.\n@see aria-valuetext.',
                name: 'aria-valuenow',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuetext': {
                defaultValue: null,
                description:
                  'Defines the human readable text alternative of aria-valuenow for a range widget.',
                name: 'aria-valuetext',
                required: !1,
                type: { name: 'string' },
              },
              dangerouslySetInnerHTML: {
                defaultValue: null,
                description: '',
                name: 'dangerouslySetInnerHTML',
                required: !1,
                type: { name: '{ __html: string; }' },
              },
              onCopy: {
                defaultValue: null,
                description: '',
                name: 'onCopy',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCopyCapture: {
                defaultValue: null,
                description: '',
                name: 'onCopyCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCut: {
                defaultValue: null,
                description: '',
                name: 'onCut',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCutCapture: {
                defaultValue: null,
                description: '',
                name: 'onCutCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onPaste: {
                defaultValue: null,
                description: '',
                name: 'onPaste',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onPasteCapture: {
                defaultValue: null,
                description: '',
                name: 'onPasteCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLElement>) => void' },
              },
              onCompositionEnd: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEnd',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEndCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionStart: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStart',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStartCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionUpdate: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdate',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onCompositionUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdateCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLElement>) => void',
                },
              },
              onFocus: {
                defaultValue: null,
                description: '',
                name: 'onFocus',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onFocusCapture: {
                defaultValue: null,
                description: '',
                name: 'onFocusCapture',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onBlur: {
                defaultValue: null,
                description: '',
                name: 'onBlur',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onBlurCapture: {
                defaultValue: null,
                description: '',
                name: 'onBlurCapture',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLElement>) => void' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onChangeCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onBeforeInput: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onBeforeInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInput: {
                defaultValue: null,
                description: '',
                name: 'onInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onReset: {
                defaultValue: null,
                description: '',
                name: 'onReset',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onResetCapture: {
                defaultValue: null,
                description: '',
                name: 'onResetCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onSubmit: {
                defaultValue: null,
                description: '',
                name: 'onSubmit',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onSubmitCapture: {
                defaultValue: null,
                description: '',
                name: 'onSubmitCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInvalid: {
                defaultValue: null,
                description: '',
                name: 'onInvalid',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onInvalidCapture: {
                defaultValue: null,
                description: '',
                name: 'onInvalidCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLElement>) => void' },
              },
              onLoad: {
                defaultValue: null,
                description: '',
                name: 'onLoad',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onError: {
                defaultValue: null,
                description: '',
                name: 'onError',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onErrorCapture: {
                defaultValue: null,
                description: '',
                name: 'onErrorCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onKeyDown: {
                defaultValue: null,
                description: '',
                name: 'onKeyDown',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyDownCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyPress: {
                defaultValue: null,
                description: '',
                name: 'onKeyPress',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyPressCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyPressCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyUp: {
                defaultValue: null,
                description: '',
                name: 'onKeyUp',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onKeyUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyUpCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLElement>) => void' },
              },
              onAbort: {
                defaultValue: null,
                description: '',
                name: 'onAbort',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onAbortCapture: {
                defaultValue: null,
                description: '',
                name: 'onAbortCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlay: {
                defaultValue: null,
                description: '',
                name: 'onCanPlay',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlayThrough: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThrough',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onCanPlayThroughCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThroughCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onDurationChange: {
                defaultValue: null,
                description: '',
                name: 'onDurationChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onDurationChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onDurationChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEmptied: {
                defaultValue: null,
                description: '',
                name: 'onEmptied',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEmptiedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEmptiedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEncrypted: {
                defaultValue: null,
                description: '',
                name: 'onEncrypted',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEncryptedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEncryptedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEnded: {
                defaultValue: null,
                description: '',
                name: 'onEnded',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onEndedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEndedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedData: {
                defaultValue: null,
                description: '',
                name: 'onLoadedData',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedDataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedDataCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedMetadata: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadata',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadedMetadataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadataCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadStart: {
                defaultValue: null,
                description: '',
                name: 'onLoadStart',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onLoadStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadStartCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPause: {
                defaultValue: null,
                description: '',
                name: 'onPause',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPauseCapture: {
                defaultValue: null,
                description: '',
                name: 'onPauseCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlay: {
                defaultValue: null,
                description: '',
                name: 'onPlay',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlaying: {
                defaultValue: null,
                description: '',
                name: 'onPlaying',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onPlayingCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onProgress: {
                defaultValue: null,
                description: '',
                name: 'onProgress',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onProgressCapture: {
                defaultValue: null,
                description: '',
                name: 'onProgressCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onRateChange: {
                defaultValue: null,
                description: '',
                name: 'onRateChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onRateChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onRateChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeeked: {
                defaultValue: null,
                description: '',
                name: 'onSeeked',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeekedCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekedCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeeking: {
                defaultValue: null,
                description: '',
                name: 'onSeeking',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSeekingCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onStalled: {
                defaultValue: null,
                description: '',
                name: 'onStalled',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onStalledCapture: {
                defaultValue: null,
                description: '',
                name: 'onStalledCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSuspend: {
                defaultValue: null,
                description: '',
                name: 'onSuspend',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSuspendCapture: {
                defaultValue: null,
                description: '',
                name: 'onSuspendCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onTimeUpdate: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdate',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onTimeUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdateCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onVolumeChange: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChange',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onVolumeChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChangeCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onWaiting: {
                defaultValue: null,
                description: '',
                name: 'onWaiting',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onWaitingCapture: {
                defaultValue: null,
                description: '',
                name: 'onWaitingCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onAuxClick: {
                defaultValue: null,
                description: '',
                name: 'onAuxClick',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onAuxClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onAuxClickCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onClickCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onContextMenu: {
                defaultValue: null,
                description: '',
                name: 'onContextMenu',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onContextMenuCapture: {
                defaultValue: null,
                description: '',
                name: 'onContextMenuCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onDoubleClick: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClick',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onDoubleClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClickCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onDrag: {
                defaultValue: null,
                description: '',
                name: 'onDrag',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEnd: {
                defaultValue: null,
                description: '',
                name: 'onDragEnd',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEndCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEnter: {
                defaultValue: null,
                description: '',
                name: 'onDragEnter',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEnterCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragExit: {
                defaultValue: null,
                description: '',
                name: 'onDragExit',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragExitCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragExitCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragLeave: {
                defaultValue: null,
                description: '',
                name: 'onDragLeave',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragLeaveCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragOver: {
                defaultValue: null,
                description: '',
                name: 'onDragOver',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragOverCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragStart: {
                defaultValue: null,
                description: '',
                name: 'onDragStart',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDragStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragStartCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDrop: {
                defaultValue: null,
                description: '',
                name: 'onDrop',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onDropCapture: {
                defaultValue: null,
                description: '',
                name: 'onDropCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLElement>) => void' },
              },
              onMouseDown: {
                defaultValue: null,
                description: '',
                name: 'onMouseDown',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseDownCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseEnter: {
                defaultValue: null,
                description: '',
                name: 'onMouseEnter',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseLeave: {
                defaultValue: null,
                description: '',
                name: 'onMouseLeave',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseMove: {
                defaultValue: null,
                description: '',
                name: 'onMouseMove',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseMoveCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOut: {
                defaultValue: null,
                description: '',
                name: 'onMouseOut',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOutCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOver: {
                defaultValue: null,
                description: '',
                name: 'onMouseOver',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOverCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseUp: {
                defaultValue: null,
                description: '',
                name: 'onMouseUp',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onMouseUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseUpCapture',
                required: !1,
                type: {
                  name: '(event: MouseEvent<HTMLElement, MouseEvent>) => void',
                },
              },
              onSelect: {
                defaultValue: null,
                description: '',
                name: 'onSelect',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onSelectCapture: {
                defaultValue: null,
                description: '',
                name: 'onSelectCapture',
                required: !1,
                type: {
                  name: '(event: SyntheticEvent<HTMLElement, Event>) => void',
                },
              },
              onTouchCancel: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancel',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancelCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchEnd: {
                defaultValue: null,
                description: '',
                name: 'onTouchEnd',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchEndCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchMove: {
                defaultValue: null,
                description: '',
                name: 'onTouchMove',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchMoveCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchStart: {
                defaultValue: null,
                description: '',
                name: 'onTouchStart',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onTouchStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchStartCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLElement>) => void' },
              },
              onPointerDown: {
                defaultValue: null,
                description: '',
                name: 'onPointerDown',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerDownCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerMove: {
                defaultValue: null,
                description: '',
                name: 'onPointerMove',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerMoveCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerUp: {
                defaultValue: null,
                description: '',
                name: 'onPointerUp',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerUpCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerCancel: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancel',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancelCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerEnter: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnter',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnterCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerLeave: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeave',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeaveCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOver: {
                defaultValue: null,
                description: '',
                name: 'onPointerOver',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOverCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOut: {
                defaultValue: null,
                description: '',
                name: 'onPointerOut',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onPointerOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOutCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onGotPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onGotPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCaptureCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onLostPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onLostPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCaptureCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLElement>) => void' },
              },
              onScroll: {
                defaultValue: null,
                description: '',
                name: 'onScroll',
                required: !1,
                type: { name: '(event: UIEvent<HTMLElement>) => void' },
              },
              onScrollCapture: {
                defaultValue: null,
                description: '',
                name: 'onScrollCapture',
                required: !1,
                type: { name: '(event: UIEvent<HTMLElement>) => void' },
              },
              onWheel: {
                defaultValue: null,
                description: '',
                name: 'onWheel',
                required: !1,
                type: { name: '(event: WheelEvent<HTMLElement>) => void' },
              },
              onWheelCapture: {
                defaultValue: null,
                description: '',
                name: 'onWheelCapture',
                required: !1,
                type: { name: '(event: WheelEvent<HTMLElement>) => void' },
              },
              onAnimationStart: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStart',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStartCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationEnd: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEnd',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEndCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationIteration: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIteration',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onAnimationIterationCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIterationCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLElement>) => void' },
              },
              onTransitionEnd: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEnd',
                required: !1,
                type: { name: '(event: TransitionEvent<HTMLElement>) => void' },
              },
              onTransitionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEndCapture',
                required: !1,
                type: { name: '(event: TransitionEvent<HTMLElement>) => void' },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name:
                    '((instance: HTMLElement) => void) | RefObject<HTMLElement>',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/typography/src/highlight/index.tsx#highlight'
            ] = {
              docgenInfo: highlight.__docgenInfo,
              name: 'highlight',
              path: 'packages/typography/src/highlight/index.tsx#highlight',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    338: function(module, exports, __webpack_require__) {
      __webpack_require__(339),
        __webpack_require__(443),
        (module.exports = __webpack_require__(444));
    },
    444: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__(29),
            __webpack_require__(15),
            __webpack_require__(9),
            __webpack_require__(30),
            __webpack_require__(17);
          var _storybook_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              27
            ),
            _storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              324
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
              63
            ),
            _storybook_addon_info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
              325
            ),
            req = __webpack_require__(750);
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addDecorator)(
            _storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_6__.withA11y
          ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addDecorator)(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_7__.withKnobs
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addDecorator)(
              Object(
                _storybook_addon_info__WEBPACK_IMPORTED_MODULE_8__.withInfo
              )({ info: { inline: !1 } })
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)(
              function loadStories() {
                req.keys().forEach(function(filename) {
                  return req(filename);
                });
              },
              module
            );
        }.call(this, __webpack_require__(55)(module));
    },
    47: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return joinStyles;
      });
      __webpack_require__(5),
        __webpack_require__(16),
        __webpack_require__(25),
        __webpack_require__(755),
        __webpack_require__(67),
        __webpack_require__(31),
        __webpack_require__(15),
        __webpack_require__(96),
        __webpack_require__(287),
        __webpack_require__(56),
        __webpack_require__(4),
        __webpack_require__(9),
        __webpack_require__(88),
        __webpack_require__(18),
        __webpack_require__(17);
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
    53: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        ),
        _react_design_system_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          47
        ),
        Button = function(_a) {
          var _b,
            _c,
            _d,
            _e,
            children = _a.children,
            styleVariant =
              void 0 ===
              (_d = (_c =
                void 0 === (_b = _a.variants)
                  ? { style: 'solid', type: 'primary' }
                  : _b).style)
                ? 'solid'
                : _d,
            typeVariant = void 0 === (_e = _c.type) ? 'primary' : _e,
            props = tslib__WEBPACK_IMPORTED_MODULE_0__.c(_a, [
              'children',
              'variants',
            ]);
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'button',
            tslib__WEBPACK_IMPORTED_MODULE_0__.a({}, props, {
              className: Object(
                _react_design_system_utils__WEBPACK_IMPORTED_MODULE_2__.a
              )(
                'rds-Button__button--' + styleVariant + '-' + typeVariant,
                props.className
              ),
            }),
            children
          );
        };
      __webpack_exports__.a = Button;
      try {
        (Button.displayName = 'Button'),
          (Button.__docgenInfo = {
            description: '',
            displayName: 'Button',
            props: {
              variants: {
                defaultValue: null,
                description: '',
                name: 'variants',
                required: !1,
                type: {
                  name:
                    '{ style?: "text" | "solid" | "outlined"; type?: "primary" | "secondary" | "destructive"; }',
                },
              },
              key: {
                defaultValue: null,
                description: '',
                name: 'key',
                required: !1,
                type: { name: 'Key' },
              },
              defaultChecked: {
                defaultValue: null,
                description: '',
                name: 'defaultChecked',
                required: !1,
                type: { name: 'boolean' },
              },
              defaultValue: {
                defaultValue: null,
                description: '',
                name: 'defaultValue',
                required: !1,
                type: { name: 'string | string[]' },
              },
              suppressContentEditableWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressContentEditableWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              suppressHydrationWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressHydrationWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              accessKey: {
                defaultValue: null,
                description: '',
                name: 'accessKey',
                required: !1,
                type: { name: 'string' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              contentEditable: {
                defaultValue: null,
                description: '',
                name: 'contentEditable',
                required: !1,
                type: { name: 'boolean' },
              },
              contextMenu: {
                defaultValue: null,
                description: '',
                name: 'contextMenu',
                required: !1,
                type: { name: 'string' },
              },
              dir: {
                defaultValue: null,
                description: '',
                name: 'dir',
                required: !1,
                type: { name: 'string' },
              },
              draggable: {
                defaultValue: null,
                description: '',
                name: 'draggable',
                required: !1,
                type: { name: 'boolean' },
              },
              hidden: {
                defaultValue: null,
                description: '',
                name: 'hidden',
                required: !1,
                type: { name: 'boolean' },
              },
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !1,
                type: { name: 'string' },
              },
              lang: {
                defaultValue: null,
                description: '',
                name: 'lang',
                required: !1,
                type: { name: 'string' },
              },
              placeholder: {
                defaultValue: null,
                description: '',
                name: 'placeholder',
                required: !1,
                type: { name: 'string' },
              },
              slot: {
                defaultValue: null,
                description: '',
                name: 'slot',
                required: !1,
                type: { name: 'string' },
              },
              spellCheck: {
                defaultValue: null,
                description: '',
                name: 'spellCheck',
                required: !1,
                type: { name: 'boolean' },
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              tabIndex: {
                defaultValue: null,
                description: '',
                name: 'tabIndex',
                required: !1,
                type: { name: 'number' },
              },
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'string' },
              },
              inputMode: {
                defaultValue: null,
                description: '',
                name: 'inputMode',
                required: !1,
                type: { name: 'string' },
              },
              is: {
                defaultValue: null,
                description: '',
                name: 'is',
                required: !1,
                type: { name: 'string' },
              },
              radioGroup: {
                defaultValue: null,
                description: '',
                name: 'radioGroup',
                required: !1,
                type: { name: 'string' },
              },
              role: {
                defaultValue: null,
                description: '',
                name: 'role',
                required: !1,
                type: { name: 'string' },
              },
              about: {
                defaultValue: null,
                description: '',
                name: 'about',
                required: !1,
                type: { name: 'string' },
              },
              datatype: {
                defaultValue: null,
                description: '',
                name: 'datatype',
                required: !1,
                type: { name: 'string' },
              },
              inlist: {
                defaultValue: null,
                description: '',
                name: 'inlist',
                required: !1,
                type: { name: 'any' },
              },
              prefix: {
                defaultValue: null,
                description: '',
                name: 'prefix',
                required: !1,
                type: { name: 'string' },
              },
              property: {
                defaultValue: null,
                description: '',
                name: 'property',
                required: !1,
                type: { name: 'string' },
              },
              resource: {
                defaultValue: null,
                description: '',
                name: 'resource',
                required: !1,
                type: { name: 'string' },
              },
              typeof: {
                defaultValue: null,
                description: '',
                name: 'typeof',
                required: !1,
                type: { name: 'string' },
              },
              vocab: {
                defaultValue: null,
                description: '',
                name: 'vocab',
                required: !1,
                type: { name: 'string' },
              },
              autoCapitalize: {
                defaultValue: null,
                description: '',
                name: 'autoCapitalize',
                required: !1,
                type: { name: 'string' },
              },
              autoCorrect: {
                defaultValue: null,
                description: '',
                name: 'autoCorrect',
                required: !1,
                type: { name: 'string' },
              },
              autoSave: {
                defaultValue: null,
                description: '',
                name: 'autoSave',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              itemProp: {
                defaultValue: null,
                description: '',
                name: 'itemProp',
                required: !1,
                type: { name: 'string' },
              },
              itemScope: {
                defaultValue: null,
                description: '',
                name: 'itemScope',
                required: !1,
                type: { name: 'boolean' },
              },
              itemType: {
                defaultValue: null,
                description: '',
                name: 'itemType',
                required: !1,
                type: { name: 'string' },
              },
              itemID: {
                defaultValue: null,
                description: '',
                name: 'itemID',
                required: !1,
                type: { name: 'string' },
              },
              itemRef: {
                defaultValue: null,
                description: '',
                name: 'itemRef',
                required: !1,
                type: { name: 'string' },
              },
              results: {
                defaultValue: null,
                description: '',
                name: 'results',
                required: !1,
                type: { name: 'number' },
              },
              security: {
                defaultValue: null,
                description: '',
                name: 'security',
                required: !1,
                type: { name: 'string' },
              },
              unselectable: {
                defaultValue: null,
                description: '',
                name: 'unselectable',
                required: !1,
                type: { name: '"on" | "off"' },
              },
              'aria-activedescendant': {
                defaultValue: null,
                description:
                  'Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.',
                name: 'aria-activedescendant',
                required: !1,
                type: { name: 'string' },
              },
              'aria-atomic': {
                defaultValue: null,
                description:
                  'Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.',
                name: 'aria-atomic',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-autocomplete': {
                defaultValue: null,
                description:
                  "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
                name: 'aria-autocomplete',
                required: !1,
                type: { name: '"none" | "inline" | "list" | "both"' },
              },
              'aria-busy': {
                defaultValue: null,
                description:
                  'Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.',
                name: 'aria-busy',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-checked': {
                defaultValue: null,
                description:
                  'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.',
                name: 'aria-checked',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-colcount': {
                defaultValue: null,
                description:
                  'Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.',
                name: 'aria-colcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colindex': {
                defaultValue: null,
                description:
                  "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.",
                name: 'aria-colindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colspan': {
                defaultValue: null,
                description:
                  'Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.',
                name: 'aria-colspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-controls': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.',
                name: 'aria-controls',
                required: !1,
                type: { name: 'string' },
              },
              'aria-current': {
                defaultValue: null,
                description:
                  'Indicates the element that represents the current item within a container or set of related elements.',
                name: 'aria-current',
                required: !1,
                type: {
                  name:
                    'boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time"',
                },
              },
              'aria-describedby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that describes the object.\n@see aria-labelledby',
                name: 'aria-describedby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-details': {
                defaultValue: null,
                description:
                  'Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.',
                name: 'aria-details',
                required: !1,
                type: { name: 'string' },
              },
              'aria-disabled': {
                defaultValue: null,
                description:
                  'Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.',
                name: 'aria-disabled',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-dropeffect': {
                defaultValue: null,
                description:
                  'Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1',
                name: 'aria-dropeffect',
                required: !1,
                type: {
                  name:
                    '"none" | "copy" | "execute" | "link" | "move" | "popup"',
                },
              },
              'aria-errormessage': {
                defaultValue: null,
                description:
                  'Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.',
                name: 'aria-errormessage',
                required: !1,
                type: { name: 'string' },
              },
              'aria-expanded': {
                defaultValue: null,
                description:
                  'Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.',
                name: 'aria-expanded',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-flowto': {
                defaultValue: null,
                description:
                  "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
                name: 'aria-flowto',
                required: !1,
                type: { name: 'string' },
              },
              'aria-grabbed': {
                defaultValue: null,
                description:
                  'Indicates an element\'s "grabbed" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1',
                name: 'aria-grabbed',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-haspopup': {
                defaultValue: null,
                description:
                  'Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.',
                name: 'aria-haspopup',
                required: !1,
                type: {
                  name:
                    'boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog"',
                },
              },
              'aria-hidden': {
                defaultValue: null,
                description:
                  'Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.',
                name: 'aria-hidden',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-invalid': {
                defaultValue: null,
                description:
                  'Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.',
                name: 'aria-invalid',
                required: !1,
                type: {
                  name: 'boolean | "false" | "true" | "grammar" | "spelling"',
                },
              },
              'aria-keyshortcuts': {
                defaultValue: null,
                description:
                  'Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.',
                name: 'aria-keyshortcuts',
                required: !1,
                type: { name: 'string' },
              },
              'aria-label': {
                defaultValue: null,
                description:
                  'Defines a string value that labels the current element.\n@see aria-labelledby.',
                name: 'aria-label',
                required: !1,
                type: { name: 'string' },
              },
              'aria-labelledby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that labels the current element.\n@see aria-describedby.',
                name: 'aria-labelledby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-level': {
                defaultValue: null,
                description:
                  'Defines the hierarchical level of an element within a structure.',
                name: 'aria-level',
                required: !1,
                type: { name: 'number' },
              },
              'aria-live': {
                defaultValue: null,
                description:
                  'Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.',
                name: 'aria-live',
                required: !1,
                type: { name: '"off" | "assertive" | "polite"' },
              },
              'aria-modal': {
                defaultValue: null,
                description:
                  'Indicates whether an element is modal when displayed.',
                name: 'aria-modal',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiline': {
                defaultValue: null,
                description:
                  'Indicates whether a text box accepts multiple lines of input or only a single line.',
                name: 'aria-multiline',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiselectable': {
                defaultValue: null,
                description:
                  'Indicates that the user may select more than one item from the current selectable descendants.',
                name: 'aria-multiselectable',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-orientation': {
                defaultValue: null,
                description:
                  "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
                name: 'aria-orientation',
                required: !1,
                type: { name: '"horizontal" | "vertical"' },
              },
              'aria-owns': {
                defaultValue: null,
                description:
                  'Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.',
                name: 'aria-owns',
                required: !1,
                type: { name: 'string' },
              },
              'aria-placeholder': {
                defaultValue: null,
                description:
                  'Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.',
                name: 'aria-placeholder',
                required: !1,
                type: { name: 'string' },
              },
              'aria-posinset': {
                defaultValue: null,
                description:
                  "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.",
                name: 'aria-posinset',
                required: !1,
                type: { name: 'number' },
              },
              'aria-pressed': {
                defaultValue: null,
                description:
                  'Indicates the current "pressed" state of toggle buttons.\n@see aria-checked\n@see aria-selected.',
                name: 'aria-pressed',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-readonly': {
                defaultValue: null,
                description:
                  'Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.',
                name: 'aria-readonly',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-relevant': {
                defaultValue: null,
                description:
                  'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.',
                name: 'aria-relevant',
                required: !1,
                type: {
                  name:
                    '"additions" | "additions text" | "all" | "removals" | "text"',
                },
              },
              'aria-required': {
                defaultValue: null,
                description:
                  'Indicates that user input is required on the element before a form may be submitted.',
                name: 'aria-required',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-roledescription': {
                defaultValue: null,
                description:
                  'Defines a human-readable, author-localized description for the role of an element.',
                name: 'aria-roledescription',
                required: !1,
                type: { name: 'string' },
              },
              'aria-rowcount': {
                defaultValue: null,
                description:
                  'Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.',
                name: 'aria-rowcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowindex': {
                defaultValue: null,
                description:
                  "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.",
                name: 'aria-rowindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowspan': {
                defaultValue: null,
                description:
                  'Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.',
                name: 'aria-rowspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-selected': {
                defaultValue: null,
                description:
                  'Indicates the current "selected" state of various widgets.\n@see aria-checked\n@see aria-pressed.',
                name: 'aria-selected',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-setsize': {
                defaultValue: null,
                description:
                  'Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.',
                name: 'aria-setsize',
                required: !1,
                type: { name: 'number' },
              },
              'aria-sort': {
                defaultValue: null,
                description:
                  'Indicates if items in a table or grid are sorted in ascending or descending order.',
                name: 'aria-sort',
                required: !1,
                type: { name: '"none" | "ascending" | "descending" | "other"' },
              },
              'aria-valuemax': {
                defaultValue: null,
                description:
                  'Defines the maximum allowed value for a range widget.',
                name: 'aria-valuemax',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuemin': {
                defaultValue: null,
                description:
                  'Defines the minimum allowed value for a range widget.',
                name: 'aria-valuemin',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuenow': {
                defaultValue: null,
                description:
                  'Defines the current value for a range widget.\n@see aria-valuetext.',
                name: 'aria-valuenow',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuetext': {
                defaultValue: null,
                description:
                  'Defines the human readable text alternative of aria-valuenow for a range widget.',
                name: 'aria-valuetext',
                required: !1,
                type: { name: 'string' },
              },
              dangerouslySetInnerHTML: {
                defaultValue: null,
                description: '',
                name: 'dangerouslySetInnerHTML',
                required: !1,
                type: { name: '{ __html: string; }' },
              },
              onCopy: {
                defaultValue: null,
                description: '',
                name: 'onCopy',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLButtonElement>) => void',
                },
              },
              onCopyCapture: {
                defaultValue: null,
                description: '',
                name: 'onCopyCapture',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLButtonElement>) => void',
                },
              },
              onCut: {
                defaultValue: null,
                description: '',
                name: 'onCut',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLButtonElement>) => void',
                },
              },
              onCutCapture: {
                defaultValue: null,
                description: '',
                name: 'onCutCapture',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLButtonElement>) => void',
                },
              },
              onPaste: {
                defaultValue: null,
                description: '',
                name: 'onPaste',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLButtonElement>) => void',
                },
              },
              onPasteCapture: {
                defaultValue: null,
                description: '',
                name: 'onPasteCapture',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLButtonElement>) => void',
                },
              },
              onCompositionEnd: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEnd',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLButtonElement>) => void',
                },
              },
              onCompositionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEndCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLButtonElement>) => void',
                },
              },
              onCompositionStart: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStart',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLButtonElement>) => void',
                },
              },
              onCompositionStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStartCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLButtonElement>) => void',
                },
              },
              onCompositionUpdate: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdate',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLButtonElement>) => void',
                },
              },
              onCompositionUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdateCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLButtonElement>) => void',
                },
              },
              onFocus: {
                defaultValue: null,
                description: '',
                name: 'onFocus',
                required: !1,
                type: {
                  name: '(event: FocusEvent<HTMLButtonElement>) => void',
                },
              },
              onFocusCapture: {
                defaultValue: null,
                description: '',
                name: 'onFocusCapture',
                required: !1,
                type: {
                  name: '(event: FocusEvent<HTMLButtonElement>) => void',
                },
              },
              onBlur: {
                defaultValue: null,
                description: '',
                name: 'onBlur',
                required: !1,
                type: {
                  name: '(event: FocusEvent<HTMLButtonElement>) => void',
                },
              },
              onBlurCapture: {
                defaultValue: null,
                description: '',
                name: 'onBlurCapture',
                required: !1,
                type: {
                  name: '(event: FocusEvent<HTMLButtonElement>) => void',
                },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onChangeCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onBeforeInput: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onBeforeInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onInput: {
                defaultValue: null,
                description: '',
                name: 'onInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onReset: {
                defaultValue: null,
                description: '',
                name: 'onReset',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onResetCapture: {
                defaultValue: null,
                description: '',
                name: 'onResetCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onSubmit: {
                defaultValue: null,
                description: '',
                name: 'onSubmit',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onSubmitCapture: {
                defaultValue: null,
                description: '',
                name: 'onSubmitCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onInvalid: {
                defaultValue: null,
                description: '',
                name: 'onInvalid',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onInvalidCapture: {
                defaultValue: null,
                description: '',
                name: 'onInvalidCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onLoad: {
                defaultValue: null,
                description: '',
                name: 'onLoad',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onLoadCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onError: {
                defaultValue: null,
                description: '',
                name: 'onError',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onErrorCapture: {
                defaultValue: null,
                description: '',
                name: 'onErrorCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onKeyDown: {
                defaultValue: null,
                description: '',
                name: 'onKeyDown',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLButtonElement>) => void',
                },
              },
              onKeyDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyDownCapture',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLButtonElement>) => void',
                },
              },
              onKeyPress: {
                defaultValue: null,
                description: '',
                name: 'onKeyPress',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLButtonElement>) => void',
                },
              },
              onKeyPressCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyPressCapture',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLButtonElement>) => void',
                },
              },
              onKeyUp: {
                defaultValue: null,
                description: '',
                name: 'onKeyUp',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLButtonElement>) => void',
                },
              },
              onKeyUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyUpCapture',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLButtonElement>) => void',
                },
              },
              onAbort: {
                defaultValue: null,
                description: '',
                name: 'onAbort',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onAbortCapture: {
                defaultValue: null,
                description: '',
                name: 'onAbortCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onCanPlay: {
                defaultValue: null,
                description: '',
                name: 'onCanPlay',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onCanPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onCanPlayThrough: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThrough',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onCanPlayThroughCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThroughCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onDurationChange: {
                defaultValue: null,
                description: '',
                name: 'onDurationChange',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onDurationChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onDurationChangeCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onEmptied: {
                defaultValue: null,
                description: '',
                name: 'onEmptied',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onEmptiedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEmptiedCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onEncrypted: {
                defaultValue: null,
                description: '',
                name: 'onEncrypted',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onEncryptedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEncryptedCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onEnded: {
                defaultValue: null,
                description: '',
                name: 'onEnded',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onEndedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEndedCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onLoadedData: {
                defaultValue: null,
                description: '',
                name: 'onLoadedData',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onLoadedDataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedDataCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onLoadedMetadata: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadata',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onLoadedMetadataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadataCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onLoadStart: {
                defaultValue: null,
                description: '',
                name: 'onLoadStart',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onLoadStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadStartCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onPause: {
                defaultValue: null,
                description: '',
                name: 'onPause',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onPauseCapture: {
                defaultValue: null,
                description: '',
                name: 'onPauseCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onPlay: {
                defaultValue: null,
                description: '',
                name: 'onPlay',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onPlaying: {
                defaultValue: null,
                description: '',
                name: 'onPlaying',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onPlayingCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayingCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onProgress: {
                defaultValue: null,
                description: '',
                name: 'onProgress',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onProgressCapture: {
                defaultValue: null,
                description: '',
                name: 'onProgressCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onRateChange: {
                defaultValue: null,
                description: '',
                name: 'onRateChange',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onRateChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onRateChangeCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onSeeked: {
                defaultValue: null,
                description: '',
                name: 'onSeeked',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onSeekedCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekedCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onSeeking: {
                defaultValue: null,
                description: '',
                name: 'onSeeking',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onSeekingCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekingCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onStalled: {
                defaultValue: null,
                description: '',
                name: 'onStalled',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onStalledCapture: {
                defaultValue: null,
                description: '',
                name: 'onStalledCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onSuspend: {
                defaultValue: null,
                description: '',
                name: 'onSuspend',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onSuspendCapture: {
                defaultValue: null,
                description: '',
                name: 'onSuspendCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onTimeUpdate: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdate',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onTimeUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdateCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onVolumeChange: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChange',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onVolumeChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChangeCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onWaiting: {
                defaultValue: null,
                description: '',
                name: 'onWaiting',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onWaitingCapture: {
                defaultValue: null,
                description: '',
                name: 'onWaitingCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onAuxClick: {
                defaultValue: null,
                description: '',
                name: 'onAuxClick',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onAuxClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onAuxClickCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onClickCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onContextMenu: {
                defaultValue: null,
                description: '',
                name: 'onContextMenu',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onContextMenuCapture: {
                defaultValue: null,
                description: '',
                name: 'onContextMenuCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onDoubleClick: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClick',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onDoubleClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClickCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onDrag: {
                defaultValue: null,
                description: '',
                name: 'onDrag',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragEnd: {
                defaultValue: null,
                description: '',
                name: 'onDragEnd',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEndCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragEnter: {
                defaultValue: null,
                description: '',
                name: 'onDragEnter',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEnterCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragExit: {
                defaultValue: null,
                description: '',
                name: 'onDragExit',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragExitCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragExitCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragLeave: {
                defaultValue: null,
                description: '',
                name: 'onDragLeave',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragLeaveCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragOver: {
                defaultValue: null,
                description: '',
                name: 'onDragOver',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragOverCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragStart: {
                defaultValue: null,
                description: '',
                name: 'onDragStart',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragStartCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDrop: {
                defaultValue: null,
                description: '',
                name: 'onDrop',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDropCapture: {
                defaultValue: null,
                description: '',
                name: 'onDropCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onMouseDown: {
                defaultValue: null,
                description: '',
                name: 'onMouseDown',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onMouseDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseDownCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onMouseEnter: {
                defaultValue: null,
                description: '',
                name: 'onMouseEnter',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onMouseLeave: {
                defaultValue: null,
                description: '',
                name: 'onMouseLeave',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onMouseMove: {
                defaultValue: null,
                description: '',
                name: 'onMouseMove',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onMouseMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseMoveCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onMouseOut: {
                defaultValue: null,
                description: '',
                name: 'onMouseOut',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onMouseOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOutCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onMouseOver: {
                defaultValue: null,
                description: '',
                name: 'onMouseOver',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onMouseOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOverCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onMouseUp: {
                defaultValue: null,
                description: '',
                name: 'onMouseUp',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onMouseUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseUpCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onSelect: {
                defaultValue: null,
                description: '',
                name: 'onSelect',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onSelectCapture: {
                defaultValue: null,
                description: '',
                name: 'onSelectCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onTouchCancel: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancel',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLButtonElement>) => void',
                },
              },
              onTouchCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancelCapture',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLButtonElement>) => void',
                },
              },
              onTouchEnd: {
                defaultValue: null,
                description: '',
                name: 'onTouchEnd',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLButtonElement>) => void',
                },
              },
              onTouchEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchEndCapture',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLButtonElement>) => void',
                },
              },
              onTouchMove: {
                defaultValue: null,
                description: '',
                name: 'onTouchMove',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLButtonElement>) => void',
                },
              },
              onTouchMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchMoveCapture',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLButtonElement>) => void',
                },
              },
              onTouchStart: {
                defaultValue: null,
                description: '',
                name: 'onTouchStart',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLButtonElement>) => void',
                },
              },
              onTouchStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchStartCapture',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerDown: {
                defaultValue: null,
                description: '',
                name: 'onPointerDown',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerDownCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerMove: {
                defaultValue: null,
                description: '',
                name: 'onPointerMove',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerMoveCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerUp: {
                defaultValue: null,
                description: '',
                name: 'onPointerUp',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerUpCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerCancel: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancel',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancelCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerEnter: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnter',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnterCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerLeave: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeave',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeaveCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerOver: {
                defaultValue: null,
                description: '',
                name: 'onPointerOver',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOverCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerOut: {
                defaultValue: null,
                description: '',
                name: 'onPointerOut',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOutCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onGotPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onGotPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCaptureCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onLostPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onLostPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCaptureCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onScroll: {
                defaultValue: null,
                description: '',
                name: 'onScroll',
                required: !1,
                type: { name: '(event: UIEvent<HTMLButtonElement>) => void' },
              },
              onScrollCapture: {
                defaultValue: null,
                description: '',
                name: 'onScrollCapture',
                required: !1,
                type: { name: '(event: UIEvent<HTMLButtonElement>) => void' },
              },
              onWheel: {
                defaultValue: null,
                description: '',
                name: 'onWheel',
                required: !1,
                type: {
                  name: '(event: WheelEvent<HTMLButtonElement>) => void',
                },
              },
              onWheelCapture: {
                defaultValue: null,
                description: '',
                name: 'onWheelCapture',
                required: !1,
                type: {
                  name: '(event: WheelEvent<HTMLButtonElement>) => void',
                },
              },
              onAnimationStart: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStart',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLButtonElement>) => void',
                },
              },
              onAnimationStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStartCapture',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLButtonElement>) => void',
                },
              },
              onAnimationEnd: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEnd',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLButtonElement>) => void',
                },
              },
              onAnimationEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEndCapture',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLButtonElement>) => void',
                },
              },
              onAnimationIteration: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIteration',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLButtonElement>) => void',
                },
              },
              onAnimationIterationCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIterationCapture',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLButtonElement>) => void',
                },
              },
              onTransitionEnd: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEnd',
                required: !1,
                type: {
                  name: '(event: TransitionEvent<HTMLButtonElement>) => void',
                },
              },
              onTransitionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEndCapture',
                required: !1,
                type: {
                  name: '(event: TransitionEvent<HTMLButtonElement>) => void',
                },
              },
              autoFocus: {
                defaultValue: null,
                description: '',
                name: 'autoFocus',
                required: !1,
                type: { name: 'boolean' },
              },
              disabled: {
                defaultValue: null,
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              form: {
                defaultValue: null,
                description: '',
                name: 'form',
                required: !1,
                type: { name: 'string' },
              },
              formAction: {
                defaultValue: null,
                description: '',
                name: 'formAction',
                required: !1,
                type: { name: 'string' },
              },
              formEncType: {
                defaultValue: null,
                description: '',
                name: 'formEncType',
                required: !1,
                type: { name: 'string' },
              },
              formMethod: {
                defaultValue: null,
                description: '',
                name: 'formMethod',
                required: !1,
                type: { name: 'string' },
              },
              formNoValidate: {
                defaultValue: null,
                description: '',
                name: 'formNoValidate',
                required: !1,
                type: { name: 'boolean' },
              },
              formTarget: {
                defaultValue: null,
                description: '',
                name: 'formTarget',
                required: !1,
                type: { name: 'string' },
              },
              name: {
                defaultValue: null,
                description: '',
                name: 'name',
                required: !1,
                type: { name: 'string' },
              },
              type: {
                defaultValue: null,
                description: '',
                name: 'type',
                required: !1,
                type: { name: '"button" | "submit" | "reset"' },
              },
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !1,
                type: { name: 'string | number | string[]' },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name:
                    '((instance: HTMLButtonElement) => void) | RefObject<HTMLButtonElement>',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/ui/src/button/index.tsx#Button'
            ] = {
              docgenInfo: Button.__docgenInfo,
              name: 'Button',
              path: 'packages/ui/src/button/index.tsx#Button',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (button.displayName = 'button'),
          (button.__docgenInfo = {
            description: '',
            displayName: 'button',
            props: {
              variants: {
                defaultValue: null,
                description: '',
                name: 'variants',
                required: !1,
                type: {
                  name:
                    '{ style?: "text" | "solid" | "outlined"; type?: "primary" | "secondary" | "destructive"; }',
                },
              },
              key: {
                defaultValue: null,
                description: '',
                name: 'key',
                required: !1,
                type: { name: 'Key' },
              },
              defaultChecked: {
                defaultValue: null,
                description: '',
                name: 'defaultChecked',
                required: !1,
                type: { name: 'boolean' },
              },
              defaultValue: {
                defaultValue: null,
                description: '',
                name: 'defaultValue',
                required: !1,
                type: { name: 'string | string[]' },
              },
              suppressContentEditableWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressContentEditableWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              suppressHydrationWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressHydrationWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              accessKey: {
                defaultValue: null,
                description: '',
                name: 'accessKey',
                required: !1,
                type: { name: 'string' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              contentEditable: {
                defaultValue: null,
                description: '',
                name: 'contentEditable',
                required: !1,
                type: { name: 'boolean' },
              },
              contextMenu: {
                defaultValue: null,
                description: '',
                name: 'contextMenu',
                required: !1,
                type: { name: 'string' },
              },
              dir: {
                defaultValue: null,
                description: '',
                name: 'dir',
                required: !1,
                type: { name: 'string' },
              },
              draggable: {
                defaultValue: null,
                description: '',
                name: 'draggable',
                required: !1,
                type: { name: 'boolean' },
              },
              hidden: {
                defaultValue: null,
                description: '',
                name: 'hidden',
                required: !1,
                type: { name: 'boolean' },
              },
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !1,
                type: { name: 'string' },
              },
              lang: {
                defaultValue: null,
                description: '',
                name: 'lang',
                required: !1,
                type: { name: 'string' },
              },
              placeholder: {
                defaultValue: null,
                description: '',
                name: 'placeholder',
                required: !1,
                type: { name: 'string' },
              },
              slot: {
                defaultValue: null,
                description: '',
                name: 'slot',
                required: !1,
                type: { name: 'string' },
              },
              spellCheck: {
                defaultValue: null,
                description: '',
                name: 'spellCheck',
                required: !1,
                type: { name: 'boolean' },
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              tabIndex: {
                defaultValue: null,
                description: '',
                name: 'tabIndex',
                required: !1,
                type: { name: 'number' },
              },
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'string' },
              },
              inputMode: {
                defaultValue: null,
                description: '',
                name: 'inputMode',
                required: !1,
                type: { name: 'string' },
              },
              is: {
                defaultValue: null,
                description: '',
                name: 'is',
                required: !1,
                type: { name: 'string' },
              },
              radioGroup: {
                defaultValue: null,
                description: '',
                name: 'radioGroup',
                required: !1,
                type: { name: 'string' },
              },
              role: {
                defaultValue: null,
                description: '',
                name: 'role',
                required: !1,
                type: { name: 'string' },
              },
              about: {
                defaultValue: null,
                description: '',
                name: 'about',
                required: !1,
                type: { name: 'string' },
              },
              datatype: {
                defaultValue: null,
                description: '',
                name: 'datatype',
                required: !1,
                type: { name: 'string' },
              },
              inlist: {
                defaultValue: null,
                description: '',
                name: 'inlist',
                required: !1,
                type: { name: 'any' },
              },
              prefix: {
                defaultValue: null,
                description: '',
                name: 'prefix',
                required: !1,
                type: { name: 'string' },
              },
              property: {
                defaultValue: null,
                description: '',
                name: 'property',
                required: !1,
                type: { name: 'string' },
              },
              resource: {
                defaultValue: null,
                description: '',
                name: 'resource',
                required: !1,
                type: { name: 'string' },
              },
              typeof: {
                defaultValue: null,
                description: '',
                name: 'typeof',
                required: !1,
                type: { name: 'string' },
              },
              vocab: {
                defaultValue: null,
                description: '',
                name: 'vocab',
                required: !1,
                type: { name: 'string' },
              },
              autoCapitalize: {
                defaultValue: null,
                description: '',
                name: 'autoCapitalize',
                required: !1,
                type: { name: 'string' },
              },
              autoCorrect: {
                defaultValue: null,
                description: '',
                name: 'autoCorrect',
                required: !1,
                type: { name: 'string' },
              },
              autoSave: {
                defaultValue: null,
                description: '',
                name: 'autoSave',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              itemProp: {
                defaultValue: null,
                description: '',
                name: 'itemProp',
                required: !1,
                type: { name: 'string' },
              },
              itemScope: {
                defaultValue: null,
                description: '',
                name: 'itemScope',
                required: !1,
                type: { name: 'boolean' },
              },
              itemType: {
                defaultValue: null,
                description: '',
                name: 'itemType',
                required: !1,
                type: { name: 'string' },
              },
              itemID: {
                defaultValue: null,
                description: '',
                name: 'itemID',
                required: !1,
                type: { name: 'string' },
              },
              itemRef: {
                defaultValue: null,
                description: '',
                name: 'itemRef',
                required: !1,
                type: { name: 'string' },
              },
              results: {
                defaultValue: null,
                description: '',
                name: 'results',
                required: !1,
                type: { name: 'number' },
              },
              security: {
                defaultValue: null,
                description: '',
                name: 'security',
                required: !1,
                type: { name: 'string' },
              },
              unselectable: {
                defaultValue: null,
                description: '',
                name: 'unselectable',
                required: !1,
                type: { name: '"on" | "off"' },
              },
              'aria-activedescendant': {
                defaultValue: null,
                description:
                  'Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.',
                name: 'aria-activedescendant',
                required: !1,
                type: { name: 'string' },
              },
              'aria-atomic': {
                defaultValue: null,
                description:
                  'Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.',
                name: 'aria-atomic',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-autocomplete': {
                defaultValue: null,
                description:
                  "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
                name: 'aria-autocomplete',
                required: !1,
                type: { name: '"none" | "inline" | "list" | "both"' },
              },
              'aria-busy': {
                defaultValue: null,
                description:
                  'Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.',
                name: 'aria-busy',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-checked': {
                defaultValue: null,
                description:
                  'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.',
                name: 'aria-checked',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-colcount': {
                defaultValue: null,
                description:
                  'Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.',
                name: 'aria-colcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colindex': {
                defaultValue: null,
                description:
                  "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.",
                name: 'aria-colindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colspan': {
                defaultValue: null,
                description:
                  'Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.',
                name: 'aria-colspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-controls': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.',
                name: 'aria-controls',
                required: !1,
                type: { name: 'string' },
              },
              'aria-current': {
                defaultValue: null,
                description:
                  'Indicates the element that represents the current item within a container or set of related elements.',
                name: 'aria-current',
                required: !1,
                type: {
                  name:
                    'boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time"',
                },
              },
              'aria-describedby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that describes the object.\n@see aria-labelledby',
                name: 'aria-describedby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-details': {
                defaultValue: null,
                description:
                  'Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.',
                name: 'aria-details',
                required: !1,
                type: { name: 'string' },
              },
              'aria-disabled': {
                defaultValue: null,
                description:
                  'Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.',
                name: 'aria-disabled',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-dropeffect': {
                defaultValue: null,
                description:
                  'Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1',
                name: 'aria-dropeffect',
                required: !1,
                type: {
                  name:
                    '"none" | "copy" | "execute" | "link" | "move" | "popup"',
                },
              },
              'aria-errormessage': {
                defaultValue: null,
                description:
                  'Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.',
                name: 'aria-errormessage',
                required: !1,
                type: { name: 'string' },
              },
              'aria-expanded': {
                defaultValue: null,
                description:
                  'Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.',
                name: 'aria-expanded',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-flowto': {
                defaultValue: null,
                description:
                  "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
                name: 'aria-flowto',
                required: !1,
                type: { name: 'string' },
              },
              'aria-grabbed': {
                defaultValue: null,
                description:
                  'Indicates an element\'s "grabbed" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1',
                name: 'aria-grabbed',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-haspopup': {
                defaultValue: null,
                description:
                  'Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.',
                name: 'aria-haspopup',
                required: !1,
                type: {
                  name:
                    'boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog"',
                },
              },
              'aria-hidden': {
                defaultValue: null,
                description:
                  'Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.',
                name: 'aria-hidden',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-invalid': {
                defaultValue: null,
                description:
                  'Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.',
                name: 'aria-invalid',
                required: !1,
                type: {
                  name: 'boolean | "false" | "true" | "grammar" | "spelling"',
                },
              },
              'aria-keyshortcuts': {
                defaultValue: null,
                description:
                  'Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.',
                name: 'aria-keyshortcuts',
                required: !1,
                type: { name: 'string' },
              },
              'aria-label': {
                defaultValue: null,
                description:
                  'Defines a string value that labels the current element.\n@see aria-labelledby.',
                name: 'aria-label',
                required: !1,
                type: { name: 'string' },
              },
              'aria-labelledby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that labels the current element.\n@see aria-describedby.',
                name: 'aria-labelledby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-level': {
                defaultValue: null,
                description:
                  'Defines the hierarchical level of an element within a structure.',
                name: 'aria-level',
                required: !1,
                type: { name: 'number' },
              },
              'aria-live': {
                defaultValue: null,
                description:
                  'Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.',
                name: 'aria-live',
                required: !1,
                type: { name: '"off" | "assertive" | "polite"' },
              },
              'aria-modal': {
                defaultValue: null,
                description:
                  'Indicates whether an element is modal when displayed.',
                name: 'aria-modal',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiline': {
                defaultValue: null,
                description:
                  'Indicates whether a text box accepts multiple lines of input or only a single line.',
                name: 'aria-multiline',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiselectable': {
                defaultValue: null,
                description:
                  'Indicates that the user may select more than one item from the current selectable descendants.',
                name: 'aria-multiselectable',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-orientation': {
                defaultValue: null,
                description:
                  "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
                name: 'aria-orientation',
                required: !1,
                type: { name: '"horizontal" | "vertical"' },
              },
              'aria-owns': {
                defaultValue: null,
                description:
                  'Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.',
                name: 'aria-owns',
                required: !1,
                type: { name: 'string' },
              },
              'aria-placeholder': {
                defaultValue: null,
                description:
                  'Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.',
                name: 'aria-placeholder',
                required: !1,
                type: { name: 'string' },
              },
              'aria-posinset': {
                defaultValue: null,
                description:
                  "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.",
                name: 'aria-posinset',
                required: !1,
                type: { name: 'number' },
              },
              'aria-pressed': {
                defaultValue: null,
                description:
                  'Indicates the current "pressed" state of toggle buttons.\n@see aria-checked\n@see aria-selected.',
                name: 'aria-pressed',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-readonly': {
                defaultValue: null,
                description:
                  'Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.',
                name: 'aria-readonly',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-relevant': {
                defaultValue: null,
                description:
                  'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.',
                name: 'aria-relevant',
                required: !1,
                type: {
                  name:
                    '"additions" | "additions text" | "all" | "removals" | "text"',
                },
              },
              'aria-required': {
                defaultValue: null,
                description:
                  'Indicates that user input is required on the element before a form may be submitted.',
                name: 'aria-required',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-roledescription': {
                defaultValue: null,
                description:
                  'Defines a human-readable, author-localized description for the role of an element.',
                name: 'aria-roledescription',
                required: !1,
                type: { name: 'string' },
              },
              'aria-rowcount': {
                defaultValue: null,
                description:
                  'Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.',
                name: 'aria-rowcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowindex': {
                defaultValue: null,
                description:
                  "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.",
                name: 'aria-rowindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowspan': {
                defaultValue: null,
                description:
                  'Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.',
                name: 'aria-rowspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-selected': {
                defaultValue: null,
                description:
                  'Indicates the current "selected" state of various widgets.\n@see aria-checked\n@see aria-pressed.',
                name: 'aria-selected',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-setsize': {
                defaultValue: null,
                description:
                  'Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.',
                name: 'aria-setsize',
                required: !1,
                type: { name: 'number' },
              },
              'aria-sort': {
                defaultValue: null,
                description:
                  'Indicates if items in a table or grid are sorted in ascending or descending order.',
                name: 'aria-sort',
                required: !1,
                type: { name: '"none" | "ascending" | "descending" | "other"' },
              },
              'aria-valuemax': {
                defaultValue: null,
                description:
                  'Defines the maximum allowed value for a range widget.',
                name: 'aria-valuemax',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuemin': {
                defaultValue: null,
                description:
                  'Defines the minimum allowed value for a range widget.',
                name: 'aria-valuemin',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuenow': {
                defaultValue: null,
                description:
                  'Defines the current value for a range widget.\n@see aria-valuetext.',
                name: 'aria-valuenow',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuetext': {
                defaultValue: null,
                description:
                  'Defines the human readable text alternative of aria-valuenow for a range widget.',
                name: 'aria-valuetext',
                required: !1,
                type: { name: 'string' },
              },
              dangerouslySetInnerHTML: {
                defaultValue: null,
                description: '',
                name: 'dangerouslySetInnerHTML',
                required: !1,
                type: { name: '{ __html: string; }' },
              },
              onCopy: {
                defaultValue: null,
                description: '',
                name: 'onCopy',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLButtonElement>) => void',
                },
              },
              onCopyCapture: {
                defaultValue: null,
                description: '',
                name: 'onCopyCapture',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLButtonElement>) => void',
                },
              },
              onCut: {
                defaultValue: null,
                description: '',
                name: 'onCut',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLButtonElement>) => void',
                },
              },
              onCutCapture: {
                defaultValue: null,
                description: '',
                name: 'onCutCapture',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLButtonElement>) => void',
                },
              },
              onPaste: {
                defaultValue: null,
                description: '',
                name: 'onPaste',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLButtonElement>) => void',
                },
              },
              onPasteCapture: {
                defaultValue: null,
                description: '',
                name: 'onPasteCapture',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLButtonElement>) => void',
                },
              },
              onCompositionEnd: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEnd',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLButtonElement>) => void',
                },
              },
              onCompositionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEndCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLButtonElement>) => void',
                },
              },
              onCompositionStart: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStart',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLButtonElement>) => void',
                },
              },
              onCompositionStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStartCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLButtonElement>) => void',
                },
              },
              onCompositionUpdate: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdate',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLButtonElement>) => void',
                },
              },
              onCompositionUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdateCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLButtonElement>) => void',
                },
              },
              onFocus: {
                defaultValue: null,
                description: '',
                name: 'onFocus',
                required: !1,
                type: {
                  name: '(event: FocusEvent<HTMLButtonElement>) => void',
                },
              },
              onFocusCapture: {
                defaultValue: null,
                description: '',
                name: 'onFocusCapture',
                required: !1,
                type: {
                  name: '(event: FocusEvent<HTMLButtonElement>) => void',
                },
              },
              onBlur: {
                defaultValue: null,
                description: '',
                name: 'onBlur',
                required: !1,
                type: {
                  name: '(event: FocusEvent<HTMLButtonElement>) => void',
                },
              },
              onBlurCapture: {
                defaultValue: null,
                description: '',
                name: 'onBlurCapture',
                required: !1,
                type: {
                  name: '(event: FocusEvent<HTMLButtonElement>) => void',
                },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onChangeCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onBeforeInput: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onBeforeInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onInput: {
                defaultValue: null,
                description: '',
                name: 'onInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onReset: {
                defaultValue: null,
                description: '',
                name: 'onReset',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onResetCapture: {
                defaultValue: null,
                description: '',
                name: 'onResetCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onSubmit: {
                defaultValue: null,
                description: '',
                name: 'onSubmit',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onSubmitCapture: {
                defaultValue: null,
                description: '',
                name: 'onSubmitCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onInvalid: {
                defaultValue: null,
                description: '',
                name: 'onInvalid',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onInvalidCapture: {
                defaultValue: null,
                description: '',
                name: 'onInvalidCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onLoad: {
                defaultValue: null,
                description: '',
                name: 'onLoad',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onLoadCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onError: {
                defaultValue: null,
                description: '',
                name: 'onError',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onErrorCapture: {
                defaultValue: null,
                description: '',
                name: 'onErrorCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onKeyDown: {
                defaultValue: null,
                description: '',
                name: 'onKeyDown',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLButtonElement>) => void',
                },
              },
              onKeyDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyDownCapture',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLButtonElement>) => void',
                },
              },
              onKeyPress: {
                defaultValue: null,
                description: '',
                name: 'onKeyPress',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLButtonElement>) => void',
                },
              },
              onKeyPressCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyPressCapture',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLButtonElement>) => void',
                },
              },
              onKeyUp: {
                defaultValue: null,
                description: '',
                name: 'onKeyUp',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLButtonElement>) => void',
                },
              },
              onKeyUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyUpCapture',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLButtonElement>) => void',
                },
              },
              onAbort: {
                defaultValue: null,
                description: '',
                name: 'onAbort',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onAbortCapture: {
                defaultValue: null,
                description: '',
                name: 'onAbortCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onCanPlay: {
                defaultValue: null,
                description: '',
                name: 'onCanPlay',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onCanPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onCanPlayThrough: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThrough',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onCanPlayThroughCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThroughCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onDurationChange: {
                defaultValue: null,
                description: '',
                name: 'onDurationChange',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onDurationChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onDurationChangeCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onEmptied: {
                defaultValue: null,
                description: '',
                name: 'onEmptied',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onEmptiedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEmptiedCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onEncrypted: {
                defaultValue: null,
                description: '',
                name: 'onEncrypted',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onEncryptedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEncryptedCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onEnded: {
                defaultValue: null,
                description: '',
                name: 'onEnded',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onEndedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEndedCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onLoadedData: {
                defaultValue: null,
                description: '',
                name: 'onLoadedData',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onLoadedDataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedDataCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onLoadedMetadata: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadata',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onLoadedMetadataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadataCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onLoadStart: {
                defaultValue: null,
                description: '',
                name: 'onLoadStart',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onLoadStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadStartCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onPause: {
                defaultValue: null,
                description: '',
                name: 'onPause',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onPauseCapture: {
                defaultValue: null,
                description: '',
                name: 'onPauseCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onPlay: {
                defaultValue: null,
                description: '',
                name: 'onPlay',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onPlaying: {
                defaultValue: null,
                description: '',
                name: 'onPlaying',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onPlayingCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayingCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onProgress: {
                defaultValue: null,
                description: '',
                name: 'onProgress',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onProgressCapture: {
                defaultValue: null,
                description: '',
                name: 'onProgressCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onRateChange: {
                defaultValue: null,
                description: '',
                name: 'onRateChange',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onRateChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onRateChangeCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onSeeked: {
                defaultValue: null,
                description: '',
                name: 'onSeeked',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onSeekedCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekedCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onSeeking: {
                defaultValue: null,
                description: '',
                name: 'onSeeking',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onSeekingCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekingCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onStalled: {
                defaultValue: null,
                description: '',
                name: 'onStalled',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onStalledCapture: {
                defaultValue: null,
                description: '',
                name: 'onStalledCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onSuspend: {
                defaultValue: null,
                description: '',
                name: 'onSuspend',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onSuspendCapture: {
                defaultValue: null,
                description: '',
                name: 'onSuspendCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onTimeUpdate: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdate',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onTimeUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdateCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onVolumeChange: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChange',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onVolumeChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChangeCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onWaiting: {
                defaultValue: null,
                description: '',
                name: 'onWaiting',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onWaitingCapture: {
                defaultValue: null,
                description: '',
                name: 'onWaitingCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onAuxClick: {
                defaultValue: null,
                description: '',
                name: 'onAuxClick',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onAuxClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onAuxClickCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onClickCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onContextMenu: {
                defaultValue: null,
                description: '',
                name: 'onContextMenu',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onContextMenuCapture: {
                defaultValue: null,
                description: '',
                name: 'onContextMenuCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onDoubleClick: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClick',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onDoubleClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClickCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onDrag: {
                defaultValue: null,
                description: '',
                name: 'onDrag',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragEnd: {
                defaultValue: null,
                description: '',
                name: 'onDragEnd',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEndCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragEnter: {
                defaultValue: null,
                description: '',
                name: 'onDragEnter',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEnterCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragExit: {
                defaultValue: null,
                description: '',
                name: 'onDragExit',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragExitCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragExitCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragLeave: {
                defaultValue: null,
                description: '',
                name: 'onDragLeave',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragLeaveCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragOver: {
                defaultValue: null,
                description: '',
                name: 'onDragOver',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragOverCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragStart: {
                defaultValue: null,
                description: '',
                name: 'onDragStart',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragStartCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDrop: {
                defaultValue: null,
                description: '',
                name: 'onDrop',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDropCapture: {
                defaultValue: null,
                description: '',
                name: 'onDropCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onMouseDown: {
                defaultValue: null,
                description: '',
                name: 'onMouseDown',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onMouseDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseDownCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onMouseEnter: {
                defaultValue: null,
                description: '',
                name: 'onMouseEnter',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onMouseLeave: {
                defaultValue: null,
                description: '',
                name: 'onMouseLeave',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onMouseMove: {
                defaultValue: null,
                description: '',
                name: 'onMouseMove',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onMouseMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseMoveCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onMouseOut: {
                defaultValue: null,
                description: '',
                name: 'onMouseOut',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onMouseOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOutCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onMouseOver: {
                defaultValue: null,
                description: '',
                name: 'onMouseOver',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onMouseOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOverCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onMouseUp: {
                defaultValue: null,
                description: '',
                name: 'onMouseUp',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onMouseUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseUpCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
                },
              },
              onSelect: {
                defaultValue: null,
                description: '',
                name: 'onSelect',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onSelectCapture: {
                defaultValue: null,
                description: '',
                name: 'onSelectCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLButtonElement, Event>) => void',
                },
              },
              onTouchCancel: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancel',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLButtonElement>) => void',
                },
              },
              onTouchCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancelCapture',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLButtonElement>) => void',
                },
              },
              onTouchEnd: {
                defaultValue: null,
                description: '',
                name: 'onTouchEnd',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLButtonElement>) => void',
                },
              },
              onTouchEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchEndCapture',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLButtonElement>) => void',
                },
              },
              onTouchMove: {
                defaultValue: null,
                description: '',
                name: 'onTouchMove',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLButtonElement>) => void',
                },
              },
              onTouchMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchMoveCapture',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLButtonElement>) => void',
                },
              },
              onTouchStart: {
                defaultValue: null,
                description: '',
                name: 'onTouchStart',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLButtonElement>) => void',
                },
              },
              onTouchStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchStartCapture',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerDown: {
                defaultValue: null,
                description: '',
                name: 'onPointerDown',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerDownCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerMove: {
                defaultValue: null,
                description: '',
                name: 'onPointerMove',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerMoveCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerUp: {
                defaultValue: null,
                description: '',
                name: 'onPointerUp',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerUpCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerCancel: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancel',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancelCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerEnter: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnter',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnterCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerLeave: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeave',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeaveCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerOver: {
                defaultValue: null,
                description: '',
                name: 'onPointerOver',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOverCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerOut: {
                defaultValue: null,
                description: '',
                name: 'onPointerOut',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onPointerOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOutCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onGotPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onGotPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCaptureCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onLostPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onLostPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCaptureCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLButtonElement>) => void',
                },
              },
              onScroll: {
                defaultValue: null,
                description: '',
                name: 'onScroll',
                required: !1,
                type: { name: '(event: UIEvent<HTMLButtonElement>) => void' },
              },
              onScrollCapture: {
                defaultValue: null,
                description: '',
                name: 'onScrollCapture',
                required: !1,
                type: { name: '(event: UIEvent<HTMLButtonElement>) => void' },
              },
              onWheel: {
                defaultValue: null,
                description: '',
                name: 'onWheel',
                required: !1,
                type: {
                  name: '(event: WheelEvent<HTMLButtonElement>) => void',
                },
              },
              onWheelCapture: {
                defaultValue: null,
                description: '',
                name: 'onWheelCapture',
                required: !1,
                type: {
                  name: '(event: WheelEvent<HTMLButtonElement>) => void',
                },
              },
              onAnimationStart: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStart',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLButtonElement>) => void',
                },
              },
              onAnimationStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStartCapture',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLButtonElement>) => void',
                },
              },
              onAnimationEnd: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEnd',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLButtonElement>) => void',
                },
              },
              onAnimationEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEndCapture',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLButtonElement>) => void',
                },
              },
              onAnimationIteration: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIteration',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLButtonElement>) => void',
                },
              },
              onAnimationIterationCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIterationCapture',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLButtonElement>) => void',
                },
              },
              onTransitionEnd: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEnd',
                required: !1,
                type: {
                  name: '(event: TransitionEvent<HTMLButtonElement>) => void',
                },
              },
              onTransitionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEndCapture',
                required: !1,
                type: {
                  name: '(event: TransitionEvent<HTMLButtonElement>) => void',
                },
              },
              autoFocus: {
                defaultValue: null,
                description: '',
                name: 'autoFocus',
                required: !1,
                type: { name: 'boolean' },
              },
              disabled: {
                defaultValue: null,
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              form: {
                defaultValue: null,
                description: '',
                name: 'form',
                required: !1,
                type: { name: 'string' },
              },
              formAction: {
                defaultValue: null,
                description: '',
                name: 'formAction',
                required: !1,
                type: { name: 'string' },
              },
              formEncType: {
                defaultValue: null,
                description: '',
                name: 'formEncType',
                required: !1,
                type: { name: 'string' },
              },
              formMethod: {
                defaultValue: null,
                description: '',
                name: 'formMethod',
                required: !1,
                type: { name: 'string' },
              },
              formNoValidate: {
                defaultValue: null,
                description: '',
                name: 'formNoValidate',
                required: !1,
                type: { name: 'boolean' },
              },
              formTarget: {
                defaultValue: null,
                description: '',
                name: 'formTarget',
                required: !1,
                type: { name: 'string' },
              },
              name: {
                defaultValue: null,
                description: '',
                name: 'name',
                required: !1,
                type: { name: 'string' },
              },
              type: {
                defaultValue: null,
                description: '',
                name: 'type',
                required: !1,
                type: { name: '"button" | "submit" | "reset"' },
              },
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !1,
                type: { name: 'string | number | string[]' },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name:
                    '((instance: HTMLButtonElement) => void) | RefObject<HTMLButtonElement>',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/ui/src/button/index.tsx#button'
            ] = {
              docgenInfo: button.__docgenInfo,
              name: 'button',
              path: 'packages/ui/src/button/index.tsx#button',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    605: function(module, exports, __webpack_require__) {
      var map = { './nestedObjectAssign': 289, './nestedObjectAssign.js': 289 };
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
        (webpackContext.id = 605);
    },
    72: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        ),
        _react_design_system_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          47
        ),
        Heading = function(_a) {
          var _b,
            _c,
            children = _a.children,
            typeVariant =
              void 0 ===
              (_c = (void 0 === (_b = _a.variants) ? { type: 'h6' } : _b).type)
                ? 'h6'
                : _c,
            props = tslib__WEBPACK_IMPORTED_MODULE_0__.c(_a, [
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
      __webpack_exports__.a = Heading;
      try {
        (Heading.displayName = 'Heading'),
          (Heading.__docgenInfo = {
            description: '',
            displayName: 'Heading',
            props: {
              variants: {
                defaultValue: null,
                description: '',
                name: 'variants',
                required: !1,
                type: {
                  name: '{ type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"; }',
                },
              },
              key: {
                defaultValue: null,
                description: '',
                name: 'key',
                required: !1,
                type: { name: 'Key' },
              },
              defaultChecked: {
                defaultValue: null,
                description: '',
                name: 'defaultChecked',
                required: !1,
                type: { name: 'boolean' },
              },
              defaultValue: {
                defaultValue: null,
                description: '',
                name: 'defaultValue',
                required: !1,
                type: { name: 'string | string[]' },
              },
              suppressContentEditableWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressContentEditableWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              suppressHydrationWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressHydrationWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              accessKey: {
                defaultValue: null,
                description: '',
                name: 'accessKey',
                required: !1,
                type: { name: 'string' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              contentEditable: {
                defaultValue: null,
                description: '',
                name: 'contentEditable',
                required: !1,
                type: { name: 'boolean' },
              },
              contextMenu: {
                defaultValue: null,
                description: '',
                name: 'contextMenu',
                required: !1,
                type: { name: 'string' },
              },
              dir: {
                defaultValue: null,
                description: '',
                name: 'dir',
                required: !1,
                type: { name: 'string' },
              },
              draggable: {
                defaultValue: null,
                description: '',
                name: 'draggable',
                required: !1,
                type: { name: 'boolean' },
              },
              hidden: {
                defaultValue: null,
                description: '',
                name: 'hidden',
                required: !1,
                type: { name: 'boolean' },
              },
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !1,
                type: { name: 'string' },
              },
              lang: {
                defaultValue: null,
                description: '',
                name: 'lang',
                required: !1,
                type: { name: 'string' },
              },
              placeholder: {
                defaultValue: null,
                description: '',
                name: 'placeholder',
                required: !1,
                type: { name: 'string' },
              },
              slot: {
                defaultValue: null,
                description: '',
                name: 'slot',
                required: !1,
                type: { name: 'string' },
              },
              spellCheck: {
                defaultValue: null,
                description: '',
                name: 'spellCheck',
                required: !1,
                type: { name: 'boolean' },
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              tabIndex: {
                defaultValue: null,
                description: '',
                name: 'tabIndex',
                required: !1,
                type: { name: 'number' },
              },
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'string' },
              },
              inputMode: {
                defaultValue: null,
                description: '',
                name: 'inputMode',
                required: !1,
                type: { name: 'string' },
              },
              is: {
                defaultValue: null,
                description: '',
                name: 'is',
                required: !1,
                type: { name: 'string' },
              },
              radioGroup: {
                defaultValue: null,
                description: '',
                name: 'radioGroup',
                required: !1,
                type: { name: 'string' },
              },
              role: {
                defaultValue: null,
                description: '',
                name: 'role',
                required: !1,
                type: { name: 'string' },
              },
              about: {
                defaultValue: null,
                description: '',
                name: 'about',
                required: !1,
                type: { name: 'string' },
              },
              datatype: {
                defaultValue: null,
                description: '',
                name: 'datatype',
                required: !1,
                type: { name: 'string' },
              },
              inlist: {
                defaultValue: null,
                description: '',
                name: 'inlist',
                required: !1,
                type: { name: 'any' },
              },
              prefix: {
                defaultValue: null,
                description: '',
                name: 'prefix',
                required: !1,
                type: { name: 'string' },
              },
              property: {
                defaultValue: null,
                description: '',
                name: 'property',
                required: !1,
                type: { name: 'string' },
              },
              resource: {
                defaultValue: null,
                description: '',
                name: 'resource',
                required: !1,
                type: { name: 'string' },
              },
              typeof: {
                defaultValue: null,
                description: '',
                name: 'typeof',
                required: !1,
                type: { name: 'string' },
              },
              vocab: {
                defaultValue: null,
                description: '',
                name: 'vocab',
                required: !1,
                type: { name: 'string' },
              },
              autoCapitalize: {
                defaultValue: null,
                description: '',
                name: 'autoCapitalize',
                required: !1,
                type: { name: 'string' },
              },
              autoCorrect: {
                defaultValue: null,
                description: '',
                name: 'autoCorrect',
                required: !1,
                type: { name: 'string' },
              },
              autoSave: {
                defaultValue: null,
                description: '',
                name: 'autoSave',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              itemProp: {
                defaultValue: null,
                description: '',
                name: 'itemProp',
                required: !1,
                type: { name: 'string' },
              },
              itemScope: {
                defaultValue: null,
                description: '',
                name: 'itemScope',
                required: !1,
                type: { name: 'boolean' },
              },
              itemType: {
                defaultValue: null,
                description: '',
                name: 'itemType',
                required: !1,
                type: { name: 'string' },
              },
              itemID: {
                defaultValue: null,
                description: '',
                name: 'itemID',
                required: !1,
                type: { name: 'string' },
              },
              itemRef: {
                defaultValue: null,
                description: '',
                name: 'itemRef',
                required: !1,
                type: { name: 'string' },
              },
              results: {
                defaultValue: null,
                description: '',
                name: 'results',
                required: !1,
                type: { name: 'number' },
              },
              security: {
                defaultValue: null,
                description: '',
                name: 'security',
                required: !1,
                type: { name: 'string' },
              },
              unselectable: {
                defaultValue: null,
                description: '',
                name: 'unselectable',
                required: !1,
                type: { name: '"on" | "off"' },
              },
              'aria-activedescendant': {
                defaultValue: null,
                description:
                  'Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.',
                name: 'aria-activedescendant',
                required: !1,
                type: { name: 'string' },
              },
              'aria-atomic': {
                defaultValue: null,
                description:
                  'Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.',
                name: 'aria-atomic',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-autocomplete': {
                defaultValue: null,
                description:
                  "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
                name: 'aria-autocomplete',
                required: !1,
                type: { name: '"none" | "inline" | "list" | "both"' },
              },
              'aria-busy': {
                defaultValue: null,
                description:
                  'Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.',
                name: 'aria-busy',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-checked': {
                defaultValue: null,
                description:
                  'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.',
                name: 'aria-checked',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-colcount': {
                defaultValue: null,
                description:
                  'Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.',
                name: 'aria-colcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colindex': {
                defaultValue: null,
                description:
                  "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.",
                name: 'aria-colindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colspan': {
                defaultValue: null,
                description:
                  'Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.',
                name: 'aria-colspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-controls': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.',
                name: 'aria-controls',
                required: !1,
                type: { name: 'string' },
              },
              'aria-current': {
                defaultValue: null,
                description:
                  'Indicates the element that represents the current item within a container or set of related elements.',
                name: 'aria-current',
                required: !1,
                type: {
                  name:
                    'boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time"',
                },
              },
              'aria-describedby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that describes the object.\n@see aria-labelledby',
                name: 'aria-describedby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-details': {
                defaultValue: null,
                description:
                  'Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.',
                name: 'aria-details',
                required: !1,
                type: { name: 'string' },
              },
              'aria-disabled': {
                defaultValue: null,
                description:
                  'Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.',
                name: 'aria-disabled',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-dropeffect': {
                defaultValue: null,
                description:
                  'Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1',
                name: 'aria-dropeffect',
                required: !1,
                type: {
                  name:
                    '"none" | "copy" | "execute" | "link" | "move" | "popup"',
                },
              },
              'aria-errormessage': {
                defaultValue: null,
                description:
                  'Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.',
                name: 'aria-errormessage',
                required: !1,
                type: { name: 'string' },
              },
              'aria-expanded': {
                defaultValue: null,
                description:
                  'Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.',
                name: 'aria-expanded',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-flowto': {
                defaultValue: null,
                description:
                  "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
                name: 'aria-flowto',
                required: !1,
                type: { name: 'string' },
              },
              'aria-grabbed': {
                defaultValue: null,
                description:
                  'Indicates an element\'s "grabbed" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1',
                name: 'aria-grabbed',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-haspopup': {
                defaultValue: null,
                description:
                  'Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.',
                name: 'aria-haspopup',
                required: !1,
                type: {
                  name:
                    'boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog"',
                },
              },
              'aria-hidden': {
                defaultValue: null,
                description:
                  'Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.',
                name: 'aria-hidden',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-invalid': {
                defaultValue: null,
                description:
                  'Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.',
                name: 'aria-invalid',
                required: !1,
                type: {
                  name: 'boolean | "false" | "true" | "grammar" | "spelling"',
                },
              },
              'aria-keyshortcuts': {
                defaultValue: null,
                description:
                  'Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.',
                name: 'aria-keyshortcuts',
                required: !1,
                type: { name: 'string' },
              },
              'aria-label': {
                defaultValue: null,
                description:
                  'Defines a string value that labels the current element.\n@see aria-labelledby.',
                name: 'aria-label',
                required: !1,
                type: { name: 'string' },
              },
              'aria-labelledby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that labels the current element.\n@see aria-describedby.',
                name: 'aria-labelledby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-level': {
                defaultValue: null,
                description:
                  'Defines the hierarchical level of an element within a structure.',
                name: 'aria-level',
                required: !1,
                type: { name: 'number' },
              },
              'aria-live': {
                defaultValue: null,
                description:
                  'Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.',
                name: 'aria-live',
                required: !1,
                type: { name: '"off" | "assertive" | "polite"' },
              },
              'aria-modal': {
                defaultValue: null,
                description:
                  'Indicates whether an element is modal when displayed.',
                name: 'aria-modal',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiline': {
                defaultValue: null,
                description:
                  'Indicates whether a text box accepts multiple lines of input or only a single line.',
                name: 'aria-multiline',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiselectable': {
                defaultValue: null,
                description:
                  'Indicates that the user may select more than one item from the current selectable descendants.',
                name: 'aria-multiselectable',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-orientation': {
                defaultValue: null,
                description:
                  "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
                name: 'aria-orientation',
                required: !1,
                type: { name: '"horizontal" | "vertical"' },
              },
              'aria-owns': {
                defaultValue: null,
                description:
                  'Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.',
                name: 'aria-owns',
                required: !1,
                type: { name: 'string' },
              },
              'aria-placeholder': {
                defaultValue: null,
                description:
                  'Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.',
                name: 'aria-placeholder',
                required: !1,
                type: { name: 'string' },
              },
              'aria-posinset': {
                defaultValue: null,
                description:
                  "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.",
                name: 'aria-posinset',
                required: !1,
                type: { name: 'number' },
              },
              'aria-pressed': {
                defaultValue: null,
                description:
                  'Indicates the current "pressed" state of toggle buttons.\n@see aria-checked\n@see aria-selected.',
                name: 'aria-pressed',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-readonly': {
                defaultValue: null,
                description:
                  'Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.',
                name: 'aria-readonly',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-relevant': {
                defaultValue: null,
                description:
                  'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.',
                name: 'aria-relevant',
                required: !1,
                type: {
                  name:
                    '"additions" | "additions text" | "all" | "removals" | "text"',
                },
              },
              'aria-required': {
                defaultValue: null,
                description:
                  'Indicates that user input is required on the element before a form may be submitted.',
                name: 'aria-required',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-roledescription': {
                defaultValue: null,
                description:
                  'Defines a human-readable, author-localized description for the role of an element.',
                name: 'aria-roledescription',
                required: !1,
                type: { name: 'string' },
              },
              'aria-rowcount': {
                defaultValue: null,
                description:
                  'Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.',
                name: 'aria-rowcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowindex': {
                defaultValue: null,
                description:
                  "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.",
                name: 'aria-rowindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowspan': {
                defaultValue: null,
                description:
                  'Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.',
                name: 'aria-rowspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-selected': {
                defaultValue: null,
                description:
                  'Indicates the current "selected" state of various widgets.\n@see aria-checked\n@see aria-pressed.',
                name: 'aria-selected',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-setsize': {
                defaultValue: null,
                description:
                  'Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.',
                name: 'aria-setsize',
                required: !1,
                type: { name: 'number' },
              },
              'aria-sort': {
                defaultValue: null,
                description:
                  'Indicates if items in a table or grid are sorted in ascending or descending order.',
                name: 'aria-sort',
                required: !1,
                type: { name: '"none" | "ascending" | "descending" | "other"' },
              },
              'aria-valuemax': {
                defaultValue: null,
                description:
                  'Defines the maximum allowed value for a range widget.',
                name: 'aria-valuemax',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuemin': {
                defaultValue: null,
                description:
                  'Defines the minimum allowed value for a range widget.',
                name: 'aria-valuemin',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuenow': {
                defaultValue: null,
                description:
                  'Defines the current value for a range widget.\n@see aria-valuetext.',
                name: 'aria-valuenow',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuetext': {
                defaultValue: null,
                description:
                  'Defines the human readable text alternative of aria-valuenow for a range widget.',
                name: 'aria-valuetext',
                required: !1,
                type: { name: 'string' },
              },
              dangerouslySetInnerHTML: {
                defaultValue: null,
                description: '',
                name: 'dangerouslySetInnerHTML',
                required: !1,
                type: { name: '{ __html: string; }' },
              },
              onCopy: {
                defaultValue: null,
                description: '',
                name: 'onCopy',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLHeadingElement>) => void',
                },
              },
              onCopyCapture: {
                defaultValue: null,
                description: '',
                name: 'onCopyCapture',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLHeadingElement>) => void',
                },
              },
              onCut: {
                defaultValue: null,
                description: '',
                name: 'onCut',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLHeadingElement>) => void',
                },
              },
              onCutCapture: {
                defaultValue: null,
                description: '',
                name: 'onCutCapture',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLHeadingElement>) => void',
                },
              },
              onPaste: {
                defaultValue: null,
                description: '',
                name: 'onPaste',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLHeadingElement>) => void',
                },
              },
              onPasteCapture: {
                defaultValue: null,
                description: '',
                name: 'onPasteCapture',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLHeadingElement>) => void',
                },
              },
              onCompositionEnd: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEnd',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLHeadingElement>) => void',
                },
              },
              onCompositionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEndCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLHeadingElement>) => void',
                },
              },
              onCompositionStart: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStart',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLHeadingElement>) => void',
                },
              },
              onCompositionStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStartCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLHeadingElement>) => void',
                },
              },
              onCompositionUpdate: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdate',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLHeadingElement>) => void',
                },
              },
              onCompositionUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdateCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLHeadingElement>) => void',
                },
              },
              onFocus: {
                defaultValue: null,
                description: '',
                name: 'onFocus',
                required: !1,
                type: {
                  name: '(event: FocusEvent<HTMLHeadingElement>) => void',
                },
              },
              onFocusCapture: {
                defaultValue: null,
                description: '',
                name: 'onFocusCapture',
                required: !1,
                type: {
                  name: '(event: FocusEvent<HTMLHeadingElement>) => void',
                },
              },
              onBlur: {
                defaultValue: null,
                description: '',
                name: 'onBlur',
                required: !1,
                type: {
                  name: '(event: FocusEvent<HTMLHeadingElement>) => void',
                },
              },
              onBlurCapture: {
                defaultValue: null,
                description: '',
                name: 'onBlurCapture',
                required: !1,
                type: {
                  name: '(event: FocusEvent<HTMLHeadingElement>) => void',
                },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: {
                  name: '(event: FormEvent<HTMLHeadingElement>) => void',
                },
              },
              onChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onChangeCapture',
                required: !1,
                type: {
                  name: '(event: FormEvent<HTMLHeadingElement>) => void',
                },
              },
              onBeforeInput: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInput',
                required: !1,
                type: {
                  name: '(event: FormEvent<HTMLHeadingElement>) => void',
                },
              },
              onBeforeInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInputCapture',
                required: !1,
                type: {
                  name: '(event: FormEvent<HTMLHeadingElement>) => void',
                },
              },
              onInput: {
                defaultValue: null,
                description: '',
                name: 'onInput',
                required: !1,
                type: {
                  name: '(event: FormEvent<HTMLHeadingElement>) => void',
                },
              },
              onInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onInputCapture',
                required: !1,
                type: {
                  name: '(event: FormEvent<HTMLHeadingElement>) => void',
                },
              },
              onReset: {
                defaultValue: null,
                description: '',
                name: 'onReset',
                required: !1,
                type: {
                  name: '(event: FormEvent<HTMLHeadingElement>) => void',
                },
              },
              onResetCapture: {
                defaultValue: null,
                description: '',
                name: 'onResetCapture',
                required: !1,
                type: {
                  name: '(event: FormEvent<HTMLHeadingElement>) => void',
                },
              },
              onSubmit: {
                defaultValue: null,
                description: '',
                name: 'onSubmit',
                required: !1,
                type: {
                  name: '(event: FormEvent<HTMLHeadingElement>) => void',
                },
              },
              onSubmitCapture: {
                defaultValue: null,
                description: '',
                name: 'onSubmitCapture',
                required: !1,
                type: {
                  name: '(event: FormEvent<HTMLHeadingElement>) => void',
                },
              },
              onInvalid: {
                defaultValue: null,
                description: '',
                name: 'onInvalid',
                required: !1,
                type: {
                  name: '(event: FormEvent<HTMLHeadingElement>) => void',
                },
              },
              onInvalidCapture: {
                defaultValue: null,
                description: '',
                name: 'onInvalidCapture',
                required: !1,
                type: {
                  name: '(event: FormEvent<HTMLHeadingElement>) => void',
                },
              },
              onLoad: {
                defaultValue: null,
                description: '',
                name: 'onLoad',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onLoadCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onError: {
                defaultValue: null,
                description: '',
                name: 'onError',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onErrorCapture: {
                defaultValue: null,
                description: '',
                name: 'onErrorCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onKeyDown: {
                defaultValue: null,
                description: '',
                name: 'onKeyDown',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLHeadingElement>) => void',
                },
              },
              onKeyDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyDownCapture',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLHeadingElement>) => void',
                },
              },
              onKeyPress: {
                defaultValue: null,
                description: '',
                name: 'onKeyPress',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLHeadingElement>) => void',
                },
              },
              onKeyPressCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyPressCapture',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLHeadingElement>) => void',
                },
              },
              onKeyUp: {
                defaultValue: null,
                description: '',
                name: 'onKeyUp',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLHeadingElement>) => void',
                },
              },
              onKeyUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyUpCapture',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLHeadingElement>) => void',
                },
              },
              onAbort: {
                defaultValue: null,
                description: '',
                name: 'onAbort',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onAbortCapture: {
                defaultValue: null,
                description: '',
                name: 'onAbortCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onCanPlay: {
                defaultValue: null,
                description: '',
                name: 'onCanPlay',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onCanPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onCanPlayThrough: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThrough',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onCanPlayThroughCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThroughCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onDurationChange: {
                defaultValue: null,
                description: '',
                name: 'onDurationChange',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onDurationChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onDurationChangeCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onEmptied: {
                defaultValue: null,
                description: '',
                name: 'onEmptied',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onEmptiedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEmptiedCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onEncrypted: {
                defaultValue: null,
                description: '',
                name: 'onEncrypted',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onEncryptedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEncryptedCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onEnded: {
                defaultValue: null,
                description: '',
                name: 'onEnded',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onEndedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEndedCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onLoadedData: {
                defaultValue: null,
                description: '',
                name: 'onLoadedData',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onLoadedDataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedDataCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onLoadedMetadata: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadata',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onLoadedMetadataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadataCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onLoadStart: {
                defaultValue: null,
                description: '',
                name: 'onLoadStart',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onLoadStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadStartCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onPause: {
                defaultValue: null,
                description: '',
                name: 'onPause',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onPauseCapture: {
                defaultValue: null,
                description: '',
                name: 'onPauseCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onPlay: {
                defaultValue: null,
                description: '',
                name: 'onPlay',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onPlaying: {
                defaultValue: null,
                description: '',
                name: 'onPlaying',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onPlayingCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayingCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onProgress: {
                defaultValue: null,
                description: '',
                name: 'onProgress',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onProgressCapture: {
                defaultValue: null,
                description: '',
                name: 'onProgressCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onRateChange: {
                defaultValue: null,
                description: '',
                name: 'onRateChange',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onRateChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onRateChangeCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onSeeked: {
                defaultValue: null,
                description: '',
                name: 'onSeeked',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onSeekedCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekedCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onSeeking: {
                defaultValue: null,
                description: '',
                name: 'onSeeking',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onSeekingCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekingCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onStalled: {
                defaultValue: null,
                description: '',
                name: 'onStalled',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onStalledCapture: {
                defaultValue: null,
                description: '',
                name: 'onStalledCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onSuspend: {
                defaultValue: null,
                description: '',
                name: 'onSuspend',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onSuspendCapture: {
                defaultValue: null,
                description: '',
                name: 'onSuspendCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onTimeUpdate: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdate',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onTimeUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdateCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onVolumeChange: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChange',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onVolumeChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChangeCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onWaiting: {
                defaultValue: null,
                description: '',
                name: 'onWaiting',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onWaitingCapture: {
                defaultValue: null,
                description: '',
                name: 'onWaitingCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onAuxClick: {
                defaultValue: null,
                description: '',
                name: 'onAuxClick',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onAuxClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onAuxClickCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onClickCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onContextMenu: {
                defaultValue: null,
                description: '',
                name: 'onContextMenu',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onContextMenuCapture: {
                defaultValue: null,
                description: '',
                name: 'onContextMenuCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onDoubleClick: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClick',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onDoubleClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClickCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onDrag: {
                defaultValue: null,
                description: '',
                name: 'onDrag',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDragCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragCapture',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDragEnd: {
                defaultValue: null,
                description: '',
                name: 'onDragEnd',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDragEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEndCapture',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDragEnter: {
                defaultValue: null,
                description: '',
                name: 'onDragEnter',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDragEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEnterCapture',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDragExit: {
                defaultValue: null,
                description: '',
                name: 'onDragExit',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDragExitCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragExitCapture',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDragLeave: {
                defaultValue: null,
                description: '',
                name: 'onDragLeave',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDragLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragLeaveCapture',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDragOver: {
                defaultValue: null,
                description: '',
                name: 'onDragOver',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDragOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragOverCapture',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDragStart: {
                defaultValue: null,
                description: '',
                name: 'onDragStart',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDragStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragStartCapture',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDrop: {
                defaultValue: null,
                description: '',
                name: 'onDrop',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDropCapture: {
                defaultValue: null,
                description: '',
                name: 'onDropCapture',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onMouseDown: {
                defaultValue: null,
                description: '',
                name: 'onMouseDown',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onMouseDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseDownCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onMouseEnter: {
                defaultValue: null,
                description: '',
                name: 'onMouseEnter',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onMouseLeave: {
                defaultValue: null,
                description: '',
                name: 'onMouseLeave',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onMouseMove: {
                defaultValue: null,
                description: '',
                name: 'onMouseMove',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onMouseMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseMoveCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onMouseOut: {
                defaultValue: null,
                description: '',
                name: 'onMouseOut',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onMouseOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOutCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onMouseOver: {
                defaultValue: null,
                description: '',
                name: 'onMouseOver',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onMouseOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOverCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onMouseUp: {
                defaultValue: null,
                description: '',
                name: 'onMouseUp',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onMouseUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseUpCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onSelect: {
                defaultValue: null,
                description: '',
                name: 'onSelect',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onSelectCapture: {
                defaultValue: null,
                description: '',
                name: 'onSelectCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onTouchCancel: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancel',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLHeadingElement>) => void',
                },
              },
              onTouchCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancelCapture',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLHeadingElement>) => void',
                },
              },
              onTouchEnd: {
                defaultValue: null,
                description: '',
                name: 'onTouchEnd',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLHeadingElement>) => void',
                },
              },
              onTouchEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchEndCapture',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLHeadingElement>) => void',
                },
              },
              onTouchMove: {
                defaultValue: null,
                description: '',
                name: 'onTouchMove',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLHeadingElement>) => void',
                },
              },
              onTouchMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchMoveCapture',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLHeadingElement>) => void',
                },
              },
              onTouchStart: {
                defaultValue: null,
                description: '',
                name: 'onTouchStart',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLHeadingElement>) => void',
                },
              },
              onTouchStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchStartCapture',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerDown: {
                defaultValue: null,
                description: '',
                name: 'onPointerDown',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerDownCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerMove: {
                defaultValue: null,
                description: '',
                name: 'onPointerMove',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerMoveCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerUp: {
                defaultValue: null,
                description: '',
                name: 'onPointerUp',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerUpCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerCancel: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancel',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancelCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerEnter: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnter',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnterCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerLeave: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeave',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeaveCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerOver: {
                defaultValue: null,
                description: '',
                name: 'onPointerOver',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOverCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerOut: {
                defaultValue: null,
                description: '',
                name: 'onPointerOut',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOutCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onGotPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onGotPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCaptureCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onLostPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onLostPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCaptureCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onScroll: {
                defaultValue: null,
                description: '',
                name: 'onScroll',
                required: !1,
                type: { name: '(event: UIEvent<HTMLHeadingElement>) => void' },
              },
              onScrollCapture: {
                defaultValue: null,
                description: '',
                name: 'onScrollCapture',
                required: !1,
                type: { name: '(event: UIEvent<HTMLHeadingElement>) => void' },
              },
              onWheel: {
                defaultValue: null,
                description: '',
                name: 'onWheel',
                required: !1,
                type: {
                  name: '(event: WheelEvent<HTMLHeadingElement>) => void',
                },
              },
              onWheelCapture: {
                defaultValue: null,
                description: '',
                name: 'onWheelCapture',
                required: !1,
                type: {
                  name: '(event: WheelEvent<HTMLHeadingElement>) => void',
                },
              },
              onAnimationStart: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStart',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLHeadingElement>) => void',
                },
              },
              onAnimationStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStartCapture',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLHeadingElement>) => void',
                },
              },
              onAnimationEnd: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEnd',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLHeadingElement>) => void',
                },
              },
              onAnimationEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEndCapture',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLHeadingElement>) => void',
                },
              },
              onAnimationIteration: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIteration',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLHeadingElement>) => void',
                },
              },
              onAnimationIterationCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIterationCapture',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLHeadingElement>) => void',
                },
              },
              onTransitionEnd: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEnd',
                required: !1,
                type: {
                  name: '(event: TransitionEvent<HTMLHeadingElement>) => void',
                },
              },
              onTransitionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEndCapture',
                required: !1,
                type: {
                  name: '(event: TransitionEvent<HTMLHeadingElement>) => void',
                },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name:
                    '((instance: HTMLHeadingElement) => void) | RefObject<HTMLHeadingElement>',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/typography/src/heading/index.tsx#Heading'
            ] = {
              docgenInfo: Heading.__docgenInfo,
              name: 'Heading',
              path: 'packages/typography/src/heading/index.tsx#Heading',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (heading.displayName = 'heading'),
          (heading.__docgenInfo = {
            description: '',
            displayName: 'heading',
            props: {
              variants: {
                defaultValue: null,
                description: '',
                name: 'variants',
                required: !1,
                type: {
                  name: '{ type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"; }',
                },
              },
              key: {
                defaultValue: null,
                description: '',
                name: 'key',
                required: !1,
                type: { name: 'Key' },
              },
              defaultChecked: {
                defaultValue: null,
                description: '',
                name: 'defaultChecked',
                required: !1,
                type: { name: 'boolean' },
              },
              defaultValue: {
                defaultValue: null,
                description: '',
                name: 'defaultValue',
                required: !1,
                type: { name: 'string | string[]' },
              },
              suppressContentEditableWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressContentEditableWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              suppressHydrationWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressHydrationWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              accessKey: {
                defaultValue: null,
                description: '',
                name: 'accessKey',
                required: !1,
                type: { name: 'string' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              contentEditable: {
                defaultValue: null,
                description: '',
                name: 'contentEditable',
                required: !1,
                type: { name: 'boolean' },
              },
              contextMenu: {
                defaultValue: null,
                description: '',
                name: 'contextMenu',
                required: !1,
                type: { name: 'string' },
              },
              dir: {
                defaultValue: null,
                description: '',
                name: 'dir',
                required: !1,
                type: { name: 'string' },
              },
              draggable: {
                defaultValue: null,
                description: '',
                name: 'draggable',
                required: !1,
                type: { name: 'boolean' },
              },
              hidden: {
                defaultValue: null,
                description: '',
                name: 'hidden',
                required: !1,
                type: { name: 'boolean' },
              },
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !1,
                type: { name: 'string' },
              },
              lang: {
                defaultValue: null,
                description: '',
                name: 'lang',
                required: !1,
                type: { name: 'string' },
              },
              placeholder: {
                defaultValue: null,
                description: '',
                name: 'placeholder',
                required: !1,
                type: { name: 'string' },
              },
              slot: {
                defaultValue: null,
                description: '',
                name: 'slot',
                required: !1,
                type: { name: 'string' },
              },
              spellCheck: {
                defaultValue: null,
                description: '',
                name: 'spellCheck',
                required: !1,
                type: { name: 'boolean' },
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              tabIndex: {
                defaultValue: null,
                description: '',
                name: 'tabIndex',
                required: !1,
                type: { name: 'number' },
              },
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'string' },
              },
              inputMode: {
                defaultValue: null,
                description: '',
                name: 'inputMode',
                required: !1,
                type: { name: 'string' },
              },
              is: {
                defaultValue: null,
                description: '',
                name: 'is',
                required: !1,
                type: { name: 'string' },
              },
              radioGroup: {
                defaultValue: null,
                description: '',
                name: 'radioGroup',
                required: !1,
                type: { name: 'string' },
              },
              role: {
                defaultValue: null,
                description: '',
                name: 'role',
                required: !1,
                type: { name: 'string' },
              },
              about: {
                defaultValue: null,
                description: '',
                name: 'about',
                required: !1,
                type: { name: 'string' },
              },
              datatype: {
                defaultValue: null,
                description: '',
                name: 'datatype',
                required: !1,
                type: { name: 'string' },
              },
              inlist: {
                defaultValue: null,
                description: '',
                name: 'inlist',
                required: !1,
                type: { name: 'any' },
              },
              prefix: {
                defaultValue: null,
                description: '',
                name: 'prefix',
                required: !1,
                type: { name: 'string' },
              },
              property: {
                defaultValue: null,
                description: '',
                name: 'property',
                required: !1,
                type: { name: 'string' },
              },
              resource: {
                defaultValue: null,
                description: '',
                name: 'resource',
                required: !1,
                type: { name: 'string' },
              },
              typeof: {
                defaultValue: null,
                description: '',
                name: 'typeof',
                required: !1,
                type: { name: 'string' },
              },
              vocab: {
                defaultValue: null,
                description: '',
                name: 'vocab',
                required: !1,
                type: { name: 'string' },
              },
              autoCapitalize: {
                defaultValue: null,
                description: '',
                name: 'autoCapitalize',
                required: !1,
                type: { name: 'string' },
              },
              autoCorrect: {
                defaultValue: null,
                description: '',
                name: 'autoCorrect',
                required: !1,
                type: { name: 'string' },
              },
              autoSave: {
                defaultValue: null,
                description: '',
                name: 'autoSave',
                required: !1,
                type: { name: 'string' },
              },
              color: {
                defaultValue: null,
                description: '',
                name: 'color',
                required: !1,
                type: { name: 'string' },
              },
              itemProp: {
                defaultValue: null,
                description: '',
                name: 'itemProp',
                required: !1,
                type: { name: 'string' },
              },
              itemScope: {
                defaultValue: null,
                description: '',
                name: 'itemScope',
                required: !1,
                type: { name: 'boolean' },
              },
              itemType: {
                defaultValue: null,
                description: '',
                name: 'itemType',
                required: !1,
                type: { name: 'string' },
              },
              itemID: {
                defaultValue: null,
                description: '',
                name: 'itemID',
                required: !1,
                type: { name: 'string' },
              },
              itemRef: {
                defaultValue: null,
                description: '',
                name: 'itemRef',
                required: !1,
                type: { name: 'string' },
              },
              results: {
                defaultValue: null,
                description: '',
                name: 'results',
                required: !1,
                type: { name: 'number' },
              },
              security: {
                defaultValue: null,
                description: '',
                name: 'security',
                required: !1,
                type: { name: 'string' },
              },
              unselectable: {
                defaultValue: null,
                description: '',
                name: 'unselectable',
                required: !1,
                type: { name: '"on" | "off"' },
              },
              'aria-activedescendant': {
                defaultValue: null,
                description:
                  'Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.',
                name: 'aria-activedescendant',
                required: !1,
                type: { name: 'string' },
              },
              'aria-atomic': {
                defaultValue: null,
                description:
                  'Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.',
                name: 'aria-atomic',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-autocomplete': {
                defaultValue: null,
                description:
                  "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
                name: 'aria-autocomplete',
                required: !1,
                type: { name: '"none" | "inline" | "list" | "both"' },
              },
              'aria-busy': {
                defaultValue: null,
                description:
                  'Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.',
                name: 'aria-busy',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-checked': {
                defaultValue: null,
                description:
                  'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.',
                name: 'aria-checked',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-colcount': {
                defaultValue: null,
                description:
                  'Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.',
                name: 'aria-colcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colindex': {
                defaultValue: null,
                description:
                  "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.",
                name: 'aria-colindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colspan': {
                defaultValue: null,
                description:
                  'Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.',
                name: 'aria-colspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-controls': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.',
                name: 'aria-controls',
                required: !1,
                type: { name: 'string' },
              },
              'aria-current': {
                defaultValue: null,
                description:
                  'Indicates the element that represents the current item within a container or set of related elements.',
                name: 'aria-current',
                required: !1,
                type: {
                  name:
                    'boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time"',
                },
              },
              'aria-describedby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that describes the object.\n@see aria-labelledby',
                name: 'aria-describedby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-details': {
                defaultValue: null,
                description:
                  'Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.',
                name: 'aria-details',
                required: !1,
                type: { name: 'string' },
              },
              'aria-disabled': {
                defaultValue: null,
                description:
                  'Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.',
                name: 'aria-disabled',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-dropeffect': {
                defaultValue: null,
                description:
                  'Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1',
                name: 'aria-dropeffect',
                required: !1,
                type: {
                  name:
                    '"none" | "copy" | "execute" | "link" | "move" | "popup"',
                },
              },
              'aria-errormessage': {
                defaultValue: null,
                description:
                  'Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.',
                name: 'aria-errormessage',
                required: !1,
                type: { name: 'string' },
              },
              'aria-expanded': {
                defaultValue: null,
                description:
                  'Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.',
                name: 'aria-expanded',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-flowto': {
                defaultValue: null,
                description:
                  "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
                name: 'aria-flowto',
                required: !1,
                type: { name: 'string' },
              },
              'aria-grabbed': {
                defaultValue: null,
                description:
                  'Indicates an element\'s "grabbed" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1',
                name: 'aria-grabbed',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-haspopup': {
                defaultValue: null,
                description:
                  'Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.',
                name: 'aria-haspopup',
                required: !1,
                type: {
                  name:
                    'boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog"',
                },
              },
              'aria-hidden': {
                defaultValue: null,
                description:
                  'Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.',
                name: 'aria-hidden',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-invalid': {
                defaultValue: null,
                description:
                  'Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.',
                name: 'aria-invalid',
                required: !1,
                type: {
                  name: 'boolean | "false" | "true" | "grammar" | "spelling"',
                },
              },
              'aria-keyshortcuts': {
                defaultValue: null,
                description:
                  'Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.',
                name: 'aria-keyshortcuts',
                required: !1,
                type: { name: 'string' },
              },
              'aria-label': {
                defaultValue: null,
                description:
                  'Defines a string value that labels the current element.\n@see aria-labelledby.',
                name: 'aria-label',
                required: !1,
                type: { name: 'string' },
              },
              'aria-labelledby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that labels the current element.\n@see aria-describedby.',
                name: 'aria-labelledby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-level': {
                defaultValue: null,
                description:
                  'Defines the hierarchical level of an element within a structure.',
                name: 'aria-level',
                required: !1,
                type: { name: 'number' },
              },
              'aria-live': {
                defaultValue: null,
                description:
                  'Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.',
                name: 'aria-live',
                required: !1,
                type: { name: '"off" | "assertive" | "polite"' },
              },
              'aria-modal': {
                defaultValue: null,
                description:
                  'Indicates whether an element is modal when displayed.',
                name: 'aria-modal',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiline': {
                defaultValue: null,
                description:
                  'Indicates whether a text box accepts multiple lines of input or only a single line.',
                name: 'aria-multiline',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiselectable': {
                defaultValue: null,
                description:
                  'Indicates that the user may select more than one item from the current selectable descendants.',
                name: 'aria-multiselectable',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-orientation': {
                defaultValue: null,
                description:
                  "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
                name: 'aria-orientation',
                required: !1,
                type: { name: '"horizontal" | "vertical"' },
              },
              'aria-owns': {
                defaultValue: null,
                description:
                  'Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.',
                name: 'aria-owns',
                required: !1,
                type: { name: 'string' },
              },
              'aria-placeholder': {
                defaultValue: null,
                description:
                  'Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.',
                name: 'aria-placeholder',
                required: !1,
                type: { name: 'string' },
              },
              'aria-posinset': {
                defaultValue: null,
                description:
                  "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.",
                name: 'aria-posinset',
                required: !1,
                type: { name: 'number' },
              },
              'aria-pressed': {
                defaultValue: null,
                description:
                  'Indicates the current "pressed" state of toggle buttons.\n@see aria-checked\n@see aria-selected.',
                name: 'aria-pressed',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-readonly': {
                defaultValue: null,
                description:
                  'Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.',
                name: 'aria-readonly',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-relevant': {
                defaultValue: null,
                description:
                  'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.',
                name: 'aria-relevant',
                required: !1,
                type: {
                  name:
                    '"additions" | "additions text" | "all" | "removals" | "text"',
                },
              },
              'aria-required': {
                defaultValue: null,
                description:
                  'Indicates that user input is required on the element before a form may be submitted.',
                name: 'aria-required',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-roledescription': {
                defaultValue: null,
                description:
                  'Defines a human-readable, author-localized description for the role of an element.',
                name: 'aria-roledescription',
                required: !1,
                type: { name: 'string' },
              },
              'aria-rowcount': {
                defaultValue: null,
                description:
                  'Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.',
                name: 'aria-rowcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowindex': {
                defaultValue: null,
                description:
                  "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.",
                name: 'aria-rowindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowspan': {
                defaultValue: null,
                description:
                  'Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.',
                name: 'aria-rowspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-selected': {
                defaultValue: null,
                description:
                  'Indicates the current "selected" state of various widgets.\n@see aria-checked\n@see aria-pressed.',
                name: 'aria-selected',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-setsize': {
                defaultValue: null,
                description:
                  'Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.',
                name: 'aria-setsize',
                required: !1,
                type: { name: 'number' },
              },
              'aria-sort': {
                defaultValue: null,
                description:
                  'Indicates if items in a table or grid are sorted in ascending or descending order.',
                name: 'aria-sort',
                required: !1,
                type: { name: '"none" | "ascending" | "descending" | "other"' },
              },
              'aria-valuemax': {
                defaultValue: null,
                description:
                  'Defines the maximum allowed value for a range widget.',
                name: 'aria-valuemax',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuemin': {
                defaultValue: null,
                description:
                  'Defines the minimum allowed value for a range widget.',
                name: 'aria-valuemin',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuenow': {
                defaultValue: null,
                description:
                  'Defines the current value for a range widget.\n@see aria-valuetext.',
                name: 'aria-valuenow',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuetext': {
                defaultValue: null,
                description:
                  'Defines the human readable text alternative of aria-valuenow for a range widget.',
                name: 'aria-valuetext',
                required: !1,
                type: { name: 'string' },
              },
              dangerouslySetInnerHTML: {
                defaultValue: null,
                description: '',
                name: 'dangerouslySetInnerHTML',
                required: !1,
                type: { name: '{ __html: string; }' },
              },
              onCopy: {
                defaultValue: null,
                description: '',
                name: 'onCopy',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLHeadingElement>) => void',
                },
              },
              onCopyCapture: {
                defaultValue: null,
                description: '',
                name: 'onCopyCapture',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLHeadingElement>) => void',
                },
              },
              onCut: {
                defaultValue: null,
                description: '',
                name: 'onCut',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLHeadingElement>) => void',
                },
              },
              onCutCapture: {
                defaultValue: null,
                description: '',
                name: 'onCutCapture',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLHeadingElement>) => void',
                },
              },
              onPaste: {
                defaultValue: null,
                description: '',
                name: 'onPaste',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLHeadingElement>) => void',
                },
              },
              onPasteCapture: {
                defaultValue: null,
                description: '',
                name: 'onPasteCapture',
                required: !1,
                type: {
                  name: '(event: ClipboardEvent<HTMLHeadingElement>) => void',
                },
              },
              onCompositionEnd: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEnd',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLHeadingElement>) => void',
                },
              },
              onCompositionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEndCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLHeadingElement>) => void',
                },
              },
              onCompositionStart: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStart',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLHeadingElement>) => void',
                },
              },
              onCompositionStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStartCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLHeadingElement>) => void',
                },
              },
              onCompositionUpdate: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdate',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLHeadingElement>) => void',
                },
              },
              onCompositionUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdateCapture',
                required: !1,
                type: {
                  name: '(event: CompositionEvent<HTMLHeadingElement>) => void',
                },
              },
              onFocus: {
                defaultValue: null,
                description: '',
                name: 'onFocus',
                required: !1,
                type: {
                  name: '(event: FocusEvent<HTMLHeadingElement>) => void',
                },
              },
              onFocusCapture: {
                defaultValue: null,
                description: '',
                name: 'onFocusCapture',
                required: !1,
                type: {
                  name: '(event: FocusEvent<HTMLHeadingElement>) => void',
                },
              },
              onBlur: {
                defaultValue: null,
                description: '',
                name: 'onBlur',
                required: !1,
                type: {
                  name: '(event: FocusEvent<HTMLHeadingElement>) => void',
                },
              },
              onBlurCapture: {
                defaultValue: null,
                description: '',
                name: 'onBlurCapture',
                required: !1,
                type: {
                  name: '(event: FocusEvent<HTMLHeadingElement>) => void',
                },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: {
                  name: '(event: FormEvent<HTMLHeadingElement>) => void',
                },
              },
              onChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onChangeCapture',
                required: !1,
                type: {
                  name: '(event: FormEvent<HTMLHeadingElement>) => void',
                },
              },
              onBeforeInput: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInput',
                required: !1,
                type: {
                  name: '(event: FormEvent<HTMLHeadingElement>) => void',
                },
              },
              onBeforeInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInputCapture',
                required: !1,
                type: {
                  name: '(event: FormEvent<HTMLHeadingElement>) => void',
                },
              },
              onInput: {
                defaultValue: null,
                description: '',
                name: 'onInput',
                required: !1,
                type: {
                  name: '(event: FormEvent<HTMLHeadingElement>) => void',
                },
              },
              onInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onInputCapture',
                required: !1,
                type: {
                  name: '(event: FormEvent<HTMLHeadingElement>) => void',
                },
              },
              onReset: {
                defaultValue: null,
                description: '',
                name: 'onReset',
                required: !1,
                type: {
                  name: '(event: FormEvent<HTMLHeadingElement>) => void',
                },
              },
              onResetCapture: {
                defaultValue: null,
                description: '',
                name: 'onResetCapture',
                required: !1,
                type: {
                  name: '(event: FormEvent<HTMLHeadingElement>) => void',
                },
              },
              onSubmit: {
                defaultValue: null,
                description: '',
                name: 'onSubmit',
                required: !1,
                type: {
                  name: '(event: FormEvent<HTMLHeadingElement>) => void',
                },
              },
              onSubmitCapture: {
                defaultValue: null,
                description: '',
                name: 'onSubmitCapture',
                required: !1,
                type: {
                  name: '(event: FormEvent<HTMLHeadingElement>) => void',
                },
              },
              onInvalid: {
                defaultValue: null,
                description: '',
                name: 'onInvalid',
                required: !1,
                type: {
                  name: '(event: FormEvent<HTMLHeadingElement>) => void',
                },
              },
              onInvalidCapture: {
                defaultValue: null,
                description: '',
                name: 'onInvalidCapture',
                required: !1,
                type: {
                  name: '(event: FormEvent<HTMLHeadingElement>) => void',
                },
              },
              onLoad: {
                defaultValue: null,
                description: '',
                name: 'onLoad',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onLoadCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onError: {
                defaultValue: null,
                description: '',
                name: 'onError',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onErrorCapture: {
                defaultValue: null,
                description: '',
                name: 'onErrorCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onKeyDown: {
                defaultValue: null,
                description: '',
                name: 'onKeyDown',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLHeadingElement>) => void',
                },
              },
              onKeyDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyDownCapture',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLHeadingElement>) => void',
                },
              },
              onKeyPress: {
                defaultValue: null,
                description: '',
                name: 'onKeyPress',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLHeadingElement>) => void',
                },
              },
              onKeyPressCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyPressCapture',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLHeadingElement>) => void',
                },
              },
              onKeyUp: {
                defaultValue: null,
                description: '',
                name: 'onKeyUp',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLHeadingElement>) => void',
                },
              },
              onKeyUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyUpCapture',
                required: !1,
                type: {
                  name: '(event: KeyboardEvent<HTMLHeadingElement>) => void',
                },
              },
              onAbort: {
                defaultValue: null,
                description: '',
                name: 'onAbort',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onAbortCapture: {
                defaultValue: null,
                description: '',
                name: 'onAbortCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onCanPlay: {
                defaultValue: null,
                description: '',
                name: 'onCanPlay',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onCanPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onCanPlayThrough: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThrough',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onCanPlayThroughCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThroughCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onDurationChange: {
                defaultValue: null,
                description: '',
                name: 'onDurationChange',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onDurationChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onDurationChangeCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onEmptied: {
                defaultValue: null,
                description: '',
                name: 'onEmptied',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onEmptiedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEmptiedCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onEncrypted: {
                defaultValue: null,
                description: '',
                name: 'onEncrypted',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onEncryptedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEncryptedCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onEnded: {
                defaultValue: null,
                description: '',
                name: 'onEnded',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onEndedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEndedCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onLoadedData: {
                defaultValue: null,
                description: '',
                name: 'onLoadedData',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onLoadedDataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedDataCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onLoadedMetadata: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadata',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onLoadedMetadataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadataCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onLoadStart: {
                defaultValue: null,
                description: '',
                name: 'onLoadStart',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onLoadStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadStartCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onPause: {
                defaultValue: null,
                description: '',
                name: 'onPause',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onPauseCapture: {
                defaultValue: null,
                description: '',
                name: 'onPauseCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onPlay: {
                defaultValue: null,
                description: '',
                name: 'onPlay',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onPlaying: {
                defaultValue: null,
                description: '',
                name: 'onPlaying',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onPlayingCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayingCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onProgress: {
                defaultValue: null,
                description: '',
                name: 'onProgress',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onProgressCapture: {
                defaultValue: null,
                description: '',
                name: 'onProgressCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onRateChange: {
                defaultValue: null,
                description: '',
                name: 'onRateChange',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onRateChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onRateChangeCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onSeeked: {
                defaultValue: null,
                description: '',
                name: 'onSeeked',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onSeekedCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekedCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onSeeking: {
                defaultValue: null,
                description: '',
                name: 'onSeeking',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onSeekingCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekingCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onStalled: {
                defaultValue: null,
                description: '',
                name: 'onStalled',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onStalledCapture: {
                defaultValue: null,
                description: '',
                name: 'onStalledCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onSuspend: {
                defaultValue: null,
                description: '',
                name: 'onSuspend',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onSuspendCapture: {
                defaultValue: null,
                description: '',
                name: 'onSuspendCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onTimeUpdate: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdate',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onTimeUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdateCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onVolumeChange: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChange',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onVolumeChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChangeCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onWaiting: {
                defaultValue: null,
                description: '',
                name: 'onWaiting',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onWaitingCapture: {
                defaultValue: null,
                description: '',
                name: 'onWaitingCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onAuxClick: {
                defaultValue: null,
                description: '',
                name: 'onAuxClick',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onAuxClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onAuxClickCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onClickCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onContextMenu: {
                defaultValue: null,
                description: '',
                name: 'onContextMenu',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onContextMenuCapture: {
                defaultValue: null,
                description: '',
                name: 'onContextMenuCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onDoubleClick: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClick',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onDoubleClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClickCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onDrag: {
                defaultValue: null,
                description: '',
                name: 'onDrag',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDragCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragCapture',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDragEnd: {
                defaultValue: null,
                description: '',
                name: 'onDragEnd',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDragEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEndCapture',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDragEnter: {
                defaultValue: null,
                description: '',
                name: 'onDragEnter',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDragEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEnterCapture',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDragExit: {
                defaultValue: null,
                description: '',
                name: 'onDragExit',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDragExitCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragExitCapture',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDragLeave: {
                defaultValue: null,
                description: '',
                name: 'onDragLeave',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDragLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragLeaveCapture',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDragOver: {
                defaultValue: null,
                description: '',
                name: 'onDragOver',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDragOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragOverCapture',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDragStart: {
                defaultValue: null,
                description: '',
                name: 'onDragStart',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDragStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragStartCapture',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDrop: {
                defaultValue: null,
                description: '',
                name: 'onDrop',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onDropCapture: {
                defaultValue: null,
                description: '',
                name: 'onDropCapture',
                required: !1,
                type: {
                  name: '(event: DragEvent<HTMLHeadingElement>) => void',
                },
              },
              onMouseDown: {
                defaultValue: null,
                description: '',
                name: 'onMouseDown',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onMouseDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseDownCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onMouseEnter: {
                defaultValue: null,
                description: '',
                name: 'onMouseEnter',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onMouseLeave: {
                defaultValue: null,
                description: '',
                name: 'onMouseLeave',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onMouseMove: {
                defaultValue: null,
                description: '',
                name: 'onMouseMove',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onMouseMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseMoveCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onMouseOut: {
                defaultValue: null,
                description: '',
                name: 'onMouseOut',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onMouseOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOutCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onMouseOver: {
                defaultValue: null,
                description: '',
                name: 'onMouseOver',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onMouseOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOverCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onMouseUp: {
                defaultValue: null,
                description: '',
                name: 'onMouseUp',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onMouseUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseUpCapture',
                required: !1,
                type: {
                  name:
                    '(event: MouseEvent<HTMLHeadingElement, MouseEvent>) => void',
                },
              },
              onSelect: {
                defaultValue: null,
                description: '',
                name: 'onSelect',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onSelectCapture: {
                defaultValue: null,
                description: '',
                name: 'onSelectCapture',
                required: !1,
                type: {
                  name:
                    '(event: SyntheticEvent<HTMLHeadingElement, Event>) => void',
                },
              },
              onTouchCancel: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancel',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLHeadingElement>) => void',
                },
              },
              onTouchCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancelCapture',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLHeadingElement>) => void',
                },
              },
              onTouchEnd: {
                defaultValue: null,
                description: '',
                name: 'onTouchEnd',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLHeadingElement>) => void',
                },
              },
              onTouchEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchEndCapture',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLHeadingElement>) => void',
                },
              },
              onTouchMove: {
                defaultValue: null,
                description: '',
                name: 'onTouchMove',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLHeadingElement>) => void',
                },
              },
              onTouchMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchMoveCapture',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLHeadingElement>) => void',
                },
              },
              onTouchStart: {
                defaultValue: null,
                description: '',
                name: 'onTouchStart',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLHeadingElement>) => void',
                },
              },
              onTouchStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchStartCapture',
                required: !1,
                type: {
                  name: '(event: TouchEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerDown: {
                defaultValue: null,
                description: '',
                name: 'onPointerDown',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerDownCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerMove: {
                defaultValue: null,
                description: '',
                name: 'onPointerMove',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerMoveCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerUp: {
                defaultValue: null,
                description: '',
                name: 'onPointerUp',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerUpCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerCancel: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancel',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancelCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerEnter: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnter',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnterCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerLeave: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeave',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeaveCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerOver: {
                defaultValue: null,
                description: '',
                name: 'onPointerOver',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOverCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerOut: {
                defaultValue: null,
                description: '',
                name: 'onPointerOut',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onPointerOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOutCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onGotPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onGotPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCaptureCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onLostPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onLostPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCaptureCapture',
                required: !1,
                type: {
                  name: '(event: PointerEvent<HTMLHeadingElement>) => void',
                },
              },
              onScroll: {
                defaultValue: null,
                description: '',
                name: 'onScroll',
                required: !1,
                type: { name: '(event: UIEvent<HTMLHeadingElement>) => void' },
              },
              onScrollCapture: {
                defaultValue: null,
                description: '',
                name: 'onScrollCapture',
                required: !1,
                type: { name: '(event: UIEvent<HTMLHeadingElement>) => void' },
              },
              onWheel: {
                defaultValue: null,
                description: '',
                name: 'onWheel',
                required: !1,
                type: {
                  name: '(event: WheelEvent<HTMLHeadingElement>) => void',
                },
              },
              onWheelCapture: {
                defaultValue: null,
                description: '',
                name: 'onWheelCapture',
                required: !1,
                type: {
                  name: '(event: WheelEvent<HTMLHeadingElement>) => void',
                },
              },
              onAnimationStart: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStart',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLHeadingElement>) => void',
                },
              },
              onAnimationStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStartCapture',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLHeadingElement>) => void',
                },
              },
              onAnimationEnd: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEnd',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLHeadingElement>) => void',
                },
              },
              onAnimationEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEndCapture',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLHeadingElement>) => void',
                },
              },
              onAnimationIteration: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIteration',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLHeadingElement>) => void',
                },
              },
              onAnimationIterationCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIterationCapture',
                required: !1,
                type: {
                  name: '(event: AnimationEvent<HTMLHeadingElement>) => void',
                },
              },
              onTransitionEnd: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEnd',
                required: !1,
                type: {
                  name: '(event: TransitionEvent<HTMLHeadingElement>) => void',
                },
              },
              onTransitionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEndCapture',
                required: !1,
                type: {
                  name: '(event: TransitionEvent<HTMLHeadingElement>) => void',
                },
              },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name:
                    '((instance: HTMLHeadingElement) => void) | RefObject<HTMLHeadingElement>',
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'packages/typography/src/heading/index.tsx#heading'
            ] = {
              docgenInfo: heading.__docgenInfo,
              name: 'heading',
              path: 'packages/typography/src/heading/index.tsx#heading',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    750: function(module, exports, __webpack_require__) {
      var map = {
        './input/src/index.stories.tsx': 751,
        './typography/src/abbreviation/index.stories.tsx': 752,
        './typography/src/blockquote/index.stories.tsx': 756,
        './typography/src/code/index.stories.tsx': 759,
        './typography/src/emphasis/index.stories.tsx': 764,
        './typography/src/heading/index.stories.tsx': 767,
        './typography/src/highlight/index.stories.tsx': 770,
        './ui/src/button/index.stories.tsx': 773,
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
        (webpackContext.id = 750);
    },
    751: function(module, exports, __webpack_require__) {},
    752: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              27
            ),
            ___WEBPACK_IMPORTED_MODULE_3__ =
              (__webpack_require__(753), __webpack_require__(216));
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'Typography/Abbreviation',
            module
          ).add('Default', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              {
                style: {
                  fontFamily: 'sans-serif',
                  maxWidth: 500,
                  margin: '50px',
                },
              },
              'One example of an independent agency of the',
              ' ',
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                ___WEBPACK_IMPORTED_MODULE_3__.a,
                { title: 'United States Federal Government' },
                'USFG'
              ),
              ' ',
              'is',
              ' ',
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                ___WEBPACK_IMPORTED_MODULE_3__.a,
                { title: 'National Aeronautics and Space Administration' },
                'NASA'
              ),
              ', which is responsible for the civilian space program, as well as aeronautics and aerospace research. NASA was established in 1958, succeeding the National Advisory Committee for Aeronautics.'
            );
          });
        }.call(this, __webpack_require__(55)(module));
    },
    753: function(module, exports, __webpack_require__) {
      var content = __webpack_require__(754);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      __webpack_require__(98)(content, options);
      content.locals && (module.exports = content.locals);
    },
    754: function(module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(97)(!1)).push([
        module.i,
        '.rds-Abbreviation__abbreviation-wrapper{position:relative;font-family:sans-serif;font-size:16px;border-bottom:2px dotted #574b90;text-decoration:none;transition:background-color .5s}.rds-Abbreviation__abbreviation-wrapper:focus,.rds-Abbreviation__abbreviation-wrapper:hover{outline:none;padding:.25rem;font-style:italic;background-color:#e9e7f3;font-size:.9rem;border-radius:.25em;border-bottom:0}.rds-Abbreviation__abbreviation-wrapper:hover::after,.rds-Abbreviation__abbreviation-wrapper:focus::after{font-family:sans-serif;font-size:12.8px;visibility:visible}.rds-Abbreviation__abbreviation-wrapper::after{position:absolute;white-space:nowrap;border-radius:.25em;background-color:#dcdcdc;padding:.5em .75em;margin-top:1.75rem;transform:translate(-50%, 0);visibility:hidden;content:attr(title);z-index:2}.rds-Abbreviation__abbreviation-title--hidden{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}\n',
        '',
      ]);
    },
    756: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              27
            ),
            ___WEBPACK_IMPORTED_MODULE_3__ =
              (__webpack_require__(757), __webpack_require__(334));
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'Typography/Blockquote',
            module
          ).add('Default', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              ___WEBPACK_IMPORTED_MODULE_3__.a,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'p',
                null,
                "“Don't cry because it's over, smile because it happened.” "
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'footer',
                null,
                '- ',
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'cite',
                  null,
                  'Dr. Suess'
                )
              )
            );
          });
        }.call(this, __webpack_require__(55)(module));
    },
    757: function(module, exports, __webpack_require__) {
      var content = __webpack_require__(758);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      __webpack_require__(98)(content, options);
      content.locals && (module.exports = content.locals);
    },
    758: function(module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(97)(!1)).push([
        module.i,
        '.rds-Blockquote__blockquote{font-family:sans-serif;font-size:1.125rem;font-style:oblique;color:#464646;background-color:#fafafa;width:max-content;border-left:0.25em solid #574b90;border-right:.25em solid transparent;padding:1rem 2rem}.rds-Blockquote__blockquote>p:first-of-type{margin-top:0}\n',
        '',
      ]);
    },
    759: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              27
            ),
            ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(335);
          __webpack_require__(762);
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'Typography/Code',
            module
          ).add('Default', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              ___WEBPACK_IMPORTED_MODULE_2__.a,
              { variants: { language: 'javascript' } },
              "let yo = 'hello, world!'"
            );
          });
        }.call(this, __webpack_require__(55)(module));
    },
    764: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              27
            ),
            ___WEBPACK_IMPORTED_MODULE_3__ =
              (__webpack_require__(765), __webpack_require__(336));
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'Typography/Emphasis',
            module
          ).add('Default', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              ___WEBPACK_IMPORTED_MODULE_3__.a,
              null,
              'This text is emphasised!'
            );
          });
        }.call(this, __webpack_require__(55)(module));
    },
    765: function(module, exports, __webpack_require__) {
      var content = __webpack_require__(766);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      __webpack_require__(98)(content, options);
      content.locals && (module.exports = content.locals);
    },
    766: function(module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(97)(!1)).push([
        module.i,
        '.rds-Emphasis__em{font-family:sans-serif;font-style:italic}\n',
        '',
      ]);
    },
    767: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              27
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              63
            ),
            ___WEBPACK_IMPORTED_MODULE_4__ =
              (__webpack_require__(768), __webpack_require__(72)),
            headingStories = Object(
              _storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf
            )('Typography/Heading', module);
          headingStories.add('All', function() {
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
          }),
            headingStories.add('With knobs', function() {
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
            });
        }.call(this, __webpack_require__(55)(module));
    },
    768: function(module, exports, __webpack_require__) {
      var content = __webpack_require__(769);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      __webpack_require__(98)(content, options);
      content.locals && (module.exports = content.locals);
    },
    769: function(module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(97)(!1)).push([
        module.i,
        '.rds-Heading__h1{font-size:56px;font-family:sans-serif;color:#1e1e1e;line-height:1.25;margin-top:0;margin-bottom:2rem}.rds-Heading__h2{font-size:46px;font-family:sans-serif;color:#232323;line-height:1.25;margin-top:0;margin-bottom:2rem}.rds-Heading__h3{font-size:38px;font-family:sans-serif;color:#282828;line-height:1.25;margin-top:0;margin-bottom:2rem}.rds-Heading__h4{font-size:32px;font-family:sans-serif;color:#2d2d2d;line-height:1.25;margin-top:0;margin-bottom:2rem}.rds-Heading__h5{font-size:28px;font-family:sans-serif;color:#323232;line-height:1.25;margin-top:0;margin-bottom:2rem}.rds-Heading__h6{font-size:24px;font-family:sans-serif;color:#383838;line-height:1.25;margin-top:0;margin-bottom:2rem}\n',
        '',
      ]);
    },
    770: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              27
            ),
            ___WEBPACK_IMPORTED_MODULE_3__ =
              (__webpack_require__(771), __webpack_require__(337));
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'Typography/Highlight',
            module
          ).add('Default', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              {
                style: {
                  fontFamily: 'sans-serif',
                  maxWidth: 500,
                  lineHeight: 1.5,
                },
              },
              'Hey there, ',
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                ___WEBPACK_IMPORTED_MODULE_3__.a,
                null,
                'this text is highlighted'
              ),
              '!'
            );
          });
        }.call(this, __webpack_require__(55)(module));
    },
    771: function(module, exports, __webpack_require__) {
      var content = __webpack_require__(772);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      __webpack_require__(98)(content, options);
      content.locals && (module.exports = content.locals);
    },
    772: function(module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(97)(!1)).push([
        module.i,
        '.rds-Highlight__mark{padding:.25rem;border-radius:.25em;background-color:#e9e7f3}\n',
        '',
      ]);
    },
    773: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              27
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              63
            ),
            ___WEBPACK_IMPORTED_MODULE_4__ =
              (__webpack_require__(774), __webpack_require__(53)),
            buttonStories = Object(
              _storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf
            )('UI/Button', module),
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
          buttonStories.add('All', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                Row,
                { title: 'Primary' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  { variants: { type: 'primary', style: 'solid' } },
                  'Save'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  { variants: { type: 'primary', style: 'outlined' } },
                  'Learn more'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  { variants: { type: 'primary', style: 'text' } },
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
                  { variants: { type: 'secondary', style: 'solid' } },
                  'Cancel'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  { variants: { type: 'secondary', style: 'outlined' } },
                  'Cancel'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  { variants: { type: 'secondary', style: 'text' } },
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
                  { variants: { type: 'destructive', style: 'solid' } },
                  'Delete'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  { variants: { type: 'destructive', style: 'outlined' } },
                  'Reset'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_4__.a,
                  { variants: { type: 'destructive', style: 'text' } },
                  'Dismiss'
                )
              )
            );
          }),
            buttonStories.add('With knobs', function() {
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
                  },
                },
                Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                )('Text', 'Save')
              );
            });
        }.call(this, __webpack_require__(55)(module));
    },
    774: function(module, exports, __webpack_require__) {
      var content = __webpack_require__(775);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      __webpack_require__(98)(content, options);
      content.locals && (module.exports = content.locals);
    },
    775: function(module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(97)(!1)).push([
        module.i,
        '.rds-Button__button--solid-primary{border:0;font-size:16px;font-family:sans-serif;padding:0.5em 0.75em;cursor:pointer;border-radius:0.25em;box-shadow:0 0 0 .25em solid transparent;color:#fff;background-color:#574b90;transition:background-color .25s;transition:box-shadow .25s}.rds-Button__button--solid-primary:hover,.rds-Button__button--solid-primary:focus{outline:unset;background-color:#5c4f98;box-shadow:0 0 0 0.225rem #aca4d0}.rds-Button__button--solid-secondary{border:0;font-size:16px;font-family:sans-serif;padding:0.5em 0.75em;cursor:pointer;border-radius:0.25em;box-shadow:0 0 0 .25em solid transparent;color:#fff;background-color:#5a5a5a;transition:background-color .25s;transition:box-shadow .25s}.rds-Button__button--solid-secondary:hover,.rds-Button__button--solid-secondary:focus{outline:unset;background-color:#606060;box-shadow:0 0 0 0.225rem #a7a7a7}.rds-Button__button--solid-destructive{border:0;font-size:16px;font-family:sans-serif;padding:0.5em 0.75em;cursor:pointer;border-radius:0.25em;box-shadow:0 0 0 .25em solid transparent;color:#fff;background-color:#c23616;transition:background-color .25s;transition:box-shadow .25s}.rds-Button__button--solid-destructive:hover,.rds-Button__button--solid-destructive:focus{outline:unset;background-color:#cd3917;box-shadow:0 0 0 0.225rem #f19580}.rds-Button__button--outlined-primary{border:0;font-size:16px;font-family:sans-serif;padding:0.5em 0.75em;cursor:pointer;border-radius:0.25em;box-shadow:0 0 0 .25em solid transparent;color:#fff;background-color:#574b90;transition:background-color .25s;transition:box-shadow .25s;background-color:transparent;border:1px solid #574b90;color:#574b90}.rds-Button__button--outlined-primary:hover,.rds-Button__button--outlined-primary:focus{outline:unset;background-color:#5c4f98;box-shadow:0 0 0 0.225rem #aca4d0}.rds-Button__button--outlined-primary:hover,.rds-Button__button--outlined-primary:focus{background-color:transparent;color:#5c4f98}.rds-Button__button--outlined-secondary{border:0;font-size:16px;font-family:sans-serif;padding:0.5em 0.75em;cursor:pointer;border-radius:0.25em;box-shadow:0 0 0 .25em solid transparent;color:#fff;background-color:#5a5a5a;transition:background-color .25s;transition:box-shadow .25s;background-color:transparent;border:1px solid #5a5a5a;color:#5a5a5a}.rds-Button__button--outlined-secondary:hover,.rds-Button__button--outlined-secondary:focus{outline:unset;background-color:#606060;box-shadow:0 0 0 0.225rem #a7a7a7}.rds-Button__button--outlined-secondary:hover,.rds-Button__button--outlined-secondary:focus{background-color:transparent;color:#606060}.rds-Button__button--outlined-destructive{border:0;font-size:16px;font-family:sans-serif;padding:0.5em 0.75em;cursor:pointer;border-radius:0.25em;box-shadow:0 0 0 .25em solid transparent;color:#fff;background-color:#c23616;transition:background-color .25s;transition:box-shadow .25s;background-color:transparent;border:1px solid #c23616;color:#c23616}.rds-Button__button--outlined-destructive:hover,.rds-Button__button--outlined-destructive:focus{outline:unset;background-color:#cd3917;box-shadow:0 0 0 0.225rem #f19580}.rds-Button__button--outlined-destructive:hover,.rds-Button__button--outlined-destructive:focus{background-color:transparent;color:#cd3917}.rds-Button__button--text-primary{border:0;font-size:16px;font-family:sans-serif;padding:0.5em 0.75em;cursor:pointer;border-radius:0.25em;box-shadow:0 0 0 .25em solid transparent;color:#fff;background-color:#574b90;transition:background-color .25s;transition:box-shadow .25s;background-color:transparent;border:1px solid #574b90;color:#574b90;border:0}.rds-Button__button--text-primary:hover,.rds-Button__button--text-primary:focus{outline:unset;background-color:#5c4f98;box-shadow:0 0 0 0.225rem #aca4d0}.rds-Button__button--text-primary:hover,.rds-Button__button--text-primary:focus{background-color:transparent;color:#5c4f98}.rds-Button__button--text-primary:focus,.rds-Button__button--text-primary:hover{background-color:#e9e7f3;box-shadow:none}.rds-Button__button--text-secondary{border:0;font-size:16px;font-family:sans-serif;padding:0.5em 0.75em;cursor:pointer;border-radius:0.25em;box-shadow:0 0 0 .25em solid transparent;color:#fff;background-color:#5a5a5a;transition:background-color .25s;transition:box-shadow .25s;background-color:transparent;border:1px solid #5a5a5a;color:#5a5a5a;border:0}.rds-Button__button--text-secondary:hover,.rds-Button__button--text-secondary:focus{outline:unset;background-color:#606060;box-shadow:0 0 0 0.225rem #a7a7a7}.rds-Button__button--text-secondary:hover,.rds-Button__button--text-secondary:focus{background-color:transparent;color:#606060}.rds-Button__button--text-secondary:focus,.rds-Button__button--text-secondary:hover{background-color:#dadada;box-shadow:none}.rds-Button__button--text-destructive{border:0;font-size:16px;font-family:sans-serif;padding:0.5em 0.75em;cursor:pointer;border-radius:0.25em;box-shadow:0 0 0 .25em solid transparent;color:#fff;background-color:#c23616;transition:background-color .25s;transition:box-shadow .25s;background-color:transparent;border:1px solid #c23616;color:#c23616;border:0}.rds-Button__button--text-destructive:hover,.rds-Button__button--text-destructive:focus{outline:unset;background-color:#cd3917;box-shadow:0 0 0 0.225rem #f19580}.rds-Button__button--text-destructive:hover,.rds-Button__button--text-destructive:focus{background-color:transparent;color:#cd3917}.rds-Button__button--text-destructive:focus,.rds-Button__button--text-destructive:hover{background-color:#fbe2dc;box-shadow:none}\n',
        '',
      ]);
    },
  },
  [[338, 1, 2]],
]);
//# sourceMappingURL=main.bd13744d736c762c2046.bundle.js.map
