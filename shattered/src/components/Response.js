import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default class response extends Component {
  render() {
    return (
      <div className="main">
        <Typography variant="h6">the man</Typography>
        <div className="buttons">
          <Button variant="outlined" color="primary">
            Action 1
          </Button>
          <Button variant="outlined" color="primary">
            Action 2
          </Button>
        </div>
      </div>
    );
  }
}
