import React from "react";
import Grid from "@material-ui/core/Grid";
//import Response from "./components/Response";
import Message from "./components/Message";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFF",
    },
  },
});

const test = [<Message />];

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Grid container spacing={3}>
        <Grid item sm={3}></Grid>
        <Grid item sm={6}>
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
        </Grid>
        <Grid item sm={3}></Grid>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
