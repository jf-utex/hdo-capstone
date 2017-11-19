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
    <div className="panel panel-default">
      <div
        className="panel-body"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'column'
        }}
      >
        Please share your thoughts about anything you have read here. From
        generational differences in the workplace to your feelings about your
        own workplace. It is anonymous if you don't sign your post.
        <hr />
        <textarea
          onChange={this.onInput}
          name="comment"
          value={this.state.commentInput}
          style={{
            flex: 5,
            width: '50%'
          }}
        />
        <br />
        <input
          onClick={this.onSubmit}
          type="submit"
          value="Submit Comment"
          style={{
            flex: 1
          }}
        />
        <div className="panel panel-default">
          <hr />
          <h4 className="panel">Thank you for all the input to date:</h4>

          {this.state.comments.map(comment => (
            <p key={comment._id}>"{comment.comment}"</p>
          ))}
        </div>
      </div>
      <div className="card">
        <div className="row">
          <div className="col-md-12">
            <Link to={'/'}>Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Comments;
