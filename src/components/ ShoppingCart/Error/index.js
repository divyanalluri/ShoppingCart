import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { Errors } from "./StyledComponents";
@observer
class Error extends Component {
  render() {
    return <Errors className="error">Something went Wrong</Errors>;
  }
}
export default Error;
