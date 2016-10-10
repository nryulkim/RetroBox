import React from 'react';

class EditCommentForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      body: this.props.comment.body
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount(){
    $('.comment-editor .comment-body-input').each(function () {
      this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
    }).on('input', function () {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
    });
  }

  componentDidUpdate(){
    if(this.state.body === ""){
      $(".editor-buttons .submit-button").prop('disabled',true);
    }else{
      $(".editor-buttons .submit-button").prop('disabled',false);
    }
  }

  update(e){
    this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e){
    e.preventDefault();
    const form = this;
    const clearInput = () => {
      form.props.handleCancel();
    };

    const comment = {
      id: this.props.comment.id,
      body: this.state.body,
      user_id: this.props.comment.author.id,
      video_id: this.props.comment.video_id
    };

    this.props.process(comment, clearInput);
  }

  render(){
    const { currentUser, handleCancel } = this.props;

    let iconUrl = window.retroBoxAssets.defaultIcon;
    if(currentUser){
      iconUrl = currentUser.icon_url;
    }

    return(
      <div className="comment-form-container comment-editor">
        <form className="comment-form"
          onSubmit={this.handleSubmit}>
          <div className="user-icon">
            <img src={iconUrl}></img>
          </div>
          <textarea
            className="comment-body-input"
            onChange={this.update}
            placeholder="Post Public Comment"
            value={this.state.body}/>
          <div className="comment-arrow"/>
          <div className="comment-shadow"/>
        </form>
        <div className="button-container group editor-buttons">
          <button onClick={this.handleSubmit} className="submit-button">Update</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default EditCommentForm;
