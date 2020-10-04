import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

const test = () => {
  return (
    <div>
      <Typography variant="body2">you enter the woods alone.</Typography>
    </div>
  );
};

export default class message extends Component {
  render() {
    return { test };
  }
}
