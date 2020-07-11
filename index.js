'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

styleInject(css_248z);

var css_248z$1 = ".SimpleAlert-module_alertBox__3mdOO {\n  /* This timing applies on the way OUT */\n  transition-timing-function: ease-in;\n  /* Quick on the way out */\n  transition: 0.2s;\n  /* Hide thing by pushing it outside by default */\n  transform: translateY(130%);\n}\n\n.SimpleAlert-module_alertBoxShow__2s7US {\n  /* This timing applies on the way IN */\n  transition-timing-function: ease-out;\n  /* A litttttle slower on the way in */\n  transition: 0.25s;\n  /* Move into place */\n  transform: translateY(0);\n}\n";
var classes = {"alertBox":"SimpleAlert-module_alertBox__3mdOO","alertBoxShow":"SimpleAlert-module_alertBoxShow__2s7US"};
styleInject(css_248z$1);

var AlertType = {
  Primary: "border-blue-500",
  Danger: "border-red-600",
  Info: "border-yellow-500",
  Success: "border-green-500"
};

var SimpleAlert = function SimpleAlert(WrappedComponent) {
  var ComponentWithAlert = function ComponentWithAlert(props) {
    var _useState = React.useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        show = _useState2[0],
        setShow = _useState2[1];

    var _useState3 = React.useState(""),
        _useState4 = _slicedToArray(_useState3, 2),
        alertHeading = _useState4[0],
        setAlertHeading = _useState4[1];

    var _useState5 = React.useState(""),
        _useState6 = _slicedToArray(_useState5, 2),
        alertMessage = _useState6[0],
        setAlertMessage = _useState6[1];

    var _useState7 = React.useState(AlertType.Primary),
        _useState8 = _slicedToArray(_useState7, 2),
        alertBoxBorderClass = _useState8[0],
        setalertBoxBorderClass = _useState8[1];

    var showAlertBox = React.useCallback(function () {
      setShow(true);
    }, []);
    var hideAlertBox = React.useCallback(function () {
      setShow(false);
    }, []);
    var showAlert = React.useCallback(function (message, alertType) {
      var heading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

      if (message) {
        setAlertMessage(message);
        setalertBoxBorderClass(alertType);
        setAlertHeading(heading);
        showAlertBox();
      }
    }, [showAlertBox, setAlertMessage, setalertBoxBorderClass, setAlertHeading]);
    var showTemporaryAlert = React.useCallback(function (message, alertType) {
      var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5000;
      var heading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

      if (message) {
        setAlertMessage(message);
        setalertBoxBorderClass(alertType);
        setAlertHeading(heading);
        showAlertBox();
        setTimeout(function () {
          hideAlertBox();
        }, timeout);
      }
    }, [showAlertBox, setAlertMessage, setalertBoxBorderClass, setAlertHeading, hideAlertBox]);
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(WrappedComponent, _extends({}, props, {
      showAlert: showAlert,
      showTemporaryAlert: showTemporaryAlert
    })), /*#__PURE__*/React__default.createElement("article", {
      className: "fixed bottom-0 left-0 right-0 mx-auto container w-full lg:w-1/2 p-2 bg-white shadow-2xl border-t-8 ".concat(alertBoxBorderClass, " ").concat(classes.alertBox, " ").concat(show ? classes.alertBoxShow : "")
    }, /*#__PURE__*/React__default.createElement("section", {
      id: "content",
      className: "flex flex-col items-center"
    }, /*#__PURE__*/React__default.createElement("section", {
      id: "message",
      className: "h-16 overflow-y-auto"
    }, alertHeading && /*#__PURE__*/React__default.createElement("h1", {
      className: "font-bold text-lg"
    }, alertHeading), /*#__PURE__*/React__default.createElement("p", null, alertMessage)), /*#__PURE__*/React__default.createElement("section", {
      id: "close"
    }, /*#__PURE__*/React__default.createElement("button", {
      className: "bg-red-200 hover:bg-red-300 text-red-700 font-bold p-2 w-20",
      onClick: hideAlertBox
    }, "Close")))));
  };

  return ComponentWithAlert;
};

exports.AlertType = AlertType;
exports.SimpleAlert = SimpleAlert;
//# sourceMappingURL=index.js.map