import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default class response extends Component {
  render() {
    return (
      <div className="main">
        <Typography variant="h6">the man</Typography>
        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              console.log("please work");
            }}
          >
            walk
          </Button>
          <Button variant="outlined" color="primary">
            stand
          </Button>
        </div>
      </div>
    );
  }
}
