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
    this.updateThumb = this.updateThumb.bind(this);
    this.getThumb = this.getThumb.bind(this);
    this.updateVideo = this.updateVideo.bind(this);
    this.getVideo = this.getVideo.bind(this);
  }

  componentDidMount(){
    document.getElementById("first-button").setAttribute("disabled", true);
    this.setDragAndDrop("#dropThumb", this.getThumb);
    this.setDragAndDrop("#dropVideo", this.getVideo);
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

  updateVideo(e){
    const file = e.currentTarget.files[0];
    this.getVideo(file);
  }

  updateThumb(e){
    const file = e.currentTarget.files[0];
    this.getThumb(file);
  }

  getVideo(file){
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ videoFile: file, videoUrl: fileReader.result });
    };

    if(file){
      fileReader.readAsDataURL(file);
      document.getElementById("after-video").style.display = "block";
      document.getElementsByClassName("thumbnail-container")[0].style.display = "block";
      document.getElementById("dropVideo").style.display = "none";
      document.getElementById("dropVideo").style.position = "absolute";
    }
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
    const { title, description, user_id, thumbFile, videoFile } = this.state;
    const router = this.props.router;
    const redirect = () => {
      router.push("/");
    };
    $(".loading-animation").show();
    $("#submit-button").prop("disabled",true).toggleClass("disabled");

    const formData = new FormData();
    formData.append("video[title]", title);
    formData.append("video[description]", description);
    formData.append("video[user_id]", user_id);
    formData.append("video[video]", videoFile);
    formData.append("video[thumbnail]", thumbFile);
    process(formData, redirect);
  }

  changeForm(type){
    let otherType = type === "basicForm" ? "dropThumb" : "basicForm";
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
      $(".loading-animation").hide();
      $("#submit-button").prop("disabled",false).toggleClass("disabled");
    }

    return text;
  }

  render(){
    const { formType } = this.props;
    const { form, title, description, video_url, thumbUrl } = this.state;
    return(
      <div className="videoFormContainer group">
        <div className="thumbnail-container">
          <img className="thumbnail" src={thumbUrl}/>
        </div>
        <div className="videoForm group">

          <form onSubmit={this.handleSubmit} >
            <div className="before-video dropForm" id="dropVideo">
              <div className="drop_input">
                <input type="file" className="drop_file" id="video" onChange={this.updateVideo}></input>
                <label htmlFor="video">
                  <strong>Choose a video</strong> or drag it here.
                </label>
              </div>
            </div>
            <div id="after-video">
              <div className="loading-animation">
                <img src={window.retroBoxAssets.loader}></img>
              </div>
              <div className="group">
                <button type="submit" id="submit-button">{formType}</button>
              </div>
              <ul className= "errors group">
                {this.renderErrors()}
              </ul>
              <nav className="formNavBar group">
                <div>
                  <button onClick={this.changeForm("basicForm")} id="first-button">Basic Info</button>
                  <button onClick={this.changeForm("dropThumb")}>Thumbnails</button>
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
              </div>

              <div id="dropThumb" className="dropForm">
                <div className="drop_input">
                  <input type="file" className="drop_file" id="thumb" onChange={this.updateThumb}></input>
                  <label htmlFor="thumb">
                    <strong>Choose a thumbnail</strong> or drag it here.
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(VideoForm);
