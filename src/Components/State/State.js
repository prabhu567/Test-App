import React, { Component } from "react";

class State extends Component {
  constructor(){
    super();
    this.state={
      title:'MEENAKCHI TEMPLE',
      address:'MADURAI'
    }
  }

  updateAddress=()=>{
    // this.state.address="Kallikudi.MADURAUI"
    // this.setState({address:'Kallikudi,MADURAI'})
    this.SetState({address:'Kallikudi,MADURAI'},()=>{
      console.log("this.state inside callback",this.state)
    })
    
  }
  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.title} address From {this.state.address}
          <button onclick={this.UpdateAddress}>change address</button>
          <button onclick={this.updatetitle}>change title</button>
          
        </div>
      </React.Fragment>
    );
    
  }
}

export default State;
