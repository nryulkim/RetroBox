import React from 'react';
import { timeSince } from '../../../../util/util_functions';

export default function CommentItem(props) {
  const { comment, currentUser, deleteComment } = props;
  const { author, body, updated_at } = comment;

  const handleDelete = (e) => {
    e.preventDefault();
    deleteComment(comment.id);
  };

  let editor = null;
  if (author.id === currentUser.id){
    editor =
      <div className="editor">
        <i className="fa fa-trash-o" aria-hidden="true" onClick={handleDelete}></i>
        <i className="fa fa-pencil" aria-hidden="true"></i>
      </div>;
  }

  return(
    <div className="comment-item group">
      <div className="user-icon"><img src={author.icon_url}/></div>

      <div className="comment-header">
        {editor}
        <h3>{author.username}</h3>
        <h4>{timeSince(updated_at)} ago</h4>
      </div>
      <div className="comment-body">
        <p>{body}</p>
      </div>
    </div>
  );
}
