import React from 'react';
import CommentItem from './comment_item';
import CommentForm from './comment_form';

class Comments extends React.Component{
  constructor(props) {
    super(props);
    this.getComments = this.getComments.bind(this);
  }


  getComments(){
    const { comments, currentUser, deleteComment, editComment } = this.props;
    comments.sort((a, b) => {
      if(a.updated_at > b.updated_at){ return -1; }
      else if(a.updated_at == b.updated_at){ return 0; }
      else { return 1; }
    });
    return comments.map((comment)=>{
      return <CommentItem
        key={comment.id}
        comment={comment}
        currentUser={currentUser}
        deleteComment={deleteComment}
        editComment={editComment}/>;
    });
  }

  render(){
    const { comments, currentUser, newComment } = this.props;
    let numComments = "No comments";
    if(comments){
      numComments = comments.length.toLocaleString('en-US');
    }

    return(
      <div className="comment-container">
        <div className="comment-head-container group">
          <h3>Comments • {numComments}</h3>
        </div>
        <CommentForm currentUser={currentUser} process={newComment}/>
        <div className="all-comments">
          {this.getComments()}
        </div>
      </div>
    );
  }
}

export default Comments;
