import React from 'react';
import Remarkable from 'remarkable'

export default class Comment extends React.Component {

  static propTypes = {
    author: React.PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  rawMarkup() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup }
  }

  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
}
