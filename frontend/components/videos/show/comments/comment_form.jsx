import React from 'react';
import { withRouter } from 'react-router';

class CommentForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      body: ""
    };

    this.checkLoggedIn = this.checkLoggedIn.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showButtons = this.showButtons.bind(this);
    this.hideButtons = this.hideButtons.bind(this);
  }


  componentDidMount(){
    $('.comment-creator .comment-body-input').each(function () {
      this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
    }).on('input', function () {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
    });
  }

  componentDidUpdate(){
    if(this.state.body === ""){
      $(".creator-buttons .submit-button").prop('disabled',true);
    }else{
      $(".creator-buttons .submit-button").prop('disabled',false);
    }
  }

  checkLoggedIn(e){
    if(!this.props.currentUser){
      this.props.router.push("/login");
    }
  }

  update(e){
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

    this.props.process(comment, clearInput);
  }

  showButtons(e){
    if(this.state.body === ""){
      $(".comment-creator .comment-form-submit-button").prop('disabled',true);
    }else{
      $(".comment-creator .comment-form-submit-button").prop('disabled',false);
    }
    $(".creator-buttons").show();
    $(".comment-creator .comment-body-input").addClass('live');
  }

  hideButtons(e){
    this.setState({ body: "" });
    $(".creator-buttons").hide();
    $(".comment-creator .comment-body-input").removeClass('live');
  }


  render(){
    const { currentUser } = this.props;

    let iconUrl = window.retroBoxAssets.defaultIcon;
    if(currentUser){
      iconUrl = currentUser.icon_url;
    }

    return(
      <div className="comment-form-container comment-creator">
        <form className="comment-form"
          onClick={this.checkLoggedIn}
          onSubmit={this.handleSubmit}>
          <div className="user-icon">
            <img src={iconUrl}></img>
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
        <div className="button-container group creator-buttons">
          <button onClick={this.handleSubmit} className="submit-button">Comment</button>
          <button onClick={this.hideButtons}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default withRouter(CommentForm);
