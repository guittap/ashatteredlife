import React from "react";
import Grid from "@material-ui/core/Grid";
import Response from "./components/Response";
import Message from "./components/Message";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFF",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Grid container spacing={3}>
        <Grid item sm={3}>
          <Message />
        </Grid>
        <Grid item sm={6}>
          <Response />
        </Grid>
        <Grid item sm={3}></Grid>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
