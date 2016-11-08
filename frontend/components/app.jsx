import React from 'react';
import Header from './header/header_container';
import BurgerDrop from './header/sidebar/burger_dropdown_container';
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showSide: false
    };
    this.toggleBurger = this.toggleBurger.bind(this);
  }

  toggleBurger(){
    const $side = $("#burger-sidebar-container");
    if(this.state.showSide){
      $side.hide();
    }else{
      $side.show();
    }
    this.setState({showSide: !this.state.showSide});
  }

  render(){
    const { children, location } = this.props;
    const { showSide } = this.state;
    const currentUser = this.props.currentUser;
    const sidebar =
      showSide ? <BurgerDrop path={location.pathname + location.search}/> : null;
    return(
      <main className="group">
        <header className="header">
          <Header toggleBurger={this.toggleBurger}/>
        </header>
        <div className="content group">
          <sidebar id="burger-sidebar-container">
            {sidebar}
          </sidebar>
          <div className="main-content group">
            {children}
          </div>
        </div>
      </main>
    );
  }
}
