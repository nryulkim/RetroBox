import React from 'react';

class SubButton extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      initialStatus: "subscribe",
      currentStatus: "subscribe",
      subs: [],
      sub: null
    };
    this.handleSub = this.handleSub.bind(this);
    this.setInitialState = this.setInitialState.bind(this);
    this.handleAjax = this.handleAjax.bind(this);
  }

  setInitialState(props){
    const subs = props.currentUser.subscriptions;
    const sub = props.currentUser.subscriptions.find((sub) => {
      return sub.channel_id === props.channel.id;
    });

    if(sub){
      this.setState({
        initialStatus: "unsubscribe",
        currentStatus: "unsubscribe",
        subs,
        sub
      });
    }else{
      this.setState({
        initialStatus: "subscribe",
        currentStatus: "subscribe",
        subs,
        sub: null
      });
    }
  }


  componentDidMount(){
    const { currentUser, getSubscriptions } = this.props;
    if(!currentUser.subscriptions){
      getSubscriptions(currentUser.id);
    }else{
      this.setInitialState(this.props);
    }
  }

  componentDidUpdate(){
    const { initialStatus, currentStatus } = this.state;
    if(initialStatus !== currentStatus){
      window.onbeforeunload.subscriptionAJAX = this.handleAjax;
    }else{
      window.onbeforeunload.subscriptionAJAX = false;
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.channel !== this.props.channel || this.props.currentUser.subscriptions === undefined){
      this.handleAjax(true);
      this.setInitialState(nextProps);
      window.onbeforeunload.subscriptionAJAX = false;
    }
  }

  componentWillUnmount(){
    this.handleAjax(true);
    window.onbeforeunload.subscriptionAJAX = false;
  }

  handleAjax(isAsync){
    const { currentStatus, initialStatus, sub } = this.state;
    const {
      channel,
      currentUser,
      deleteSubscription,
      newSubscription
    } = this.props;
    if( currentStatus !== initialStatus ){
      if(initialStatus === "unsubscribe"){
        deleteSubscription(sub.id, isAsync);
      }else{
        newSubscription({
          subscribee_id: channel.id,
          subscriber_id: currentUser.id,
        }, isAsync);
      }
    }
  }


  handleSub(e){
    e.preventDefault();
    const { currentStatus, sub } = this.state;
    const { channel, removeSubscription, receiveSubscription } = this.props;
    if(currentStatus === "subscribe"){
      this.setState({ currentStatus: "unsubscribe" });
      if(sub){
        receiveSubscription(sub);
      }else{
        receiveSubscription({
          id: -1,
          channel_id: channel.id,
          username: channel.username,
          icon_url: channel.icon_url
        });
      }
    }else{
      this.setState({ currentStatus: "subscribe" });
      if(sub){
        removeSubscription(sub);
      }else{
        removeSubscription({ id: -1 });
      }
    }
  }

  render(){
    const { currentStatus } = this.state;
    return(
      <button className={ currentStatus } onClick={ this.handleSub }>
        {currentStatus}
      </button>
    );
  }
}

export default SubButton;
