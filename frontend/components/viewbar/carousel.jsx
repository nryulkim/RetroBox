const React = require('react');
const Carousel = require('nuka-carousel');

class App extends React.Component{
  constructor(props){
    super(props);
  }

  getButtonStyles(disabled){

  }

  render() {
    const { videos, numToSlide } = this.props;

    return (
      <Carousel
        slidesToShow={numToSlide}
        slidesToScroll={numToSlide}
        dragging={true}
        height={"200px"}
        decorators={[{
          component: React.createClass({
            render() {
              return (
                <button
                  className={this.getButtonStyles(this.props.currentSlide === 0)}
                  onClick={this.props.previousSlide}>
                  {"<"}
                </button>
              );
            },
            getButtonStyles(disabled) {
              return disabled ? "disabled" : "";
            }
          }),
          position: 'CenterLeft'
        },{
          component: React.createClass({
            render() {
              return (
                <button
                  className={this.getButtonStyles(this.props.currentSlide + this.props.slidesToScroll >= this.props.slideCount)}
                  onClick={this.props.nextSlide}>
                  {">"}
                </button>
              );
            },
            getButtonStyles(disabled) {
              return disabled ? "disabled" : "";
            }
          }),
          position: 'CenterRight'
        }]}>
        {videos}
      </Carousel>
    );
  }
}

module.exports = App;
