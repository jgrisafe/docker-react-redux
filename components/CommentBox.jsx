import React from 'react';
import CommentList from './CommentList'
import CommentForm from './CommentForm'

export default class CommentBox extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {data: []};
  }

  loadCommentsFromServer = () => {
    $.get({
      url: this.props.url,
      dataType: 'json',
      cache: false
    }).done((data) => {
      this.setState({
        data: data
      });
    }).fail((xhr, status, err) => {
      console.error(this.props.url, status, err.toString(), 'TEST');
    });
  }

  handleCommentSubmit = (comment) => {
    const comments = this.state.data;
    comment.id = Date.now();
    const newComments = comments.concat([comment]);
    this.setState({data: newComments});

    $.post({
      url: this.props.url,
      dataType: 'json',
      data: comment
    }).done((data) => {
      this.setState({data});
    }).fail((xhr, status, err) => {
      this.setState({data: comments});
      console.error(this.props.url, status, err.toString());
    });
  }

  componentDidMount() {
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} pollInterval={2000} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}
