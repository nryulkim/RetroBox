import React from 'react';
import EditCommentForm from './comment_edit_form';
import { timeSince } from '../../../../util/util_functions';
import LikeBar from '../likes/like';

export default class CommentItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      editor: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.getEditorIcons = this.getEditorIcons.bind(this);
    this.displayEditForm = this.displayEditForm.bind(this);
    this.hideEditForm = this.hideEditForm.bind(this);
  }

  handleDelete(e){
    e.preventDefault();
    const { comment, deleteComment } = this.props;
    deleteComment(comment.id);
  }

  displayEditForm(){
    this.setState({editor: true});
  }

  hideEditForm(e){
    if(e){ e.preventDefault(); }
    this.setState({editor: false});
  }


  getEditorIcons(author, currentUser){
    if(currentUser === null) { return null; }
    if (author.id === currentUser.id){
      return(
        <div className="editor">
          <i className="fa fa-trash-o" aria-hidden="true" onClick={this.handleDelete}></i>
          <i className="fa fa-pencil" aria-hidden="true" onClick={this.displayEditForm}></i>
        </div>
      );
    }
  }


  render(){
    const { comment, currentUser, editComment, newLike, destroyLike } = this.props;
    const { editor } = this.state;
    const { author, body, updated_at } = comment;

    let content = (
      <div className="comment-content">
        <div className="user-icon"><img src={author.icon_url}/></div>

        <div className="comment-header">
          {this.getEditorIcons(author, currentUser)}
          <h3>{author.username}</h3>
          <h4>{timeSince(updated_at)} ago</h4>
        </div>
        <div className="comment-body">
          <p>{body}</p>
        </div>
      </div>
    );

    let displayBar = { display: "block" };

    if(editor){
      content = (
        <EditCommentForm
          currentUser={currentUser}
          comment={comment}
          process={editComment}
          handleCancel={this.hideEditForm}/>
      );

      displayBar = { display: "none" };
    }

    return(
      <div className="comment-item group">
        {content}
        <div className="comment-like-bar" style={displayBar}>
          <LikeBar
            likeableType="Comment"
            likeableId={comment.id}
            likes={comment.likes}
            currentUserId={currentUser ? currentUser.id : null}
            newLike={newLike}
            destroyLike={destroyLike}/>
        </div>
      </div>
    );
  }
}
