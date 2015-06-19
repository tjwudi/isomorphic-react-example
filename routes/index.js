var express = require('express');
var router = express.Router();
var React = require('react');
var ReactApp = React.createFactory(require('../app/ReactApp'));

router.get('/data', function(req, res) {
  res.json(require('../data/data.json'));
});

router.get('/', function(req, res) {
  var reactHtml = React.renderToString(ReactApp({}));
  res.render('index', {
    title: 'Isomorphic ReactJS App!',
    reactHtml: reactHtml
  });
});

module.exports = router;
