import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import "./styles.css";
@observer
class Error extends Component {
  render() {
    return <div className="error">Something went Wrong</div>;
  }
}
export default Error;
