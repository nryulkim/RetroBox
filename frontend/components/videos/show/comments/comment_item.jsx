import React from 'react';
import { timeSince } from '../../../../util/util_functions';

export default function CommentItem(props) {
  const { comment } = props;
  const { author, body, updated_at } = comment;
  return(
    <div className="comment-item group">
      <div className="user-icon"><img src={author.icon_url}/></div>

      <div className="comment-header">
        <h3>{author.username}</h3>
        <h4>{timeSince(updated_at)} ago</h4>
      </div>
      <div className="comment-body">
        <p>{body}</p>
      </div>
    </div>
  );
}
