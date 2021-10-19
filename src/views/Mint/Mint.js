/* eslint-disable */

import React from 'react';
import './mint.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMinusSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons"
class Mint extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      amount : 1,
      etherAmount : 0.08,
    }
  }
  decrease = () => {
    if(this.state.amount != 1){
      var val = this.state.amount - 1;
      this.setState({
        amount: val,
      })
    }
  }

  increase = () => {
    if(this.state.amount != 4){
      var val = this.state.amount + 1;
      this.setState({
        amount: val,
      })
    }
  }

  render() {
    return (
      <div className = 'content' >
         <div className="col-md-10 col-md-offset-1 maindiv" >
          <h1 className="text-dark" >PUBLIC SALE OPEN</h1>
          <div className = 'ehterAmount' >
          {this.state.amount * 0.08} ETH
          </div>
          <div className = "counter">
            <FontAwesomeIcon className = 'minus' icon={faMinusSquare} color="black" size="3x" onClick={() =>this.decrease()}/> 
              <div className = 'mintAmount' >{this.state.amount}</div>
            <FontAwesomeIcon className = 'plus' icon={faPlusSquare} color="black" size="3x" onClick={() =>this.increase()} />
          </div>
          <div className = "but" >
            <button className = 'mintButton'>Mint</button>
          </div>
       </div>
      </div>
      // <div className="container">
      //   <div className="row">
      //     <div className="col-md-10 col-md-offset-1" style={{backgroundColor:'red'}}>
      //       <div className="row">
      //         <div className ="col-md-8 col-md-offset-2" style={{backgroundColor:'blue'}}>

      //         </div>
      //         <div className="col-md-12"></div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    )
  }
}

export default Mint

/* eslint-enable */