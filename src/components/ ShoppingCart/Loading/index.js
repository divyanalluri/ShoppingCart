import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import { LoadingSymbol, LoaderClass } from "./StyledComponents";
@observer
class Loading extends Component {
  render() {
    return (
      <LoaderClass>
        <center>
          <LoadingSymbol className="loader" />
        </center>
      </LoaderClass>
    );
  }
}
export default Loading;
