var ReactApp = require('./ReactApp');
var React = require('react');

React.render(React.createElement(ReactApp),
  document.getElementById('app-mount-point'));

console.log('OK');