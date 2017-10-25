import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Comments extends Component {
  state = {
    comments: [],
    commentInput: ''
  };
  componentDidMount = () => {
    axios.get('/comments').then(res => {
      this.setState({ comments: this.state.comments.concat(res.data) });
    });
  };
  onInput = e => {
    this.setState({ commentInput: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    axios.post('/comment', { comment: this.state.commentInput }).then(res => {
      this.setState({
        comments: this.state.comments.concat(res.data),
        commentInput: ''
      });
    });
  };
  postComments = () => {};
  render = () => (
    <div>
      <div className="panel panel-default">
        <div className="panel-body">
          <hr />
          <input
            onChange={this.onInput}
            name="comment"
            type="text"
            value={this.state.commentInput}
          />
          <input onClick={this.onSubmit} type="submit" value="Submit Comment" />
          <h4 className="panel">Here are your comments to date</h4>
          {this.state.comments.map(comment => (
            <p key={comment._id}>{comment.comment}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Comments;
