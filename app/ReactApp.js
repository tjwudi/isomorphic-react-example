var React = require('react');

var ReactApp = React.createClass({
  getInitialState () {
    return {images: []};
  },

  componentDidMount () {
    fetch('/data').
      then((response) => response.json(), 
        (err) => console.log(err)).
      then((result) => this.setState({images: result.data.children}),
        (err) => console.log(err));
  },

  render () {
    return (<ul>
      {this.state.images.map((image) =>
        <li>
          <img src={image.data.thumbnail}></img>
          <div>
            {image.data.title}
          </div>
          <div>
            Score: {image.data.score} | Ups: {image.data.ups} | Downs: {image.data.downs}
          </div>
        </li>
      )}
    </ul>);
  }
});

module.exports = ReactApp;