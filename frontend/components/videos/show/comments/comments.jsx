import React from 'react';
import CommentItem from './comment_item';
import { withRouter } from 'react-router';

class Comments extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };

    this.checkLoggedIn = this.checkLoggedIn.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getComments = this.getComments.bind(this);
    this.showButtons = this.showButtons.bind(this);
    this.hideButtons = this.hideButtons.bind(this);
  }


  componentDidMount(){
    $('.comment-body-input').each(function () {
      this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
    }).on('input', function () {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
    });
  }

  checkLoggedIn(e){
    if(!this.props.currentUser){
      this.props.router.push("/login");
    }
  }

  update(e){
    if(this.state.body === ""){
      $(".comment-form-submit-button").prop('disabled',true);
    }else{
      $(".comment-form-submit-button").prop('disabled',false);
    }
    this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e){
    e.preventDefault();
    const form = this;
    const clearInput = () => {
      form.hideButtons();
    };
    const comment = {
      body: this.state.body,
      user_id: this.props.currentUser.id,
      video_id: this.props.video_id
    };

    this.props.newComment(comment, clearInput);
  }

  showButtons(e){
    if(this.state.body === ""){
      $(".comment-form-submit-button").prop('disabled',true);
    }else{
      $(".comment-form-submit-button").prop('disabled',false);
    }
    $(".button-container").show();
  }

  hideButtons(e){
    this.setState({ body: "" });
    $(".button-container").hide();
  }

  getComments(){
    const { comments } = this.props;
    comments.sort((a, b) => {
      if(a.updated_at > b.updated_at){ return -1; }
      else if(a.updated_at == b.updated_at){ return 0; }
      else { return 1; }
    });
    return comments.map((comment)=>{
      return <CommentItem key={comment.id} comment={comment}/>;
    });
  }

  render(){
    const { comments, currentUser } = this.props;
    let numComments = "No comments";
    if(comments){
      numComments = comments.length.toLocaleString('en-US');
    }

    let userIcon = window.retroBoxAssets.defaultIcon;
    if(currentUser){
      userIcon = currentUser.icon_url;
    }

    return(
      <div className="comment-container">
        <div className="comment-form-container group">
          <h3>Comments • {numComments}</h3>
          <form className="new-comment-form"
            onClick={this.checkLoggedIn}
            onSubmit={this.handleSubmit}>
            <div className="user-icon">
              <img src={userIcon}></img>
            </div>
            <textarea
              className="comment-body-input"
              onClick={this.showButtons}
              onChange={this.update}
              placeholder="Post Public Comment"
              value={this.state.body}/>
            <div className="comment-arrow"/>
            <div className="comment-shadow"/>
          </form>
        </div>
        <div className="button-container group">
          <button onClick={this.handleSubmit} className="comment-form-submit-button">Comment</button>
          <button onClick={this.hideButtons}>Cancel</button>
        </div>
        <div className="all-comments">
          {this.getComments()}
        </div>
      </div>
    );
  }
}

export default withRouter(Comments);
