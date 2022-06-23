'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DayOfWeek = function DayOfWeek(props) {
  var date = props.date,
      format = props.format;


  return _react2.default.createElement(
    'th',
    { className: 'DayOfWeek' },
    date.format(format)
  );
};

DayOfWeek.propTypes = {
  date: _propTypes2.default.instanceOf(_moment2.default).isRequired,
  format: _propTypes2.default.string
};

exports.default = DayOfWeek;
module.exports = exports.default;