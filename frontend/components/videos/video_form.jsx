import React from 'react';
import { Link, withRouter } from 'react-router';

class VideoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      video_url: "",
      description: "",
      videoFile: null,
      videoUrl: null,
      thumbFile: null,
      thumbUrl: window.retroBoxAssets.defaultThumb,
      user_id: this.props.currentUser.id,
    };
    this.renderErrors = this.renderErrors.bind(this);
    this.changeForm = this.changeForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.setDragAndDrop = this.setDragAndDrop.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.getThumb = this.getThumb.bind(this);
  }

  componentDidMount(){
    document.getElementById("first-button").setAttribute("disabled", true);
    this.setDragAndDrop("#thumbForm", this.getThumb);
  }

  update(input){
    return (e) => {
      this.setState({ [input]: e.currentTarget.value });
    };
  }

  setDragAndDrop(id, callback){
    const $form = $(id);
    const form = this;
    $form.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
      e.preventDefault();
      e.stopPropagation();
    })
    .on('dragover dragenter', function() {
      $form.addClass('is-dragover');
    })
    .on('dragleave dragend drop', function() {
      $form.removeClass('is-dragover');
    })
    .on('drop', function(e) {
      callback(e.originalEvent.dataTransfer.files[0]);
    });
  }

  updateFile(e){
    const file = e.currentTarget.files[0];
    this.getThumb(file);
  }

  getThumb(file){
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ thumbFile: file, thumbUrl: fileReader.result });
    };

    if(file){
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const { process } = this.props;
    const { title, description, video_url, user_id, thumbFile } = this.state;
    const router = this.props.router;

    const redirect = () => {
      router.push("/");
    };

    const formData = new FormData();
    formData.append("video[title]", title);
    formData.append("video[description]", description);
    formData.append("video[video_url]", video_url);
    formData.append("video[user_id]", user_id);
    formData.append("video[thumbnail]", thumbFile);

    process(formData, redirect);
  }

  changeForm(type){
    let otherType = type === "basicForm" ? "thumbForm" : "basicForm";
    let buttonType = type === "basicForm" ? "Basic Info" : "Thumbnails";
    return (e) => {
      e.preventDefault();
      Array.prototype.forEach.call(e.target.parentElement.children, (child) => {
        if(child.textContent === buttonType){
          child.setAttribute("disabled", true);
        }else{
          child.removeAttribute("disabled");
        }
      });
      document.getElementById(type).style.display = "block";
      document.getElementById(otherType).style.display = "none";
    };
  }

  renderErrors(){
    const { errors } = this.props;

    let text = "";
    if(errors.length > 0){
      text = errors.map((error, idx) => (<li key={idx}>{error}</li>));
    }

    return text;
  }

  render(){
    const { formType } = this.props;
    const { form, title, description, video_url, thumbUrl } = this.state;
    return(
      <div className="videoFormContainer group">
        <div className="before-video">
        </div>
        <div className="after-video">
          <div className="thumbnail-container">
            <img className="thumbnail" src={thumbUrl}/>
          </div>
          <div className="videoForm group">
            <ul className= "errors group">
              {this.renderErrors()}
            </ul>
            <form onSubmit={this.handleSubmit} >
              <div className="group">
                <button type="submit">{formType}</button>
              </div>

              <nav className="formNavBar group">
                <div>
                  <button onClick={this.changeForm("basicForm")} id="first-button">Basic Info</button>
                  <button onClick={this.changeForm("thumbForm")}>Thumbnails</button>
                </div>
              </nav>
              <div id="basicForm">
                <input type="text"
                  value={title}
                  onChange={this.update('title')}
                  placeholder="Title"/>

                <textarea
                  value={description}
                  onChange={this.update('description')}
                  placeholder="Description"/>

                <input
                  type="text"
                  value={video_url}
                  onChange={this.update('video_url')}
                  placeholder="Video URL"/>
              </div>

              <div id="thumbForm">
                <div className="drop_input">
                  <input type="file" className="drop_file" id="thumb" onChange={this.updateFile}></input>
                  <label htmlFor="thumb">
                    <strong>Choose a file</strong> or drag it here.
                    </label>
                  </div>
                </div>
              </form>
            </div>
        </div>
      </div>
    );
  }
}

export default withRouter(VideoForm);
