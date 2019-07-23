import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import "./styles.css";
@observer
class Loading extends Component {
  render() {
    return (
      <div className="loader-class">
        <center>
          <div className="loader" />
        </center>
      </div>
    );
  }
}
export default Loading;
