
import React,{Component} from 'React';
import config from "./config.json";
import {root} from "./Greeter.css"


class Greeter extends Component{
    render() {
      return (
        <div className = {root} >
          {config.greetText}
        </div>
      );
    }
  }

export default Greeter;